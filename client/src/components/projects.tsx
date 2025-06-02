import { useLanguage } from '@/hooks/use-language';
import { Link } from 'wouter';
import { ArrowRight, ExternalLink } from 'lucide-react';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      icon: 'fas fa-briefcase',
      title: t.projects.erp.title,
      description: t.projects.erp.description,
      gradient: 'from-blue-400 to-purple-400',
      tags: ['React', 'Node.js', 'PostgreSQL'],
      link: '/projects/erp-system',
      client: 'TechnoManufacture SARL',
      result: '75% réduction temps traitement'
    },
    {
      icon: 'fas fa-store',
      title: t.projects.showcase.title,
      description: t.projects.showcase.description,
      gradient: 'from-pink-400 to-red-400',
      tags: ['Vue.js', 'Tailwind', 'Firebase'],
      link: '/projects/showcase-website',
      client: 'Artisanat Traditionnel',
      result: '320% augmentation trafic'
    },
    {
      icon: 'fas fa-chart-line',
      title: t.projects.analytics.title,
      description: t.projects.analytics.description,
      gradient: 'from-green-400 to-teal-400',
      tags: ['Angular', 'Chart.js', 'MongoDB'],
      link: '/projects/analytics-dashboard',
      client: 'RetailTech Solutions',
      result: '60% amélioration décisions'
    },
    {
      icon: 'fas fa-shield-alt',
      title: t.projects.security.title,
      description: t.projects.security.description,
      gradient: 'from-orange-400 to-yellow-400',
      tags: ['Security', 'Audit', 'Compliance'],
      link: '/projects/security-audit',
      client: 'FinanceSecure SA',
      result: '100% conformité RGPD'
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white relative section-title">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Link key={index} href={project.link}>
              <div className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 card-hover hover:bg-slate-800/70 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <i className={`${project.icon} text-4xl bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}></i>
                  <ExternalLink className="h-5 w-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </div>
                
                <div className="mb-4">
                  <div className="text-sm text-blue-300 mb-2">{project.client}</div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-green-400 font-medium mb-2">Résultat clé:</div>
                  <div className="text-green-300 font-semibold">{project.result}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span className="text-sm font-medium">Voir l'étude de cas</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
