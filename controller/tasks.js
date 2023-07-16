const Task = require("../modals/task");

const getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
    res.send("all tasks");
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

const createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};
const getTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ id });
    if (!task) {
      return res.status(404).json({ msg: `Task not found with ${id}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(404).json({ msg: error });
    console.log(error);
  }
};
const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};
const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    res.status(204).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

module.exports = {
  getAllTasks,
  deleteTask,
  createTask,
  updateTask,
  getTask,
};
