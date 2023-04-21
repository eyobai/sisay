const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const services = new Schema({
    salaonId:{
        type:mongoose.Types.ObjectId,
        ref:'Salon',
    },
    title:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    commission:{
        type:Number,    //% commission on price
        required:true,
    },
    duration:{
        type:Number, //duration in minutes
        required:true,
    },
    recurrence:{
        type:Number, //service rework period in days
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
        enum:['A', 'I', 'E'],
        default: 'A'
      },
});

salon.index({geo:'2dsphere'});

module.exports = mongoose.model('Services',services);