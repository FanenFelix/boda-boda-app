const mongoose = require('mongoose')

var salesPeopleSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: String,
    contact: String,
    email: String,
    id: String,
    password: String,
    confirmPassword: String,
    workingDaysNum: Number,
    role: String,
    todayDate: String

});

module.exports = mongoose.model("SalesPerson", salesPeopleSchema);
