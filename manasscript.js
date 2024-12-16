// Функция для отслеживания прокрутки
function handleScroll() {
    const zavety = document.querySelectorAll(".zavet");
    const scrollPosition = window.scrollY + window.innerHeight; // Текущая позиция прокрутки

    zavety.forEach((zavet, index) => {
        const elementPosition = zavet.getBoundingClientRect().top + window.scrollY; // Позиция элемента на странице

        // Если элемент находится в области видимости
        if (scrollPosition > elementPosition) {
            // Добавляем класс visible при прокрутке
            zavet.classList.add("visible");
        }
    });
}

// Вызов функции при прокрутке страницы
window.addEventListener("scroll", handleScroll);

// Проверка на видимость заветов при загрузке страницы
document.addEventListener("DOMContentLoaded", handleScroll);


// Функция для поиска
document.getElementById("searchButton").addEventListener("click", function () {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    if (query) {
        alert(`Вы искали: ${query}`);
        // Реализация поиска (например, переход на страницу результатов или фильтрация контента)
    } else {
        alert("Введите текст для поиска.");
    }
});
// Находим все элементы с классом "hero"
const heroes = document.querySelectorAll(".hero");

// Добавляем события "mouseover" и "mouseout" для отображения описания
heroes.forEach((hero) => {
    const img = hero.querySelector("img");
    const description = hero.querySelector("p");

    // При наведении показываем описание
    img.addEventListener("mouseover", () => {
        description.style.visibility = "visible";
        description.style.opacity = "1";
    });

    // При убирании курсора скрываем описание
    img.addEventListener("mouseout", () => {
        description.style.visibility = "hidden";
        description.style.opacity = "0";
    });
});
const manaschys = document.querySelectorAll(".manaschy");

// Добавляем события "mouseover" и "mouseout" для отображения описания
manaschys.forEach((manaschy) => {
    const img = manaschy.querySelector("img");
    const description = manaschy.querySelector("p");

    // При наведении показываем описание
    img.addEventListener("mouseover", () => {
        description.style.opacity = "1";
        description.style.visibility = "visible";
    });

    // При убирании курсора скрываем описание
    img.addEventListener("mouseout", () => {
        description.style.opacity = "0";
        description.style.visibility = "hidden";
    });
});
const manaschys2 = document.querySelectorAll(".manaschy2");

// Добавляем события "mouseover" и "mouseout" для отображения описания
manaschys2.forEach((manaschy2) => {
    const img = manaschy2.querySelector("img");
    const description = manaschy2.querySelector("p");

    // При наведении показываем описание
    img.addEventListener("mouseover", () => {
        description.style.opacity = "1";
        description.style.visibility = "visible";
    });

    // При убирании курсора скрываем описание
    img.addEventListener("mouseout", () => {
        description.style.opacity = "0";
        description.style.visibility = "hidden";
    });
});
