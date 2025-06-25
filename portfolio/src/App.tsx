import { useTranslation } from 'react-i18next';
import './languages';

function App() {
  const { t } = useTranslation()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">{t('greeting')}</h1>
    </div>
  )
}

export default App;