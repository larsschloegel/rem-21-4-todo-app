import ToDo from "./ToDo"
import * as PropTypes from "prop-types"
import {toDoProps} from "./Board"
import styled from "styled-components/macro"

BoardRow.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(toDoProps).isRequired,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
}
export default function BoardRow({title, data, updateTodo, deleteTodo}) {
  return (
    <StyledBoardRow>
      <StyledBoardRowTitle>{title}</StyledBoardRowTitle>
      {data.map((toDo) => (
        <ToDo
          key={toDo.id}
          toDo={toDo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </StyledBoardRow>
  )
}

const StyledBoardRow = styled.section`
  width: 600px;
  border-radius: 0.5rem;
  margin: 0.75rem;
  padding-left: 0.75rem;
  background-color: #FF8B8B;
  box-shadow: 0px 4px 6px -1px;
  `
const StyledBoardRowTitle = styled.h2`
  color: white;
  `
