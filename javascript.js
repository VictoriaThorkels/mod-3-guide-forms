//here I have a function for both "first name" and "last name"

function validateForm() {
    console.log(document.forms["myForm"]["fname"]) 
    let x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Please fill out First Name");
        return false;
    }
}

function validateForm() {
    console.log(document.forms["myForm"]["lname"]) 
    let x = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("Please fill out Last Name");
        return false;
    }
}
