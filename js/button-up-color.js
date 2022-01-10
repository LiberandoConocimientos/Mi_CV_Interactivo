// -
// BOTÓN UP, y BOTÓN MODO color pantalla
// ---------------------------------------------------------



// Botón para subir al inicio de la Pág. -------------------------------------
const btnUp = document.getElementById("btn-up");

window.onscroll = (e)=> {								// muestra o desapacere boton-up si scroll > 500 posiciones
	scrollY > 500
		? btnUp.style.transform = "scale(1)"			// muestra el btn aumentandolo
		:btnUp.style.transform = "scale(0)"				// desaparece el btn disminuyendolo
}

btnUp.addEventListener("click",(e)=> scrollTo({			// subida suavizada la pág hasta el top
	top: 0,	behavior: `smooth`
}))



// Modo light-dark ------------------------------ ----------------------
const swichOne = document.getElementById("swich-one");
let modeScreen = localStorage.getItem(`mode-screen`);



// Carga inicial, actualizacion o apertura nueva, y aplica -------------------
if (modeScreen == undefined) localStorage.setItem(`mode-screen`, `light`);

if (modeScreen == `dark`) {
	document.body.classList.replace("light", modeScreen);
	document.getElementById("swich-one").checked = true
}



// Si el usuario cambió, determina y aplica ------------------------------------
swichOne.addEventListener("click", function() {
	modeScreen = localStorage.getItem(`mode-screen`);
	if (modeScreen == `light`) {
		modeScreen = `dark`;
		document.body.classList.replace("light", modeScreen)
	} else {
		modeScreen = `light`;
		document.body.classList.replace("dark", modeScreen)
	}
	document.body.style.transition = "background 0.3s";		// transición suave para el cambio del fondo
	localStorage.setItem(`mode-screen`, modeScreen)
});