import "./Board.css"
import BoardRow from "./BoardRow";
import * as PropTypes from "prop-types";

export const toDoProps= PropTypes.shape({id: PropTypes.string, description: PropTypes.string, status: PropTypes.string})
Board.propTypes = {
    toDos: PropTypes.arrayOf(toDoProps).isRequired,
    updateTodo: PropTypes.func,
    deleteTodo: PropTypes.func
};

export default function Board({toDos,updateTodo,deleteTodo}) {
    const openTodos = toDos.filter(todo => todo.status === 'OPEN')
    const doingTodos = toDos.filter(todo => todo.status === 'IN_PROGRESS')
    const doneTodos = toDos.filter(todo => todo.status === 'DONE')
    //console.log(toDos)

    return (
        <section className="To-Do-Board">
            <BoardRow title={"To do"} data={openTodos} updateTodo={updateTodo}/>
            <BoardRow title={"Doing"} data={doingTodos} updateTodo={updateTodo}/>
            <BoardRow title={"Done"} data={doneTodos} deleteTodo={deleteTodo}/>
        </section>
    )
}