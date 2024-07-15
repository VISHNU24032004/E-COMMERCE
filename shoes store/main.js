// Add event listener to search button
document.querySelector('.nav-search-btn').addEventListener('click', () => {
    // Get search input value
    const searchInput = document.querySelector('.nav-search input[type="search"]');
    const searchValue = searchInput.value.trim();
  
    // Perform search action (e.g. redirect to search results page)
    console.log(`Searching for: ${searchValue}`);
  });
  // Add event listener to hero CTA button
document.querySelector('.hero-cta').addEventListener('click', () => {
    // Perform action when CTA button is clicked (e.g. redirect to shop page)
    console.log('Shop Now button clicked!');
  });
  // Add animation to features grid on scroll
const featuresGrid = document.querySelector('.features-grid');
const features = document.querySelectorAll('.feature');

featuresGrid.addEventListener('scroll', () => {
  features.forEach((feature) => {
    if (feature.offsetTop < featuresGrid.scrollTop + featuresGrid.offsetHeight) {
      feature.classList.add('animate');
    } else {
      feature.classList.remove('animate');
    }
  });
});
// Add event listener to product CTAs
const productCtas = document.querySelectorAll('.product-cta');

productCtas.forEach((productCta) => {
  productCta.addEventListener('click', () => {
    // Perform action when product CTA
    // Initialize testimonial slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialPrev = document.querySelector('.testimonial-prev');
const testimonialNext = document.querySelector('.testimonial-next');

let currentSlide = 0;

testimonialPrev.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = testimonialSlides.length - 1;
  }
  updateSlider();
});

testimonialNext.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= testimonialSlides.length) {
    currentSlide = 0;
  }
  updateSlider();
});

function update {};
// Add event listener to footer links
const footerLinks = document.querySelectorAll('.footer-links a');

footerLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    // Perform action when footer link is clicked
  });
});