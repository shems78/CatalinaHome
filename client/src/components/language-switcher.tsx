import { useLanguage } from '@/hooks/use-language';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 bg-white/10 rounded-full p-1 backdrop-blur-sm">
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'fr'
            ? 'bg-gradient-to-r from-yellow-400 to-pink-400 text-slate-900 shadow-lg'
            : 'text-yellow-50 hover:bg-white/10'
        }`}
      >
        FR
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
          language === 'en'
            ? 'bg-gradient-to-r from-yellow-400 to-pink-400 text-slate-900 shadow-lg'
            : 'text-yellow-50 hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
}
