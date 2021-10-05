
import "./BoardRow.css"
import ToDo from "./ToDo";

export default function BoardRow({title,data, updateTodo}) {

    return (
        <section className="To-Do-Row">
            <h2>{title}</h2>
            {
                data.map(toDo => <ToDo key={toDo.id} toDo={toDo} updateTodo={updateTodo}/>)
            }
        </section>
    );
}