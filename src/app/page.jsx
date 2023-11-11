import { prisma } from "@/libs/prisma";
import CardTask from '@/components/CardTask'

async function tasks() {
  return await prisma.task.findMany();
}

export const revalidate = 60;

async function HomePage() {
  const tasksList = await tasks();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-5 px-10">
        {tasksList.length > 0 ? (
        tasksList.map((task) => (
          <CardTask task={task} key={task.id} />
        ))
      ) : (
        <p className="flex justify-center items-center w-screen pt-10 text-2xl font-bold">No hay tareas</p>
      )}
    </div>
  );
}

export default HomePage;
