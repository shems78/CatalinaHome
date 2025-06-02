import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Monitor, Smartphone, Search, Settings, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function WebDevelopment() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: t.servicePages.webDev.features.responsive.title,
      description: t.servicePages.webDev.features.responsive.description,
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: t.servicePages.webDev.features.seo.title,
      description: t.servicePages.webDev.features.seo.description,
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: t.servicePages.webDev.features.cms.title,
      description: t.servicePages.webDev.features.cms.description,
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t.servicePages.webDev.features.performance.title,
      description: t.servicePages.webDev.features.performance.description,
    },
  ];

  const technologies = [
    'React', 'Vue.js', 'Angular', 'TypeScript', 'Node.js', 'PHP',
    'WordPress', 'Shopify', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'
  ];

  const benefits = [
    'Design moderne et professionnel',
    'Optimisation pour les moteurs de recherche',
    'Performance et vitesse optimales',
    'Sécurité renforcée',
    'Support technique continu',
    'Formation utilisateur incluse'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white/50 dark:bg-black/50">
              {t.services.webDev.title}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.servicePages.webDev.hero}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.servicePages.webDev.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  {t.header.contact}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.servicePages.webDev.features.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies utilisées
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Nous utilisons les dernières technologies pour créer des sites web performants
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 hover:from-purple-200 hover:to-blue-200 dark:hover:from-purple-800/50 dark:hover:to-blue-800/50 transition-all"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Pourquoi choisir nos services ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Nous créons des sites web qui non seulement ont fière allure, mais qui génèrent également des résultats pour votre entreprise.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Processus de développement</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Analyse des besoins</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Design et maquettes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Développement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <span>Tests et lancement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à lancer votre projet web ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}