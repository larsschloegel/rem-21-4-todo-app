
import "./BoardRow.css"
import ToDo from "./ToDo";

export default function BoardRow({title,data, testfunktion}) {

    return (
        <section className="To-Do-Row">
            <h2>{title}</h2>
            {
                data.map((toDo,index) => <ToDo key={index} toDo={toDo} testfunktion={testfunktion}/>)
            }
        </section>
    );
}