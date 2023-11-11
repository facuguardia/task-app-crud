import Link from "next/link";
import { BiLogoLinkedinSquare, BiLogoInternetExplorer } from "react-icons/bi";

function AboutPage() {
  return (
    <div className="py-5 px-10">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold">
          Bienvenido a <span className="text-green-500">TAREANOVA</span>
        </h1>
      </header>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Sobre mí:</h2>
        <p className="text-gray-400">
          Soy un entusiasta desarrollador Frontend con habilidades FullStack,
          especializado en la creación de experiencias web cautivadoras. Mi
          objetivo es fusionar lo mejor de las tecnologías tanto en el frontend
          como en el backend para ofrecer soluciones robustas y eficientes.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">
          Acerca de <span className="text-green-500">TAREANOVA</span>:
        </h2>
        <p className="text-gray-400">
          Este proyecto nació con la idea de potenciar el uso FullStack de Next
          13, aprovechando las capacidades de Prisma como ORM y Tailwind CSS
          para el maquetado. TAREANOVA es mucho más que una simple herramienta;
          es un espacio donde puedes dar vida a tus ideas, gestionar tareas de
          manera eficiente y disfrutar de una experiencia de usuario fluida y
          atractiva.
        </p>
      </section>

      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">
          Características Principales:
        </h2>
        <ul className="list-disc list-inside text-gray-400">
          <li>
            <strong>Creación Intuitiva de Tareas:</strong> Diseñado para
            facilitar la creación de nuevas tareas de manera rápida y sencilla.
          </li>
          <li>
            <strong>Edición sin Esfuerzo:</strong> Editar tus tareas es tan
            simple como hacer clic. Personaliza cada detalle según tus
            necesidades.
          </li>
          <li>
            <strong>Eliminación con un Toque:</strong> ¿Una tarea completada o
            simplemente no necesaria? Elimínala con un solo clic.
          </li>
        </ul>
      </section>

      <section className="my-8">
        <p className="text-gray-400">
          En TAREANOVA, la funcionalidad FullStack se encuentra en el corazón
          del proyecto. Desde la gestión eficiente de bases de datos hasta la
          creación dinámica de interfaces, cada aspecto ha sido cuidadosamente
          diseñado para ofrecer una experiencia de usuario excepcional.
        </p>
      </section>

      <section className="my-8">
        <p className="text-gray-400">
          Gracias por unirte a esta travesía. ¡Espero que{" "}
          <span className="text-green-500">TAREANOVA</span> se convierta en tu
          compañero confiable para la gestión de tareas!
        </p>
      </section>
      <footer className="flex justify-start items-center gap-2">
        <Link
          href="https://www.linkedin.com/in/facu-guardia/"
          target="_blank"
          className="text-gray-400 text-3xl hover:text-green-500 transition-all duration-300"
        >
          <BiLogoLinkedinSquare />
        </Link>
        <Link
          href="https://facuguardia.netlify.app/"
          target="_blank"
          className="text-gray-400 text-3xl hover:text-green-500 transition-all duration-300"
        >
          <BiLogoInternetExplorer />
        </Link>
      </footer>
    </div>
  );
}

export default AboutPage;
