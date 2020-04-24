var profile = JSON.parse(localStorage.getItem("profile"))
changedescriptiontext();
function nextimelogin(){
	if (profile === null)
		profile = [];

	else if(profile.length > 0) {      
	$("#img-upload").remove();
	$("#upload-word").remove();
	$(".logo-company").css("all", "unset")
	var picture = $("<img>")
	picture.attr("id", profile[0].cssid)
	picture.attr("src", profile[0].src)
	$("#left-profile").append(picture);
}
}

$("#img-upload").change(function() {
  	if(profile === null)
  		profile = [];
    if (this.files && this.files[0]) {
      var reader = new FileReader();  
      reader.readAsDataURL(this.files[0]);
      reader.onload = imageIsLoaded;
    }
  });
nextimelogin();
  function imageIsLoaded(e) {
    profile.push({
    	id: uuidv4(),
    	src: e.target.result,
    	cssid: "user-logo",
    	text : "Let people know you tell us more about your company"
    })
   localStorage.setItem("profile", JSON.stringify(profile))
   nextimelogin();
  }


$("#company-info-submit").click(function(){
	profile[0].text = $("#company-text").html()
	localStorage.setItem("profile", JSON.stringify(profile))
	changedescriptiontext();
})

function changedescriptiontext() {
	if(profile === null)
		profile = []
	else
	$("#company-text").text(profile[0].text);

}



function renderJobs(jobs, filter) {
	if(jobs === null)
		jobs = [];
	var filterJob = $.grep(jobs, function(obj){
		return obj.jobTitle.toLowerCase().includes(filter.searchText.toLowerCase())
	})
	$('#jobs').empty();
	$.each(filterJob, function(index, value) {
		var title = $("<p><B>" + value.jobTitle + "</B></p>")
		title.attr('class', 'job-titles')
		var parg = $("<p>" + value.jobDescrib + "</p>")
		parg.attr('class', 'job-descriptions')
		var container = $("<div></div>")
		container.attr("id", value.id)
		container.append(title)
		container.append(parg)
		$('#jobs').append(container)
	})
}

var jobs = JSON.parse(localStorage.getItem("jobs"));
var filter = {
	searchText: ""
}
renderJobs(jobs, filter)
$("#search-job").on('input', function(event){
	filter.searchText = $(this).val();
	renderJobs(jobs, filter)
})


$('#submit-job').on("click", function(){
	if(jobs === null)
		jobs = [];
	jobs.push({
		id: uuidv4(),
		jobTitle: $('#job-title').val(),
		jobDescrib: $('#job-describ').val()
	})
	localStorage.setItem("jobs", JSON.stringify(jobs))
})



