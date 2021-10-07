import {Route, Switch, useParams} from "react-router-dom";
import BoardRow from "./BoardRow";
import Board from "./Board";


export default function ShowTheSpecificPage(props) {

    const {URLtoSpecificPage}= useParams()

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

    const title = statusToTitle[URLtoSpecificPage]

    return (
            <BoardRow title={`Status: ${title}`} data={props.toDos.filter(todo => todo.status === specificPageToStatus[URLtoSpecificPage])}
                      updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>
    )
}