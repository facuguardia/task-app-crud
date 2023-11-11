import Navbar from "@/components/Navbar";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "TareaNova",
  description: "ToDo List Full Stack con Next13 y Prisma",
  keywords: "tareas, todolist, nextjs, fullstack",
};

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
