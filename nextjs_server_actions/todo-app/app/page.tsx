import ToDoList from "./components/TodoList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
       {/* Add A Link tag */}
       <Link
        href="/todo/create"
        className="block mx-auto text-4xl font-bold mb-5 w-1/2 text-center pt-12 px-4 underline"
      >
        Add a To-Do
      </Link>
      <ToDoList/>
    </main>
  );
}
