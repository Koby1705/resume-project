function sendMail(contactForm) {
    emailjs.send("service_qek5eau","rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}