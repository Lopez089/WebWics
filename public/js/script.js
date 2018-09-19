function abrir() {
	document.getElementById("abrir").style.visibility="visible";
};
function cerrar() {
	document.getElementById("abrir").style.visibility="hidden";
};
function abrirauto() {
	setTimeout(abrirFeedback, 10000);
	function abrirFeedback() {
		document.getElementById("feedback").style.visibility="visible";
	}
}
abrirauto();
function abrirComentario() {
	document.getElementById("feedbackText").style.visibility="visible";
	document.getElementById("feedback").style.visibility="hidden";
};
function cerrarComen() {
	document.getElementById("feedbackText").style.visibility="hidden";
};


