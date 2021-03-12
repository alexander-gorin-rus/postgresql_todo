import axios from 'axios'
import React, { Fragment, useState } from 'react'


const EditTodo = ({ todo }) => {

    const [description, setDescription] = useState(todo.description)
    const [complete, setComplete] = useState(todo.complete)

    const clickUpdate = async (e) => {
        e.preventDefault();
        try {
            const body = {description, complete};
            const response = axios.put(`http://localhost:5002/api/v1/updateTodo/${todo.todo_id}`, body);

            //console.log(response)
            window.location = "/";
        } catch (error) {
            console.log(error)
        }
    }

    const saveChanges = () => {
        setDescription(todo.description);
        setComplete(todo.complete)
    }
    return (
        <Fragment>
            <button 
                type="button" 
                className="btn btn-primary" 
                data-toggle="modal" 
                data-target={`#id${todo.todo_id}`}
                >
                Edit
            </button>

            <div 
                className="modal" 
                id={`id${todo.todo_id}`}
                onClick={saveChanges}
                >

            <div className="modal-dialog">
                <div className="modal-content">

                
                <div className="modal-header">
                    <h4 className="modal-title">Edit Todo</h4>
                    <button 
                        type="button" 
                        className="close" 
                        data-dismiss="modal"
                        onClick={saveChanges}
                        >
                            &times;</button>
                </div>

                
                <div className="modal-body">
                    <label className="text-center">Description</label>
                    <input
                        className="form-control"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <label className="text-center">Complete</label>
                    <input
                        className="form-control"
                        type="text"
                        value={complete}
                        onChange={e => setComplete(e.target.value)}
                    />
                </div>

                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-warning" 
                        data-dismiss="modal"
                        onClick={clickUpdate}
                        >
                            Edit</button>
                    <button 
                        type="button" 
                        className="btn btn-danger" 
                        data-dismiss="modal"
                        onClick={saveChanges}
                        >
                            Close
                        </button>
                </div>

                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default EditTodo
