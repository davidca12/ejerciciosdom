let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	var p = document.createElement("div");
	p.innerHTML = "Hello World";
	p.style.background = "yellow";
	document.body.appendChild(p);
});
