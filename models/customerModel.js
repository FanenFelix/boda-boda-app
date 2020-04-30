//The schema that shows the architectural strurcture of the database
//Begining of customer schema
const mongoose = require('mongoose')
var customersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: String,
    contact: String,
    nationality: String,
    nin: String,
    maritalStatus: String,
    stageName: String,
    lc1: String,
    lc3: String,
    otherLoans: String,
    refereeName: String,
    refereeDoB: String,
    refereeOccupation: String,
    vehicleType: String,
    downPayment: Number,
    todayDate: String,

});
//End of customer Schema
//
module.exports = mongoose.model("Customer", customersSchema);