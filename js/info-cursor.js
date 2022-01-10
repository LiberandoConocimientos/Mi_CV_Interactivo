// -
// CONTROL MOVIMIENTO DEL MOUSE
// ---------------------------------------------------


const cursorInfo = document.getElementById(`cursor-info`);
const dateTime = document.getElementById(`date-time`);
let myTime;


// Determina la fecha y la hora a mostrar -----------------------
enableDateTime();
setInterval(enableDateTime, 1000);


// Muestra la información al mover el mouse  -----------------------
document.onmousemove = function(e) {
	cursorInfo.classList.remove("cursor-hidden");
	dateTime.classList.remove("cursor-hidden");
	position(e);
	myTime = setTimeout(()=> {
		cursorInfo.classList.add("cursor-hidden");
		dateTime.classList.add("cursor-hidden");
		// if (home) cursorShadow.classList.add("cursor-hidden")
	}, 3000)
}


// Funciones que procesan la información a mostrar  -----------------------
function position(e) {
	let x = e.clientX;
	let y = e.clientY;
	cursorInfo.innerHTML = `X:${x} / Y:${y}`;
	clearTimeout(myTime)
}


function enableDateTime() {
	let currentDate = new Date();
	let hours = currentDate.getHours();
	let minutes = currentDate.getMinutes();
	let seconds = currentDate.getSeconds();

	let enableAmPm = hours > 12 ? "pm" : "am";
	let enableHours = hours > 12 ? hours-= 12 : hours;
		enableHours = hours < 10 ? "0" + hours : hours;
	let enableMinutes = minutes < 10 ? "0" + minutes : minutes;
	let enableSeconds = seconds < 10 ? "0" + seconds : seconds;

	let dayText = [`Lunes`,`Martes`,`Miércoles`,`Jueves`,`Viernes`,`Sábado`,`Domingo`];
	let enableDay = dayText[currentDate.getDay()];

	let montText = [`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];
	let enableMont = montText[currentDate.getMonth()];

	let dayMonthNum = currentDate.getDate();
	let year = currentDate.getFullYear();
	
	dateTime.innerHTML = `${enableDay}, ${dayMonthNum} de ${enableMont} de ${year}  [`+
		`${enableHours}:${enableMinutes}:${enableSeconds} ${enableAmPm}]`
}