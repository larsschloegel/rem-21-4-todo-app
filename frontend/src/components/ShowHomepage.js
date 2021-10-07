import Board from "./Board";
import * as PropTypes from "prop-types";
import {toDoProps} from "./Board";

ShowHomepage.propTypes = {
    toDos: PropTypes.arrayOf(toDoProps).isRequired,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func
};

export default function ShowHomepage(props) {
    return (
            <Board toDos={props.toDos} updateTodo={props.updateTodo} deleteTodo={props.deleteTodo}/>
    )
}