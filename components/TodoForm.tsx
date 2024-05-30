"use client";

import { actionAddTodo } from "@/actions/todos";
import { useRef } from "react";

export default function TodoForm() {
    const formRef = useRef<HTMLFormElement>(null);

    const addTodo = async (formData: FormData) => {
        formRef.current?.reset();
        await actionAddTodo(formData);
    }

    return (
        <form ref={formRef} action={addTodo}>
            <input type="text" name="what" className="border border-white text-black p-1 mr-2 rounded" />
            <button>Add todo</button>
        </form>
    )
}
