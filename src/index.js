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
/* ========================================================================== */

/* Pages import
   ========================================================================== */
import generateHomepage from "./pages/home/home";
import generateMenuPage from "./pages/menu/menu";
/* ========================================================================== */

const mainElement = document.querySelector("body > main");
const navButtons = document.querySelectorAll(".hero-nav > a");

console.log(navButtons);

function initHomepage() {
	mainElement.innerHTML = "";
	mainElement.innerHTML += generateHomepage();
}

function addMenuPage() {
	mainElement.innerHTML = "";
	mainElement.innerHTML += generateMenuPage();
}

function addContactPage() {
	mainElement.innerHTML = "";
}

// Home Nav button
navButtons[0].addEventListener("click", initHomepage);

// Menu Nav button
navButtons[1].addEventListener("click", addMenuPage);

// Contact Nav button
navButtons[2].addEventListener("click", addContactPage);

initHomepage();

console.log("Webpack is running");
