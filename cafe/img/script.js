const hm = document.querySelector('#hamburger-menu');



const navbar = document.querySelectorAll('.navbar-nav a');
const navbak = document.querySelector('.navbar-nav');


hm.addEventListener('click', function () {
    navbak.classList.toggle('active')


})

// menghilangkan hamburge menu ketika dklik sealin ditempatnay

// hm.addEventListener('blur', function () {
//     navbak.classList.remove('active')
// })

// const burger = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button')

// toggle kelas aktiv untuk search form
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-box')
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbak.contains(e.target)) {
        navbak.classList.remove('active')
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active')
    }
    if (!spButton.contains(e.target) && !spCart.contains(e.target)) {
        spCart.classList.remove('active')
    }

})

const spButton = document.querySelector('#shopping-cart-button');
const spCart = document.querySelector('.shopping-card');

spButton.addEventListener('click', function (e) {
    spCart.classList.toggle('active');
    e.preventDefault();
})

// modal box

const itemDbutton = document.querySelectorAll('.item-detail-button');
for (const darla of itemDbutton) {
    darla.addEventListener('click', function (e) {
        const itemDmodal = document.querySelector('.modal');
        itemDmodal.style.display = "flex";
        e.preventDefault();


    })
}

// klik tombol close
const itemDmodal = document.querySelector('.modal');

document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDmodal.style.display = "none";
    e.preventDefault();



}


// klik diluar modal

window.onclick = (e) => {
    if (e.target == itemDmodal) {
        itemDmodal.style.display = "none"
    }
}


// bismillah todo list






const imgs = document.querySelector('.product-card img')
const cartItem = document.querySelector('.shopping-card ');
const shopingTodo = document.querySelectorAll('.shopping-todo');
shopingTodo.forEach(function (e) {
    e.addEventListener('click', function (event) {
        const dami = ['kopi2', 'kopi', 'cofee'];
        let i = 0;
        const div = document.createElement('div');
        div.classList.add('cart-item')

        cartItem.appendChild(div);
        const imgTodo = document.createElement('img')
        if (event.target == e[0]) {
            imgTodo.setAttribute('src', 'gambar/' + dami[0] + '.jpg');
        }
        if (event.target == e[1]) {
            imgTodo.setAttribute('src', 'gambar/' + dami[1] + '.jpg');

        }


        div.appendChild(imgTodo);

        const itemDetail = document.createElement('div');
        itemDetail.classList.add('item-detail');
        div.appendChild(itemDetail)

        const h3 = document.createElement('h3');
        const texth3 = document.createTextNode('product 1');
        h3.appendChild(texth3)
        itemDetail.appendChild(h3);
        const p = document.createElement('p');
        const textP = document.createTextNode("this the example of todo list product explanation")
        p.appendChild(textP);
        itemDetail.appendChild(p)
        event.preventDefault();


    })
})


// const itemDetailModal = document.querySelector('.modal');
// const itemDetailButon = document.querySelector('item-detail-button');

// itemDetailButon.onclick = (e) => {
//     itemDetailModal.style.display = "flex";
//     e.preventDefault();

