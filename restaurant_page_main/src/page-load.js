//export this to index.js

export function pageLoad() {
    console.log('this is the exported page load function pt1')

    document.body.style.backgroundImage = "url('chalkboard.jpg')";

    let content = document.querySelector('.content');
    content.innerHTML = '';

    console.log('this is the exported page load function pt2')

    let title = document.createElement('div')
        //title.classList.add('title')
        title.id = 'title';
        content.appendChild(title)
        document.getElementById('title').innerHTML = 'Little Food Inn'

        console.log('this is the exported page load function pt3')

    

    let description = document.createElement('div')
        //description = classList.add('description')
        description.id = 'description'
        content.appendChild(description)
        document.getElementById('description').innerHTML = 'Check out our menu and order online today!'

    let storeImage = new Image();
        storeImage.src =  'littlefoodinn.jpg';
        document.getElementById('content').appendChild(storeImage);

    console.log('this is the exported page load function pt4')
    return;
}




