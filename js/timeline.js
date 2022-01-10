// 
// MENU Timeline
// -------------------------------------------------------------


const bodyTimeline = document.getElementById("body-timeline");
const mainBody = document.querySelector("main");
let enableSelect = localStorage.getItem(`mode-body`);		// lee la variable Local store


// Carga inicial, actualizacion o apertura nueva, y aplica -------------------
if (enableSelect == undefined) {
	localStorage.setItem(`mode-body`, `body-profile`);
	enableSelect = `body-profile`
}

updateBody(enableSelect, bodyTimeline.querySelector(`.${enableSelect}`))


// Si el usuario cambió, determina y aplica ------------------------------------
bodyTimeline.addEventListener("click", function(e) {
	let x = bodyTimeline.children.length, element;
	for (let i = 0; i < x; i++) {
		if (bodyTimeline.children[i] == e.target.parentNode || bodyTimeline.children[i] == (e.target.parentNode).parentNode) {
			let tag = bodyTimeline.children[i].classList[0];
			updateBody(tag, bodyTimeline.children[i]);
			localStorage.setItem(`mode-body`, tag)			// guarda en local store
		}
	}
})


function updateBody(tag, element) {
	let enableTimeline = bodyTimeline.querySelector(".enable-select");

	// actualiza la linea del tiempo a mostrar ------------
	if (enableTimeline) enableTimeline.classList.remove("enable-select");
	element.classList.add("enable-select");

	// actualiza la seccion del main a mostrar ------------
	mainBody.querySelector(`.class-free`).classList.replace(`class-free`,`class-hidden`);
	mainBody.querySelector(`#${tag}`).classList.replace(`class-hidden`,`class-free`)
}
