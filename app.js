(() => {
    const root = document.documentElement;
    const storageKey = "terminal-portfolio-theme";

    root.classList.add("js");

    try {
        const savedTheme = localStorage.getItem(storageKey);
        if (savedTheme === "dark") {
            root.dataset.theme = "dark";
        } else {
            root.removeAttribute("data-theme");
        }
    } catch (error) {
        root.removeAttribute("data-theme");
    }

    function setupThemeToggle() {
        const toggle = document.getElementById("theme-toggle");
        if (!toggle) return;

        function syncToggle() {
            const isDark = root.dataset.theme === "dark";
            const nextTheme = isDark ? "light" : "dark";
            toggle.textContent = nextTheme;
            toggle.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
        }

        toggle.addEventListener("click", () => {
            const isDark = root.dataset.theme === "dark";

            if (isDark) {
                root.removeAttribute("data-theme");
            } else {
                root.dataset.theme = "dark";
            }

            try {
                localStorage.setItem(storageKey, isDark ? "light" : "dark");
            } catch (error) {
                // The selected theme still applies for the current page view.
            }

            syncToggle();
        });

        syncToggle();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", setupThemeToggle);
    } else {
        setupThemeToggle();
    }
})();
