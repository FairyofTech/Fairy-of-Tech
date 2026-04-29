// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// Cursor sparkle
let last = 0;
document.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - last < 80) return;
  last = now;

  const spark = document.createElement("div");
  spark.className = "sparkle-trail";

  spark.style.left = e.clientX + "px";
  spark.style.top = e.clientY + "px";

  document.body.appendChild(spark);

  setTimeout(() => spark.remove(), 600);
});