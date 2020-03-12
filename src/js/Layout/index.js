import { home, menu } from './template.jsx';

const layout = (currentTab = 'Home') => {
  if (typeof currentTab !== 'string') throw new TypeError('Tab Provided is invalid!');
  const main = document.createElement('main');
  if (currentTab === 'Home') main.innerHTML = home();
  if (currentTab === 'Menu') main.innerHTML = menu();
  document.getElementById('content').appendChild(main);
};

export default layout;
