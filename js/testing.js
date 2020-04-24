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
	picture.attr("id", "user-logo")
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
	$('#jobsarea').empty();
	$.each(filterJob, function(index, value) {
		var title = $("<p><B>" + value.jobTitle + "</B></p>")
		title.attr('class', 'job-titles')
		var parg = $("<p>" + value.jobDescrib + "</p>")
		parg.attr('class', 'job-descriptions')
		var workinghours = $("<p>Working hours per week" + value.workinghours + "</p>");
		workinghours.attr("class", "work-hours");
		var date = $("<p>" + value.date + "</p>");
		date.attr("class", "date-posted");
		var container = $("<div></div>")
		container.attr("class, job-container")
		container.attr("id", value.id)
		container.append(title)
		container.append(parg)
		container.append(workinghours)
		container.append(date);
		$('#jobsarea').append(container)
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
	var date = new Date;
	jobs.push({
		id: uuidv4(),
		jobTitle: $('#job-title').val(),
		jobDescrib: $('#job-describ').val(),
		workinghours: $("#work-hour").val(),
		date: date.getDate() + " / " + (date.getMonth() + 1 )+ " / " +date.getFullYear()
	})
	localStorage.setItem("jobs", JSON.stringify(jobs))
})



