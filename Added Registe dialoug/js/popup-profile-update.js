$(function(){
	$(".info-form-container").dialog({
		autoOpen: false, modal : true, show: "blind", hide: "blind", width: 700
	})

	$("#info-update-btn").click(function() {
		$(".info-form-container").dialog("open")
	})
		return false;
})


$()