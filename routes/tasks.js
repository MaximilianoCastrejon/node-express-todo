const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask_ID,
  updateTask_ID,
  deleteTask_ID,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask_ID).patch(updateTask_ID).delete(deleteTask_ID);

module.exports = router;
