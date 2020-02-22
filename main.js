
"use strict";

function clearForm() {
    /*
     * this function replaces the text in text boxes with empty strings
     * and replaces the message area with an html <br>
     */
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    /* NOTE: This next line violates the division of concerns rule,
     but it's okay for this assigment. We will fix this later.
     */
    document.getElementById("msg").innerHTML = "<br>";
}

function validate() {
    var errorMessage = "";

    //get all the elements into the function
    var fNameInput = document.getElementById("first-name");
    var lNameInput = document.getElementById("last-name");

    //get all the strings in the elements and trim them
    var fname = fNameInput.value.trim();
    var lname = lNameInput.value.trim();

    //put the trimmed versions back into the form for proper UX
    fNameInput.value = fname;
    lNameInput.value = lname;

    //test the strings from the form and store errors
    if (fname === "") {
        errorMessage += "First name cannot be empty.<br>";
    }

    if (lname === "") {
        errorMessage += "Last name cannot be empty.<br>";
    }

    //send the errors back or send an empty string if there is no error
    return errorMessage;

}

//get the button into a JS object
var sendBtn = document.getElementById("names-send");
//create an event listener and handler for the send button
sendBtn.onclick = function () {
    //bring the message area in in-case we need it to report errors
    var msgArea = document.getElementById("msg");
    //get the validation of the form
    var msg = validate();
    //report errors or submit the form
    if (msg === "") {
        document.forms["names-form"].submit();
    } else {
        msgArea.innerHTML = msg;
    }
};

//get the button into a JS object
var clearBtn = document.getElementById("names-clear");
//create an event listener and handler for the clear button
clearBtn.onclick = function () {
    //call clear if the button is pressed
    clearForm();
};
