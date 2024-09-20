document.addEventListener("DOMContentLoaded", () => {
    const languageSelector = document.getElementById('languageSelector');

    // Function to switch language
    function switchLanguage(lang) {
        const allSpans = document.querySelectorAll('span[lang]');
        allSpans.forEach(span => {
            span.style.display = span.getAttribute('lang') === lang ? 'inline' : 'none';
        });
    }

    // Load language from localStorage if exists
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
        languageSelector.value = storedLanguage;
        switchLanguage(storedLanguage);
    }

    // Event listener for language change
    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        localStorage.setItem('language', selectedLanguage);
        switchLanguage(selectedLanguage);
    });
});
