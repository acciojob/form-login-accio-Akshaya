function getFormvalue() {
	const form = document.getElementById("form1");

    // Retrieve the input values for 'fname' and 'lname'
    const firstName = form.elements["fname"].value;
    const lastName = form.elements["lname"].value;

    // Display an alert with the concatenated first and last names
    alert(`${firstName} ${lastName}`);
}