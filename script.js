const toggleBtn = document.querySelector(".toggle-nav");
const linksContainer = document.querySelector(".links");

const links = document.querySelectorAll(".link");
toggleBtn.addEventListener("click", () => {
  linksContainer.classList.toggle("visible");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    linksContainer.classList.remove("visible");
  });
});

// const customerImg = document.querySelector(".customer-img");
// const testimonialText = document.querySelector(".testimonial-text-box");
// const customerName = document.querySelector(".customer-name");

// let activeTestimonial = 0;

// const updateTestimonial = async function () {
//   const res = await fetch("testimonials.json");
//   const testimonials = await res.json();
//   const { name, profession, img, text } = testimonials[activeTestimonial];
//   testimonialText.innerText = text;
//   customerImg.src = img;
//   customerName.innerText = `${name}, ${profession}`;

//   activeTestimonial++;

//   if (activeTestimonial > testimonials.length - 1) {
//     activeTestimonial = 0;
//   }
// };
// setInterval(updateTestimonial, 5000);
