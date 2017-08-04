var SearchDoctors = require('./../js/searchDoctors.js').searchDoctorsModule;

var displayDoctorsByCondition = function(medicalIssue, doctorData) {
  $('#showDoctorsByConditionHeader').empty();
  $('#showDoctorsByConditionUl').empty();
  $('#showDoctorsByConditionHeader').append(medicalIssue);
  var panel, panelHead, panelTitle, panelA;
  var i = 0;
  doctorData.forEach(function(doctor) {
    panel = document.createElement('div');
    panel.setAttribute('class', 'panel panel-default');

    panelHead = document.createElement('div');
    panelHead.setAttribute('class', 'panel-heading');
    panelTitle = document.createElement('h4');
    panelTitle.setAttribute('class', 'panel-title');
    panelA = document.createElement('a');
    panelA.setAttribute('data-toggle', 'collapse');
    panelA.setAttribute('href', '#collapse'+i);
    panelA.append(doctor.profile.last_name);
    panelTitle.appendChild(panelA);
    panelHead.appendChild(panelTitle);
    panel.appendChild(panelHead);

    panelCollapse = document.createElement('div');
    panelCollapse.setAttribute('id', 'collapse'+i);
    panelCollapse.setAttribute('class', 'panel-collapse collapse');
    panelBody = document.createElement('div');
    panelBody.setAttribute('class', 'panel-body');
    panelBody.append(doctor.profile.bio);
    panelCollapse.appendChild(panelBody);
    panel.appendChild(panelCollapse);

    $('#doctors').append(panel);

    i++
  });

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
