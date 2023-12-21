function revealGift() {
    // Hardcoded Instagram account link for testing, replace it with user input
    var accountLink = "https://www.instagram.com/timeless_twosome?igsh=aHNyb2Y2NGpxY2Z5";

    // Check if the link is not empty
    if (accountLink.trim() !== "") {
        // Open the provided link in a new tab/window
        window.open(accountLink, "_blank");

        // You can add additional actions here, like a personalized alert message.
        alert("Surprise! 🎁 Check your Instagram account for the special birthday gift!");
    } else {
        alert("Please enter the Instagram account link before opening the gift.");
    }
}
