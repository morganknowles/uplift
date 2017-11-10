$(document).ready(function(){

	function displayReport(form){
		var report= $(form).serializeArray();
		var json = {};

		$.each(form, function(){
			json[this.name] = this.value || '';
		});
		
		return json;
	}
fasdfsadfas
	$('intakeForm').click(function() {
		displayReport();
	}

	console.log(displayReport());
});