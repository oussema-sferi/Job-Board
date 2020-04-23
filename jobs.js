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
