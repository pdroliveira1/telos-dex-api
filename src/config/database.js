const mongoose = require("mongoose");

const {MONGO_DB_URI} = require("./env")

mongoose.connect(
  MONGO_DB_URI
)

mongoose.connection.on("connected", () => {
  console.log("Database connected succesfully")
})

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect database", err)
})

