function getFormvalue() {
    //Write your code here
	const form = document.getElementById('form1');
	
	const firstname = form.elements('fname').value;
	const lastname = form.elements('lname').value;

	alert(`${firstName} ${lastName}`);
}
