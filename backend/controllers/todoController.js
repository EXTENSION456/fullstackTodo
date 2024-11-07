const Todos = require("../model/todo");

const fetchTodos = async (req, res) => {
  try {
    const todos = await Todos.find({});
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Internal server error!!!",
    });
  }
};

const addTodos = async (req, res) => {
  try {
    const payload = req.body;
    await Todos.create(payload);
    res.status(200).json({
      msg: "added successfully!!!",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error!!!",
    });
    console.log(error, "error while adding the todo");
  }
};

const updateTodo = async (req, res) => {
  try {
    const payload = req.body;
    await Todos.updateOne(
      {
        _id: payload._id,
      },
      {
        title: payload.title,
      }
    );

    res.status(200).json({
      msg: "Updated successfully!!!",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error!!!",
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const payload = req.body;
    await Todos.deleteOne({
      _id: payload._id,
    });

    res.status(200).json({
      msg: "Deleted successfully!!!",
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internal server error!!!",
    });
  }
};

module.exports = {
  fetchTodos,
  addTodos,
  deleteTodo,
  updateTodo,
};
