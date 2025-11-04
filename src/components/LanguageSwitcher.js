import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LANGUAGE_OPTIONS = [
  { code: 'en' },
  { code: 'fr' },
  { code: 'es' },
  { code: 'pt' },
  { code: 'de' }
];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];
  const options = useMemo(() => LANGUAGE_OPTIONS, []);

  const handleChange = (event) => {
    const nextLanguage = event.target.value;
    i18n.changeLanguage(nextLanguage);
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('preferredLanguage', nextLanguage);
      } catch (error) {
        // Silently ignore storage issues
      }
    }
  };

  return (
    <div className="language-switcher">
      <label className="sr-only" htmlFor="language-select">
        {t('language.label', { defaultValue: 'Language' })}
      </label>
      <select
        id="language-select"
        className="language-select"
        value={currentLanguage}
        onChange={handleChange}
      >
        {options.map(({ code }) => (
          <option key={code} value={code}>
            {t(`language.options.${code}`, { defaultValue: code.toUpperCase() })}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
