
const menuToggle = document.getElementById("menuToggle");
const navlinks = document.getElementById("navlinks");

menuToggle.addEventListener("click", () => {
  navlinks.classList.toggle("active");
});


// Countdown Timer
const targetDate = new Date("December 25, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();



  const galleryImages = document.querySelectorAll(".gallery-img");
  const modalImage = document.getElementById("modalImage");

  galleryImages.forEach(img => {
    img.addEventListener("click", function () {
      modalImage.src = this.src; // modal me image set
      const modal = new bootstrap.Modal(document.getElementById("imgModal"));
      modal.show();
    });
  });

  // time schedule
  /* Fade-Zoom Animation on Scroll */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("in-view");
  });
});
document.querySelectorAll(".fade-zoom").forEach(el => observer.observe(el));

/* Countdown Timer */
function updateCountdown() {
  document.querySelectorAll(".schedule-item").forEach(item => {
    const target = new Date(item.dataset.time);
    const now = new Date();
    let diff = target - now;

    if (diff < 0) diff = 0;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    item.querySelector(".days").innerText = String(days).padStart(2, "0");
    item.querySelector(".hours").innerText = String(hours).padStart(2, "0");
  });
}

setInterval(updateCountdown, 1000);
updateCountdown();

