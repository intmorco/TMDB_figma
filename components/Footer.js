

export function Footer() {
    const footer_logo = document.createElement('img')
    footer_logo.src = '/footer_logo.svg'
    footer_logo.classList.add('s_media')
    
    
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
    
    const span = document.createElement('span')
    span.classList.add('footer_text')
    span.innerHTML = '2020 © Kinoarea.  Все права защищены'
    
    const footer = document.querySelector('footer')
    footer.append(footer_logo, nav, span)

    
    
}