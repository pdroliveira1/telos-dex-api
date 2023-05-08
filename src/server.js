const express = require("express")

require("./config/database")

const { PORT } = require("./config/env")


const app = express()

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})