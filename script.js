
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

