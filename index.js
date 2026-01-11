(() => {
    const toggleBtn = document.getElementById('lang-toggle');
    if (!toggleBtn) return;

    const getPreferredLang = () => {
        const saved = localStorage.getItem('site-lang');
        if (saved) return saved;
        return navigator.language.startsWith('ja') ? 'ja' : 'en';
    };

    const setLang = (lang) => {
        document.documentElement.lang = lang;
        toggleBtn.textContent = lang === 'en' ? '日本語' : 'English';
        localStorage.setItem('site-lang', lang);

        document.querySelectorAll('.en-only').forEach(el => el.hidden = lang !== 'en');
        document.querySelectorAll('.ja-only').forEach(el => el.hidden = lang !== 'ja');
    };

    toggleBtn.addEventListener('click', () => {
        const isEn = document.documentElement.lang === 'en';
        setLang(isEn ? 'ja' : 'en');
    });

    setLang(getPreferredLang());
})();