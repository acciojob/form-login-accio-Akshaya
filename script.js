function getFormvalue() {
    //Write your code here
	const form = document.getElementById("form1");
	if(form){
		const firstName = form.querySelector('input[name="fname"]').value;
		const lastName = form.querySelector('input[name="lname"]').value;

		alert(`${firstName}${lastName}`);
	}
	else{
		console.error("Form Not Found")
	}
}
