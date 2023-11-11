import Link from "next/link";
import { RiArrowLeftCircleFill } from "react-icons/ri";

function NotFound() {
  return (
    <section className="flex justify-center items-center h-[calc(100vh-15rem)]">
      <div className="">
        <h1 className="text-2xl font-bold text-gray-300">No se encontro la página - 404</h1>
        <Link href="/" className="flex justify-center items-center gap-2 font-medium text-gray-500 hover:text-gray-300 transition-all duration-300 text-lg mt-3">
          <RiArrowLeftCircleFill />
          <h3>Volver al inicio</h3>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
