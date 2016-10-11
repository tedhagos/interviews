
// MODULES ----------------------------------------------------------------------
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// SCHEMA ---
const interviewSchema = new Schema( {
  candidate : {
    lastName: {type: String, required: true},
    firstName : {type:String, required:true},
    middleName: {type: String, required:false},
    contacts: [
      {
        mobileNumber: {type:String, required:false},
        email: {type:String, required:false} // have some rule on the app to check this
      }
    ]
  },
  positionAppliedFor: {type: String, required: false},
  requiringCompany: {type: String, required: false},
  dateOfInterview: {type: Date, required: false},
  timeOfInterview: {type: Date, required: false},
  interviewers: [
    {
      lastName : {type:String, required: false},
      firstName: {type:String, required: false},
      email: {type: String, required: true}
    }
  ] 
});

const Interview = mongoose.model('Interview', interviewSchema);

module.exports = Interview;


