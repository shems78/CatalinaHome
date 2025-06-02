import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Utensils, ShoppingCart, MapPin, Clock, CheckCircle, Target, Star } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/header';

export default function GoldenSpoon() {
  const { t } = useLanguage();

  const projectDetails = {
    client: "Golden Spoon Restaurant",
    industry: "Restauration & Gastronomie",
    duration: "4 mois",
    teamSize: "5 développeurs",
    budget: "€28,000",
    location: "Tunis, Tunisie"
  };

  const challenges = [
    "Création d'une présence en ligne pour un restaurant établi",
    "Système de commande en ligne et réservation",
    "Mise en valeur de l'art culinaire et de l'ambiance",
    "Intégration avec les systèmes de livraison",
    "Optimisation pour les recherches locales"
  ];

  const solutions = [
    "Site web élégant reflétant l'identité du restaurant",
    "Plateforme de commande intégrée avec paiement sécurisé",
    "Galerie visuelle immersive et menu interactif",
    "API d'intégration avec les services de livraison",
    "SEO local optimisé pour la visibilité géographique"
  ];

  const results = [
    { metric: "Commandes en ligne", value: "+250%", icon: <ShoppingCart className="h-6 w-6" /> },
    { metric: "Réservations", value: "+180%", icon: <Clock className="h-6 w-6" /> },
    { metric: "Visibilité locale", value: "+300%", icon: <MapPin className="h-6 w-6" /> },
    { metric: "Satisfaction client", value: "4.8/5", icon: <Star className="h-6 w-6" /> }
  ];

  const features = [
    {
      title: "Menu interactif",
      description: "Présentation visuelle des plats avec descriptions détaillées et prix",
      icon: <Utensils className="h-8 w-8" />
    },
    {
      title: "Commande en ligne",
      description: "Système de commande intuitif avec options de livraison et à emporter",
      icon: <ShoppingCart className="h-8 w-8" />
    },
    {
      title: "Réservations",
      description: "Système de réservation de tables en temps réel avec confirmation automatique",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Galerie culinaire",
      description: "Showcase visuel des plats et de l'ambiance du restaurant",
      icon: <Star className="h-8 w-8" />
    }
  ];

  const technologies = [
    "Vue.js", "Nuxt.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe", "Google Maps API", "PWA"
  ];

  const businessImpact = [
    { label: "Augmentation du CA", value: "+180%" },
    { label: "Nouveaux clients/mois", value: "450+" },
    { label: "Commandes moyennes", value: "€35" },
    { label: "Taux de fidélisation", value: "68%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white/50 dark:bg-black/50">
              Site Web Restaurant
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Golden Spoon - Site Web Gastronomique
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Développement d'un site web élégant pour un restaurant gastronomique avec système de commande en ligne et réservations
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Une expérience culinaire digitale
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Golden Spoon, restaurant gastronomique reconnu à Tunis, souhaitait moderniser sa présence en ligne 
                pour attirer une nouvelle clientèle et faciliter les commandes. Nous avons créé un site web qui 
                capture l'élégance et la qualité de leur cuisine tout en offrant une expérience utilisateur exceptionnelle.
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
                <Utensils className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Impact business</h3>
                <div className="space-y-3">
                  {businessImpact.map((impact, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span>{impact.label}</span>
                      <span className="font-bold">{impact.value}</span>
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
              Fonctionnalités développées
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Une expérience digitale complète pour les gourmets
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

      {/* Digital Transformation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transformation digitale
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Utensils className="h-6 w-6 mr-2 text-orange-500" />
                  Avant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Commandes uniquement par téléphone</li>
                  <li>• Réservations sur papier</li>
                  <li>• Visibilité limitée en ligne</li>
                  <li>• Menu statique sur PDF</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <ShoppingCart className="h-6 w-6 mr-2 text-blue-500" />
                  Maintenant
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Commandes en ligne 24/7</li>
                  <li>• Réservations automatisées</li>
                  <li>• Forte présence digitale</li>
                  <li>• Menu interactif et visuel</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                  <Star className="h-6 w-6 mr-2 text-green-500" />
                  Résultat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• +180% de chiffre d'affaires</li>
                  <li>• +450 nouveaux clients/mois</li>
                  <li>• Efficacité opérationnelle</li>
                  <li>• Satisfaction client élevée</li>
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
              Succès mesurable
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des résultats qui transforment l'activité
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
                Défis du projet
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
                Solutions apportées
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

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies utilisées
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stack moderne pour une performance optimale
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic text-center">
                "Notre site web développé par Catalina Home a complètement transformé notre activité. 
                Les commandes en ligne ont explosé et nos clients apprécient la facilité de réservation. 
                Le design capture parfaitement l'élégance de notre restaurant."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  R.H
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">Rami Hajji</div>
                  <div className="text-gray-600 dark:text-gray-300">Propriétaire - Golden Spoon Restaurant</div>
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
            Votre restaurant mérite une présence digitale d'exception
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Développons ensemble le site web qui fera rayonner votre établissement en ligne
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100">
                Créer mon site restaurant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Discuter du projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}