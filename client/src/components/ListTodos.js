import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EditTodo from './EditTodo';


const ListTodos = () => {

    const [todos, setTodos] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:5002/api/v1/getTodos");
            setTodos(response.data.data);
            console.log(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    const handleDelete = async (todo_id) => {
        try {
            await axios.delete(`http://localhost:5002/api/v1/deleteTodo/${todo_id}`)
            setTodos(todos.filter(todo => {
                return todo.todo_id !== todo_id
            }))
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1 className="text-center">List of Todos</h1>
            <table className="table">
            <thead>
                <tr>
                <th scope="col">Description</th>
                <th scope="col">Complete</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                    {todos.map((r) => {
                        return(
                            <tr key={r.todo_id}>
                                <td>{r.description}</td>
                                <td>{r.complete}</td>
                                <td >
                                    <div  className="btn btn-warning"><EditTodo todo={r} /></div>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(r.todo_id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                        
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ListTodos
