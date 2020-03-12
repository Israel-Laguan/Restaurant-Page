import './css/reset.css';
import './css/main.css';
import './css/layout.css';
import './css/tabs.css';
import defaultLayout from './js/Layout';

defaultLayout('Menu');
window.addEventListener('load', () => console.log('I am second'));