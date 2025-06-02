import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Smartphone, Monitor, Globe, Link2, Database, Users, Shield, Cpu } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/header';

export default function BusinessApps() {
  const { t } = useLanguage();

  const appTypes = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t.servicePages.businessApps.features.mobile.title,
      description: t.servicePages.businessApps.features.mobile.description,
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: t.servicePages.businessApps.features.desktop.title,
      description: t.servicePages.businessApps.features.desktop.description,
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t.servicePages.businessApps.features.web.title,
      description: t.servicePages.businessApps.features.web.description,
    },
    {
      icon: <Link2 className="h-8 w-8" />,
      title: t.servicePages.businessApps.features.integration.title,
      description: t.servicePages.businessApps.features.integration.description,
    },
  ];

  const industries = [
    { name: 'Commerce de détail', description: 'Gestion des stocks et points de vente' },
    { name: 'Santé', description: 'Gestion des patients et dossiers médicaux' },
    { name: 'Éducation', description: 'Plateformes d\'apprentissage en ligne' },
    { name: 'Finance', description: 'Solutions de comptabilité et facturation' },
    { name: 'Logistique', description: 'Suivi des expéditions et livraisons' },
    { name: 'Immobilier', description: 'Gestion de biens et clients' },
  ];

  const benefits = [
    { icon: <Users className="h-6 w-6" />, title: 'Améliore la productivité', description: 'Automatisation des tâches répétitives' },
    { icon: <Database className="h-6 w-6" />, title: 'Centralise les données', description: 'Une seule source de vérité pour votre entreprise' },
    { icon: <Shield className="h-6 w-6" />, title: 'Sécurisé', description: 'Protection avancée de vos données sensibles' },
    { icon: <Cpu className="h-6 w-6" />, title: 'Évolutif', description: 'Grandit avec votre entreprise' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white/50 dark:bg-black/50">
              {t.services.businessApps.title}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.servicePages.businessApps.hero}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.servicePages.businessApps.description}
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

      {/* App Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t.servicePages.businessApps.features.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Nous développons tous types d'applications pour répondre à vos besoins spécifiques
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {appTypes.map((type, index) => (
              <Card key={index} className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Secteurs d'activité
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Nous travaillons avec des entreprises de tous secteurs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {industry.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Avantages de nos applications métiers
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Notre processus de développement
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Nous suivons une méthodologie éprouvée pour garantir le succès de votre projet d'application métier.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Analyse des besoins</h3>
                    <p className="text-gray-600 dark:text-gray-300">Étude approfondie de vos processus métiers actuels</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Conception de l'architecture</h3>
                    <p className="text-gray-600 dark:text-gray-300">Design de l'architecture technique et fonctionnelle</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Développement agile</h3>
                    <p className="text-gray-600 dark:text-gray-300">Développement par sprints avec livraisons régulières</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Déploiement et formation</h3>
                    <p className="text-gray-600 dark:text-gray-300">Mise en production et formation de vos équipes</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Technologies utilisées</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Mobile</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>React Native</li>
                      <li>Flutter</li>
                      <li>Swift/Kotlin</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Desktop</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>Electron</li>
                      <li>.NET</li>
                      <li>Java</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Web</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>React</li>
                      <li>Angular</li>
                      <li>Vue.js</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend</h4>
                    <ul className="text-sm space-y-1 opacity-90">
                      <li>Node.js</li>
                      <li>Python</li>
                      <li>C# / .NET</li>
                    </ul>
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
            Prêt à digitaliser vos processus métiers ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Discutons de vos besoins et créons ensemble l'application qui transformera votre entreprise
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