import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  return (
    <button
      onClick={toggleLang}
      className="text-sm border border-gray-400 px-3 py-1 rounded hover:bg-white hover:text-black transition"
    >
      {i18n.language === 'en' ? 'ES' : 'EN'}
    </button>
  )
}
