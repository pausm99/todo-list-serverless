import Image from "next/image";

export default function Home() {
  return(
    <main className="p-8">
      <h1>Todo list</h1>
      <form>
        <input type="text" name="what" className="border border-white p-1 mr-2 rounded"/>
        <button>Add todo</button>
      </form>
    </main>
  )
}
