var users = JSON.parse(localStorage.getItem("users"))
$("#signin-btn").click(function() {
	if(users === null)
		return alert("Sign-UP First!");
	else $.each(users, function(index, value) {
		if(value.username === $("#user-name-signin").val() || value.email === $("#user-name-signin").val()){
			if(value.password === $("#password-signin").val()){
				localStorage.setItem("ThisUser", JSON.stringify([{id: value.id}]))
				window.location.href = "userinterface.html"
			}
		else return alert("Wrong Password")
		}
	else return alert("No such a user name, please check.")
	})
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
	else {	
	const user = {
					id: uuidv4(),
					username : $("#user-name-signup").val(),
					password: $("#password-signup").val(),
					email: $("#email-signup").val(),
					img: "",
					companydescription: "Let people know you tell us more about your company",
					jobsPosted:[]
				}
				users.push(user);
				localStorage.setItem("users", JSON.stringify(users));
				localStorage.setItem("ThisUser", JSON.stringify([{id: user.id}]));
				window.location.href = "userinterface.html";}
			}
})


