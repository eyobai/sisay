const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salon = new Schema({
    name:{
        type:String,
        required:[true, 'name is required']
    },
    photo:String,
    cover:String,
    email:{
        type:String,
        required:[true, 'email is required']
    },
    password:{
        type:String,
        required:true,
    },
    phone:String,
    address:{
        city:String, 
        uf:String,
        Zip:String,
        number:String,
        country:String,
    },
    geo:{
        type:String,
        coordinates:Array
    },
    dateRegister:{
        type:Date,
        default:Date.now,
    }
});

salon.index({geo:'2dsphere'});

module.exports = mongoose.model('Salon',salon);