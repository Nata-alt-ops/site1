document.addEventListener('DOMContentLoaded', function() {
    // Карусель тренеров
    const track = document.querySelector('.trainers-track');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const cards = document.querySelectorAll('.trainer-card');
    const cardCount = cards.length;
    const progressBar = document.querySelector('.progress-line');
    
    // Ширина одной карточки (включая margin)
    const cardStyle = window.getComputedStyle(cards[0]);
    const cardWidth = cards[0].offsetWidth + 
                     parseInt(cardStyle.marginLeft) + 
                     parseInt(cardStyle.marginRight);
    
    // Позиция по умолчанию (показываем первые 3 карточки)
    let currentPosition = 0;
    const visibleCards = 3;
    
    // Создаем клоны карточек для бесшовного перехода
    const firstCard = cards[0].cloneNode(true);
    const secondCard = cards[1].cloneNode(true);
    const lastCard = cards[cardCount - 1].cloneNode(true);
    const preLastCard = cards[cardCount - 2].cloneNode(true);
    
    track.appendChild(firstCard);
    track.appendChild(secondCard);
    track.insertBefore(lastCard, cards[0]);
    track.insertBefore(preLastCard, cards[0]);
    
    // Обновляем количество карточек после клонирования
    const allCards = document.querySelectorAll('.trainer-card');
    const totalCards = allCards.length;
    
    // Устанавливаем начальную позицию (учитывая добавленные клоны)
    currentPosition = 2;
    track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
    
    // Функция для обновления позиции карусели
    function updateCarousel() {
        track.style.transition = 'transform 0.5s ease';
        track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
        updateProgress();
    }
    
    // Функция для обновления индикатора прогресса
    function updateProgress() {
        const activeIndex = (currentPosition - 2) % cardCount;
        const itemWidth = 100 / cardCount;
        const newPosition = itemWidth * activeIndex;
        
        progressBar.style.width = itemWidth + '%';
        progressBar.style.left = newPosition + '%';
    }
    
    // Кнопка "вперед"
    nextBtn.addEventListener('click', function() {
        currentPosition++;
        updateCarousel();
        
        // Если дошли до конца, плавно переходим к началу
        if (currentPosition > totalCards - visibleCards) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentPosition = 2;
                track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    });
    
    // Кнопка "назад"
    prevBtn.addEventListener('click', function() {
        currentPosition--;
        updateCarousel();
        
        // Если дошли до начала, плавно переходим к концу
        if (currentPosition < 0) {
            setTimeout(() => {
                track.style.transition = 'none';
                currentPosition = totalCards - visibleCards - 1;
                track.style.transform = `translateX(-${currentPosition * cardWidth}px)`;
                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
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
    
    // Инициализация прогресс-бара
    updateProgress();

    // Данные тренеров
    const trainersData = {
        irina: {
            name: "Ирина Лайм",
            position: "преподаватель по робототехнике",
            image: "./unsplash_Zz5LQe-VSMY.jpg",
            sections: {
                education: `
                    <p><strong>Сентябрь 1998 — Июнь 2003</strong><br>
                    Санкт-Петербургский политехнический университет Петра Великого<br>
                    Факультет: Компьютерных наук и технологий<br>
                    Специальность: Математика и компьютерные науки<br>
                    Форма обучения: Очная</p>
                    
                    <h3>Курсы и тренинги</h3>
                    <p><strong>Ноябрь 2020 — Февраль 2021</strong><br>
                    Ноябрь 2020 — Февраль 2021
    Программа дополнительного образования «3D Моделирование»
    Место проведения: Институт дополнительного образования «Политех»
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sequi ut consequuntur id quo ab pariatur, voluptatum dicta culpa eius odit quibusdam quos aliquid voluptatibus non omnis praesentium illum facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, vel voluptas aspernatur voluptatem consequuntur animi consectetur quidem similique error expedita natus odit illo harum! Nihil facilis consequuntur quod amet dignissimos.</p>
                `,
                experience: `
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
                `,
                awards: `
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
                    
                `
                }
            },
        marina: {
            name: "Марина Орлова",
            position: "преподаватель по робототехнике",
            image: "./unsplash_IF9TK5Uy-KI.jpg",
            sections: {
                education: `
                    <p><strong>Сентябрь 1995 — Июнь 2000</strong><br>
                    Санкт-Петербургский политехнический университет Петра Великого<br>
                    Факультет: Компьютерных наук и технологий<br>
                    Специальность: Математика и компьютерные науки<br>
                    Форма обучения: Очная</p>
                    
                    <h3>Курсы и тренинги</h3>
                    <p><strong>Ноябрь 2020 — Февраль 2021</strong><br>
                    Программа дополнительного образования «3D Моделирование»
    Место проведения: Институт дополнительного образования «Политех»
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sequi ut consequuntur id quo ab pariatur, voluptatum dicta culpa eius odit quibusdam quos aliquid voluptatibus non omnis praesentium illum facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, vel voluptas aspernatur voluptatem consequuntur animi consectetur quidem similique error expedita natus odit illo harum! Nihil facilis consequuntur quod amet dignissimos.</p>
                `,
                experience: `
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
                `,
                awards: `
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
                `
                }
        },
        
        maxim: {
            name: "Максим Петров",
            position: "преподаватель по программированию",
            image: "./unsplash_OhKElOkQ3RE.jpg",
            sections: {
                
                education: `
                    <p><strong>Сентябрь 2000 — Июнь 2005</strong><br>
                    Московский государственный технический университет им. Н.Э. Баумана<br>
                    Факультет: Информатика и системы управления<br>
                    Специальность: Программная инженерия<br>
                    Форма обучения: Очная</p>
                    
                    <h3>Курсы и тренинги</h3>
                    <p><strong>Январь 2021 — Апрель 2021</strong><br>
                    Программа дополнительного образования «3D Моделирование»
    Место проведения: Институт дополнительного образования «Политех»
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sequi ut consequuntur id quo ab pariatur, voluptatum dicta culpa eius odit quibusdam quos aliquid voluptatibus non omnis praesentium illum facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, vel voluptas aspernatur voluptatem consequuntur animi consectetur quidem similique error expedita natus odit illo harum! Nihil facilis consequuntur quod amet dignissimos.</p>
                `,
                experience: `
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
                `,
                awards: `
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
                `
                }
        },
        constantin: {
            name: "Константин назаров",
            position: "преподаватель по работотехнике",
            image: "./unsplash_rriAI0nhcbc.jpg",
            sections: {
                education: `
                    <p><strong>Сентябрь 2000 — Июнь 2005</strong><br>
                    Московский государственный технический университет им. Н.Э. Баумана<br>
                    Факультет: Информатика и системы управления<br>
                    Специальность: Программная инженерия<br>
                    Форма обучения: Очная</p>
                    
                    <h3>Курсы и тренинги</h3>
                    <p><strong>Январь 2021 — Апрель 2021</strong><br>
                    Программа дополнительного образования «3D Моделирование»
    Место проведения: Институт дополнительного образования «Политех»
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sequi ut consequuntur id quo ab pariatur, voluptatum dicta culpa eius odit quibusdam quos aliquid voluptatibus non omnis praesentium illum facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, vel voluptas aspernatur voluptatem consequuntur animi consectetur quidem similique error expedita natus odit illo harum! Nihil facilis consequuntur quod amet dignissimos.</p>
                `,
                experience: `
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
                `,
                awards: `
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
                `
                }
        },
        liza: {
            name: "Лиза Весенняя",
            position: "преподаватель по программированию",
            image: "./unsplash_Z_bTArFy6ks.jpg",
            sections: {
            education: `
                <p><strong>Сентябрь 2000 — Июнь 2005</strong><br>
                Московский государственный технический университет им. Н.Э. Баумана<br>
                Факультет: Информатика и системы управления<br>
                Специальность: Программная инженерия<br>
                Форма обучения: Очная</p>
                
                <h3>Курсы и тренинги</h3>
                <p><strong>Январь 2021 — Апрель 2021</strong><br>
                Программа дополнительного образования «3D Моделирование»
Место проведения: Институт дополнительного образования «Политех»
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sequi ut consequuntur id quo ab pariatur, voluptatum dicta culpa eius odit quibusdam quos aliquid voluptatibus non omnis praesentium illum facilis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, vel voluptas aspernatur voluptatem consequuntur animi consectetur quidem similique error expedita natus odit illo harum! Nihil facilis consequuntur quod amet dignissimos.</p>
            `,
            experience: `
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
            `,
            awards: `
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore eveniet vero culpa, quia fugit consequatur accusamus. Delectus minima iure ipsum voluptates sit facere alias repudiandae, eveniet odit dolorem illo dolores!</p>
            `
            }
        },
    };


    

    // Открытие модального окна
    document.querySelectorAll('.trainer-more').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const trainerId = this.getAttribute('data-modal');
            if (trainerId) {
                openModal(trainerId);
            }
        });
    });

    // Закрытие модального окна
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('trainer-modal');
        
        if (e.target.classList.contains('close') || e.target === modal) {
            closeModal();
        }
    });

   
function openModal(trainerId) {
    const trainer = trainersData[trainerId];
    if (!trainer) return;
    
    const modal = document.getElementById('trainer-modal');
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <div class="trainer-header-content">
                    <img src="${trainer.image}" alt="${trainer.name}" class="trainer-modal-image">
                    <div class="trainer-info">
                        <h2>${trainer.name}</h2>
                        <p class="position">${trainer.position}</p>
                        <div class="icons">
                            <span class="icon">📌</span>
                            <span class="icon">💬</span>
                        </div>
                    </div>
                </div>
                <button class="close">&times;</button>
            </div>
            
            <div class="modal-tabs">
                <button class="tab-btn active" data-tab="education">Образование</button>
                <button class="tab-btn" data-tab="experience">Опыт работы</button>
                <button class="tab-btn" data-tab="awards">Награды</button>
            </div>
            
            <div class="modal-body">
                <div id="education" class="tab-content active">
                    ${trainer.sections.education}
                    <h3>Курсы и тренинги</h3>
                    ${trainer.sections.courses}
                </div>
                <div id="experience" class="tab-content">
                    ${trainer.sections.experience}
                </div>
                <div id="awards" class="tab-content">
                    ${trainer.sections.awards}
                </div>
            </div>
        </div>
    `;
    
    // Остальной код обработчиков событий...

    // Показываем модальное окно
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    // Обработчики для вкладок
    const tabs = modal.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Удаляем активный класс у всех
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Добавляем активный класс текущей вкладке и контенту
            const tabId = this.getAttribute('data-tab');
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Обработчик закрытия
    modal.querySelector('.close').addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
}


    function closeModal() {
        const modal = document.getElementById('trainer-modal');
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    function switchTab(tabId, modal) {
        // Снимаем активный класс со всех кнопок и контента
        modal.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        modal.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Добавляем активный класс к выбранной кнопке и контенту
        const activeBtn = modal.querySelector(`.tab-btn[data-tab="${tabId}"]`);
        const activeContent = modal.querySelector(`#${tabId}`);
        activeBtn.classList.add('active');
        activeContent.classList.add('active');
    }
});