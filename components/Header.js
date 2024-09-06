
export function Header() {

  // Create the logo div
  const logo = document.createElement('div');
  logo.classList.add('logo');

  const logo_img_1 = document.createElement('img');
  const logo_img_2 = document.createElement('img');

  logo_img_1.src = '/logo.svg';
  logo_img_2.src = '/s_media.svg';

  logo.append(logo_img_1, logo_img_2)


  // Create the nav element
  const nav = document.createElement('nav');
  nav.classList.add('nav');

  const ul = document.createElement('ul');

  const menuItems = ['Афиша', 'Медиа', 'Фильмы', 'Актеры', 'Новости', 'Подборки', 'Категории'];

  menuItems.forEach(item => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#';
    a.textContent = item;
    li.append(a);
    ul.append(li);
  });
  nav.append(ul);

  // Create the header-right div
  const header_right = document.createElement('div');
  const search_box = document.createElement('div');
  const search_btn = document.createElement('button');
  const search_icon = document.createElement('i');
  const login_btn = document.createElement('button');


  header_right.classList.add('header-right');
  search_box.classList.add('search-box');
  search_btn.classList.add('search-button');
  search_icon.classList.add('material-icons');
  login_btn.classList.add('login-button');


  search_icon.innerHTML = 'search';
  login_btn.innerHTML = 'Войти';


  header_right.append(search_box, login_btn);
  search_box.append(search_btn);
  search_btn.append(search_icon);

  const header = document.querySelector('header')

  header.append(logo, nav, header_right)
}