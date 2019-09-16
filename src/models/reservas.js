const mongoose= require('mongoose');
const Schema=mongoose.Schema;
 
const ReservaShema=new Schema({
    
    habitacion:String,
    personas:Number,
    ingreso:String,
    salida:String,
    status:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('reservas',ReservaShema);