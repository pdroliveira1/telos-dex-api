const {Router} =  require("express")

const pokemonController = require("../controllers/pokemon.controller")

routes = Router()

routes.post('/pokemons',pokemonController.create)

routes.get('/pokemons',pokemonController.list)
routes.get('/pokemons/:id',pokemonController.getById)

routes.put('/pokemons/:id',pokemonController.update)

routes.delete('/pokemons/:id',pokemonController.remove)

module.exports = routes;