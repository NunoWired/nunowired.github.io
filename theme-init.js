(function () {
  var params = new URLSearchParams(window.location.search);
  var themeFromUrl = params.get("theme");
  var systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)",
  ).matches;
  var theme =
    themeFromUrl === "dark" || themeFromUrl === "light"
      ? themeFromUrl
      : systemPrefersDark
        ? "dark"
        : "light";
  document.documentElement.setAttribute("data-theme", theme);
})();
