import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(req, { params }) {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json("No existe la tarea que está buscando");
  }
}

export async function PUT(req, { params }) {
  try {
    const data = await req.json();
    const taskUpdated = await prisma.task.update({
      where: {
        id: Number(params.id),
      },
      data: data,
    });
    return NextResponse.json(taskUpdated);
  } catch (error) {
    return NextResponse.json("No se pudo actualizar la tarea seleccionada");
  }
}

export async function DELETE(req, { params }) {
  try {
    await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(`Se elimino correctamente la tarea ${params.id}`);
  } catch (error) {
    return NextResponse.json("No existe la tarea que desea eliminar");
  }
}
