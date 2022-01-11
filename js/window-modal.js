// -
// VENTANA MODAL
// ---------------------------------------------------------


const bodyModal = document.getElementById("body-modal");
let green = "0,255,0", blue = "0,0,255", red = "255,0,0", yellow = "255,223,0", black = "0,0,0"


// Iconos Contact y Adress de MyProfile ------------------------------------
const iconContac = document.getElementById("icon-profile-contact");
const iconAdress = document.getElementById("icon-profile-adress");
const iconProfile = document.getElementById("icon-profile");

iconProfile.addEventListener("click", function(e) {
	let tittle, text, color;
	if (e.target == iconContac) {
		color = black;
		tittle = "Contactos";
		text = "Telefono: +54 9 11 26890851<br><br>Email: centroceicca@gmail.com"
	} else if (e.target == iconAdress) {
		color = black;
		tittle = "Residencia";
		text = "Zona Almagro<br><br>Ciudad Autónoma de Buenos Aires<br><br>Argentina"
	} else {
		return
	}
	openModal(tittle, text, color);
	bodyModal.classList.remove("class-hidden")
})


// Ventana Modal  ----------------------------------------------
const closeModal = document.querySelector("#window-modal > span");
closeModal.addEventListener("click", function() {
	bodyModal.classList.add(`class-hidden`);
})

function openModal(tittle, text, color) {
	document.getElementById(`window-modal`).style.transform = "scale(0.9)";
	bodyModal.style.background = `rgba(${color},0.7)`;
	document.querySelector(`#window-modal > h3`).innerHTML = tittle;
	document.querySelector(`#window-modal > p`).innerHTML = text;
}