import { loadFonts } from "https://cdn.jsdelivr.net/npm/spin-wheel@4.3.2/scripts/util.js";
import { props } from "./props.js";
import { Wheel } from "https://cdn.jsdelivr.net/npm/spin-wheel@4.3.2/dist/spin-wheel-esm.js";
window.onload = async () => {
  await loadFonts(props.map((i) => i.itemLabelFont));
  init();
};

function init() {
  const wheel = new Wheel(document.querySelector(".wheel-wrapper"));

  const dropdown = document.querySelector("select");

  // Initalise dropdown with the names of each example:
  for (const p of props) {
    const opt = document.createElement("option");
    opt.textContent = p.name;
    dropdown.append(opt);
  }

  // Handle dropdown change:
  dropdown.onchange = () => {
    wheel.init({
      ...props[dropdown.selectedIndex],
      rotation: wheel.rotation, // Preserve value.
    });
  };

  // Select default:
  dropdown.options[0].selected = "selected";
  dropdown.onchange();

  // Save object globally for easy debugging.
  window.wheel = wheel;
}
