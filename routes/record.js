const express = require("express");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record").get(async (req, res) => {
  try {
    const db = dbo.getDb("employees");
    const result = await db.collection("records").find({}).toArray();
    res.json(result);
  } catch (err) {
    console.error("Error retrieving records:", err);
    res.status(500).json({ error: "Failed to retrieve records" });
  }
});

recordRoutes.route("/record/:id").get(async (req, res) => {
  try {
    const db = dbo.getDb("employees");
    const myquery = { _id: ObjectId(req.params.id) };
    const result = await db.collection("records").findOne(myquery);
    if (result) {
      res.json(result);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (err) {
    console.error("Error retrieving record:", err);
    res.status(500).json({ error: "Failed to retrieve record" });
  }
});

recordRoutes.route("/record/add").post(async (req, res) => {
  try {
    const db = dbo.getDb("employees");
    const myobj = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    const result = await db.collection("records").insertOne(myobj);
    res.json(result);
  } catch (err) {
    console.error("Error adding record:", err);
    res.status(500).json({ error: "Failed to add record" });
  }
});

recordRoutes.route("/update/:id").post(async (req, res) => {
  try {
    const db = dbo.getDb("employees");
    const myquery = { _id: ObjectId(req.params.id) };
    const newvalues = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };
    const result = await db.collection("records").updateOne(myquery, newvalues);
    if (result.modifiedCount > 0) {
      console.log("1 document updated");
      res.json(result);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (err) {
    console.error("Error updating record:", err);
    res.status(500).json({ error: "Failed to update record" });
  }
});

recordRoutes.route("/:id").delete(async (req, res) => {
  try {
    const db = dbo.getDb("employees");
    const myquery = { _id: ObjectId(req.params.id) };
    const result = await db.collection("records").deleteOne(myquery);
    if (result.deletedCount > 0) {
      console.log("1 document deleted");
      res.json(result);
    } else {
      res.status(404).json({ error: "Record not found" });
    }
  } catch (err) {
    console.error("Error deleting record:", err);
    res.status(500).json({ error: "Failed to delete record" });
  }
});

module.exports = recordRoutes;
