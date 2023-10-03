document.getElementById('cajeroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener datos del formulario
    const nombreUsuario = document.getElementById('nombreUsuario').value;
    const cantidadRetiro = parseInt(document.getElementById('cantidadRetiro').value);

    // Calcular billetes
    const billetes100 = Math.floor(cantidadRetiro / 100);
    const billetes50 = Math.floor((cantidadRetiro % 100) / 50);
    const billetes20 = Math.floor((cantidadRetiro % 50) / 20);
    const billetes10 = Math.floor((cantidadRetiro % 20) / 10);
    const billetes5 = Math.floor((cantidadRetiro % 10) / 5);
    const billetes1 = cantidadRetiro % 5;

    // Mostrar resultado
    const resultado = `
        <h2>Resultado:</h2>
        <p>Nombre de Usuario: ${nombreUsuario}</p>
        <p>Cantidad a Retirar: $${cantidadRetiro}</p>
        <p>Billetes de 100: ${billetes100}</p>
        <p>Billetes de 50: ${billetes50}</p>
        <p>Billetes de 20: ${billetes20}</p>
        <p>Billetes de 10: ${billetes10}</p>
        <p>Billetes de 5: ${billetes5}</p>
        <p>Billetes de 1: ${billetes1}</p>
    `;

    document.getElementById('resultado').innerHTML = resultado;
});