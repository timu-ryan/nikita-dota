let currentIndex = 0; // Индекс текущего слайда
const slides = document.querySelectorAll('.slide'); // Получаем все слайды
const totalSlides = slides.length; // Количество слайдов

// Функция для переключения на следующий слайд
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Увеличиваем индекс слайдера, если индекс больше чем количество слайдов, сбрасываем его на 0
    updateSlider(); // Обновляем слайдер
}

// Функция для переключения на предыдущий слайд
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Уменьшаем индекс слайдера с учетом зацикливания
    updateSlider(); // Обновляем слайдер
}

// Обновляем слайдер, сдвигая его
function updateSlider() {
    const slidesContainer = document.querySelector('.slides');
    const offset = -currentIndex * 100; // Рассчитываем смещение для слайдера
    slidesContainer.style.transform = `translateX(${offset}%)`; // Перемещаем слайды
}

// Настроим кнопки для переключения
document.querySelector('.prev-button').addEventListener('click', prevSlide);
document.querySelector('.next-button').addEventListener('click', nextSlide);

// Автоматическое переключение слайдов каждые 5 секунд
setInterval(nextSlide, 10000); // Переключение слайдов каждые 5 секунд

const slideButtons = document.getElementsByClassName("heroes__button");
const slidesDescriptions = document.getElementsByClassName("heroes__description");

console.log(slideButtons.length)

Array.from(slideButtons).forEach((button, index) => {
    button.addEventListener('click', () => {
        if (Array.from(slidesDescriptions[index].classList).includes('visually-hidden')) {
            slidesDescriptions[index].classList.remove('visually-hidden')
        } else {
            slidesDescriptions[index].classList.add('visually-hidden')
        }
    })
})

// slideButtons[0].addEventListener('click', () => {
//     slidesDescriptions[0].classList.add('visually-hidden');
//     console.log()
// })


function toggleRecipe(recipeId) {
    // Получаем панель, которую нужно открыть/закрыть
    const recipeDetails = document.getElementById(recipeId);
    
    // Проверяем, открыта ли панель
    const isCurrentlyOpen = recipeDetails.style.display === "block";

    // Закрываем все панели
    const allRecipeDetails = document.querySelectorAll('.recipe-details');
    allRecipeDetails.forEach((panel) => {
        panel.style.display = "none"; // Скрываем все панели
    });

    // Если панель была закрыта, то открываем только текущую
    if (!isCurrentlyOpen) {
        recipeDetails.style.display = "block"; // Показываем выбранную панель
    }
}








