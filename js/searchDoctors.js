var apiKey = require('./../.env').apiKey;

var displayDoctorsByCondition = require('./../js/doctors-by-condition-interface.js').displayDoctorsByConditionFunction;

function SearchDoctors() {

}

SearchDoctors.prototype.getDoctorsByCondition = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
    .then(function(result) {
      console.log(result);
      // displayDoctorsByCondition(medicalIssue, result.data[0].profile.first_name);
      displayDoctorsByCondition(medicalIssue, result.data);
    })
    .fail(function(error){
      console.log("fail");
  });
};

exports.searchDoctorsModule = SearchDoctors;
