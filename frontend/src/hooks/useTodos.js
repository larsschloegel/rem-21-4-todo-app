import {useEffect, useState} from "react";
import {deleteTodo, getTodos, postTodo, putTodo} from "../service/todo-api-service";


export default function useTodos() {
    const [toDoState, setToDoState] = useState([])
    const [description, setDescription] = useState("")

    useEffect(() => {
        getTodos()
            .then(toDoState => setToDoState(toDoState))
    }, [])

    const nextStatus = {
        OPEN: 'IN_PROGRESS',
        IN_PROGRESS: 'DONE',
    }

    function updateTodo(todo) {
        const advancedTodo = {...todo, status: nextStatus[todo.status]}
        putTodo(todo)
            .then(todo => {
                const newTodos = toDoState.filter(todo => todo.id !== advancedTodo.id)
                setToDoState([...newTodos, advancedTodo])
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function deleteOneTodo(todo) {
        deleteTodo(todo)
            .then(() => setToDoState(toDoState.filter(item => item.id !== todo.id)))
    }

    const addTodo = (description) => {
        postTodo(description)
            .then(todo => {
                setToDoState([...toDoState, todo])
            });
    }

    const handleDescriptionChange = event => setDescription(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        addTodo(description)
        setDescription('')
    }

    return {
        toDoState,
        description,
        addTodo,
        updateTodo,
        deleteOneTodo,
        handleDescriptionChange,
        handleSubmit
    }

}

