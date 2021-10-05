import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Board from "./components/Board";
import ToDoData from "./components/ToDos.json"
import {useEffect, useState} from "react";
import {deleteTodo, getTodos, postTodo, putTodo} from "./service/todo-api-service";

function App() {
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

    const handleDescriptionChange = event => setDescription(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        addTodo(description)
        setDescription('')
    }

    const addTodo = (description) => {
        postTodo(description)
            .then(todo => {
                setToDoState([...toDoState, todo])
            });
    }

    return (
        <div>
            <Header title="ToDo App"/>
            <Board toDos={toDoState} updateTodo={updateTodo} deleteTodo={deleteOneTodo}/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="new-todo"
                    placeholder="Describe the new todo"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>

    );
}

export default App;
