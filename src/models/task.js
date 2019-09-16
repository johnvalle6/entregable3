const mongoose= require('mongoose');
const Schema=mongoose.Schema;
 
const TaskShema=new Schema({
    Nombre:String,
    Apellido:String,
    tipodocumento:String,
    Cedula:String,
    Telefono:String,
    habitacion:String,
    status:{
        type:Boolean,
        default:false
    }
});

module.exports=mongoose.model('tasks',TaskShema);