function pilihanComp() {
   const reis = Math.random();
   if (reis < 0.37) return 'gajah';
   if (reis >= 0.37 && reis > 0.66) return 'orang';
   return 'semut';


}

function getHasil(comp, player) {

   //menetukan rules

   if (player == comp) return 'seri';
   if (player == 'orang') return (comp == 'gajah') ? 'kalah' : 'menang';
   if (player == 'semut') return (comp == 'orang') ? 'kalah' : 'menang';
   if (player == 'gajah') return (comp == 'semut') ? 'kalah' : 'menang';

}

const pgajah = document.querySelectorAll('li img');
// for (const item of pgajah) {
//    item.addEventListener('click', function () {
//       const pilihankomputer = pilihanComp();
//       const pilihanplayer = item.className;
//       const hasil = getHasil(pilihankomputer, pilihanplayer);
//       const imgcomp = document.querySelector('.img-komputer');
//       imgcomp.setAttribute('src', 'img/' + pilihankomputer + '.png');
//       const info = document.querySelector('.info');
//       info.innerHTML = hasil;
//       console.log(hasil);
//       console.log(pilihanplayer);





//    });
// }

function putar() {
   const imgComp = document.querySelector('.img-komputer');
   const gambar = ['gajah', 'semut', 'orang'];
   let i = 0;
   const waktuMulai = new Date().getTime();
   setInterval(function () {

      if (new Date().getTime() - waktuMulai > 1000) {
         clearInterval;
         return;

      }
      imgComp.setAttribute('src', 'img/' + gambar[i++] + '.png');
      if (i == gambar.length) i = 0;

   }, 100)
}









// denagan foreach()

pgajah.forEach(function (dor) {
   dor.addEventListener('click', function () {
      const pilihankomputer = pilihanComp();
      const pilihanplayer = dor.className;
      const hasil = getHasil(pilihankomputer, pilihanplayer);
      putar();
      const info = document.querySelector('.info');
      info.innerHTML = hasil;

      setTimeout(function () {
         // const imgcomp = document.querySelector('.img-komputer');
         // imgcomp.setAttribute('src', 'img/' + pilihankomputer + '.png');

         // console.log(hasil);
         // console.log(pilihanplayer);

      }, 1000);

   });

});


pgajah.forEach(function (dor) {
   dor.addEventListener('dblclick', function () {
      document.body.style.backgroundColor = 'red';
   });
});





