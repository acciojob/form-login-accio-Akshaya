function getFormvalue(event) {
    event.preventDefault(); 

    const firstName = document.querySelector('input[name="fname"]').value; 
    const lastName = document.querySelector('input[name="lname"]').value; 

    const fullName = firstName + ' ' + lastName; 

    alert(fullName); 
}


document.querySelector('form').addEventListener('submit', getFormvalue);
