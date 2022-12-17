const Mongoose = require("mongoose");

const TaskSchema = new Mongoose.Schema({
  task: { type: String, required: [true, "must provide a name"], trim: true },
  updated_at: { type: Date, default: Date.now },
  urgency: { type: Number, min: 1, max: 4, default: 1 },
  completed: { type: Boolean, default: false },
});

module.exports = Mongoose.model("Task", TaskSchema);
