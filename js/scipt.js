document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Contact form
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for contacting Comprehensive Academy!");
    form.reset();
  });
});

let currentIndex = 0;
const events = document.querySelectorAll(".event");
const totalEvents = events.length;

function showEvents() {
  events.forEach((event, index) => {
    event.style.display = (index >= currentIndex && index < currentIndex + 4) ? "block" : "none";
  });
}

function nextEvent() {
  if (currentIndex < totalEvents - 4) {
    currentIndex++;
    showEvents();
  }
}

function prevEvent() {
  if (currentIndex > 0) {
    currentIndex--;
    showEvents();
  }
}

showEvents();

// Sidebar active state toggle
const sidebarItems = document.querySelectorAll('.sidebar li');

sidebarItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebarItems.forEach(li => li.classList.remove('active'));
    item.classList.add('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  // Move hero text upwards
  const heroText = document.querySelector(".hero-text");
  heroText.style.transform = `translateY(${-scrollY * 0.3}px)`; // adjust speed

  // Shake background on scroll
  const heroBg = document.querySelector(".hero::before"); 
  document.querySelector(".hero").style.setProperty(
    "--shake",
    `${Math.sin(scrollY * 0.05) * 5}px`
  );
});



