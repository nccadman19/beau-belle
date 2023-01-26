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

var form = document.getElementById("contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    var message = document.createElement("div");
    message.innerHTML = "Your message has been successfully sent!";
    message.classList.add("success-message");
    form.appendChild(message);
    
    form.reset();
});