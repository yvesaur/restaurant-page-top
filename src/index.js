/* CSS Reset
   ========================================================================== */
import "./assets/styles/normalize.css";
/* ========================================================================== */

import "./assets/styles/colorPalette.css";
import "./index.css";

/* Custom Styles
   ========================================================================== */
import "./assets/styles/components/buttonStyles.css";
import "./assets/styles/layoutStyles.css";
import "./assets/styles/stateStyles.css";
/* ========================================================================== */

/* Pages import
   ========================================================================== */
import generateContactPage from "./pages/contact/contact";
import generateHomepage from "./pages/home/home";
import generateMenuPage from "./pages/menu/menu";
/* ========================================================================== */

const mainElement = document.querySelector("body > main");
const navButtons = document.querySelectorAll(".hero-nav > a");

console.log(navButtons);

function initHomepage() {
	mainElement.innerHTML = "";
	mainElement.innerHTML += generateHomepage();

	mainElement.classList.remove("menu");
	mainElement.classList.remove("contact");
	mainElement.classList.add("home");

	navButtons[0].classList.add("primary-bg-active");
	navButtons[1].classList.remove("primary-bg-active");
	navButtons[2].classList.remove("primary-bg-active");
}

function addMenuPage() {
	mainElement.innerHTML = "";
	mainElement.innerHTML += generateMenuPage();

	mainElement.classList.remove("home");
	mainElement.classList.remove("contact");
	mainElement.classList.add("menu");

	navButtons[1].classList.add("primary-bg-active");
	navButtons[0].classList.remove("primary-bg-active");
	navButtons[2].classList.remove("primary-bg-active");
}

function addContactPage() {
	mainElement.innerHTML = "";
	mainElement.innerHTML += generateContactPage();

	mainElement.classList.remove("home");
	mainElement.classList.remove("menu");
	mainElement.classList.add("contact");

	navButtons[2].classList.add("primary-bg-active");
	navButtons[0].classList.remove("primary-bg-active");
	navButtons[1].classList.remove("primary-bg-active");
}

// Home Nav button
navButtons[0].addEventListener("click", initHomepage);

// Menu Nav button
navButtons[1].addEventListener("click", addMenuPage);

// Contact Nav button
navButtons[2].addEventListener("click", addContactPage);

initHomepage();

console.log("Webpack is running");
