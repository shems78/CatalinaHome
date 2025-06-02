import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Globe, Play, Users, Smartphone, CheckCircle, Target, Monitor } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/header';

export default function CapPlayer() {
  const { t } = useLanguage();

  const projectDetails = {
    client: "Cap Entertainment",
    industry: "Streaming & Divertissement",
    duration: "8 mois",
    teamSize: "7 développeurs",
    budget: "€65,000",
    location: "Tunis, Tunisie"
  };

  const challenges = [
    "Développement d'une plateforme streaming multi-plateforme",
    "Architecture scalable pour gérer un trafic important",
    "Interface utilisateur moderne et responsive",
    "Système de gestion de contenu avancé",
    "Optimisation des performances de streaming"
  ];

  const solutions = [
    "Architecture web progressive (PWA) performante",
    "Infrastructure cloud élastique et CDN global",
    "Design responsive avec React et TypeScript",
    "CMS personnalisé avec workflow d'approbation",
    "Optimisation automatique de la qualité vidéo"
  ];

  const results = [
    { metric: "Utilisateurs actifs", value: "75K+", icon: <Users className="h-6 w-6" /> },
    { metric: "Temps de visionnage", value: "3.2h/jour", icon: <Play className="h-6 w-6" /> },
    { metric: "Disponibilité", value: "99.9%", icon: <Monitor className="h-6 w-6" /> },
    { metric: "Vitesse de chargement", value: "1.5s", icon: <Globe className="h-6 w-6" /> }
  ];

  const features = [
    {
      title: "Streaming adaptatif",
      description: "Qualité vidéo qui s'adapte automatiquement à la connexion utilisateur",
      icon: <Play className="h-8 w-8" />
    },
    {
      title: "Multi-plateforme",
      description: "Compatible sur tous les appareils : web, mobile, tablette et TV",
      icon: <Smartphone className="h-8 w-8" />
    },
    {
      title: "Interface moderne",
      description: "Design élégant et navigation intuitive pour une expérience optimale",
      icon: <Monitor className="h-8 w-8" />
    },
    {
      title: "Performance optimisée",
      description: "Chargement ultra-rapide et streaming fluide sans interruption",
      icon: <Globe className="h-8 w-8" />
    }
  ];

  const technologies = [
    "React.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS CloudFront", "Docker", "WebRTC", "HLS"
  ];

  const platformStats = [
    { label: "Contenus disponibles", value: "10,000+" },
    { label: "Résolution maximale", value: "4K Ultra HD" },
    { label: "Langues supportées", value: "15" },
    { label: "Pays couverts", value: "25" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white/50 dark:bg-black/50">
              Plateforme Web
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Cap Player - Plateforme Streaming
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Développement d'une plateforme de streaming moderne et performante avec plus de 75 000 utilisateurs actifs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://capplayer.com/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  Visiter Cap Player
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Une plateforme de streaming nouvelle génération
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Cap Player est une plateforme de streaming développée pour offrir une expérience de visionnage exceptionnelle. 
                Conçue avec les technologies web les plus avancées, elle permet aux utilisateurs de profiter de contenus 
                haute qualité avec une interface moderne et intuitive.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Client</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{projectDetails.client}</div>
                </div>
                <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Secteur</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{projectDetails.industry}</div>
                </div>
                <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Durée</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{projectDetails.duration}</div>
                </div>
                <div className="bg-white/60 dark:bg-black/40 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-sm text-gray-600 dark:text-gray-400">Équipe</div>
                  <div className="font-semibold text-gray-900 dark:text-white">{projectDetails.teamSize}</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
                <Globe className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Statistiques de la plateforme</h3>
                <div className="space-y-3">
                  {platformStats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{stat.label}</span>
                      <span className="font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Fonctionnalités avancées
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Une expérience de streaming complète et immersive
            </p>
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

      {/* Technical Architecture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Architecture technique
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Globe className="h-6 w-6 mr-2 text-blue-500" />
                  Frontend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• React.js avec TypeScript</li>
                  <li>• Progressive Web App (PWA)</li>
                  <li>• Design responsive et moderne</li>
                  <li>• Optimisation des performances</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Monitor className="h-6 w-6 mr-2 text-green-500" />
                  Backend
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Node.js avec Express</li>
                  <li>• API RESTful sécurisée</li>
                  <li>• Base de données PostgreSQL</li>
                  <li>• Cache Redis pour les performances</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Play className="h-6 w-6 mr-2 text-purple-500" />
                  Streaming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• HLS streaming adaptatif</li>
                  <li>• CDN global AWS CloudFront</li>
                  <li>• Encodage multi-résolution</li>
                  <li>• WebRTC pour les live streams</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Succès de la plateforme
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des performances qui dépassent les attentes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <Card key={index} className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg text-center">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4">
                    {result.icon}
                  </div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    {result.value}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {result.metric}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Défis techniques relevés
              </h2>
              <div className="space-y-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Target className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Solutions innovantes
              </h2>
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700 dark:text-gray-300">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic text-center">
                "Cap Player a révolutionné notre façon de distribuer du contenu. La plateforme développée par Catalina Home 
                offre une expérience utilisateur exceptionnelle avec des performances remarquables. Nos utilisateurs 
                apprécient la fluidité du streaming et la beauté de l'interface."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  K.B
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">Karim Ben Salah</div>
                  <div className="text-gray-600 dark:text-gray-300">CEO - Cap Entertainment</div>
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
            Votre plateforme streaming vous attend
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Créons ensemble la plateforme qui révolutionnera votre distribution de contenu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Développer ma plateforme
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://capplayer.com/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Découvrir Cap Player
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}