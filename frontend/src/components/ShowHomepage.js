import {Route, Switch} from "react-router-dom";
import Board from "./Board";


export default function ShowHomepage(props) {
    return (
            <Board toDos={props.toDos} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>
    )
}