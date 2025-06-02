import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Target, Search, Cloud, Shield, Users, TrendingUp, CheckCircle, BarChart } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/header';

export default function Consulting() {
  const { t } = useLanguage();

  const consultingServices = [
    {
      icon: <Target className="h-8 w-8" />,
      title: t.servicePages.consulting.services.strategy.title,
      description: t.servicePages.consulting.services.strategy.description,
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: t.servicePages.consulting.services.assessment.title,
      description: t.servicePages.consulting.services.assessment.description,
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: t.servicePages.consulting.services.migration.title,
      description: t.servicePages.consulting.services.migration.description,
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t.servicePages.consulting.services.security.title,
      description: t.servicePages.consulting.services.security.description,
    },
  ];

  const expertise = [
    { 
      title: 'Transformation digitale',
      description: 'Accompagnement dans la modernisation de vos processus métiers',
      icon: <TrendingUp className="h-6 w-6" />
    },
    { 
      title: 'Architecture cloud',
      description: 'Conception et migration vers les plateformes cloud (AWS, Azure, GCP)',
      icon: <Cloud className="h-6 w-6" />
    },
    { 
      title: 'Cybersécurité',
      description: 'Audit sécurité et mise en conformité RGPD',
      icon: <Shield className="h-6 w-6" />
    },
    { 
      title: 'Management IT',
      description: 'Optimisation des équipes et processus informatiques',
      icon: <Users className="h-6 w-6" />
    }
  ];

  const benefits = [
    'Réduction des coûts IT jusqu\'à 30%',
    'Amélioration de la productivité',
    'Sécurisation des données',
    'Scalabilité et flexibilité',
    'Conformité réglementaire',
    'Innovation technologique'
  ];

  const methodologySteps = [
    {
      step: '1',
      title: 'Audit initial',
      description: 'Évaluation complète de votre infrastructure IT actuelle'
    },
    {
      step: '2',
      title: 'Analyse des besoins',
      description: 'Identification des enjeux business et techniques'
    },
    {
      step: '3',
      title: 'Stratégie sur mesure',
      description: 'Élaboration d\'une feuille de route personnalisée'
    },
    {
      step: '4',
      title: 'Accompagnement',
      description: 'Support dans la mise en œuvre des recommandations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white/50 dark:bg-black/50">
              {t.services.consulting.title}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.servicePages.consulting.hero}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.servicePages.consulting.description}
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

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.servicePages.consulting.services.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Notre expertise pour vous accompagner dans votre transformation digitale
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingServices.map((service, index) => (
              <Card key={index} className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Nos domaines d'expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Une expertise approfondie dans tous les aspects de l'IT moderne
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <Card key={index} className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Notre méthodologie
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Une approche structurée pour garantir le succès de votre projet
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologySteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Résultats tangibles pour votre entreprise
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Nos interventions de conseil génèrent des bénéfices mesurables et durables pour votre organisation.
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
                <h3 className="text-2xl font-bold mb-6">Nos certifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <BarChart className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">ITIL Foundation</div>
                      <div className="text-sm opacity-90">Gestion des services IT</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Cloud className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">AWS Certified</div>
                      <div className="text-sm opacity-90">Solutions Architect</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">ISO 27001</div>
                      <div className="text-sm opacity-90">Sécurité de l'information</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">PMP Certified</div>
                      <div className="text-sm opacity-90">Gestion de projet</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Témoignage client
            </h2>
          </div>
          <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                "Grâce à Catalina Home, nous avons réduit nos coûts IT de 35% tout en améliorant notre sécurité. 
                Leur expertise nous a permis de migrer vers le cloud en toute sérénité."
              </blockquote>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  M.B
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">Mohamed Ben Ali</div>
                  <div className="text-gray-600 dark:text-gray-300">DSI - TechnoTunisie SARL</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transformez votre IT dès aujourd'hui
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Bénéficiez d'un audit IT gratuit et découvrez comment optimiser votre infrastructure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Audit gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Planifier un rendez-vous
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}