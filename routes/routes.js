const express = require("express");
const expenseRouter = express.Router();
const { expenseModel } = require("../model/expense.model");

// GET Request
expenseRouter.get("/get", async (req, res) => {
  try {
    let expenses = await expenseModel.find();
    res.send({ msg: "Data retrieved successfully", data: expenses });
  } catch (err) {
    res.status(500).send({ error: err.message, msg: "Failed to retrieve data" });
  }
});

// POST Request
expenseRouter.post("/add", async (req, res) => {
  try {
    let data = req.body;
    if (!data || (Array.isArray(data) && data.length === 0)) {
      throw new Error("Data is missing or empty");
    }

    if (Array.isArray(data)) {
      await expenseModel.insertMany(data);
    } else {
      let objData = new expenseModel(data);
      await objData.save();
    }

    res.send({ msg: "Data added successfully" });
  } catch (err) {
    res.status(400).send({ error: err.message, msg: "Failed to add data" });
  }
});

module.exports = { expenseRouter };
