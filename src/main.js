import './css/reset.css';
import './css/main.css';
import './css/layout.css';
import './css/tabs.css';
import tabs from './js/tabs';

tabs.init();

const buttonEvent = (button = 'Home') => {
  document.getElementById(button.toLowerCase()).addEventListener('click', () => {
    const main = document.getElementById('main');
    if (main.hasChildNodes()) {
      document.getElementById('content').removeChild(main);
    }
    tabs.change(button);
    ['Home', 'Menu', 'Contact'].forEach(item => {
      if (item !== button) buttonEvent(item);
    });
  });
};

window.addEventListener('DOMContentLoaded', () => {
  buttonEvent('Menu');
});
