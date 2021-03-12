const e = require('express');
const express = require('express');
const pool = require('../DB/db')

const router = express.Router();

router.post('/create_to_do', async (req, res) => {
    try {
        const newTodo = await pool.query("INSERT INTO todo (description, complete) VALUES ($1, $2)", 
        [req.body.description, req.body.complete]);
        res.status(200).json({
            data: newTodo
        })
    } catch (error) {
        console.log(error)
    }
});

router.get('/getTodos', async (req, res) => {
    try {
        const getTodos = await pool.query("SELECT * FROM todo");
        res.status(200).json({
            data: getTodos.rows
        })
    } catch (error) {
        console.log(error)
    }
});

router.get('/getTodo/:id', async (req, res) => {
    try {
        const getTodo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", 
        [req.params.id]);
        res.status(200).json({
            data: getTodo.rows[0]
        })
    } catch (error) {
        console.log(error)
    }
});

// router.get('/getSpecTodo/:body', async (req, res) => {
    
//     try {
//         const getTodo = await pool.query("SELECT * FROM todo WHERE complete = $1", 
//         [req.body.complete]);
//         if(!getTodo){
//             return res.status(404).json({
//                 error: "Todo that is matched with request is not found"
//             })
//         } else{
//             return res.status(200).json({
//             data: getTodo.rows[0]
//         })
//         }
        
//     } catch (error) {
//         console.log(error)
//     }
// });

router.put('/updateTodo/:id', async (req, res) => {
    try {
        const updateTodo = await pool.query("UPDATE todo SET description = $1, complete = $2 WHERE todo_id = $3 RETURNING *", 
        [req.body.description, req.body.complete ,req.params.id]);
        res.status(200).json({
            data: updateTodo.rows
        })
    } catch (error) {
        console.log(error)
    }
});

router.delete('/deleteTodo/:id', async (req, res) => {
    try {
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", 
        [req.params.id]);
        res.status(200).json({
            deleteTodo
        })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;