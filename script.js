const bulb = document.getElementById('bulb');
const toggleButton = document.getElementById('toggleButton');
let isOn = false;

toggleButton.addEventListener('click', function() {
    if (isOn) {
        bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        toggleButton.textContent = "Turn ON";
    } else {
        bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        toggleButton.textContent = "Turn OFF";
    }
    isOn = !isOn;
});
