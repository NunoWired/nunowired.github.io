document.addEventListener("DOMContentLoaded", function () {
  const root = document.documentElement;
  const themeToggles = document.querySelectorAll("[data-theme-toggle]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.getElementById("mobile-menu");

  let theme = "light";

  function getThemeIcon(currentTheme) {
    return currentTheme === "dark"
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  function getThemeAriaLabel(currentTheme) {
    const pageLang = document.documentElement.lang || "pt-BR";
    const isEnglish = pageLang.toLowerCase().startsWith("en");

    if (isEnglish) {
      return currentTheme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme";
    }

    return currentTheme === "dark"
      ? "Alternar para tema claro"
      : "Alternar para tema escuro";
  }

  function updateThemeButtons() {
    themeToggles.forEach(function (toggle) {
      toggle.innerHTML = getThemeIcon(theme);
      toggle.setAttribute("aria-label", getThemeAriaLabel(theme));
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

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", function () {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));

      const isEnglish = (document.documentElement.lang || "")
        .toLowerCase()
        .startsWith("en");
      menuToggle.setAttribute(
        "aria-label",
        isOpen
          ? isEnglish
            ? "Open menu"
            : "Abrir menu"
          : isEnglish
            ? "Close menu"
            : "Fechar menu",
      );

      mobileMenu.hidden = isOpen;
    });

    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menuToggle.setAttribute("aria-expanded", "false");

        const isEnglish = (document.documentElement.lang || "")
          .toLowerCase()
          .startsWith("en");
        menuToggle.setAttribute(
          "aria-label",
          isEnglish ? "Open menu" : "Abrir menu",
        );

        mobileMenu.hidden = true;
      });
    });
  }
});
