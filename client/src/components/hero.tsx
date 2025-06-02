import { useLanguage } from '@/hooks/use-language';

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    window.location.href = '/quote';
  };

  return (
    <section className="hero-background py-20 lg:py-32 text-center relative">
      <div className="relative z-10 px-6">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-3xl mx-auto">
          {t.hero.subtitle}
        </p>
        <button
          onClick={scrollToContact}
          className="bg-gradient-to-r from-pink-500 to-amber-500 hover:from-amber-500 hover:to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-pink-500/30 animate-float"
        >
          {t.hero.cta}
          <i className="fas fa-arrow-right ml-2"></i>
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-500/20 rounded-full animate-float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-float" style={{ animationDelay: '-4s' }}></div>
    </section>
  );
}
