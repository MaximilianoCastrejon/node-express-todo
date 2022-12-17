const Task = require("../models/tasks");
const {
  CustomErrorResponse,
  createCustomErrorResponse,
} = require("../errors/custom-errors");
const asyncWrapper = require("../middleware/asyncWrapper");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json({ tasks });
});
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask_ID = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(createCustomErrorResponse(`no task with ID: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask_ID = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const payload = req.body;
  const task = await Task.findOneAndUpdate({ _id: taskID }, payload, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomErrorResponse(`no task with ID: ${taskID}`, 404));
    l;
  }
  res.status(200).json({ task });
});

const deleteTask_ID = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(createCustomErrorResponse(`no task with ID: ${taskID}`, 404));
  }
  res.status(200).json({ deleted_obj: task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask_ID,
  updateTask_ID,
  deleteTask_ID,
};
