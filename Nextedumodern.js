const text = document.querySelector(".third-text");
const textLoad = () => {
	setTimeout(() => {
		text.textContent = " Collab";
	}, 0);
	setTimeout(() => {
		text.textContent = " Help";
	}, 4000);
	setTimeout(() => {
		text.textContent = " & Guide";
	}, 8000); //1s = 1000 milliseconds
}
textLoad();
setInterval(textLoad, 12000);




var lastScrollTop = 0;
	navbar = document.getElementById("navbar")
window.addEventListener("scroll", function(){
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop > lastScrollTop) {
		navbar.style.top = "-100px";
	} else {
		navbar.style.top = "0";
	}
	lastScrollTop = scrollTop;
})