const switchTheme = document.getElementById("theme-changer").addEventListener("click", changeTheme)
const themeLink = document.getElementById("theme-link");

function applyTheme(theme) {
    if(theme === "../common_styles_light.css") {
        themeLink.setAttribute("href", "../common_styles_dark.css");
    } else {
        themeLink.setAttribute("href", "../common_styles_light.css");
    }
}

function changeTheme() {
    const currTheme = themeLink.getAttribute("href").includes("dark") ? "dark" : "light";
    const newTheme = currTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);

    localStorage.setItem("theme", newTheme);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
});