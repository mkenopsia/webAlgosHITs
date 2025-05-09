document.getElementById("send").addEventListener("click", function() {
    const emailSubject = document.getElementById("email-subject").value;
    const emailText = document.getElementById("email-text").value;

    const data = {
        subject: emailSubject,
        text: emailText
    };
    
    if(data.subject === '' || data.text === '') {
        showError("Пожалуйста, заполните все поля");
    }
    fetch("/contact/contact_us", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => showMessage(result, data))
    .catch(error => console.error('Error:', error));
});

let messageContainer = document.getElementById("message-container");
document.getElementById("ok").addEventListener("click", handleMessage);
let message = document.getElementById("message");

function showError(error) {
    messageContainer.style.display = 'flex';
    message.innerHTML = error;
}

function showMessage(result) {
    messageContainer.style.display = 'flex';
    let messageForDisplay = "";
    if(result.message === "success") {
        messageForDisplay = "Письмо отправлено";
    }
    else {
        messageForDisplay = result.error;
    }
    message.innerHTML = messageForDisplay;
}

function handleMessage() {
    messageContainer.style.display = 'none';
}
