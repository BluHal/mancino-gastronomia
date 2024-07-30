// @ts-nocheck
import { goto } from "$app/navigation";

export function navigateToSection(sectionId) {
  const currentPath = window.location.pathname;

  if (currentPath !== "/") {
    // If we are not on the home page, navigate to the home page
    goto("/").then(() => {
      // After navigation completes, scroll to the section
      scrollToSection(sectionId);
    });
  } else {
    // If already on the home page, just scroll to the section
    scrollToSection(sectionId);
  }
}

function scrollToSection(sectionId) {
  const menuEl = document.getElementById("menu");

  if (menuEl) menuEl.remove();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
