const express = require("express");
const { connection } = require("./config/db");
const { expenseRouter } = require("./routes/routes");
const app = express();
app.use(express.json());

app.use("/api", expenseRouter);
let Port = process.env.PORT || 4200;
app.listen(Port, async (req, res) => {
  try {
    await connection;
    console.log("Connection setUp");
  } catch (err) {
    console.log("err", err);
  }
});
