const mongoose = require('mongoose');
const schema = mongoose.Schema;
const exerciseSchema = new schema({
    username:{type:String,required:true},
    description:{type:String,required:true},
    duration:{type:String,required:true},
    date:{type:String,required:true}
},{
    timestamps:true,
});

const Exercise = mongoose.model('Exercise',exerciseSchema);
module.exports = Exercise;
