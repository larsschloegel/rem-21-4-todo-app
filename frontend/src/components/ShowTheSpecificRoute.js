import {Route, Switch} from "react-router-dom";
import BoardRow from "./BoardRow";
import Board from "./Board";


export default function ShowTheSpecificRoute(props) {
    return (
        <Route path={props.path}>
            <BoardRow title={props.title} data={props.toDos.filter(todo => todo.status === props.status)}
                      updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>
        </Route>

    )

}