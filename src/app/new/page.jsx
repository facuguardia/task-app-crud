"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { RiEditFill, RiDeleteBin2Fill } from "react-icons/ri";
import { IoCloseCircleSharp } from "react-icons/io5";

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
      const res = await fetch("/api/tasks", {
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

  async function handleDelete() {
    const res = await fetch(`/api/tasks/${params.id}`, { method: "DELETE" });
    const data = await res.json();
    console.log(data);

    router.refresh();
    router.push("/");
  }

  return (
    <div className="flex justify-center items-start pt-24">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col justify-center gap-4 bg-gray-800 p-12 rounded-md"
      >
        <div>
          <button
            className="absolute -top-3 -right-2"
            onClick={() => {
              router.push("/");
            }}
          >
            <IoCloseCircleSharp className="text-3xl text-gray-400" />
          </button>
        </div>
        <input
          type="text"
          id="title"
          className="w-full h-full text-black font-medium py-2 px-3 rounded-lg border-black shadow-lg"
          placeholder="Título"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />

        <textarea
          rows="5"
          id="description"
          className="text-black font-medium py-2 px-3 rounded-lg border-black shadow-lg"
          placeholder="Detalle"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        ></textarea>

        {!params.id && (
          <button className="bg-green-500 hover:bg-green-400 cursor-pointer transition-all duration-300 text-black font-medium w-full h-full py-2 px-3 rounded-full border-black shadow-md">
            Crear
          </button>
        )}

        {params.id && (
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 cursor-pointer transition-all duration-300 text-black font-medium py-2 px-6 rounded-full border-black shadow-md"
            >
              <RiEditFill />
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-400 cursor-pointer transition-all duration-300 text-black font-medium py-2 px-6 rounded-full border-black shadow-md"
              onClick={handleDelete}
            >
              <RiDeleteBin2Fill />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default NewTask;
