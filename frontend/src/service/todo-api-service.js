import axios from "axios";


export const getTodos=() => {
    return axios
        .get("/api/todo")
        .then(response => response.data)
        .catch((error)=> console.log(error))
}


export const postTodo = (inputDescription) => {
    const newTodo = {
        description: inputDescription,
        status: "OPEN",
    }
    return axios
        .post("/api/todo", newTodo)
        .then(response => response.data)
        .catch((error)=> console.log(error))
}
export const putTodo = (todo) => {
    return axios
        .put("/api/todo/"+ todo.id, todo)
        .then(response => response.data)
        .catch((error)=> console.log(error))
}
export const deleteTodo = (todo) => {
    return axios
        .delete("/api/todo/"+ todo.id)
    }

    export const getTodoBy = (id) => {
    return axios
        .get(`/api/todo/${id}`)
    }