const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const dbo = require("./db/conn");

const connectToServer = async () => {
  console.log("Connecting to the database...");
  try {
    await dbo.connectToServer();
    console.log("Successfully connected to the database.");
  } catch (err) {
    console.error("Error connecting to the database:", err);
    process.exit(1);
  }
};

connectToServer()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
