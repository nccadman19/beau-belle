function sendMail() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("emailaddress").value;
    var message = document.getElementById("message").value;
    
    if (!name || !email || !message) {
        var modal = document.createElement("div");
        modal.className = "modal";
        var modalContent = document.createElement("div");
        modalContent.className = "modal-content";
        var modalText = document.createTextNode("All fields are required.");
        modalContent.appendChild(modalText);
        var modalButton = document.createElement("button");
        modalButton.className = "modal-button";
        modalButton.innerHTML = "OK";
        modalButton.addEventListener("click", function() {
          document.body.removeChild(modal);
        });
        modalContent.appendChild(modalButton);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
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