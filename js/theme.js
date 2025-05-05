/*
first set up the default theme : considering the cached value first,
 if there isn't any, 
 set it to be light, 
*/

const cachedTheme = localStorage.getItem("theme") || "light";
document.body.classList.add(cachedTheme);
document.addEventListener(
  "DOMContentLoaded",

  /*
At the same time, 
add an event listener, 
saying when the DOM is ready, 
we will set up the icon based on the default theme we put in the DOM earlier.
*/

  () => {
    const icon = document.getElementById("theme-icon");

    icon.src =
      cachedTheme === "dark"
        ? "/Icons/Light_Switch/moon.svg"
        : "/Icons/Light_Switch/sun.svg";

    const toggleTheme = document.getElementById("toggle-theme");

    toggleTheme.addEventListener(
      "click",

      /*
        and add another event listener, detecting the toggle of the button, 
        making the theme of body and the button in sync with the toggle of current stage.
      */

      () => {
        const isDark = document.body.classList.toggle("dark");
        document.body.classList.toggle("light", !isDark);

        localStorage.setItem("theme", isDark ? "dark" : "light");

        icon.src = isDark
          ? "/Icons/Light_Switch/moon.svg"
          : "/Icons/Light_Switch/sun.svg";
      }
    );
  }
);
