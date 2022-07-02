const express = require("express");

const router = express.Router();

const {
  createTodo,
  getTodo,
  getAllTodods,
  updateTodo,
  deleteTodo,
} = require("../controllers/todo");

router.post("/", createTodo);
router.get("/", getAllTodods);
router.get("/:id", getTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

module.exports = router;
