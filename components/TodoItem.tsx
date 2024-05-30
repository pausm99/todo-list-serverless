"use client";

import { actionToggleTodoDone } from "@/actions/todos";
import { Todo } from "@/lib/todos";

export default function TodoItem({ todo }: { todo: Todo }) {
    return (
        <li onClick={() => actionToggleTodoDone(todo.id)} className="flex flex-row gap-3 p1 pl-4 hover:bg-slate-600 w-[30em] rounded-full cursor-pointer" key={todo.id}>
            <input type="checkbox" checked={todo.done} />
            <span className={(todo.done ? 'line-through' : '')}>{todo.what}</span>
        </li>
    )
}
