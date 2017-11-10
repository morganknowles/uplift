$(document).ready(function(){
	/*
	validateEmail 
		returns true if the email address ends with @uplift.com
		returns false if the email address does not end with @uplift.com
		gives email error class if false
	*/
	console.log("test");
	function validateEmail(email){
  		if ($(email).val().endsWith('@uplift.com'))
  			return true;
  		else
  			$(email).addClass("error");
  			return false;
	};
	function validateForm(f){
		
	};
	/*
	generateReport 
		fills a json object with data from the form
	*/
	function generateReport(form){
		var report = $(form).serializeArray();
		var json = {};
		$.each(report, function(){
			json[this.name] = this.value || '';	
		});
		return json;
	}	
	//listen for submit click then log acceptable json object to console
	$('#form').submit(function(e) {
		if(validateEmail('#emailAddress')){
			console.log(generateReport('#form'));
		}else{
			e.preventDefault();
		}
	});
});