
 
  document.addEventListener('DOMContentLoaded', function () {
    const myCarousel = new bootstrap.Carousel('#myCarousel', {
      interval: 3000, 
      wrap: true,     
      pause: 'hover'  
    });
  });

  const prevButton = document.querySelector('.carousel-control-prev');
  const nextButton = document.querySelector('.carousel-control-next');

  prevButton.addEventListener('click', () => {
    const carouselInstance = bootstrap.Carousel.getInstance(document.querySelector('#myCarousel'));
    carouselInstance.prev();
  });

  nextButton.addEventListener('click', () => {
    const carouselInstance = bootstrap.Carousel.getInstance(document.querySelector('#myCarousel'));
    carouselInstance.next();
  });



  const toggleLink = document.getElementById('toggleLink');
        const Front = document.getElementById('Front');
        const Home = document.getElementById('Home');

        toggleLink.addEventListener('click', () => {
            Home.style.display = 'none';
            Front.style.display = 'block'; 
        });

  const homePage = document.getElementById('Home');
  const frontPage = document.getElementById('Front');

//btn

const body = document.body;
const btn = document.querySelectorAll('.button')[0];

btn.addEventListener('mouseenter', () => {
	body.classList.add('hover');
});

btn.addEventListener('mouseleave', () => {
	body.classList.remove('hover');
});


// trending - courses
$(document).ready(function(){
  $('.customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});