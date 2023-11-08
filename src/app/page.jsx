import { prisma } from "@/libs/prisma";
import CardTask from '@/components/CardTask'

async function tasks() {
  return await prisma.task.findMany();
}

async function HomePage() {
  const tasksList = await tasks();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 m-2">
      {tasksList.map((task) => (
        <CardTask task={task} key={task.id} />
      ))}
    </div>
  );
}

export default HomePage;
