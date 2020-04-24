$(function(){
	$(".info-form-container").dialog({
		autoOpen: false, modal : true, show: "blind", hide: "blind", width: 700
	})

	$("#info-update-btn").click(function() {
		$(".info-form-container").dialog("open")
	})
		return false;
})
var user =  JSON.parse(localStorage.getItem("ThisUser"))[0]
var users = JSON.parse(localStorage.getItem("users"))

$("#user-logo-input").change(function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();  
      reader.readAsDataURL(this.files[0]);
      reader.onload = imageIsLoaded;
    }
  });

function imageIsLoaded(e) {
	user.img = e.target.result
}


$("#info-btn").click(function() {
	var compname = $("#user-name-input").val()
	var about = $("#user-about-input").val()
	var address = $("#user-address-input").val()
	var phone = $("#user-phone-input").val()
	if(compname === "" || about === "" || address === "" || phone === "")
		return alert("Please fill all of your information")
	else {
		user.companyName = compname;
		user.about = about;
		user.address = address;
		user.phoneNumber = phone;
		updateUser(user)
		$(".info-form-container").dialog("close")
		
	}

})

function updateUser(user){
	for(var i = 0; i < users.length; i++){
		if(users[i].id === user.id)
			users[i] = user;
	}
localStorage.setItem("users", JSON.stringify(users))	
}

