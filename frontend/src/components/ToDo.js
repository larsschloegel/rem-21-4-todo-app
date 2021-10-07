import {useHistory} from "react-router-dom"
import * as PropTypes from "prop-types"
import {toDoProps} from "./Board"
import styled from "styled-components/macro"

ToDo.propTypes = {
  toDo: toDoProps.isRequired,
  updateTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
}
export default function ToDo({toDo, updateTodo, deleteTodo}) {
  const history = useHistory()

  return (
    <StyledToDo>
      <StyledToDoTitle>{toDo.description}</StyledToDoTitle>
      {updateTodo && <StyledButtons onClick={() => updateTodo(toDo)}>advanced</StyledButtons>}
      {deleteTodo && <StyledButtons onClick={() => deleteTodo(toDo)}>delete</StyledButtons>}
      <StyledButtons onClick={() => history.push(`/todo/${toDo.id}`)}>details</StyledButtons>
    </StyledToDo>
  )
}

const StyledButtons = styled.button`
  display: flex;
  justify-content: space-between;
  background-color: #9C2525;
  color: white;
  border: none;
  border-radius: 2px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  width: 140px;
  box-shadow: 0px 4px 6px -1px;
  margin: 2.5px;
`

const StyledToDo = styled.section`
  border-radius: 0.5rem;
  margin: 12px;
  padding: 5px;
  box-shadow: 0px 4px 6px -1px;
  background-color: #F9F8E6;
  `
const StyledToDoTitle = styled.h3`
  color: #9C2525;
  `
