// const h4 = document.querySelector('button h4');
// h4.onclick = function(){
// //    body.style.backgroundColor = 'red';
// // body.setAttribute('class','biru-muda');
// document.body.classList.toggle('biru-muda');

// }
const tAcakWarna = document.createElement('button');
const teksWarna = document.createTextNode('acak warna');
tAcakWarna.setAttribute('type','button');
tAcakWarna.appendChild(teksWarna);
document.body.appendChild(tAcakWarna);
const ubahWarna = document.createElement('button');
const twarna = document.createTextNode('ubah warna');
ubahWarna.setAttribute('type','button');
ubahWarna.appendChild(twarna);
tAcakWarna.after(ubahWarna);

tAcakWarna.addEventListener('click', function(){
  const r = Math.round(Math.random()* 255 + 1);
  const g = Math.round(Math.random()* 255 + 1);
  const b = Math.round(Math.random()* 255 + 1);
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});

const container = document.querySelector('.container');
const kotak = document.querySelector('.kotak');
const eras = document.querySelector('input[name=eras]');
tAcakWarna&&ubahWarna.after(container);
const eras2 = document.querySelector('input[name=eras2]');
const eras3 = document.querySelector('input[name=eras3]');


// eras.addEventListener('change',function(){
// const r = eras.value;
// document.body.style.backgroundColor ='rgb('+r+',100,100)';
// });
eras.addEventListener('input',function(){
const r = eras.value;
document.body.style.backgroundColor ='rgb('+r+',100,100)';
});

// eras2.addEventListener('change',function(){
//   const r = eras.value;
//   const g =eras2.value;
// document.body.style.backgroundColor ='rgb('+r+','+g+',100)';

// });
eras2.addEventListener('input',function(){
  const r = eras.value;
  const g =eras2.value;
document.body.style.backgroundColor ='rgb('+r+','+g+',100)';

});
eras3.addEventListener('input',function(){
  const r = eras.value;
  const g =eras2.value;
  const b =eras3.value;
document.body.style.backgroundColor ='rgb('+r+','+g+','+b+')';

});



document.body.addEventListener('mousemove',function(event){
// posisi mouse
// console.log(event.clientX);
const xPos = Math.round((event.clientX / window.innerWidth) *
    255);
                                                              
const yPos = Math.round((event.clientY / window.innerHeight)*
    255);
document.body.style.backgroundColor ='rgb('+xPos+','+yPos+',100)';
});





// function scoreChecker (score) {
//     let result;
    
//     // TODO
//     if(score>=90){
//       result = 'selamat! anda mendapatkan nilai A';
//     }else if(score>=80){
//       result = 'Anda mendapatkan nilai B ';
//     }else if(score>=70){
//       result =' Anda mendapatkan nilai C';
//     }else if(score>=60){
//       result = '  Anda mendapatkan nlai D';
//     }else{
//       result = ' Anda mendapatkan nilai E';}
    
    
  
  
  
    // Jangan hapus kode ini
  //   return result;
  // }
  