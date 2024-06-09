var parametros = new URLSearchParams(window.location.search);
    var inversion = parametros.get('inversion');
    var vida = parametros.get('vida');
    var tasa = parametros.get('tasa');
    
    document.getElementById('inversion').value = inversion;
    document.getElementById('vida').value = vida;
    document.getElementById('tasa').value = tasa;


document.getElementById('caue-form2').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe y la página se recargue

    const inversion = document.getElementById('inversion');
    const vida = document.getElementById('vida');
    const tasa = document.getElementById('tasa');
    const costo = document.getElementById('costo');

    let isValid = true;

    // Reset warnings
    document.getElementById('warning-inversion').innerText = '';
    document.getElementById('warning-vida').innerText = '';
    document.getElementById('warning-tasa').innerText = '';

    if (!inversion.checkValidity()) {
        document.getElementById('warning-inversion').innerText = 'Por favor, ingrese la inversión inicial.';
        isValid = false;
    }
    if (!vida.checkValidity()) {
        document.getElementById('warning-vida').innerText = 'Por favor, ingrese la vida útil.';
        isValid = false;
    }
    if (!tasa.checkValidity()) {
        document.getElementById('warning-tasa').innerText = 'Por favor, ingrese la tasa de descuento.';
        isValid = false;
    }

    if (isValid) {

        // Realizar cálculo de CAUE
        const tasa_decimal = parseFloat(tasa.value) / 100;
        const factor_recuperacion_capital = (tasa_decimal * Math.pow(1 + tasa_decimal, parseFloat(vida.value))) / (Math.pow(1 + tasa_decimal, parseFloat(vida.value)) - 1);
        const caue = parseFloat(inversion.value) * factor_recuperacion_capital + parseFloat(costo.value);
        
        // Mostrar resultado de CAUE en el lugar indicado
        document.getElementById('resultado-caue').textContent = caue.toFixed(2);
         
        document.getElementById('titulo-resultado').textContent = "El resultado de CAUE es:";

    }
    
});

function volver() {
    window.location.href = "caue.html";
}