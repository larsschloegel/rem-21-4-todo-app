import {Route, Switch} from "react-router-dom";
import BoardRow from "./BoardRow";
import Board from "./Board";


export default function ShowHomepage(props) {
    return (
        <Route path={props.path}>
            <Board toDos={props.toDos} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>
        </Route>

    )
}