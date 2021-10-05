import "./ToDo.css"


export default function ToDo({toDo, updateTodo}) {

    return (
        <section className="To-Do">
            <h3>{toDo.description}</h3>
            <button onClick={ () => updateTodo(toDo)}>advanced</button>
        </section>
    );
}