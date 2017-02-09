// Twitter script
!function(d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
	if(!d.getElementById(id)) {
		js=d.createElement(s);
		js.id=id;
		js.src=p+'://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js,fjs);
		}
	}
	(document, 'script', 'twitter-wjs');

// Facebook script
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); 
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'facebook-jssdk'));

//Google Map
var map;
function initMap() {

  var styledMapType = new google.maps.StyledMapType([
    {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#f5f1e6'}]
    },
    {
      featureType: 'transit.line',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'geometry',
      stylers: [{color: '#dfd2ae'}]
    }],
    {name: 'Styled Map'});

  var uluru = {lat: 52.5085849, lng: 13.420753};

  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru,
    mapTypeControlOptions: {
      mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain','styled_map']
      }
    });

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
    marker.setMap(map);
};

$(document).ready(function(){
  // Navbar collapsing
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
    });

  // Projects Carousel
  $('.carousel').carousel({
    interval: 10000
  });

  //Textillate
  $('.hello').text('&#60;greetings&#47;&#62;').textillate({
    initialDelay: 800,
    in: {
      delay: 100
    }
  });


  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a, .btn').click(function() {
      var href = $.attr(this, 'href');
      $root.animate({
          scrollTop: $(href).offset().top
      }, 500, function () {
          window.location.hash = href;
      });
      return false;
  });

  // Stellar
  $.stellar();


  // Tooltips
  $( function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //FormSpree
  $("#message-form").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/xavier@adkicker.io", 
      method: "POST",
      data: {
        name: $("#username").val(),
        email: $("#email").val(),
        message: $("#messagebox").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#message-form").fadeOut();
        $("#sender").html("Thank you "+$("#username").val()+"!"); 
      },
      error: function() {
        $("#submit-errors").fadeIn();
        $("#sender").html("Thank you "+$("#username").val()+"!");      
      }
    });
    }
  });





/*  //textarea background
  $('#message-submit').on('click', function() {
    var MessageBox = $('#messagebox').val();
    if (MessageBox === "") {
      $('#messagebox').css("border-color", "red");
    }
    else {
      $('#visible-comment').html("<br>Thank you "+name+"!<br><br> Your message has been sent and I will get back to you.");
      $('#message-form').hide();
    };
    console.log(MessageBox);
    //return false;
    // no code here!
  });*/

  $("#messagebox").on("keyup", function() {
    console.log("keyup happened"); //here we make sure we're catching the keyup
    var charCount = $("#messagebox").val().length;
    $('#messagebox').css("border-color", "");
    $('#char-count').html(charCount);
    if (charCount>50) {
      $('#char-count').css("color", "red");
    }
    else {
      $('#char-count').css("color", "white");
    };
    console.log(charCount);     
  });

});



