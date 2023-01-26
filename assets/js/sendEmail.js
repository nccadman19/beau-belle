function SendMail() {
    var params = {
        from_name : document.getElementById("name").value,
        from_email : document.getElementById("emailaddress").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_af0lief", "template_52av2hc", params).then(function (res) {
        document.getElementById("contact-form").reset();
    })
}

// Get the submit button
var submitButton = document.getElementById("submit-button");
// Get the form element
var form = document.getElementById("contact-form");

// Add a click event listener to the button
submitButton.addEventListener("click", function() {
    // Add the success message
    var message = document.createElement("div");
    message.innerHTML = "Your message has been successfully sent!";
    message.classList.add("success-message");
    form.appendChild(message);

    // Clear the form fields
    form.reset();
});
