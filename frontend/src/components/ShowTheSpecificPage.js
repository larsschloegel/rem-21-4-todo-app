import {Route, Switch, useParams} from "react-router-dom";
import BoardRow from "./BoardRow";
import Board from "./Board";


export default function ShowTheSpecificPage(props) {

    const {specificPage}= useParams()

    const specificPageToStatus = {
        "To-Do": "OPEN",
        "Doing": "IN_PROGRESS",
        "Done": "DONE"
    }


    const statusToTitle = {
        "To-Do": "Open",
        "Doing": "In Progress",
        "Done": "Done"
    }

    const title = statusToTitle[specificPage]

    return (
            <BoardRow title={title} data={props.toDos.filter(todo => todo.status === specificPageToStatus[specificPage])}
                      updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>

    )
}