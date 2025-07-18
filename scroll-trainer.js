document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.trainers-track');
            const nextBtn = document.querySelector('.next-btn');
            const prevBtn = document.querySelector('.prev-btn');
            const cards = document.querySelectorAll('.trainer-card');
            const cardCount = cards.length;
            
            // Ширина одной карточки (включая margin)
            const cardStyle = window.getComputedStyle(cards[0]);
            const cardWidth = cards[0].offsetWidth + 
                             parseInt(cardStyle.marginLeft) + 
                             parseInt(cardStyle.marginRight);
            
            // Позиция по умолчанию (показываем первые 3 карточки)
            let currentPosition = 0;
            const visibleCards = 3;
            
            // Функция для обновления позиции карусели
            function updateCarousel() {
                track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
            }
            
            // Кнопка "вперед"
            nextBtn.addEventListener('click', function() {
                currentPosition = (currentPosition + 1) % cardCount;
                updateCarousel();
                
                // Если дошли до конца, плавно переходим к началу
                if (currentPosition > cardCount - visibleCards) {
                    setTimeout(() => {
                        track.style.transition = 'none';
                        currentPosition = 0;
                        updateCarousel();
                        setTimeout(() => {
                            track.style.transition = 'transform 0.5s ease';
                        }, 50);
                    }, 500);
                }
            });
            
            // Кнопка "назад"
            prevBtn.addEventListener('click', function() {
                if (currentPosition === 0) {
                    // Плавный переход к концу
                    track.style.transition = 'none';
                    currentPosition = cardCount - visibleCards;
                    updateCarousel();
                    setTimeout(() => {
                        track.style.transition = 'transform 0.5s ease';
                        currentPosition = cardCount - visibleCards - 1;
                        updateCarousel();
                    }, 50);
                } else {
                    currentPosition = (currentPosition - 1 + cardCount) % cardCount;
                    updateCarousel();
                }
            });
            
            // Адаптация под размер окна
            window.addEventListener('resize', function() {
                const newCardWidth = cards[0].offsetWidth + 
                                   parseInt(cardStyle.marginLeft) + 
                                   parseInt(cardStyle.marginRight);
                if (Math.abs(newCardWidth - cardWidth) > 5) {
                    location.reload(); // Перезагрузка для корректного пересчета размеров
                }
            });
        });