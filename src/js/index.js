// handle ::focus state, 'cause outline is disabled (accessibility)
const questions = document.querySelectorAll('.card__item');

function disableAll() {
  questions.forEach((question) => { question.open = false; });
}

questions.forEach((question) => question.addEventListener('focusin', () => {
  disableAll();
  question.open = true;
}));
