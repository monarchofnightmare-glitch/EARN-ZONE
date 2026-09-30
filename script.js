document.addEventListener("DOMContentLoaded", function () {
    const balanceElement = document.getElementById("balance");
    const adsElement = document.getElementById("adsWatched");
    const watchButton = document.getElementById("watchAdBtn");

    let balance = Number(localStorage.getItem("earnzone_balance")) || 0;
    let adsWatched = Number(localStorage.getItem("earnzone_ads")) || 0;

    function updateDisplay() {
        if (balanceElement) {
            balanceElement.textContent = balance + " EZ";
        }

        if (adsElement) {
            adsElement.textContent = adsWatched;
        }
    }

    if (watchButton) {
        watchButton.addEventListener("click", function () {
            watchButton.disabled = true;
            watchButton.textContent = "Watching...";

            setTimeout(function () {
                balance += 10;
                adsWatched += 1;

                localStorage.setItem("earnzone_balance", balance);
                localStorage.setItem("earnzone_ads
