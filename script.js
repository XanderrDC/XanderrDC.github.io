const modal = document.getElementById("contactModal");
const btn = document.getElementById("contactBtn");
const span = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const status = document.getElementById("formStatus");

    if (!name.value || !email.value || !message.value) {
        status.textContent = "Please fill out all fields.";
        status.style.color = "red";
    } else {
        fetch("https://script.google.com/macros/s/AKfycbw1ZGjxXthTH2FWoijtJecahOV1n0yzDFeOsRhEFoSmeVO-N4F5tVJpLJkf3Y_oew15/exec", {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                message: message.value
            })
        });

        status.textContent = "Thank you for your message!";
        status.style.color = "green";

        name.value = "";
        email.value = "";
        message.value = "";
    }
});

const modal2 = document.getElementById("CVModal");
const btn2 = document.getElementById("CVBtn");
const span2 = document.querySelector(".close2");

btn2.onclick = () => modal2.style.display = "block";
span2.onclick = () => modal2.style.display = "none";
window.onclick = (e) => {
    if (e.target === modal2) modal2.style.display = "none";
};

window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    loader.classList.add("hidden");
  }, 500);
});

