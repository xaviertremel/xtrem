var works = [ 
{
	title: "mountain1",
	pic: "img/IMG_1.jpg",
	link: "#"
}, 
{
	title: "mountain2",
	pic: "img/IMG_2.jpg",
	link: "#"
}, 
{
	title: "mountain3",
	pic: "img/IMG_3.jpg",
	link: "#"
},
{
	title: "mountain4",
	pic: "img/IMG_4.jpg",
	link: "#"
}
	];

// work section


for( var i=0; i<works.length ; ++i) {

	console.log(works[i].pic);

	$("#work").append("\
	  <div class='col-sm-3 col-md-3'>\
	    <a href='"+ works[i].link + "' class='work-img'>\
	      <img class='img-responsive' src='" + works[i].pic + "'>\
	      <span class='info'><p class='proj-title'>Title:</p>"+ works[i].title +"</span>\
	    </a>\
	  </div>\
	");

	$(".work-img").mouseenter( function() {
		console.log($(".info", this).css("display" , "block"));
	}).mouseleave( function() {
		console.log($(".info", this).css("display" , "none"));
	});


	var images = $("#work img");
	console.log(images[i]);
	if (i%2 == 0) {
		$(images[i]).css("border", "2px solid DodgerBlue");
	}
	else {
		$(images[i]).css("border", "2px solid salmon");
	};
};


