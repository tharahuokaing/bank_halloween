// =================================================================
// HALLOWEEN MATRIX CANVAS ANIMATION
// =================================================================
(function initHalloweenCanvas() {
  const canvas = document.getElementById('halloween-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const alphabet = "HALLOWEEN 50% OFF LEGEND CINEMA HUOKAING THARA BANK 31 OCTOBER ROYAL PALACE GHOST PARTY ";
  const fontSize = 15;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(3, 7, 18, 0.18)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#ff7300';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const char = alphabet[Math.floor(Math.random() * alphabet.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(draw, 40);
})();

// =================================================================
// AI VOICE PRESENTATION ENGINE (Khmer & English)
// =================================================================
const voiceScripts = [
  {
    langCode: 'km',
    langName: 'Khmer',
    locale: 'km-KH',
    lines: [
      "សេចក្តីប្រកាសពិសេស! ធនាគារ ហួកាំង ថារ៉ា សហការជាមួយ រោងភាពយន្ត Legend Cinema។",
      "នៅថ្ងៃទី ៣១ ខែតុលា ខាងមុខនេះ រាល់ការទិញសំបុត្រកុន នឹងទទួលបានការបញ្ចុះតម្លៃ ៥០%។",
      "សូមចូលរួមទាំងអស់គ្នា និងរៀបចំខ្លួនតែងមុខជារូបខ្មោច។",
      "យើងខ្ញុំមានទីតាំងប្រារព្ធពិធីនៅខាងមុខព្រះបរមរាជវាំង នៃព្រះរាជាណាចក្រកម្ពុជា។"
    ]
  },
  {
    langCode: 'en',
    langName: 'English',
    locale: 'en-US',
    lines: [
      "Special Announcement from Huokaing Thara Bank in cooperation with Legend Cinema.",
      "Enjoy 50% OFF on all movie tickets on October 31st for Halloween Day.",
      "Don't forget to join us and make up your face as a ghost.",
      "Our party location will be directly in front of the Royal Palace, Kingdom of Cambodia."
    ]
  }
];

let activeLangIdx = 0;
let activeLineIdx = 0;
let isVoiceSpeaking = false;

function processSpeechLine() {
  if (!isVoiceSpeaking || !('speechSynthesis' in window)) return;

  const currentLang = voiceScripts[activeLangIdx];

  if (activeLineIdx >= currentLang.lines.length) {
    activeLineIdx = 0;
    activeLangIdx = (activeLangIdx + 1) % voiceScripts.length;
    setTimeout(processSpeechLine, 1000);
    return;
  }

  const textToSpeak = currentLang.lines[activeLineIdx];
  const transcriptEl = document.getElementById('transcript-box');
  if (transcriptEl) {
    transcriptEl.textContent = `[${currentLang.langName.toUpperCase()}] ${textToSpeak}`;
  }

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = currentLang.locale;
  utterance.rate = 0.95;

  utterance.onend = function() {
    activeLineIdx++;
    if (isVoiceSpeaking) setTimeout(processSpeechLine, 400);
  };

  speechSynthesis.speak(utterance);
}

function playVoiceAnnouncement(langCode) {
  if (!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  isVoiceSpeaking = true;

  const foundIdx = voiceScripts.findIndex(s => s.langCode === langCode);
  activeLangIdx = foundIdx !== -1 ? foundIdx : 0;
  activeLineIdx = 0;

  processSpeechLine();
}

function stopVoiceReader() {
  isVoiceSpeaking = false;
  if ('speechSynthesis' in window) speechSynthesis.cancel();
}

// =================================================================
// COUNTDOWN TIMER TO OCTOBER 31ST
// =================================================================
function updateCountdownTimer() {
  const target = new Date("October 31, 2026 00:00:00").getTime();
  const now = new Date().getTime();
  const diff = target - now;

  const timerEl = document.getElementById('timer');
  if (!timerEl) return;

  if (diff <= 0) {
    timerEl.textContent = "HALLOWEEN EVENT IS LIVE!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timerEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
updateCountdownTimer();
setInterval(updateCountdownTimer, 1000);

// =================================================================
// LIVE TELEMETRY LOGS
// =================================================================
const telemetryFeed = document.getElementById("telemetry-feed");
if (telemetryFeed) {
  setInterval(() => {
    const logs = [
      "PROMOTION ACTIVE: 50% discount on Legend Cinema tickets initialized.",
      "VENUE CONFIRMED: Royal Palace waterfront event zone ready.",
      "SPECIAL EVENT: Ghost Makeup Contest registered.",
      "PARTNERSHIP VERIFIED: Huokaing Thara Bank & Legend Cinema Cooperation."
    ];
    const logItem = logs[Math.floor(Math.random() * logs.length)];
    const li = document.createElement("li");
    li.innerHTML = `<span style="color:var(--neon-orange)">[${new Date().toLocaleTimeString()}]</span> <strong>${logItem}</strong>`;
    telemetryFeed.insertBefore(li, telemetryFeed.firstChild);
    if (telemetryFeed.children.length > 4) telemetryFeed.removeChild(telemetryFeed.lastChild);
  }, 4000);
}
