"use client";

import { actionDeleteTodo, actionToggleTodoDone } from "@/actions/todos";
import { Todo } from "@/lib/todos";

export default function TodoItem({ todo }: { todo: Todo }) {
    return (
        <li
            onClick={() => actionToggleTodoDone(todo.id)}
            key={todo.id}
            className="group flex flex-row gap-3 p1 pl-4 hover:bg-slate-600 w-[30em] rounded-full cursor-pointer"
        >
            <input type="checkbox" checked={todo.done} />
            <span className={(todo.done ? 'line-through' : '')}>{todo.what}</span>
            <div className="flex-1"></div>
            <span onClick={() => actionDeleteTodo(todo.id)} className="group-hover:visible invisible hover:bg-red-500 hover:font-bold border w-6 h-6 rounded-full flex flex-col justify-center items-center">&times;</span>
        </li>
    )
}
