
import "./BoardRow.css"
import ToDo from "./ToDo";
import * as PropTypes from "prop-types";

BoardRow.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func
};
export default function BoardRow({title,data, updateTodo, deleteTodo}) {

    return (
        <section className="To-Do-Row">
            <h2>{title}</h2>
            {
                data.map(toDo => <ToDo key={toDo.id} toDo={toDo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>)
            }
        </section>
    );
}