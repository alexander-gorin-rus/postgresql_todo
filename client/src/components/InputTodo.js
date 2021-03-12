import React, {useState} from 'react';
import axios from 'axios'

const InputTodo = () => {

    const [description, setDescription] = useState("");
    const [complete, setComplete] = useState("")

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const body = { description, complete };
            const response = await axios.post("http://localhost:5002/api/v1/create_to_do", body);
            window.location = "/";
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1 className="text-center mt-5">Input Todo</h1>
            <form className="d-flex mt-5"  onSubmit={handleSubmit} >
                <input 
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="description"
                />
                 <input 
                    type="text"
                    className="form-control"
                    value={complete}
                    onChange={e => setComplete(e.target.value)}
                    placeholder="complete"
                />
                <button className="btn btn-success">Add</button>
            </form>
        </div>
    )
}

export default InputTodo
