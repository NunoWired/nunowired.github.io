(function () {
  const root = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  let theme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  const renderIcon = () => {
    toggle.innerHTML =
      theme === "dark"
        ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
        : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  };

  root.setAttribute("data-theme", theme);
  renderIcon();

  toggle.addEventListener("click", function () {
    theme = theme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", theme);
    toggle.setAttribute(
      "aria-label",
      theme === "dark"
        ? "Alternar para tema claro"
        : "Alternar para tema escuro",
    );
    renderIcon();
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const themeToggles = document.querySelectorAll("[data-theme-toggle]");

  let theme = "light";

  function getThemeIcon(currentTheme) {
    return currentTheme === "dark"
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function updateThemeButtons() {
    themeToggles.forEach(function (toggle) {
      toggle.innerHTML = getThemeIcon(theme);
      toggle.setAttribute(
        "aria-label",
        theme === "dark"
          ? "Alternar para tema claro"
          : "Alternar para tema escuro",
      );
    });
  }

  function applyTheme(newTheme) {
    theme = newTheme;
    root.setAttribute("data-theme", theme);
    updateThemeButtons();
  }

  applyTheme("light");

  themeToggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      applyTheme(theme === "dark" ? "light" : "dark");
    });
  });

  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Abrir menu" : "Fechar menu",
      );
      mobileMenu.hidden = isOpen;
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        mobileMenu.hidden = true;
      });
    });
  }
});
