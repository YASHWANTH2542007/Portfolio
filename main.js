// Smooth Scroll
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", function(e) {
    if(this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Form
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message Sent!");
});