import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Board from "./components/Board";
import ToDoData from "./components/ToDos.json"
import {useState} from "react";

function App() {
   const [toDo, setToDo] = useState([])
    const[description,setDescription]=useState("")

    //const AlltoDos = ToDoData

    function fetchTodos(){
        fetch("/api/todo")
            .then(response => setToDo(response))
            .catch(console.error)
    }

    const nextStatus = {
        OPEN: 'IN_PROGRESS',
        IN_PROGRESS: 'DONE',
    }

    function advanceStatus(toDo){
        toDo.status=nextStatus[toDo.status]
        console.log(toDo.status)
    }
    const handleDescriptionChange = event => setDescription(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        addTodo(description)
        setDescription('')
    }

    const addTodo = description => {
       const todo = { description, status: 'OPEN'}
           fetch('/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo),
        })
               .then(response => response.json())
               .then(todo => {
                   console.log('Success:', todo);
                   setToDo([...toDo,todo])
               })
               .catch((error) => {
                   console.error('Error:', error);
               });
    }


  return (
        <div>
          <Header title="ToDo App"/>
            <Board toDos={toDo} testfunktion={advanceStatus}/>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="new-todo"
                    placeholder="Describe the new todo"
                    value={description}
                    onChange={handleDescriptionChange}
                />
                <button type="submit">Add</button>
            </form>
        </div>

  );
}

export default App;
