function getFormvalue() {
    //Write your code here
	const form = document.Forms["form1"];
	
	const firstname = form["fname"].value;
	const lastname = form["lname"].value;

	alert(`${firstName} ${lastName}`);
}
