const express = require("express")

require("./config/database")

const pokemonRoutes = require("./routes/pokemon.routes")

const { PORT } = require("./config/env")


const app = express()

app.use(express.json())
app.use(pokemonRoutes)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})