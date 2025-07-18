
document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.trainers-track');
  const nextBtn = document.querySelector('.next-btn');
  const prevBtn = document.querySelector('.prev-btn');
  const cards = document.querySelectorAll('.trainer-card');
  const cardWidth = cards[0].offsetWidth + 30; // Ширина карточки + gap
  
  let position = 0;
  const maxPosition = (cards.length - 3) * cardWidth; // Для 3 видимых карточек
  
  nextBtn.addEventListener('click', function() {
    position += cardWidth;
    if (position > maxPosition) {
      position = 0;
    }
    track.style.transform = `translateX(-${position}px)`;
  });
  
  prevBtn.addEventListener('click', function() {
    position -= cardWidth;
    if (position < 0) {
      position = maxPosition;
    }
    track.style.transform = `translateX(-${position}px)`;
  });
});
