var SearchDoctors = require('./../js/searchDoctors.js').searchDoctorsModule;

var displayDoctorsByCondition = function(medicalIssue, doctorData) {
  $('#showDoctorsByConditionHeader').empty();
  $('#showDoctorsByConditionUl').empty();
  $('#showDoctorsByConditionHeader').append(medicalIssue);
  var panelTitleA = "";
  var i = 0;
  var $target;
  doctorData.forEach(function(doctor) {
    // panelTitleString = '<a data-toggle="collapse" href="#collapse' + i + '">' + doctor.profile.first_name + ' '  + doctor.profile.last_name + '</a>';
    panel = document.createElement('div');
    panel.setAttribute('class', 'panel panel-default');
    panelHead = document.createElement('div');
    panelHead.setAttribute('class', 'panel-heading');
    panelTitle = document.createElement('h4');
    panelTitle.setAttribute('class', 'panel-title');
    panelTitle.append(doctor.profile.last_name);
    panelHead.appendChild(panelTitle);
    panel.appendChild(panelHead);
    $('#doctors').append(panel);

    // panelTitleString += doctor.profile.last_name;
    // panelTitleString +=

    i++
    // $('#showDoctorsByConditionUl').append('<li class="list-group-item">' + doctor.profile.first_name + " " + doctor.profile.last_name + '</li>');
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
