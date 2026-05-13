(function () {
      const root = document.documentElement;
      const toggle = document.querySelector('[data-theme-toggle]');
      let theme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'dark' : 'light';

      const renderIcon = () => {
        toggle.innerHTML = theme === 'dark'
          ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
          : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
      };

      root.setAttribute('data-theme', theme);
      renderIcon();

      toggle.addEventListener('click', function () {
        theme = theme === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', theme);
        toggle.setAttribute('aria-label', theme === 'dark' ? 'Alternar para tema claro' : 'Alternar para tema escuro');
        renderIcon();
      });
    })();
