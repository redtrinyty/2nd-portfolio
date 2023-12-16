
const localStorageKey = 'dameee';
const dore = document.querySelector('#dor');
const gacha = document.querySelector('button');


// pengecekan apakah data localStorage dengan key count tersedia atau belum
if (typeof (Storage) !== 'undefined') {
    if (localStorage.getItem(localStorageKey) === null) {
        // Jika item pada local storage belum ada 
        // maka akan diberi nilai awal yakni 0
        localStorage.setItem(localStorageKey, 0);
    }





    document.addEventListener('DOMContentLoaded', function () {
        function pilihanComp() {
            const reis = Math.random();
            if (reis >= 0.90) return 'spider';
            if (reis >= 0.68 && reis < 0.80) return 'hulk';

            if (reis <= 0.37) return 'dead';


            return 'iron';



        }

        dore.innerText = localStorage.getItem(localStorageKey);

        function putar() {
            const imgComp = document.querySelector('.gacha');
            const gambar = ['spider', 'hulk', 'dead'];
            let i = 0;
            const waktuMulai = new Date().getTime();
            setInterval(function () {

                if (new Date().getTime() - waktuMulai > 1000) {
                    clearInterval;
                    return;

                }
                imgComp.setAttribute('src', 'img/' + gambar[i++] + '.jpg');
                if (i == gambar.length) i = 0;

            }, 100)
        }

        gacha.addEventListener('click', function () {
            const gachaComp = pilihanComp();
            let count = localStorage.getItem(localStorageKey);
            count++;
            localStorage.setItem(localStorageKey, count);
            dore.innerText = localStorage.getItem(localStorageKey);

            console.log(gachaComp);
            putar();
            // const tes = setTimeout(function () {
            //     // const brain = document.querySelector('.container .gacha');

            //     // brain.setAttribute('src', 'img/' + gachaComp + '.jpg');


            // }, 2000);


        });

        const stop = document.querySelector('#drog');
        stop.addEventListener('click', function () {

            setTimeout(putar, 1000);

            clearTimeout(putar);



        });
        // merestar local storage
        const damee = document.querySelector('#dame');
        damee.addEventListener("click", function () {
            localStorage.removeItem(localStorageKey);
            dore.innerText = 0;
        });




    });

}

