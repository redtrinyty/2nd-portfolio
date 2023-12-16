document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({


        items: [
            { id: 1, name: 'robusta brazil', img: '1.jpg', price: 20000 },
            { id: 2, name: 'americano laet', img: '2.jpg', price: 20000 },
            { id: 3, name: 'aceh gayo', img: '3.jpg', price: 25000 },
            { id: 4, name: 'arabica blend', img: '4.jpg', price: 30000 },
            { id: 5, name: 'americano dark', img: '5.jpg', price: 40000 }
        ],
    }));
});

// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(number)
}