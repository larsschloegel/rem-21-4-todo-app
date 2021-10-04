import "./Board.css"
import BoardRow from "./BoardRow";

export default function Board({toDos,testfunktion}) {
    const openTodos = toDos.filter(todo => todo.status === 'OPEN')
    const doingTodos = toDos.filter(todo => todo.status === 'IN_PROGRESS')
    const doneTodos = toDos.filter(todo => todo.status === 'DONE')

    return (
        <section className="To-Do-Board">
            <BoardRow title={"To do"} data={openTodos}  testfunktion={testfunktion}/>
            <BoardRow title={"Doing"} data={doingTodos} testfunktion={testfunktion}/>
            <BoardRow title={"Done"} data={doneTodos} testfunktion={testfunktion}/>
        </section>
    )
}