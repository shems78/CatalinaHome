import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Smartphone, Play, Users, Download, CheckCircle, Target, Star } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/header';

export default function ShemsPlayer() {
  const { t } = useLanguage();

  const projectDetails = {
    client: "Shems Entertainment",
    industry: "Divertissement & Médias",
    duration: "6 mois",
    teamSize: "5 développeurs",
    budget: "€45,000",
    location: "Tunis, Tunisie"
  };

  const challenges = [
    "Développement d'une application IPTV performante",
    "Gestion de flux vidéo haute qualité",
    "Interface utilisateur intuitive pour tous âges",
    "Optimisation pour différents appareils Android",
    "Système de gestion des chaînes et contenus"
  ];

  const solutions = [
    "Architecture native Android optimisée",
    "Player vidéo personnalisé avec codec avancés",
    "Interface moderne et accessible",
    "Optimisation multi-résolution automatique",
    "Backend robuste pour la gestion de contenu"
  ];

  const results = [
    { metric: "Téléchargements", value: "50K+", icon: <Download className="h-6 w-6" /> },
    { metric: "Note utilisateurs", value: "4.5/5", icon: <Star className="h-6 w-6" /> },
    { metric: "Utilisateurs actifs", value: "15K", icon: <Users className="h-6 w-6" /> },
    { metric: "Temps de visionnage", value: "2.5h/jour", icon: <Play className="h-6 w-6" /> }
  ];

  const features = [
    {
      title: "Streaming HD/4K",
      description: "Lecture fluide de contenus haute définition avec adaptation automatique",
      icon: <Play className="h-8 w-8" />
    },
    {
      title: "Interface intuitive",
      description: "Navigation simple et ergonomique pour une expérience utilisateur optimale",
      icon: <Smartphone className="h-8 w-8" />
    },
    {
      title: "Gestion des favoris",
      description: "Organisation personnalisée des chaînes et contenus préférés",
      icon: <Star className="h-8 w-8" />
    },
    {
      title: "Mode hors ligne",
      description: "Téléchargement et visionnage de contenus sans connexion internet",
      icon: <Download className="h-8 w-8" />
    }
  ];

  const technologies = [
    "Java/Kotlin", "Android SDK", "ExoPlayer", "Retrofit", "Room Database", "Firebase", "FFmpeg", "Material Design"
  ];

  const appStats = [
    { label: "Version actuelle", value: "2.1.0" },
    { label: "Taille de l'app", value: "12 MB" },
    { label: "API minimum", value: "Android 5.0" },
    { label: "Langues supportées", value: "3" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white/50 dark:bg-black/50">
              Application Mobile
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Shems Player - Application IPTV
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Développement d'une application mobile IPTV moderne pour le streaming de contenus multimédia avec plus de 50 000 téléchargements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://play.google.com/store/apps/details?id=com.shems.shemsiptvbox" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <i className="fab fa-google-play mr-2"></i>
                  Télécharger sur Play Store
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="https://apkpure.com/fr/shems-player/com.shems.shemsiptvbox/download/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
                  Voir sur APKPure
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
                Une application IPTV de nouvelle génération
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Shems Player est une application IPTV développée pour offrir une expérience de streaming exceptionnelle. 
                Conçue avec les dernières technologies Android, elle permet aux utilisateurs de regarder leurs contenus 
                préférés avec une qualité optimale et une interface moderne.
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
                <Smartphone className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Statistiques de l'app</h3>
                <div className="space-y-3">
                  {appStats.map((stat, index) => (
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
              Fonctionnalités principales
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Une expérience de streaming complète et moderne
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

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Défis techniques
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
                Solutions développées
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

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Succès de l'application
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des résultats qui dépassent les attentes
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

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies utilisées
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stack mobile moderne et performant
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

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic text-center">
                "Catalina Home a créé exactement l'application que nous voulions. Shems Player dépasse nos attentes 
                avec ses performances exceptionnelles et son interface élégante. Nos utilisateurs adorent l'expérience 
                de streaming fluide et la facilité d'utilisation."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  S.M
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">Sami Mejri</div>
                  <div className="text-gray-600 dark:text-gray-300">Directeur Technique - Shems Entertainment</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Votre projet mobile vous attend
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Créons ensemble l'application mobile qui révolutionnera votre activité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Développer mon app
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="https://play.google.com/store/apps/details?id=com.shems.shemsiptvbox" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <i className="fab fa-google-play mr-2"></i>
                Télécharger sur Play Store
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}