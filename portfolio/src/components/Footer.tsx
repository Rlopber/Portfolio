import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="p-4 text-center border-t dark:border-gray-700 text-sm">
      {t('footer.madeWith')} <strong className="ml-1">Ralowl</strong>
    </footer>
  )
}