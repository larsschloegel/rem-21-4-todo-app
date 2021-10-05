import "./Board.css"
import BoardRow from "./BoardRow";

export default function Board({toDos,updateTodo}) {
    const openTodos = toDos.filter(todo => todo.status === 'OPEN')
    const doingTodos = toDos.filter(todo => todo.status === 'IN_PROGRESS')
    const doneTodos = toDos.filter(todo => todo.status === 'DONE')

    return (
        <section className="To-Do-Board">
            <BoardRow title={"To do"} data={openTodos} updateTodo={updateTodo}/>
            <BoardRow title={"Doing"} data={doingTodos} updateTodo={updateTodo}/>
            <BoardRow title={"Done"} data={doneTodos} updateTodo={updateTodo}/>
        </section>
    )
}