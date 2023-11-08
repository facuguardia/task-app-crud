"use client";

import { RiDeleteBin7Fill } from "react-icons/ri";
import { useRouter } from "next/navigation";

function CardTask({ task }) {
  const router = useRouter();

  async function handleDelete() {
    const res = await fetch("http://localhost:3000/api/tasks", {
      method: "DELETE",
      body: JSON.stringify({ title, description }),
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    const data = await res.json();
    console.log("creating: ", data);
  }

  return (
    <div
      key={task.id}
      className="bg-gray-800 flex justify-between items-center lg:items-start px-2 py-4 rounded-md cursor-pointer hover:bg-gray-900 transform-all duration-300 "
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}
    >
      <div className="flex flex-col items-start gap-3">
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <h3 className="text-md font-medium text-gray-300">
          {task.description}
        </h3>
      </div>
      <div className="flex flex-col justify-between h-full items-end">
        <RiDeleteBin7Fill
          className="text-red-400"
          onClick={
            handleDelete}
        />
        <p className="text-[10px] text-gray-400">
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default CardTask;
