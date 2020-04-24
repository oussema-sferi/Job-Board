var users = JSON.parse(localStorage.getItem("users"))
$("#signin-btn").click(function() {
	var check = false;
	if(users === null)
		return alert("Sign-UP First!");
	else if($("#user-name-signin").val() === "" || $("#password-signin").val() === "")
		return alert("Plese Enter your information.")
	else {
		for(var i = 0; i < users.length; i++) {
			if(users[i].username === $("#user-name-signin").val() || users[i].email === $("#user-name-signin").val()){
				if(users[i].password === $("#password-signin").val()){
					localStorage.setItem("ThisUser", JSON.stringify([users[i]]))
					check = true;
				}
			}
		}
	}
	if(!check)
		return alert("wrong user name or password")
	
	else 
	window.location.href = "userinterface.html"	

})

$("#signup-btn").click(function() {
	var check = true;
	if(users === null)
		users = [];
	else {$.each(users, function(index, value) {
		if(value.username === $("#user-name-signup").val()){
			check = false
		}
	})

	if(!check)
		return alert("This user name is already taken, please choose another.")
	else if($("#user-name-signup").val() === "" || $("#email-signup").val() === "" || $("#password-signup").val() === "")
		return alert("Plese Enter your information.")
	else {	
	const user = {
					id: uuidv4(),
					username : $("#user-name-signup").val(),
					password: $("#password-signup").val(),
					email: $("#email-signup").val(),
					img: "",
					companyName : "",
					companydescription: "",
					jobsPosted:[],
					phoneNumber: "",
					address: ""
				}
				users.push(user);
				localStorage.setItem("users", JSON.stringify(users));
				localStorage.setItem("ThisUser", JSON.stringify([user]));
				window.location.href = "userinterface.html";}
			}
})


