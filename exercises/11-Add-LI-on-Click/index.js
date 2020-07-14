let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	var a = document.createElement("li");
	a.innerHTML = "Fourth Element";
	document.querySelector("#myList").appendChild(a);
});
