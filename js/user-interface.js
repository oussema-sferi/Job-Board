function appendJobs(){
	$(".user-jobsarea").empty();
	var user =  JSON.parse(localStorage.getItem("ThisUser"))[0]
$.each(user.jobsPosted, function (index, value) {
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
		container.append(date);
		container.append(parg)
		container.append(workinghours)
		$(".user-jobsarea").append(container)
})
}

function appendInfo(){
	var user =  JSON.parse(localStorage.getItem("ThisUser"))[0]
	if(user.img === "" || user.companyName === "" || user.phoneNumber === "" || user.address === "" || user.companydescription === "")
		//call function of pop up window to add your information
	else{ 
		appendInformation();

	}

}

function appendInformation() {
	var user =  JSON.parse(localStorage.getItem("ThisUser"))[0]
	$(".user-information-area").empty();
	var logo = $("<img>")
	logo.attr("src", user.img)
	logo.attr("class", "user-logo")
	var company = $("<div></div>")
	company.attr("class","user-information");
	var name = $("<h2>" + user.companyName + "</h2>")
	name.attr("class", "user-title")
	var about = $("<p>" + user.companydescription + "</p>")
	about.attr("class", "user-about")
	var address = $("<p>" + user.address + "</p>");
	address.attr("class", "user-address")
	var phoneNumber = $("<p>" + user.phoneNumber + "</p>")
	phoneNumber.attr("class", "user-phoneNumber")
	company.append(logo)
	company.append(name)
	company.append(about)
	company.append(address)
	company.append(phoneNumber)
	$(".user-information-area").append(company)
}


