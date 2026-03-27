function submitMessage() {
    let message = document.getElementById("userMessage").value;
    let response = document.getElementById("response");

    if (message.trim() === "") {
        response.style.color = "red";
        response.innerText = "Please write something before submitting.";
    } else {
        response.style.color = "green";
        response.innerText = "Thanks for your message!";
        document.getElementById("userMessage").value = "";
    }
}