
 
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

