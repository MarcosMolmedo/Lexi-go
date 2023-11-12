// Array de textos para cambiar dentro de la imagen gracias
const textosGracias = [
    " Lexi -go, es una empresa de traducción con mucho compromiso con entrega rápida y precios razonables. Kilimo",
    "Empresa muy seria y profesional. Rapidez y seriedad. Realizan una labor práctica y segura y con validez judicial. Ojalá hubiese muchas empresas trabajando con este interés y atención al cliente.",
    "La mejor atención al cliente para traducción. El equipo ayuda mucho. Se aseguran de que obtengas lo que necesitas con tiempos y costos razonables. Sus traductores son buenos y saben hacer su trabajo muy bien. Luis Grosembacher Inventigador de CONICEF",
    "Yohana ofreció un excelente servicio me ayudo a traducir mis documentos en menos de 48 horas y con respuestas inmediatas.",
    "¡Altamente recomendables! Lexi-go tradujo documentos personales a un precio muy razonable y las entregas fueron sumamente rápidas. El servicio al cliente también es sobresaliente. Cada uno de mis correos electrónicos fue respondido en tiempo récord. Sin dudas, los contrataría otra vez.",
    "«La mejor academia de inglés, clases divertidas, amenas y con mucho aprendizaje, Yohana es una gran profesional.»",
];

let currentIndexGracias = 0;

// Función para cambiar el texto
function cambiarTextoGracias() {
    document.getElementById("texto-cambiante-gracias").textContent = textosGracias[currentIndexGracias];
    currentIndexGracias = (currentIndexGracias + 1) % textosGracias.length;
}

// Cambia el texto automáticamente cada 10 segundos
setInterval(cambiarTextoGracias, 10000);