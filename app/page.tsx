import { dbGetTodos } from "@/lib/todos"

export const dynamic = "force-dynamic";

export default async function Home() {
  const todos = await dbGetTodos();

  return(
    <main className="p-8">
      <h1>Todo list</h1>
      <form>
        <input type="text" name="what" className="border border-white p-1 mr-2 rounded"/>
        <button>Add todo</button>
      </form>
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.what}</li>)}
      </ul>
    </main>
  )
}
