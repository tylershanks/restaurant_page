
export function contact() {
    console.log('contact page')

    let content = document.querySelector('.content');

    content.innerHTML = '';

    let title = document.createElement('div')
        //title.classList.add('title')
        title.id = 'title';
        content.appendChild(title)
        document.getElementById('title').innerHTML = 'Contact Us'

    let phoneNumber = document.createElement('div')
        //title.classList.add('title')
        phoneNumber.id = 'phoneNumber';
        content.appendChild(phoneNumber)
        document.getElementById('phoneNumber').innerHTML = '973-973-9739'

    let contactEmail = document.createElement('div')
        //title.classList.add('title')
        contactEmail.id = 'contactEmail';
        content.appendChild(contactEmail)
        document.getElementById('contactEmail').innerHTML = 'littlefoodinn@fakemail.com'

    let address = document.createElement('div')
        //title.classList.add('title')
        address.id = 'address';
        content.appendChild(address)
        document.getElementById('address').innerHTML = '500 Street St, Town, NJ 00000, USA'

}
