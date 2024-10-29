(function() {
    emailjs.init("FPtps7xmlFCvMJJeZ"); // Replace with your actual EmailJS User ID
  })();
  
  function sendMail(event) {
      event.preventDefault(); 

      let params = {
          name: document.getElementById("name").value,
          email: document.getElementById("email").value,
          subject: document.getElementById("subject").value,
          message: document.getElementById("message").value 
      };

      emailjs.send("service_w6g44jg", "template_3po6u28", params)
          .then(function(response) {
              alert("Email sent successfully!");
              console.log('Email sent successfully!', response.status, response.text);
          }, function(error) {
              alert("Failed to send email. Error: " + JSON.stringify(error));
              console.error('Failed to send email. Error: ', error);
          });
  }