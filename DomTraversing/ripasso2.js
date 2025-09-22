// Cambia i colori del sito in base alla scelta dell'utente
document.addEventListener('DOMContentLoaded', function() {
    var colorBtn = document.getElementById('changeColorBtn');
    var colorPicker = document.getElementById('colorPicker');
    if(colorBtn && colorPicker) {
        colorBtn.addEventListener('click', function() {
            var color = colorPicker.value;
            // Cambia il background del body
            document.body.style.background = color;
            // Cambia il colore del testo di tutto il sito
            document.body.style.color = getContrastYIQ(color);
            // Cambia il colore della box
            var box = document.querySelector('.box');
            if(box) {
                box.style.backgroundColor = color;
                box.style.color = getContrastYIQ(color);
            }
// Funzione per scegliere testo chiaro o scuro in base al colore di sfondo
function getContrastYIQ(hexcolor){
    hexcolor = hexcolor.replace('#', '');
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? '#222' : '#fff';
}
        });
    }
});

// Mostra un alert quando il form viene inviato

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            alert('Modulo inviato!');
            // e.preventDefault(); // decommenta per non inviare davvero il form
        });
    }
});
