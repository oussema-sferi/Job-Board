
$(function(){
	$(".login-form-container").dialog({
		autoOpen: false, modal : true, show: "blind", hide: "blind",
		open: function (e) {
			$(".signup-form").hide();
			$(".signin").css("background", "white")
			$(".signup").css("background", "lightgrey")

			$(".signin").click(function () {
			$(".signin-form").show();
			$(".signup-form").hide();
			$(".signin").css("background", "white")
			$(".signup").css("background", "lightgrey")
		})

			$(".signup").click(function () {
			$(".signin-form").hide();
			$(".signup-form").show();
			$(".signin").css("background", "lightgrey")
			$(".signup").css("background", "white")
})
		},
		width: 700
	})

	$(".login").click(function() {
		$(".login-form-container").dialog("open")
	})
		return false;
})
