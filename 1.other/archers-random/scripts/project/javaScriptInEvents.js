

const scriptsInEvents = {

	async Estorage_Event1_Act1(runtime, localVars)
	{
		document.body.style.webkitUserSelect = "none"; // iOS metin seçimini engelle
		document.body.style.userSelect = "none"; // Standart metin seçimini engelle
		document.body.style.webkitTapHighlightColor = "rgba(0,0,0,0)"; // iOS vurgulama rengini kaldır
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
