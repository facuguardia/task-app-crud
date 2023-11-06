import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  try {
    const tasks = await prisma.task.findMany();
    console.log(tasks);
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json("Sin tareas");
  }
}

export async function POST(req) {
  try {
    const { title, description } = await req.json();
    await prisma.task.create({
      data: {
        title,
        description,
      },
    });
    return NextResponse.json('Se creo la tarea correctamente');
  } catch (error) {
    return NextResponse.json("No se pudo guardar correctamente la tarea");
  }
}
