document.addEventListener("DOMContentLoaded", function () {
    console.log("Halloween Announcement Page Loaded Successfully.");

    // Dynamic Countdown to October 31st
    const eventDate = new Date("October 31, 2026 00:00:00").getTime();

    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const distance = eventDate - now;

        if (distance < 0) {
            clearInterval(countdownInterval);
            console.log("Halloween Event Day is Here!");
        }
    }, 1000);
});

// Interactive Button Action
function handleJoin() {
    alert(
        "🎃 Get Ready for Halloween! 🎃\n\n" +
        "1. Visit Legend Cinema on 31 October for 50% OFF tickets.\n" +
        "2. Put on your ghost makeup/costume.\n" +
        "3. Meet us in front of the Royal Palace for the Halloween event!\n\n" +
        "ជួបគ្នានៅថ្ងៃទី ៣១ តុលា ខាងមុខនេះ!"
    );
}
