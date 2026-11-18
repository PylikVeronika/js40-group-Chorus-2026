// Урок 07: переменные, числа, строки, шаблонные строки
// Задача: описать трек переменными и показать его на странице

// TODO 1: объяви переменные songTitle (строка), artist (строка), year (число)
// Пример идей: "Yesterday", "The Beatles", 1965
// Название трека (строка)
let songTitle = "BABY";
let artist = "FACE";
let year = 2025;


// Жанр
const genre = "Классика";



// Исполнитель / композитор (строка)
// Год (число)


let cardText = `🎵 ${songTitle}
Исполнитель: ${artist}
Год: ${year}
Жанр: ${genre}`;

// TODO 4: по клику на кнопку запиши данные в элементы страницы
document.getElementById("show-btn").addEventListener("click", function () {
  // Подсказка:
  document.getElementById("card-text").textContent = cardText;
  document.getElementById("title").textContent = songTitle;
  document.getElementById("artist").textContent = artist;
  // document.getElementById("title").textContent = songTitle;
  // document.getElementById("artist").textContent = artist;
  // document.getElementById("card-text").textContent = cardText;


});
