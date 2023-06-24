function setTheme(e) {
  switch (e) {
    case "System":
      localStorage.removeItem("color-theme");
      break;
    case "Light":
      localStorage.setItem("color-theme", "light"),
        document.documentElement.classList.remove("dark");
      break;
    case "Dark":
      localStorage.setItem("color-theme", "dark"),
        document.documentElement.classList.add("dark");
  }
}
"dark" === localStorage.getItem("color-theme") ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
  ? document.documentElement.classList.add("dark")
  : document.documentElement.classList.remove("dark"),
  document.getElementById("theme").addEventListener("change", function (e) {
    setTheme(e.target.value);
  }),
  setTheme(localStorage.getItem("color-theme") || "System");
