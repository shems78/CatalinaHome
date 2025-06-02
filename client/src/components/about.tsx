import { useLanguage } from '@/hooks/use-language';

export function About() {
  const { t } = useLanguage();

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: t.language === 'fr' ? 'Technologies de pointe' : 'Cutting-edge technologies',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: 'fas fa-shield-alt',
      title: t.language === 'fr' ? 'Fiabilité' : 'Reliability',
      description: t.language === 'fr' ? 'Solutions robustes' : 'Robust solutions',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: 'fas fa-handshake',
      title: t.language === 'fr' ? 'Proximité' : 'Proximity',
      description: t.language === 'fr' ? 'Accompagnement personnalisé' : 'Personalized support',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative section-title">
          {t.about.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center card-hover hover:bg-slate-800/70 transition-all duration-300">
            <i className="fas fa-users text-6xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"></i>
            
            <h3 className="text-2xl font-bold mb-6 text-white">
              {t.about.whoWeAre}
            </h3>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {t.about.description}
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <i className={`${value.icon} text-white text-xl`}></i>
                  </div>
                  <h4 className="font-bold text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-slate-400 text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
