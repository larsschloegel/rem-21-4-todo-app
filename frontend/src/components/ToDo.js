import "./ToDo.css"
import {useHistory} from "react-router-dom";


export default function ToDo({toDo, updateTodo, deleteTodo, detailView}) {

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