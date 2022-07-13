const email = document.getElementById('email');
const password = document.getElementById('password');
const submitLogin = document.querySelector('button');
const agreement = document.querySelector('#agreement');
const submitButton = document.querySelector('#submit-btn');
const counter = document.querySelector('#counter');
const textarea = document.getElementById('textarea');

submitLogin.addEventListener('click', (e) => {
  console.log(email.value, password.value);
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
