
//abrir y cerrar boton
function toggleInfo(serviceNumber) {
    var infoDiv = document.getElementById("additional-info" + serviceNumber);
    if (infoDiv.style.display === "none") {
        infoDiv.style.display = "block";
    } else {
        infoDiv.style.display = "none";
    }
}


// Función para descargar el archivo
function downloadFile() {
   //variable var
    var fileName = 'Catalogo_Judiaz.pdf'; // Nombre del archivo a descargar

    // Crea un elemento 'a' en el DOM
    var a = document.createElement('a');
    a.href = fileName;

    // Establece el atributo 'download' para indicar que es una descarga
    a.download = fileName;

    // Simula un clic en el enlace para iniciar la descarga
    document.body.appendChild(a);
    a.click();

    // Elimina el elemento 'a' del DOM
    document.body.removeChild(a);
}



// función para mostrar el mensaje de confirmación
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtener los datos del formulario
    var formData = new FormData(this);

    // Generar la hora aleatoria entre las 7 am y las 8 pm
    var horaAleatoria = generarHoraAleatoria();

    // Agregar la hora aleatoria como un parámetro adicional en la URL
    formData.append('Hora Reserva', horaAleatoria);

    // Convertir los datos en una cadena de consulta
    var searchParams = new URLSearchParams(formData).toString();

    // Redirigir a form.html con los datos del formulario y la hora aleatoria como parámetros de consulta
    window.location.href = 'form.html?' + searchParams;
});

// Función para generar una hora aleatoria entre las 7 am y las 8 pm
// Función para generar una hora aleatoria entre las 7 am y las 8 pm
function generarHoraAleatoria() {
    var hora = Math.floor(Math.random() * (20 - 7 + 1)) + 7; // Genera un número entre 7 y 20 (inclusive)
    var minutos = Math.floor(Math.random() * 60); // Genera un número entre 0 y 59 (inclusive)
    var amPM = hora >= 12 ? 'pm' : 'am'; // Determina si es am o pm
    hora = hora % 12 || 12; // Convierte la hora al formato de 12 horas
    return hora + ":" + (minutos < 10 ? "0" : "") + minutos + ' ' + amPM; // Asegura que los minutos tengan dos dígitos y agrega am/pm
}
