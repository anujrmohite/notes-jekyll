// assets/js/darkmode.js

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded. Initializing dark mode script."); // Debug log 1

    const body = document.body;
    const toggleButton = document.getElementById('darkModeToggle');

    if (!toggleButton) {
        console.error("Dark mode toggle button with ID 'darkModeToggle' not found!"); // Debug log - Button not found
        return; // Stop if button is not found
    }

    console.log("Dark mode toggle button found:", toggleButton); // Debug log 2

    // Function to set theme and button state
    function setTheme(theme) {
        console.log("Setting theme to:", theme); // Debug log 3
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggleButton.textContent = '☀️'; // Sun icon
            toggleButton.title = 'Switch to light mode'; // Tooltip text
            console.log("Applied dark mode class and sun icon.");
        } else {
            body.classList.remove('dark-mode');
            toggleButton.textContent = '🌙'; // Moon icon
            toggleButton.title = 'Switch to dark mode'; // Tooltip text
            console.log("Removed dark mode class and moon icon.");
        }
        localStorage.setItem('theme', theme);
        console.log("Saved theme preference:", theme);
    }

    // Check for saved preference or system preference
    const currentMode = localStorage.getItem('theme');
    // Check if window.matchMedia is available (not in older browsers)
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    console.log("Current localStorage theme:", currentMode); // Debug log 4
    console.log("System prefers dark:", systemPrefersDark); // Debug log 5


    // Apply initial theme
    if (currentMode) {
        setTheme(currentMode);
    } else if (systemPrefersDark) {
        // If no saved preference, use system preference
        setTheme('dark');
    } else {
        // Default to light mode
        setTheme('light');
    }

    // Add event listener to the button
    toggleButton.addEventListener('click', function () {
        console.log("Toggle button clicked!"); // Debug log 6
        const newTheme = body.classList.contains('dark-mode') ? 'light' : 'dark';
        setTheme(newTheme);
    });

    console.log("Dark mode script initialization complete."); // Debug log 7
});