// -
// Carga y reajuste de Pantalla
// ---------------------------------------------------


copyright = document.getElementById("copyright");

window.onload = (e)=> startScreen();			// Carga inicial de pantalla
window.onresize = (e)=> startScreen();		// cambio de tamaño pantalla

function startScreen() {
	getActualWidth() >= 1140
		? modeScreenBig()
		: modeScreenSmall()
}

function modeScreenSmall() {
	copyright.classList.add("class-hidden")			// muestra copyright
}

function modeScreenBig() {
	copyright.classList.remove("class-hidden")		// muestra copyright
}

function getActualWidth() {							// captura el ancho de win en diferentes navegadores
    var actualWidth = window.innerWidth ||
                      document.documentElement.clientWidth ||
                      document.body.clientWidth ||
                      document.body.offsetWidth;
    return actualWidth;
}