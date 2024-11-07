const express = require("express");
const {
  fetchTodos,
  addTodos,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");
const router = express.Router();

router.get("/getTodo", fetchTodos);
router.post("/createTodo", addTodos);
router.put("/updateTodo", updateTodo);
router.delete("/deleteTodo", deleteTodo);

module.exports = router;
