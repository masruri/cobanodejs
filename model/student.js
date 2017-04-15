var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
	nim:String,
	nama:String,
	kelas:String
});
var student = mongoose.model("students",studentSchema);
module.exports.student = student;