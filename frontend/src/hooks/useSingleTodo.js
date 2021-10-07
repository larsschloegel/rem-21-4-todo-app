import {useParams} from "react-router-dom";
import {getTodoBy} from "../service/todo-api-service";
import {useEffect, useState} from "react";


export default function useSingleTodo(){

    const {id} = useParams()
    const [todo, setTodo] = useState({})

    useEffect(() => {
        getTodoBy(id)
            .then(response => response.data)
            .then(data => setTodo(data))
    }, [id])

    return{todo}
}