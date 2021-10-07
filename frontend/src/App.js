import './App.css';
import Header from "./components/Header";
import {useEffect, useState} from "react";
import {deleteTodo, getTodos, postTodo, putTodo} from "./service/todo-api-service";
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import ShowTheSpecificPage from "./components/ShowTheSpecificPage";
import ShowHomepage from "./components/ShowHomepage";
import DetailsPage from "./components/DetailsPage";
import useTodos from "./hooks/useTodos";

function App() {

    const {toDoState, description, addTodo, updateTodo, deleteOneTodo, handleDescriptionChange, handleSubmit} = useTodos()

    return (

        <div>
            <Header title="ToDo App"/>
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" exact>
                        <ShowHomepage toDos={toDoState} updateTodo={updateTodo} deleteTodo={deleteOneTodo}/>
                    </Route>
                    <Route path="/:URLtoSpecificPage" exact>
                        <ShowTheSpecificPage toDos={toDoState} updateTodo={updateTodo} deleteTodo={deleteOneTodo}/>
                    </Route>
                    <Route path="/todo/:id">
                        <DetailsPage/>
                    </Route>
                </Switch>
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
