// Credit (Details noted in README)
function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("emailaddress").value;
    var message = document.getElementById("message").value;
    
    if (!name || !email || !message) {
        alert("All fields are required.");
        return;
    }
    var params = {
        from_name : name,
        from_email : email,
        message: message
    };
    emailjs.send("service_af0lief", "template_52av2hc", params).then(function (res) {
        var message = document.createElement("div");
        var form = document.getElementById("contact-form");
        message.innerHTML = "Your message has been successfully sent!";
        message.classList.add("success-message");
        form.appendChild(message);
        document.getElementById("contact-form").reset();
    });
}