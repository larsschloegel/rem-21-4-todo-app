import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Board from "./components/Board";
import ToDoData from "./components/ToDos.json"
import {useEffect, useState} from "react";
import {deleteTodo, getTodos, postTodo, putTodo} from "./service/todo-api-service";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import BoardRow from "./components/BoardRow";

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
            <Router>
                <div>
                   <Navigation/>
                    <Switch>
                        <Route path="/Do">
                            <div>
                                <BoardRow title={"To do"} data={toDoState.filter(todo => todo.status === 'OPEN')} updateTodo={updateTodo}/>
                            </div>
                        </Route>
                        <Route path="/Doing">
                            <div>
                                <BoardRow title={"Doing"} data={toDoState.filter(todo => todo.status === 'IN_PROGRESS')} updateTodo={updateTodo}/>
                            </div>
                        </Route>
                        <Route path="/Done">
                            <div>
                                <BoardRow title={"Done"} data={toDoState.filter(todo => todo.status === 'DONE')} deleteTodo={deleteOneTodo}/>
                            </div>
                        </Route>
                        <Route exact path="/">
                            <div>
                                <Board toDos={toDoState} updateTodo={updateTodo} deleteTodo={deleteOneTodo}/>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </Router>

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
