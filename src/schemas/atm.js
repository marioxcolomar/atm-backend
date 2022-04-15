const { default: mongoose } = require("mongoose");

const atmSchema = new mongoose.Schema({
  balance: {
    type: Number,
    required: true,
  }
})

const Atm = mongoose.model('Atm', atmSchema)

export default Atm