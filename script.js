document.addEventListener('DOMContentLoaded', function() {
    var messages = [
        "Genio",
        "Capo",
        "Master",
        "Idolo"
    ];

    var randomIndex = Math.floor(Math.random() * messages.length);
    var birthdayMessage = messages[randomIndex];

    document.getElementById('birthdayMessage').innerHTML = "<p>" + birthdayMessage + "</p>";
});