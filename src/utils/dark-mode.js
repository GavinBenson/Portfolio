
const darkMode = () => {
    const themeToggleBtns = document.querySelectorAll('#theme-toggle');

    const theme = localStorage.getItem('theme');

    // On mount
    theme && document.body.classList.add(theme);

    // Handlers
    const handleThemeToggle = () => {
        document.body.classList.toggle('lightMode');
        if (document.body.classList.contains('lightMode')) {
            localStorage.setItem('theme', 'lightMode');
        } else {
            localStorage.removeItem('theme');
            document.body.removeAttribute('class');
        }
    }

    // Events
    themeToggleBtns.forEach(btn =>
        btn.addEventListener('click', handleThemeToggle)
    );
}

export default darkMode;
