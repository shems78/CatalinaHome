import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building2, Users, TrendingUp, Clock, CheckCircle, Target, BarChart3 } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/header';

export default function ERPSystem() {
  const { t } = useLanguage();

  const projectDetails = {
    client: "TechnoManufacture SARL",
    industry: "Fabrication industrielle",
    duration: "8 mois",
    teamSize: "6 développeurs",
    budget: "€85,000",
    location: "Tunis, Tunisie"
  };

  const challenges = [
    "Gestion manuelle des stocks inefficace",
    "Processus de facturation complexe et lent",
    "Manque de visibilité sur les performances",
    "Systèmes isolés sans intégration",
    "Rapports manuels chronophages"
  ];

  const solutions = [
    "Système ERP centralisé avec modules intégrés",
    "Automatisation complète de la facturation",
    "Tableaux de bord en temps réel",
    "Intégration des systèmes existants",
    "Rapports automatisés et analyses prédictives"
  ];

  const results = [
    { metric: "Réduction du temps de traitement", value: "75%", icon: <Clock className="h-6 w-6" /> },
    { metric: "Amélioration de la productivité", value: "40%", icon: <TrendingUp className="h-6 w-6" /> },
    { metric: "Économies annuelles", value: "€120,000", icon: <BarChart3 className="h-6 w-6" /> },
    { metric: "Satisfaction utilisateur", value: "95%", icon: <Users className="h-6 w-6" /> }
  ];

  const technologies = [
    "React.js", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript", "Redis", "Elasticsearch"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white/50 dark:bg-black/50">
              Étude de cas
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Système ERP pour TechnoManufacture
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transformation digitale complète d'une PME industrielle avec déploiement d'un système ERP sur mesure
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
                Vue d'ensemble du projet
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                TechnoManufacture, une entreprise de fabrication basée à Tunis, faisait face à des défis majeurs dans la gestion de ses opérations. 
                Nous avons développé une solution ERP complète qui a révolutionné leurs processus métiers.
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
                <Building2 className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Résultats clés</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>ROI</span>
                    <span className="font-bold">245%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Temps de déploiement</span>
                    <span className="font-bold">8 mois</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Utilisateurs formés</span>
                    <span className="font-bold">45</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Modules déployés</span>
                    <span className="font-bold">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Défis rencontrés
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

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Résultats mesurables
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des améliorations significatives dans tous les domaines clés
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies utilisées
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Stack technologique moderne et éprouvé
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
                "Le système ERP développé par Catalina Home a complètement transformé notre façon de travailler. 
                Nos processus sont maintenant fluides, nous avons une visibilité complète sur nos opérations, 
                et nous avons économisé plus de 120 000€ la première année."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  A.M
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">Ahmed Mansouri</div>
                  <div className="text-gray-600 dark:text-gray-300">Directeur Général - TechnoManufacture SARL</div>
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
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Découvrez comment nous pouvons moderniser vos processus métiers avec une solution sur mesure
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
                Discuter du projet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}