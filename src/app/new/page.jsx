"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function NewTask({ params }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (params.id) {
      const res = await fetch(`/api/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "aplication/json",
        },
      });
      const data = res.json();
      console.log("updating: ", data);
    } else {
      const res = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: {
          "Content-Type": "aplication/json",
        },
      });
      const data = await res.json();
      console.log("creating: ", data);
    }

    router.refresh();
    router.push("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center gap-4 bg-gray-800 p-12 rounded-md"
      >
        <input
          type="text"
          id="title"
          className="w-full h-full text-black py-2 px-3 rounded-lg"
          placeholder="Título"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <textarea
          name=""
          id="description"
          className="w-full h-full text-black py-2 px-3 rounded-lg"
          placeholder="Detalle"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>

        <button className="bg-green-500 text-black font-medium w-full h-full py-2 px-3 rounded-full">
          Crear
        </button>
      </form>
    </div>
  );
}

export default NewTask;
