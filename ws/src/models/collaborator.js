const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collaborator = new Schema({
  name: {
    type: String,
    required: ture,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  photo: { 
    String, 
    required: true },
  dateOfBirth:{
    type:String, //YYYY-MM-DD
    required:true
  },
  sex:{
    type:String,
    enum:['M', 'F'],
    required:true,
  },
  status:{
    type:String,
    required:true,
    enum:['A', 'I'],
    default: 'A'
  },
  BankAccount:{
    holder:{
        type:String,
        required:true
    },
    cpfCnpj:{
        type:String,
        required:true,
    },
    Bank:{
        type:String,
        required:true,
    },
   type:{
        type:String,
        required:true,
    },
    agency:{
        type:String,
        required:true,
    },
    number:{
        type:String,
        required:true,
    },
    dv:{
        type:String,
        required:true,
    }

  },

  recipientId:{
    type:String,
    required:true
  }
});
module.exports = mongoose.model("Collaborator",collaborator);
