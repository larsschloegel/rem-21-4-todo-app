import "./ToDo.css"
import {useHistory} from "react-router-dom";
import * as PropTypes from "prop-types";
import {toDoProps} from "./Board";

ToDo.propTypes = {
    toDo: toDoProps.isRequired,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func
};
export default function ToDo({toDo, updateTodo, deleteTodo}) {

    const history = useHistory()

    return (
        <section className="To-Do">
            <h3>{toDo.description}</h3>
            {updateTodo && <button onClick={() => updateTodo(toDo)}>advanced</button>}
            {deleteTodo && <button onClick={() => deleteTodo(toDo)}>delete</button>}
            <button onClick={() => history.push(`/todo/${toDo.id}`)}>details</button>
        </section>
    );
}