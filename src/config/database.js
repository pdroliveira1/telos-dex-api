const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Pedro:pedro2889@cluster0.sn12cee.mongodb.net/?retryWrites=true&w=majority"
)

mongoose.connection.on("connected", () => {
  console.log("Database connected succesfully")
})

mongoose.connection.on("error", (err) => {
  console.log("Failed to connect database", err)
})

