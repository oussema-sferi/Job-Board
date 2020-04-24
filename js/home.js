// the position of navbar will be fixed even after scrolling
window.onscroll = function() {navbarFix()};

var navbar = document.getElementsByClassName("navbar")[0];
var sticky = navbar.offsetTop;

function navbarFix() {
  if (window.pageYOffset >= sticky) {
    $(".navbar").addClass("sticky")
  } else {
    $(".navbar").removeClass("sticky");
  }
}
//////////////////////////Done//////////////////////////////////



/////////////////////////////Test append on jobsarea onclick start////////////////////

$(".register").click(function() {

	$(".jobsarea").append("<div>Job Title</div><p>Job description Job description Job description Job description</p>")

})

/////////////////////////////Test append on jobsarea onclick end////////////////////