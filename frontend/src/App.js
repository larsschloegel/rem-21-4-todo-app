import "./App.css"
import Header from "./components/Header"
import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Navigation from "./components/Navigation"
import ShowTheSpecificPage from "./components/ShowTheSpecificPage"
import ShowHomepage from "./components/ShowHomepage"
import DetailsPage from "./components/DetailsPage"
import useTodos from "./hooks/useTodos"
import InputToDo from "./components/InputToDo";

function App() {
    const {
        toDoState,
        addTodo,
        updateTodo,
        deleteOneTodo,
    } = useTodos()

    return (
        <div>
            <Header title="ToDo App"/>
            <Router>
                <Navigation/>
                <Switch>
                    <Route path="/" exact>
                        <ShowHomepage
                            toDos={toDoState}
                            updateTodo={updateTodo}
                            deleteTodo={deleteOneTodo}
                        />
                    </Route>
                    <Route path="/:URLtoSpecificPage" exact>
                        <ShowTheSpecificPage
                            toDos={toDoState}
                            updateTodo={updateTodo}
                            deleteTodo={deleteOneTodo}
                        />
                    </Route>
                    <Route path="/todo/:id">
                        <DetailsPage/>
                    </Route>
                </Switch>
            </Router>
            <InputToDo addTodo={addTodo}/>
        </div>
    )
}

export default App
