// event = memprpresdentasikan kejadian yang terjadi didalam dom(kejadian =ketika mengklik mouse/bisa dilakukan ototmatis oleh api

// cara mendengarkan event
// * event handler
// inline html attribute
// element method

// *addEventListener()


//  event handler
// const p3 =document.querySelector('.p3');

// function ubahwarnaP3(){
//     p3.style.backgroundColor = 'lightblue';
// }
// function ubahwarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 =document.querySelector('.p2');
// p2.onclick =ubahwarnaP2;


// addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const li = document.createElement('li');
    const textli = document.createTextNode('itembaru');
    li.appendChild(textli);
    ul.appendChild(li);

});
// dengan addEventListener

// const p3 =document.querySelector('.p3');
//  p3.addEventListener('click',function(){
//     p3.style.backgroundColor = 'red';
//     p3.style.color = 'blue';
// });

// dengan even handler


const p3 =document.querySelector('.p3');
p3.onclick = function(){
    p3.style.backgroundColor = 'red';
    p3.style.color = 'blue';
}