import { ANSWER } from '../constants.js';

const DOMUtils = {
  getElement: (selectors) => {
    return document.querySelector(selectors);
  },
  setElementId: (selectors, idValue) => {
    return (document.querySelector(selectors).id = idValue);
  },
  hideElement: (selectors) => {
    return (DOMUtils.getElement(selectors).style.display = 'none');
  },
  showElement: (selectors) => {
    return (DOMUtils.getElement(selectors).style.display = '');
  },
  setElementValue: (selectors, text = '') => {
    return (DOMUtils.getElement(selectors).innerText = text);
  },
  removeElement: (selectors) => {
    const element = DOMUtils.getElement(selectors);
    element.parentNode.removeChild(element);
  },
  initValue: (element) => {
    element.value = '';
  },
  showResult: (text) => {
    DOMUtils.showElement('#result-title');
    DOMUtils.setElementValue('#result');
    DOMUtils.isRightAnswer(text);
  },
  isRightAnswer: (text) => {
    return text === ANSWER.RIGHT
      ? DOMUtils.showGameOver(text)
      : DOMUtils.setElementValue('#result', text);
  },
  showGameOver: (text) => {
    DOMUtils.getElement('#result').insertAdjacentHTML('afterbegin', `<h4>${text}</h4>`);
    DOMUtils.getElement('#result').insertAdjacentHTML(
      'afterend',
      `<div id="game-restart-message">
            게임을 새로 시작하시겠습니까? 
            <button id="game-restart-button">게임 재시작</button>
        </div>`
    );
  },
};

export default DOMUtils;
