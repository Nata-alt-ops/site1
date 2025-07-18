let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  // Скрываем все слайды
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    
    if (index >= currentIndex && index < currentIndex + 3) {
      slide.classList.add('active'); // Показываем только 3 слайда подряд
    }
  });
}

function changeSlide(direction) {
  currentIndex += direction;

  // Циклический сдвиг индекса
  if (currentIndex < 0) {
    currentIndex = slides.length - 3; // Переход к последним 3 слайдам
  } else if (currentIndex > slides.length - 3) {
    currentIndex = 0; // Переход к первым 3 слайдам
  }

  showSlides();
}

// Показать первые 3 слайда при загрузке
showSlides();
