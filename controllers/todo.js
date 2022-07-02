const todo = require("../models/Todo");

const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);

  res.status(201).json({ todo });
};

const getTodo = async (req, res, next) => {
  const { id: TodoID } = req.params;
  const todo = await Todo.findOne({ _id: TodoID });
  if (!todo) {
    return res
      .status(404)
      .json({ msg: `Todo with the ID ${TodoID} not found` });
  }

  res.status(200).json({ Todo });
};

const getAllTodods = async (req, res) => {
  const todos = await Todo.find({});

  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const skip = (page - 1) * limit;

  res.status(200).json({ Todos, count: Todos.length });
};

const updateTodo = async (req, res) => {
  const { id: TodoID } = req.params;

  Todo = await Todo.findByIdAndUpdate({ _id: TodoID }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!todo) {
    return res
      .status(404)
      .json({ msg: `Todo with the ID ${TodoID} not found` });
  }
  res.status(200).json({ Todo });
};

const deleteTodo = async (req, res) => {
  const { id: TodoID } = req.params;
  Todo = await Todo.findByIdAndDelete({ _id: TodoID });
  if (!todo) {
    return res
      .status(404)
      .json({ msg: `Todo with the ID ${TodoID} not found` });
  }
  res.status(200).send();
};

module.exports = {
  createTodo,
  getTodo,
  getAllTodods,
  updateTodo,
  deleteTodo,
};
