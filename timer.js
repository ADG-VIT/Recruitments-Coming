var deadline = new Date("Feb 03, 2022 12:00:00").getTime();
var x = setInterval(function () {
	var now = new Date().getTime();
	var t = deadline - now;
	var days = Math.floor(t / (1000 * 60 * 60 * 24));
	var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((t % (1000 * 60)) / 1000);
	document.getElementById("timer").innerHTML =
		days +
		" Days " +
		hours +
		" Hours " +
		minutes +
		" Mins " +
		seconds +
		" Sec ";
	if (t < 0) {
		clearInterval(x);
		document.getElementById("timer").innerHTML = "Check Below";
	}
}, 1000);
