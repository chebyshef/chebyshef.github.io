(function() {
	const setNumericpadMode = function () {
		var numerics = document.querySelectorAll("jqx-numeric-text-box input");
		
		numerics.forEach(element => element.setAttribute("inputmode", "decimal"));
	};
	
	window.GWebUtils = {
		setNumericpadMode
	};
}());