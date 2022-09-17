// dom selection method
// .getElementById()           =element
// getElementByTagName()       =HTMLCOLECTION
// getElementByClassName(      =HTMLcolection
// querySelector()             =element
// querySelectorAll()          =noedelist

// const judul = document.getElementById('judul');
// judul.style.color = 'red';
// judul.style.backgroundColor = '#ccc';
// judul.innerHTML = 'mohamdaraihan';

// // document.gerElementByTagName
// const c =document.getElementsByTagName('p');
// c[2].style.color = 'red';
// for (let i = 0; i < c.length; i++){
//     c[i].style.backgroundColor ='lightblue';
// }


// const h1 =document.getElementsByTagName('h1');
// const h1 =document.getElementsByTagName('h1')[0]; (tambahkan index untuk mengambil tag ternttu)



// document.getElementByClassName() sama sepreti getelement bytagname
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah denagan java script';

//  document.queryselector() = element hanya satu elemen yang di target
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '40px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'green';

// const f = document.querySelector('p');
// f.innerHTML = 'ini diubah menggunakan java script'

// // document.qoeryselectorAll() = semua elemen
// const de = document.querySelectorAll('p');
// for( let i =0; i<de.length; i++ ){
//     de[i].style.backgroundColor = 'lightblue';
// }
//  const sectionB =document.querySelector('section#b');
//  const p4 =sectionB.getElementsByTagName('p')[0];
//  p4.style.backgroundColor = 'black';
   
//  manipulasi elemnen




// element.innerhtml
//  element.style.(property)
// element.setAtribute()
// element.classList  


// inner.HTML
// const dea =document.querySelector('#judul');
// dea.innerHTML = '<em>mohamadraihan</em>';

// const sectionA =document.getElementById('a');
// sectionA.innerHTML = 'hello world';



//style.(propertycss)
// const fer = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor

// element.setAttribute , element.getAttribute .element.removeAttribute
const judul =document.getElementsByTagName('h1')[0];
judul.setAttribute('name', 'raihan');
const a =document.querySelector('section#a');

// const p2 = document.querySelector('.p2'); //jika menngunakan setattribute maka class yg lama akan di agnti denagan yang baru
// p2.setAttribute('calss', 'label');

// 
// element.classList.add()(untuk menambahkan class baru)
// element.classList.remove()
// element.classList.toggle()unutuk menambahkan class jika class terseburt blm ada dan untuk menghapus class jika sudah ada
// element.classList.item()untuk mencari calss tertentu dalam sebauh element
// element.classList.contains()untuk menegecek apakah dalam element punya clas tertentu
// element.classList.replace(_elemen 1 elemen 2)unutuk mengganti class yang ada denagan class yang baru

// const p2 = document.querySelector('.p2');

// manipulasi node
//  .document.createElement()(untuk membuat elemen baru)
//  .document.createTextNode()(untu menambahkan texxt)
// node.appendChild()( simpan dalam akhir elemen parent)
//  node.insertBefore()
//  parentNode.removeChild()
//  parentNode.parentChild()

// buat elemen baru
// const pbaru = document.createElement('p');
// const tekspbaru = document.createTextNode('paragraf baru');
// // simpan tulisan dalam paragraf
// pbaru.appendChild(tekspbaru);
// // simpan pbaru di akhir section A
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pbaru);
// // menembahkan diantara 2 node


// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('item baru');
// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 =ul.querySelector(' li:nth-child(2)');

// ul.insertBefore(liBaru,li2);



// // menghapus element
// const b = document.getElementsByTagName('a')[0];
// sectionA.removeChild(b);


// // mennganti elemen
// const fer = document.getElementById('b');
// const c = fer.querySelector('p');

// const baru = document.createElement('h2');
// const TextBaru =document.createTextNode('judul baru');

// baru.appendChild(TextBaru);
// fer.replaceChild(baru,c);

