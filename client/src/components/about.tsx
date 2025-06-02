import { useLanguage } from '@/hooks/use-language';

export function About() {
  const { t, language } = useLanguage();

  const values = [
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovation',
      description: language === 'fr' ? 'Technologies de pointe' : 'Cutting-edge technologies',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: 'fas fa-shield-alt',
      title: language === 'fr' ? 'Fiabilité' : 'Reliability',
      description: language === 'fr' ? 'Solutions robustes' : 'Robust solutions',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: 'fas fa-handshake',
      title: language === 'fr' ? 'Proximité' : 'Proximity',
      description: language === 'fr' ? 'Accompagnement personnalisé' : 'Personalized support',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative section-title">
          {t.about.title}
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Who We Are */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center card-hover hover:bg-slate-800/70 transition-all duration-300">
            <i className="fas fa-users text-6xl mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"></i>
            
            <h3 className="text-2xl font-bold mb-6 text-white">
              {t.about.whoWeAre}
            </h3>
            
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              {t.about.description}
            </p>
          </div>

          {/* Mission & Experience */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 card-hover hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-rocket text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {t.about.mission}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {t.about.missionText}
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 card-hover hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-chart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {t.about.experience}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {t.about.experienceText}
              </p>
            </div>
          </div>

          {/* Location & Expertise */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 card-hover hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {t.about.location}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {t.about.locationText}
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 card-hover hover:bg-slate-800/70 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-code text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {t.about.expertise}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {t.about.expertiseText}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-12 text-center card-hover hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-8 text-white">
              {t.about.values}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
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
