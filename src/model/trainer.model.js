const mongoose = require("mongoose")

const TrainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age:{
    type: Number,
    required: true
  },
  location:{
    type: String,
    required: true
  },
  is_leader:{
    type: Boolean,
    required: true
  },
  badges:{
    type: Array,
    required: true
  },
  speciality:{
    type: String,
    required: true
  },
  pokemons:{
    type: Array,
    required: true
  },
},
{
  timestamps: true
}
)

module.exports = mongoose.model('trainers', TrainerSchema)