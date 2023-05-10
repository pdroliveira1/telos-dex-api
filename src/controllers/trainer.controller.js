const pokemonModel = require("../model/pokemon.model")
const trainerModel = require("../model/trainer.model")


const create = async (request, response) => {
  const {name, age, location, is_leader, badges, speciality, pokemons,} = request.body

  try {

    const pokemonsDados = await pokemonModel.find({_id: {$in: pokemons}})

    const trainer = await trainerModel.create({
      name,
      age,
      location,
      is_leader,
      badges,
      speciality,
      pokemons: pokemonsDados,
    })

    return response.status(201).json(trainer)

  } catch (err) {

    return response.status(400).json({
      error:"@trainers/create",
      message: err.message || "failed to create"
    })

  }

}

const list = async (request, response) => {
  trainerFilter = request.query

  try {
    
    if (trainerFilter) {
      const trainers = await trainerModel.find(trainerFilter)

      return response.status(200).json(trainers)
    }
    
    const trainers = await trainerModel.find()

    return response.status(200).json(trainers)

  } catch (err) {

    return response.status(400).json({
      error:"@trainers/list",
      message: err.message || `Trainers not foud ${err}`
    })
    
  }

}

const getById = async (request, response) => {
  const {id} = request.params
  
  try {

    if (!id) {
      throw new Error()
    }

    const trainer  = await trainerModel.findById(id)

    return response.status(200).json(trainer)
    
  } catch (err) {

    return response.status(400).json({
      error:"@trainers/getById",
      message: err.message || `Trainer not foud ${err}`
    })
    
  }

}

const update = async (request, response) => {
  const {id} = request.params
  const {name, age, location, is_leader, badges, speciality, pokemons,} = request.body

  try {

    if (!id) {
      throw new Error()
    }

    pokemonsDados = await pokemonModel.find({_id: {$in: pokemons}})

    const trainerUpdated = await trainerModel.findByIdAndUpdate(id, {
      name,
      age,
      location,
      is_leader,
      badges,
      speciality,
      pokemons: pokemonsDados,
    },
    {
      new: true
    })

    return response.status(201).json(trainerUpdated)

  } catch (err) {
    
    return response.status(400).json({
      error:"@trainers/updated",
      message: err.message || `Trainer not foud ${err}`
    })

  }

}

const remove = async (request, response) => {
  const {id} = request.params

  try {
    if (!id) {
      throw new Error()
    }

    const trainerDeleted = await trainerModel.findByIdAndDelete(id)

    if(!trainerDeleted){
      throw new Error()
    }

    return response.status(204).send()

  } catch (err) {

    return response.status(400).json({
      error:"@trainers/remove",
      message: err.message || `Trainer not foud ${err}`
    })
    
  }

}

module.exports = {
  create,
  list,
  getById,
  update,
  remove,
}