import './styles.css';
import menuTempl from './data/menu.hbs';
import menuData from './data/menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  menu: document.querySelector('.js-menu'),
  themeSwitchToggle: document.querySelector('#theme-switch-toggle'),
  body: document.body,
};

refs.menu.innerHTML = menuTempl(menuData);

let localTheme = localStorage.getItem('theme');
if (!Object.values(Theme).includes(localTheme)) localTheme = Theme.LIGHT;
refs.body.classList.add(localTheme);
refs.themeSwitchToggle.checked = localTheme === Theme.DARK;

refs.themeSwitchToggle.addEventListener('change', onThemeSwitch);

function onThemeSwitch() {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);
  refs.themeSwitchToggle.toggle;
  localStorage.setItem(
    'theme',
    refs.themeSwitchToggle.checked ? Theme.DARK : Theme.LIGHT,
  );
}
