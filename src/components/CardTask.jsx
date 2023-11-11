"use client";
import { useRouter } from "next/navigation";

function CardTask({ task }) {
  const router = useRouter();

  return (
    <div
      key={task.id}
      className="bg-gray-800 hover:bg-gray-900 cursor-pointer transform-all duration-300 flex justify-between items-center lg:items-start px-2 py-4 rounded-md border-black shadow-lg"
      onClick={() => {
        router.push(`/tasks/edit/${task.id}`);
      }}
    >
      <div className="flex flex-col items-start gap-3 px-2">
        <h1 className="text-xl font-semibold">{task.title}</h1>
        <h3 className="text-sm text-gray-300">
          {task.description}
        </h3>
      </div>
      <div className="flex flex-col justify-between h-full items-end">
        <p className="text-[10px] text-gray-400">
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default CardTask;
