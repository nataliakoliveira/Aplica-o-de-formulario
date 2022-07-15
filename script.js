const email = document.getElementById('email');
const password = document.getElementById('password');
const submitLogin = document.querySelector('button');
const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const counter = document.querySelector('#counter');
const textarea = document.getElementById('textarea');
const main = document.querySelector('main');
// const for the form filling
const formData = document.querySelector('#form-data');
// nome
const nameData = document.querySelector('#name-data');
const nameInput = document.querySelector('#input-name');
const lastNameInput = document.querySelector('#input-lastname');
// email
const emailData = document.querySelector('#email-data');
const emailInput = document.querySelector('#input-email');
// casa
const houseData = document.querySelector('#house-data');
const houseInput = document.querySelector('#house');
// familia
const familyInput = document.getElementsByName('family');
const familyData = document.querySelector('#family-data');
// materia
const subjectInput = document.getElementsByClassName('subject');
const subjectData = document.querySelector('#subject-data');
// avaliação
const rateData = document.querySelector('#rate-data');
const rateInput = document.getElementsByName('rate');

const obsData = document.querySelector('#obs-data');

submitLogin.addEventListener('click', (e) => {
  // console.log(email.value, password.value);
  e.preventDefault();
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

agreement.addEventListener('change', () => {
  submitButton.disabled = !agreement.checked;
});

textarea.addEventListener('keyup', () => {
  const characterCount = textarea.value.length;
  // console.log(textarea.value.length);
  counter.innerText = textarea.maxLength - characterCount;
});

function getRadioData(inputedData) {
  for (let i = 0; i < inputedData.length; i += 1) {
    if (inputedData[i].checked) {
      return inputedData[i].value;
    }
  }
}

function getCheckboxData(checkedData) {
  const checkedList = [];
  for (let i = 0; i < checkedData.length; i += 1) {
    if (checkedData[i].checked) {
      checkedList.push(checkedData[i].value);
    }
  }
  // console.log(checkedList);
  return checkedList.join(', ');
}

submitButton.addEventListener('click', (e) => {
  main.style.display = 'none';
  e.preventDefault();
  formData.style.display = 'flex';
  nameData.innerText = `Nome: ${nameInput.value} ${lastNameInput.value}`;
  emailData.innerText = `Email: ${emailInput.value}`;
  houseData.innerText = `Casa: ${houseInput.options[houseInput.selectedIndex].value}`;
  familyData.innerText = `Família: ${getRadioData(familyInput)}`;
  subjectData.innerText = `Matérias: ${getCheckboxData(subjectInput)}`;
  rateData.innerText = `Avaliação: ${getRadioData(rateInput)}`;
  obsData.innerText = `Observações: ${textarea.value}`;
});
