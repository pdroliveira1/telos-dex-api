const PokemonModel = require("../model/pokemon.model")

const create = async (request, response) => {
  const {name, attack, defense, speed, hp, type1, type2, is_legendary,} = request.body

  const pokedex_number = await PokemonModel.find().count()

  try {

    const pokemon = await PokemonModel.create({
      name,
      pokedex_number: pokedex_number + 1,
      attack,
      defense,
      speed,
      hp,
      type1,
      type2,
      is_legendary,
    })

    return response.status(201).json(pokemon)

  } catch (err) {

    return response.status(400).json({
      error:"@pokemons/create",
      message: err.message || "failed to create"
    })

  }

};

const list = async (request, response) => {
  const pokemonFilter = request.query

  try {

    if(pokemonFilter){
      const pokemons = await PokemonModel.find(pokemonFilter)

      return response.status(200).json(pokemons)
    }

    const pokemons = await PokemonModel.find()

    return response.status(200).json(pokemons)

  } catch (err) {

    return response.status(400).json({
      error:"@pokemons/list",
      message: err.message || `Pokemons not foud ${err}` 
    })
    
  }

};

const getById = async (request, response) => {
  const { id } = request.params

  try {

    if(!id){
      throw new Error()
    }

    const pokemon = await PokemonModel.findById(id)

    if(!pokemon){
      throw new Error()
    }

    return response.status(200).json(pokemon)

  } catch (err) {

    return response.status(400).json({
      error:"@pokemons/getById",
      message: err.message || `Pokemon not found ${id}`
    })
    
  }

};

const update = async (request, response) => {
  const { id } = request.params
  const {name, attack, defense, speed, hp, type1, type2, is_legendary,} = request.body

  try {

    if(!id){
      throw new Error()
    }

    const pokemonUpdated = await PokemonModel.findByIdAndUpdate(id,{
      name,
      attack,
      defense,
      speed,
      hp,
      type1,
      type2,
      is_legendary,
    },
    {
      new: true
    })

    if(!pokemonUpdated){
      throw new Error()
    }

    return response.status(200).json(pokemonUpdated)

  } catch (err) {

    return response.status(400).json({
      error:"@pokemons/update",
      message: err.message || `Pokemon not found ${id}`
    })
    
  }

};

const remove = async (request, response) => {
  const { id } = request.params

  try {

    if (!id) {
      throw new Error()
    }

    const pokemonDeleted = await PokemonModel.findByIdAndDelete(id)

    if(!pokemonDeleted){
      throw new Error()
    }

    return response.status(204).send()

  } catch (err) {

    return response.status(400).json({
      error:"@pokemons/remove",
      message: err.message || `Pokemon not found ${id}`
    })
    
  }

};

module.exports = {
  create,
  list,
  getById,
  update,
  remove,
}