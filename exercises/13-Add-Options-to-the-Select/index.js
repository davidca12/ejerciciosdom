window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	for (let index = 0; index < countries.length; index++) {
		document.querySelector("#mySelect").innerHTML = countries[index];
	}

	//a.innerHTML = countries;
};
