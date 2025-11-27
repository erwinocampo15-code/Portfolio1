document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('myButton');

  button.addEventListener('click', () => {
    alert('Button was clicked!');
  });
});

 function toggleInfo(button) {
    const extra = button.previousElementSibling;
    const isVisible = extra.style.display === "block";

    extra.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? "Show More" : "Show Less";
  }




  const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.opacity = "1";
    backToTop.style.visibility = "visible";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.visibility = "hidden";
  }
});


  function toggleForm() {
    const form = document.getElementById("contact-form");
    form.classList.toggle("hidden");
  }



 
 

 






