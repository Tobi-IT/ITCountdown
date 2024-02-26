function updateCountdown() {
    const countDownDate = new Date("Feb 28, 2024 08:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Die IT Zwischenprüfung hat begonnen!";
    }
}

updateCountdown();
const x = setInterval(updateCountdown, 1000);




const quotes = [
    "Lernen ist wie Rudern gegen den Strom. Hört man damit auf, treibt man zurück.",
    "Der beste Code ist kein Code.",
    "Nicht für die Schule, sondern für das Leben lernen wir.",
    "IT: Wo man lernt, Kaffee zu lieben.",
    "Debugging ist wie ein Krimi lösen, bei dem du der Täter bist.",
    "In der IT lernt man nicht, man googelt, bis der Compiler nicht mehr meckert.",
    "Lernen für die IT-Zwischenprüfung? Ich dachte, das Update kommt automatisch.",
    "Warum Bücher wälzen, wenn Stack Overflow meine Fragen in Sekunden beantwortet?",
    "Die IT-Zwischenprüfung: Der Moment, in dem du feststellst, dass 'Neustart' keine akzeptierte Antwort ist.",
    "Ich habe für die IT-Zwischenprüfung gelernt. Zumindest ist das, was meine Browser-History behauptet.",
    "Lernen? Ich dachte, die IT besteht nur aus Copy-Paste.",
    "Programmieren ist wie Zaubertricks lernen. Für die Prüfung braucht man allerdings echte Magie.",
    "Die IT-Zwischenprüfung – der einzige Test, bei dem 'Es funktioniert nicht' eine durchaus übliche Diagnose ist.",
    "Beim Lernen für IT-Prüfungen geht es darum, herauszufinden, wie viele Kaffee zu viel Kaffee sind.",
    "Lernmaterial für die IT-Prüfung? Ich nenne es lieber 'Dekoration für meinen Schreibtisch'."
];

function createQuote() {
    const quoteText = quotes[Math.floor(Math.random() * quotes.length)];
    const quoteElement = document.createElement("div");
    const existingQuotes = document.querySelectorAll('.quote');

    // Begrenze die Anzahl der Sprüche, um Überfüllung zu vermeiden
    if (existingQuotes.length >= 5) { // Maximale Anzahl von Sprüchen, z.B. 5
        return; // Stoppe, wenn die maximale Anzahl erreicht ist
    }

    // Prüfe, ob der Spruch bereits angezeigt wird
    for (let i = 0; i < existingQuotes.length; i++) {
        if (existingQuotes[i].textContent === quoteText) {
            return; // Bricht die Funktion ab, wenn der Spruch bereits angezeigt wird
        }
    }

    quoteElement.classList.add("quote");
    quoteElement.textContent = quoteText;
    // Setze `top` basierend auf einem Pixelwert statt eines Prozentsatzes
    quoteElement.style.top = `${Math.random() * (window.innerHeight - 50)}px`; // 50px als ungefähre Höhe eines Spruches, um Überlappung am unteren Rand zu vermeiden
    quoteElement.style.fontSize = `${Math.random() * (24 - 14) + 14}px`;
    document.getElementById("quotes-container").appendChild(quoteElement);

    // Entferne das Zitat nach der Animation
    quoteElement.addEventListener('animationend', function() {
        quoteElement.parentNode.removeChild(quoteElement);
    });
}

setInterval(createQuote, 2000);

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    const muteButton = document.getElementById('mute-button');

    let isPlaying = false;

    muteButton.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            audio.currentTime = 0; // Optional: Setzt die Audio-Position zurück
            muteButton.textContent = '🔇'; // Durchgestrichenes Symbol
            isPlaying = false;
        } else {
            audio.play();
            muteButton.textContent = '🔊'; // Nicht durchgestrichenes Symbol
            isPlaying = true;
        }
    });
});
