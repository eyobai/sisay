const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clients = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
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


  dateRegister:{
    type:Date,
    default:Date.now,
  }
});
module.exports = mongoose.model("Clients",clients);
