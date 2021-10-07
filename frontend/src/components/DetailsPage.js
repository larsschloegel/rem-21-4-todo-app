import {useParams} from "react-router-dom";
import {getTodoBy, getTodos, postTodo} from "../service/todo-api-service";
import axios from "axios";
import {useEffect, useState} from "react";
import ToDo from "./ToDo";

export default function DetailsPage() {

    const {id} = useParams()
    const [todo, setTodo] = useState({})

    useEffect(() => {
        getTodoBy(id)
            .then(response => response.data)
            .then(data => setTodo(data))
    }, [id])

    return (
        <div>
            <h2>ID: {todo.id}</h2>
            <p>Beschreibung: {todo.description}</p>
            <p>Status: {todo.status}</p>
        </div>
    )
}