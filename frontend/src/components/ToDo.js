import "./ToDo.css"


export default function ToDo({toDo, updateTodo, deleteTodo}) {

    return (
        <section className="To-Do">
            <h3>{toDo.description}</h3>
            {updateTodo && <button onClick={() => updateTodo(toDo)}>advanced</button>}
            {deleteTodo && <button onClick={() => deleteTodo(toDo)}>delete</button>}
        </section>
    );
}