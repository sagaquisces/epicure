var SearchDoctors = require('./../js/searchDoctors.js').searchDoctorsModule;

var displayDoctorsByCondition = function(medicalIssue, doctorData) {
  $('#showDoctorsByConditionHeader').empty();
  $('#doctors').empty();
  $('#doctorsAlert').empty();
  $('#doctorsAlert').removeClass();

  if(doctorData.length===0){
    $('#doctorsAlert').addClass("alert alert-info");
    $('#doctorsAlert').append('No doctors in this area to address your condition: ' + medicalIssue);
  } else {
    $('#showDoctorsByConditionHeader').append(medicalIssue);
    var media, mediaLeft, mediaImageSmall, mediaBody, mediaP;
    var panel, panelHead, panelTitle, panelA;
    var panelCollapse, panelBody;
    var i = 0;
    doctorData.forEach(function(doctor) {
      // first create Bootstrap media object

      media = document.createElement('div');
      media.setAttribute('class', 'media');
      mediaLeft = document.createElement('div');
      mediaLeft.setAttribute('class', 'media-left');
      mediaImageSmall = document.createElement('img');
      $(mediaImageSmall).attr({
        src: doctor.profile.image_url,
        title: "",
        alt: doctor.profile.last_name,
        height: "123px",
        class: "media-object"
      });
      mediaBody = document.createElement('div');
      mediaBody.setAttribute('class', 'media-body');
      mediaP = document.createElement('p');
      mediaP.append(doctor.profile.bio);
      mediaBody.appendChild(mediaP);
      mediaLeft.appendChild(mediaImageSmall);
      media.appendChild(mediaLeft);
      media.appendChild(mediaBody);

      //then the panel

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

      panelBody.append(media);
      panelCollapse.appendChild(panelBody);
      panel.appendChild(panelCollapse);

      $('#doctors').append(panel);

      i++;
    });

  }

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
