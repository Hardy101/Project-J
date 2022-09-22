const drop_btn = document.querySelector(".about_btn");

const my__dropdown = document.querySelector(".drop_content");
const show = () => {
  my__dropdown.classList.toggle("opacity");
};
const dontShow = () => {
  my__dropdown.classList.remove("opacity");
};

drop_btn.addEventListener("click", show);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 2 seconds
}
