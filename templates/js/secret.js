/* (c) 2017 Nils Reichert & Felix Pojtinger */

var nyan = "717968"; //nyan
var proximity = "808279887377738489"; //proximity
var js = "7483"; //javascript
var konami = "38384040373937396665"; //konami
var input = "";
var timer;
var mode = false;

document.getElementsByClassName('awesomeness')[0].style.display='none';
//document.getElementsByClassName('awesome-background')[0].style.display='none';

$(document).ready(function() {
  setInterval(function() { $('#info').html('Keystroke: ' + input); }, 300);
});


$(document).keyup(function(e) {
  //alert(e.which);
  input += e.which;    
  
  clearTimeout(timer);
  timer = setTimeout(function() { input = ""; }, 300);
  
  check_input();
});

$(document).ready(function () {
  $('#calendar').fullCalendar({
    googleCalendarApiKey: 'AIzaSyC-irjiVI2fqOhnBkWL7fs6OLX3xOcsWxs'
    , events: {
      googleCalendarId: '7rhmkub0g5gn0lhilbma8evqis@group.calendar.google.com'
    }
  });
});

function check_input() {
  if(input == nyan) {
    //the secret code
    window.open("http://nyan.cat"); // "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
    alert('GOD MODE');
  }
  if(input == proximity) {
    //the secret code
    window.open("https://www.youtube.com/watch?v=SMs0GnYze34&list=PL3osQJLUr9gLOmAkWMruU4jo_ddXZC0Ez"); // "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400"
    alert('PROXIMITY');
  }
  if(input == js) {
    //the secret code
    window.open("../../../fileadmin/assets/Custom/easteregg.html","_blank", "toolbar=no,scrollbars=no,resizable=no,width=500,height=400");
    document.getElementsByClassName('awesomeness')[0].style.display='block';
    //document.getElementsByClassName('awesome-background')[0].style.display='block';
    
    
  }
  if(input == konami) {
    //the secret code
    window.open("../../../fileadmin/assets/Custom/easteregg2.html","_blank", "toolbar=no,scrollbars=no,resizable=no,width=500,height=400");
  }
}