const express = require('express');
const todoModel = require('../models/todos')
const { isAlphaNumeric } = require("../utils")
const router = express.Router();

// route to get all ToDos
router.get('/todos', async (req, res) => {
    try {
        const todoList = await todoModel.find({});
        res.status(200).send(todoList);
    } catch (error) {
        console.error('Error retrieving ToDo:', error);

    }
});

// route to save todo in the database
router.post('/todos', async (req, res) => {

    try {
        if (!req.body.description) {
            res.status(400).json({ error: "Task Description cannpot be empty" })
        }

        const toDo = new todoModel({
            description: req.body.description,
            completed: req.body.completed,
        })
        const result = await toDo.save()
        res.status(201).json({ message: "ToDo saved successfully"})
    } catch (error) {
        console.error('Error saving ToDo:', error);
    }
});

// route to updated todo in the database
router.put('/todos/:id', async (req, res) => {

    const todoId = req.params.id || ""
    const taskDesc = req.body.description;
    const taskCompleted = req.body.completed;
    try {

        // validating if todoId is null or empty or undefined or type is not correct
        const val=todoId.trim()
       
        if (todoId==="") {
            return res.status(400).json({error: "ToDo Item Id should be passed as a parameter"})
        }
        if (!isAlphaNumeric(val)) {
            return res.status(400).json({error: "ToDo Item Id should be alphanumeric"})
            
        }
        const updatedToDo = await todoModel.findByIdAndUpdate({ _id: todoId }, { description: taskDesc, completed: taskCompleted }, { new: true })
        if (updatedToDo) {
            return res.status(200).json({message:"ToDo updated successfully"})
        } else {
            return res.status(404).json({error: "ToDo Item not found"})
        }
    }
    catch (error) {
        console.error('Error updating ToDo:', error);
    }

});

// route to delete todo from the database
router.delete('/todos/:id', async (req, res) => {
    const todoId = req.params.id || ""
       // validating if todoId is null or empty or undefined or type is not correct
      const val=todoId.trim()
      if (todoId==="") {
          return res.status(400).json({error: "ToDo Item Id should be passed as a parameter"})
      }
      if (!isAlphaNumeric(val)) {
          return res.status(400).json({error: "ToDo Item Id should be alphanumeric"})
      }
    try {

        const result = await todoModel.findByIdAndDelete(todoId)
        if (result) {
            res.status(200).json({message: "ToDo deleted successfully"})
        } else {
            res.status(404).json({error: "ToDo Item not found"})
        }
    } catch (error) {
        console.error('Error deleting ToDo:', error);
    }

});


module.exports = router