

export function menu() {
    console.log('menu page')

    let content = document.querySelector('.content');

    content.innerHTML = '';

    let dinnerMenu = new Image();
    dinnerMenu.src = 'littlefoodinndinnermenu.jpg';
    document.getElementById('content').appendChild(dinnerMenu);

}
