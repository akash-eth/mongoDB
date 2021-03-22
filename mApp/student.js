const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String
});

const Student = mongoose.model('student', studentSchema);


// module export:

module.exports = Student;