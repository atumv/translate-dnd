export const drop = (event: any, setAnswer: any, setIsCorrect: any): void => {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');

  if (event.target.classList.contains('word-list')) {
    const emptyLi = event.target.querySelector('li:empty');
    emptyLi.append(document.getElementById(data));

    if (!emptyLi.classList.contains(emptyLi.firstElementChild.id)) {
      setTimeout(() => {
        const sameClassLi = event.target.querySelector(
          `li._${emptyLi.firstElementChild.id}`
        );
        sameClassLi.append(emptyLi.firstElementChild);
      }, 1000);
    }
  } else if (event.target.classList.contains('list-item')) {
    event.target.append(document.getElementById(data));
    const word = event.target.querySelector('.word');

    if (!event.target.classList.contains(word.id)) {
      setTimeout(() => {
        const sameClassLi = event.target.parentNode.querySelector(
          `li._${word.id}`
        );
        sameClassLi.append(word);
      }, 1000);
    }
  } else if (event.target.classList.contains('answer-field')) {
    event.target.append(document.getElementById(data));
  }

  setAnswer(event.target.textContent);
  setIsCorrect(null);
};
