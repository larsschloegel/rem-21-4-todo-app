import "./ToDo.css"


export default function ToDo({toDo, testfunktion}) {

    return (
        <section className="To-Do">
            <h3>{toDo.description}</h3>
            <button onClick={testfunktion(toDo)}>advanced</button>
        </section>
    );
}