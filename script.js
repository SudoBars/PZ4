// Створюємо контейнер для форми
const container = document.createElement('div');
container.style.width = '40%';
container.style.margin = '50px auto';
container.style.border = '2px solid black';
container.style.padding = '20px';
container.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.1)';
container.style.textAlign = 'left';

// Додаємо заголовок
const title = document.createElement('p');
title.textContent = 'Введіть наступні дані:';
title.style.fontSize = '18px';
title.style.marginBottom = '20px';
container.appendChild(title);

// Створюємо форму
const form = document.createElement('form');
form.id = 'data-form';

// Створюємо поле для імені
const nameLabel = document.createElement('label');
nameLabel.htmlFor = 'name';
nameLabel.textContent = "Ім'я:";
nameLabel.style.display = 'inline-block';
nameLabel.style.width = '100px';
nameLabel.style.fontSize = '18px';
nameLabel.style.marginRight = '10px';
nameLabel.style.verticalAlign = 'middle';
form.appendChild(nameLabel);

const nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.name = 'name';
nameInput.required = true;
nameInput.style.width = 'calc(100% - 120px)';
nameInput.style.padding = '5px';
nameInput.style.fontSize = '16px';
nameInput.style.border = '1px solid #000';
nameInput.style.marginBottom = '15px';
form.appendChild(nameInput);

form.appendChild(document.createElement('br')); // Перенос рядка

// Створюємо поле для віку
const ageLabel = document.createElement('label');
ageLabel.htmlFor = 'age';
ageLabel.textContent = 'Вік:';
ageLabel.style.display = 'inline-block';
ageLabel.style.width = '100px';
ageLabel.style.fontSize = '18px';
ageLabel.style.marginRight = '10px';
ageLabel.style.verticalAlign = 'middle';
form.appendChild(ageLabel);

const ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.id = 'age';
ageInput.name = 'age';
ageInput.required = true;
ageInput.style.width = 'calc(100% - 120px)';
ageInput.style.padding = '5px';
ageInput.style.fontSize = '16px';
ageInput.style.border = '1px solid #000';
ageInput.style.marginBottom = '15px';
form.appendChild(ageInput);

form.appendChild(document.createElement('br')); // Перенос рядка

// Створюємо кнопку
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Старт';
submitButton.style.padding = '10px 25px';
submitButton.style.fontSize = '16px';
submitButton.style.backgroundColor = '#d3d3d3';
submitButton.style.border = '1px solid #000';
submitButton.style.borderRadius = '4px';
submitButton.style.cursor = 'pointer';
submitButton.style.float = 'right';
submitButton.style.marginTop = '-35px'; // Підняття кнопки
submitButton.addEventListener('mouseover', () => {
  submitButton.style.backgroundColor = '#bbb';
});
submitButton.addEventListener('mouseout', () => {
  submitButton.style.backgroundColor = '#d3d3d3';
});
form.appendChild(submitButton);

// Додаємо форму в контейнер
container.appendChild(form);

// Додаємо контейнер у тіло сторінки
document.body.appendChild(container);

// Обробка події відправки форми
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Запобігаємо перезавантаженню сторінки

  const name = nameInput.value;
  const age = ageInput.value;

  alert(`Ім'я: ${name}, Вік: ${age}`); // Виводимо введені дані у вигляді модального вікна
});
