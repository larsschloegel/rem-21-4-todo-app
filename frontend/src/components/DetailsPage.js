import useSingleTodo from "../hooks/useSingleTodo";

export default function DetailsPage() {

    const {todo} = useSingleTodo()
//
    return (
        <div>
            <h2>ID: {todo.id}</h2>
            <p>Beschreibung: {todo.description}</p>
            <p>Status: {todo.status}</p>
        </div>
    )
}