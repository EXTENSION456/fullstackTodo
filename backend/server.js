const express = require("express");
const app = express();
const connectDb = require("./config/db");
const fetchTodos = require("./controllers/todoController");
const router = express.Router();
const PORT = 3000;
const cors = require("cors");
const todoRoutes = require("./routes/todoRoutes");


//connection with the db
connectDb();

app.use(cors())

//middleware used in all routes
app.use(express.json());

//middlewares for routing logic
app.use(todoRoutes);

//start server
app.listen(PORT, () => {
  console.log(`server is running on the ${PORT}`);
});
