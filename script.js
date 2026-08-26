// ================================
// DI AUTOMOBILES - JAVASCRIPT
// ================================

// Enter Showroom
function enterShowroom() {

    const welcomeScreen = document.getElementById("welcome");
    const mainWebsite = document.getElementById("mainWebsite");

    welcomeScreen.style.display = "none";
    mainWebsite.style.display = "block";

    window.scrollTo(0, 0);
}


// Consultation Form
const consultationForm =
    document.getElementById("consultationForm");

if (consultationForm) {

    consultationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for choosing DI Automobiles! 🚗\n\n" +
            "Your consultation request has been received."
        );

        consultationForm.reset();
    });
}
// ================================
// LOGIN BUTTON
// ================================

const loginButton = document.querySelector(".login-btn");

if (loginButton) {
    loginButton.addEventListener("click", function () {

        alert(
            "DI Automobiles Login\n\n" +
            "Customer Login feature is coming soon!"
        );

    });
}