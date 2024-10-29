function sendMail(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value // Ensure this matches your form input
    };

    // Replace 'service_w6g44jg' with your actual service ID and 'template_3po6u28' with your actual template ID
    emailjs.send("service_w6g44jg", "template_3po6u28", params)
        .then(function(response) {
            alert("Email sent successfully!");
            console.log('Email sent successfully!', response.status, response.text);
        }, function(error) {
            alert("Failed to send email. Error: " + JSON.stringify(error));
            console.error('Failed to send email. Error: ', error);
        });
}
