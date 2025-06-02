import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Clock, AlertTriangle, Eye, Phone, Wrench, CheckCircle } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/header';

export default function Maintenance() {
  const { t } = useLanguage();

  const maintenanceServices = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t.servicePages.maintenance.services.preventive.title,
      description: t.servicePages.maintenance.services.preventive.description,
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: t.servicePages.maintenance.services.corrective.title,
      description: t.servicePages.maintenance.services.corrective.description,
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: t.servicePages.maintenance.services.security.title,
      description: t.servicePages.maintenance.services.security.description,
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: t.servicePages.maintenance.services.monitoring.title,
      description: t.servicePages.maintenance.services.monitoring.description,
    },
  ];

  const plans = [
    {
      name: 'Essential',
      price: '99€',
      period: '/mois',
      description: 'Pour les petites entreprises',
      features: [
        'Maintenance préventive mensuelle',
        'Support par email',
        'Sauvegardes automatiques',
        'Mises à jour de sécurité',
        'Rapport mensuel',
      ],
      popular: false,
    },
    {
      name: 'Professionnel',
      price: '199€',
      period: '/mois',
      description: 'Pour les entreprises en croissance',
      features: [
        'Maintenance préventive bimensuelle',
        'Support téléphonique prioritaire',
        'Surveillance 24/7',
        'Intervention d\'urgence',
        'Optimisation performance',
        'Rapport détaillé',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Sur mesure',
      period: '',
      description: 'Pour les grandes entreprises',
      features: [
        'Maintenance préventive hebdomadaire',
        'Support dédié 24/7',
        'Équipe technique assignée',
        'SLA garanti',
        'Audit sécurité trimestriel',
        'Formation équipe',
      ],
      popular: false,
    },
  ];

  const responseTimeData = [
    { type: 'Critique', time: '< 2h', description: 'Panne système majeure' },
    { type: 'Urgent', time: '< 4h', description: 'Problème impactant la production' },
    { type: 'Normal', time: '< 24h', description: 'Demande standard' },
    { type: 'Planifié', time: '< 72h', description: 'Amélioration ou optimisation' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white/50 dark:bg-black/50">
              {t.services.maintenance.title}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              {t.servicePages.maintenance.hero}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t.servicePages.maintenance.description}
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
              {t.servicePages.maintenance.services.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Une gamme complète de services pour maintenir vos systèmes IT en parfait état
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceServices.map((service, index) => (
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

      {/* Response Time Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Temps de réponse garantis
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Nous nous engageons sur des délais d'intervention selon la criticité
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {responseTimeData.map((item, index) => (
              <Card key={index} className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-white mb-2">
                    <Clock className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.type}
                  </CardTitle>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {item.time}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Plans de maintenance
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Choisissez le plan qui correspond à vos besoins
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      Plus populaire
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                      {plan.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-300 ml-1">
                      {plan.period}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    {plan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/quote">
                    <Button 
                      className={`w-full mt-6 ${plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                        : 'bg-gray-600 hover:bg-gray-700'
                      }`}
                    >
                      Choisir ce plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
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
                Pourquoi la maintenance est cruciale ?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Une maintenance régulière de vos systèmes IT permet d'éviter les pannes coûteuses et d'optimiser les performances.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Réduction de 90% des pannes système</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Amélioration des performances jusqu'à 40%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">Sécurité renforcée contre les cybermenaces</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">ROI positif dès le premier mois</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Support multicanal</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">Support téléphonique</div>
                      <div className="text-sm opacity-90">7j/7 de 8h à 20h</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">Urgences 24/7</div>
                      <div className="text-sm opacity-90">Intervention immédiate</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Eye className="h-6 w-6" />
                    <div>
                      <div className="font-semibold">Surveillance continue</div>
                      <div className="text-sm opacity-90">Détection proactive</div>
                    </div>
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
            Protégez vos systèmes IT dès aujourd'hui
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Ne laissez pas une panne impacter votre activité. Contactez-nous pour un audit gratuit.
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
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}