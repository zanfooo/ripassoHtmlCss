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
