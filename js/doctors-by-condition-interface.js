var SearchDoctors = require('./../js/searchDoctors.js').searchDoctorsModule;

var displayDoctorsByCondition = function(medicalIssue, doctorData) {
  $('#showDoctorsByConditionHeader').empty();
  $('#showDoctorsByConditionUl').empty();
  $('#showDoctorsByConditionHeader').append(medicalIssue);
  doctorData.forEach(function(doctor) {
    $('#showDoctorsByConditionUl').append('<li class="list-group-item">' + doctor.profile.first_name + " " + doctor.profile.last_name + '</li>');
  });
  // doctorData.forEach(function(doctor) {
  //   console.log(doctor.profile.first_name);
  // })

};

$(document).ready(function() {
  var currentSearchDoctorsObject = new SearchDoctors();
  $('#conditionButton').click(function() {
    var condition = $('#conditionInput').val();
    $('#conditionInput').val("");
    console.log("condition is " + condition );
    currentSearchDoctorsObject.getDoctorsByCondition(condition);
  });
});

exports.displayDoctorsByConditionFunction = displayDoctorsByCondition;
