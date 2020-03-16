import './css/reset.css';
import './css/main.css';
import './css/layout.css';
import './css/tabs.css';
import './css/menu.css';
import tabs from './js';

tabs.init();

window.addEventListener('DOMContentLoaded', () => {
  tabs.buttonEvent('Menu');
  tabs.buttonEvent('Contact');
});
