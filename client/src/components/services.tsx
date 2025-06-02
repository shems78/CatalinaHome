import { useLanguage } from '@/hooks/use-language';

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: 'fas fa-laptop-code',
      title: t.services.webDev.title,
      description: t.services.webDev.description,
      gradient: 'from-purple-400 to-pink-400',
    },
    {
      icon: 'fas fa-mobile-alt',
      title: t.services.businessApps.title,
      description: t.services.businessApps.description,
      gradient: 'from-blue-400 to-cyan-400',
    },
    {
      icon: 'fas fa-tools',
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      gradient: 'from-green-400 to-emerald-400',
    },
    {
      icon: 'fas fa-lightbulb',
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      gradient: 'from-yellow-400 to-orange-400',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative section-title">
          {t.services.title}
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center card-hover hover:bg-slate-800/70 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              <i className={`${service.icon} text-5xl mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}></i>
              <h3 className="text-xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-slate-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
