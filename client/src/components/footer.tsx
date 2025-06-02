import { useLanguage } from '@/hooks/use-language';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex flex-col items-center gap-2">
            <i className="fas fa-house-laptop text-yellow-400 text-3xl drop-shadow-lg"></i>
            <span className="text-2xl font-bold gradient-text animate-gradient">
              CatalinaHome
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-slate-300 hover:text-yellow-400 transition-colors text-2xl">
              <i className="fab fa-facebook"></i>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <p className="text-lg mb-2">
            {t.footer.copyright}
          </p>
          <p className="text-slate-400">
            contact@catalinahome.net | +216 23 552 210
          </p>
        </div>
      </div>
    </footer>
  );
}
