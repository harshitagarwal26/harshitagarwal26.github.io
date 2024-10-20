const STORAGE_KEY = "theme";
const THEME_ATTR = "data-theme";
const QUERY_KEY = "(prefers-color-scheme: dark)";

const themes = {
  LIGHT: "light",
  DARK: "dark",
};

initTheme();

function initTheme() {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme) {
    // Always respect the user's saved preference
    setTheme(savedTheme);
  } else if (window.matchMedia(QUERY_KEY).matches) {
    // Use the system's dark mode preference if no saved preference exists
    setTheme(themes.DARK);
  } else {
    // Default to dark theme if no other preferences exist
    setTheme(themes.DARK);
  }

  // Watch for system theme changes (only if no saved theme exists)
  window.matchMedia(QUERY_KEY).addEventListener("change", (e) => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    if (!savedTheme) {
      // Update the theme only if the user hasn't overridden it
      const newTheme = e.matches ? themes.DARK : themes.LIGHT;
      setTheme(newTheme);
    }
  });
}

function toggleTheme() {
  const currentTheme = getTheme();
  const newTheme = currentTheme === themes.DARK ? themes.LIGHT : themes.DARK;
  setTheme(newTheme);
  localStorage.setItem(STORAGE_KEY, newTheme); // Save user's preference
}

function getTheme() {
  return document.documentElement.getAttribute(THEME_ATTR);
}

function setTheme(value) {
  document.documentElement.setAttribute(THEME_ATTR, value);
}