function getFormvalue(event) {
    event.preventDefault(); 

    var firstName = document.querySelector('input[name="fname"]').value; 
    var lastName = document.querySelector('input[name="lname"]').value; 

    var fullName = firstName + ' ' + lastName; 

    alert(fullName); 
}


document.querySelector('form').addEventListener('submit', getFormvalue);
