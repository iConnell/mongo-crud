const Todo = require("../models/Todo");
const todo = require("../models/Todo");

const createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);

  res.status(201).json({ todo });
};

const getTodo = async (req, res, next) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findOne({ _id: todoID });
  if (!todo) {
    return res
      .status(404)
      .json({ msg: `Todo with the ID ${todoID} not found` });
  }

  res.status(200).json({ todo });
};

const getAllTodods = async (req, res) => {
  let todos = Todo.find({});

  const limit = Number(req.query.limit) || 10;
  const page = Number(req.query.page) || 1;
  const skip = (page - 1) * limit;

  let result = await todos.skip(skip).limit(limit);

  res.status(200).json({ result, count: result.length });
};

const updateTodo = async (req, res) => {
  const { id: todoID } = req.params;

  const todo = await Todo.findByIdAndUpdate({ _id: todoID }, req.body, {
    runValidators: true,
    new: true,
  });
  if (!todo) {
    return res
      .status(404)
      .json({ msg: `Todo with the ID ${todoID} not found` });
  }
  res.status(200).json({ todo });
};

const deleteTodo = async (req, res) => {
  const { id: todoID } = req.params;
  const todo = await Todo.findByIdAndDelete({ _id: todoID });
  if (!todo) {
    return res
      .status(404)
      .json({ msg: `Todo with the ID ${todoID} not found` });
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
