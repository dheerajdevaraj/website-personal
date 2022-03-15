var i = 0;
var txt = 'Hi there! Iam Dheeraj!'; /* The text */
var speed = 110; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
$(document).ready(function () {

  $('#submit-form').validate({ // initialize the plugin
      rules: {
          name: {
              required: true,
              minlength: 4
          },
          email: {
            required: true,
            email: true
          },
          subject: {
            required: true,
          },
          phone: {
            required: true,
            maxlength: 10
          },
          message: {
            required: true,
          }

      }
  });
  $("#contact-me").click(function(){
    // any value you need
    $(document).scrollTop(2200) 
    });

});