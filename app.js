const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./database/mongoAtlasConnection");
require("dotenv").config();
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/notFound");

// middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

// app.get('/api/tasks') -get all tasks
// app.post('/api/tasks') -create a task
// app.patch('/api/tasks:id') -update a task
// app.get('/api/tasks:id') -get specific task
// app.delete('/api/tasks:id') -delete a task

app.post("/api/tasks", (req, res) => {});
app.patch("/api/tasks:id", (req, res) => {});
app.get("/api/tasks:id", (req, res) => {});
app.delete("/api/tasks:id", (req, res) => {});

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening in port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
