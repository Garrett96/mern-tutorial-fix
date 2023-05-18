const { MongoClient } = require("mongodb");
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let _db;

module.exports = {
  connectToServer: async () => {
    try {
      await client.connect();
      _db = client.db("employees");
      console.log("Successfully connected to MongoDB.");
    } catch (err) {
      console.error("Failed to connect to MongoDB:", err);
      throw err;
    }
  },

  closeConnection: async () => {
    try {
      await client.close();
      console.log("MongoDB connection closed.");
    } catch (err) {
      console.error("Error closing MongoDB connection:", err);
    }
  },

  getDb: () => {
    console.log("getDb function called.");
    return _db;
  },
};
