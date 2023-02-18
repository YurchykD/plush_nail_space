var copyButton = document.querySelector('#copyButton');
var textToCopy = document.querySelector('#textToCopy');

// Додавання обробника події на клік по кнопці
copyButton.addEventListener('click', function () {
    // Створення текстового поля для копіювання тексту
    var textArea = document.createElement('textarea');
    textArea.value = textToCopy.innerText;

    // Додавання текстового поля на сторінку та вибір тексту в ньому
    document.body.appendChild(textArea);
    textArea.select();

    // Копіювання тексту у буфер обміну та видалення текстового поля
    document.execCommand('copy');
    document.body.removeChild(textArea);
});

const myElement = document.getElementById('copyButton');

myElement.addEventListener('click', (event) => {
  // Створюємо елемент tooltip
  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.innerText = 'Скопійовано';

  // Додаємо tooltip до DOM
  document.body.appendChild(tooltip);

  // Встановлюємо координати розташування tooltip
  const rect = event.target.getBoundingClientRect();
  tooltip.style.top = `${rect.top + window.scrollY}px`;
  tooltip.style.left = `${rect.left + window.scrollX}px`;

  // Показуємо tooltip
  tooltip.style.display = 'block';

  // Приховуємо tooltip після 3 секунд
  setTimeout(() => {
    tooltip.style.display = 'none';
    tooltip.remove();
  }, 1500);
});