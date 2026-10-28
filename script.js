(() => {
  const config = window.PARTY_CONFIG || {};
  const byId = (id) => document.getElementById(id);
  const welcome = byId("welcome");
  const invitation = byId("invitation");
  const envelope = byId("openInvite");

  function openInvitation() {
    if (welcome.classList.contains("hidden")) return;
    envelope.classList.add("opening");
    window.setTimeout(() => {
      welcome.classList.add("hidden");
      invitation.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
      launchConfetti();
    }, 650);
  }
  envelope.addEventListener("click", openInvitation);
  byId("skipOpen").addEventListener("click", openInvitation);

  const childName = config.childName || "Dhishan";
  document.title = `${childName} Turns One!`;
  byId("mainTitle").innerHTML = `Our little boy<br><span>is turning ONE!</span>`;
  document.querySelector(".envelope-letter strong").textContent = childName;
  document.querySelector(".name-ribbon").textContent = childName.toUpperCase();
  document.querySelector('meta[name="description"]').content = `You're invited to celebrate ${childName}'s first birthday!`;
  document.querySelector("footer strong").textContent = `${childName} & family`;

  if (config.dateLabel) byId("partyDate").textContent = config.dateLabel;
  if (config.timeLabel) byId("partyTime").textContent = config.timeLabel;
  if (config.venueName) byId("partyVenue").textContent = config.venueName;
  if (config.venueAddress) byId("partyAddress").textContent = config.venueAddress;
  if (config.mapsUrl) {
    byId("mapsLink").href = config.mapsUrl;
    byId("mapsLink").classList.remove("hidden");
  }

  const rsvpButton = byId("rsvpButton");
  if (config.googleFormUrl && /^https:\/\/(docs\.google\.com\/forms\/|forms\.gle\/)/i.test(config.googleFormUrl)) {
    rsvpButton.href = config.googleFormUrl;
    byId("rsvpNote").textContent = "Please let us know if you can make it.";
  } else {
    rsvpButton.classList.add("disabled");
    rsvpButton.addEventListener("click", (event) => {
      event.preventDefault();
      alert("Add your Google Form responder link in config.js first.");
    });
  }

  const target = config.partyDate ? new Date(config.partyDate).getTime() : NaN;
  function updateCountdown() {
    const container = byId("countdown");
    if (!Number.isFinite(target)) return;
    const remaining = target - Date.now();
    if (remaining <= 0) {
      container.innerHTML = "<div class='countdown-finished'>It's party time! 🎉</div>";
      byId("countdownMessage").textContent = "Let's make some lovely memories.";
      return;
    }
    const units = [
      ["days", Math.floor(remaining / 86400000)],
      ["hours", Math.floor((remaining % 86400000) / 3600000)],
      ["mins", Math.floor((remaining % 3600000) / 60000)],
      ["secs", Math.floor((remaining % 60000) / 1000)]
    ];
    container.innerHTML = units.map(([label, value]) =>
      `<div><strong>${String(value).padStart(2, "0")}</strong><span>${label}</span></div>`
    ).join("");
    byId("countdownMessage").textContent = "Counting down to a very special day!";
  }
  if (Number.isFinite(target)) {
    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  }

  function launchConfetti() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const colors = ["#f29aba", "#ffad8e", "#ffd86f", "#a9dfb2", "#8fd7ec", "#b9a5f5", "#ff9fbd"];
    for (let i = 0; i < 34; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti-piece";
      piece.style.left = `${Math.random() * 100}%`;
      piece.style.background = colors[i % colors.length];
      piece.style.animationDelay = `${Math.random() * .65}s`;
      piece.style.transform = `rotate(${Math.random() * 360}deg)`;
      document.body.appendChild(piece);
      window.setTimeout(() => piece.remove(), 2600);
    }
  }
  const style = document.createElement("style");
  style.textContent = `.confetti-piece{position:fixed;top:-15px;width:8px;height:12px;z-index:20;pointer-events:none;animation:confetti-fall 2.4s ease-in forwards}@keyframes confetti-fall{to{translate:0 110vh;rotate:620deg;opacity:.2}}.countdown-finished{font-family:'Playfair Display',Georgia,serif;font-size:1.5rem;color:#7560a2;padding:8px}`;
  document.head.appendChild(style);
})();
