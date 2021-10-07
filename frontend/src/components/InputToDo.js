import {useState} from "react";
import styled from "styled-components/macro";

export default function InputToDo({addTodo}){

    const [description, setDescription] = useState("")
    const handleDescriptionChange = (event) => setDescription(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!description){
            return
        }
        addTodo(description)
        setDescription("")
    }
    return(
        <StyledForm onSubmit={handleSubmit}>
            <StyledTextBox
                type="text"
                name="new-todo"
                placeholder="Describe the new todo"
                value={description}
                onChange={handleDescriptionChange}
            />
            <StyledAddButton type="submit">Add</StyledAddButton>
        </StyledForm>
    )
}

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 10fr 2fr;
  margin: 5px 5px 5px 10px;
  gap: 5px;
`

const StyledTextBox = styled.input`
  border-radius: 0.5rem;
  background-color: #FF8B8B;
  min-height: 20px;
`
const StyledAddButton = styled.button`
  background-color: #9C2525;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  margin-right: 5px;    
`