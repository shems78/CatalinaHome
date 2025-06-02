import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Palette, Smartphone, Search, ShoppingBag, CheckCircle, Target, TrendingUp } from 'lucide-react';
import { Link } from 'wouter';
import { Header } from '@/components/header';

export default function ShowcaseWebsite() {
  const { t } = useLanguage();

  const projectDetails = {
    client: "Artisanat Traditionnel Tunisien",
    industry: "Artisanat et Commerce",
    duration: "3 mois",
    teamSize: "4 développeurs",
    budget: "€15,000",
    location: "Sidi Bou Said, Tunisie"
  };

  const challenges = [
    "Site web obsolète peu attractif",
    "Absence de présence en ligne effective",
    "Processus de commande manuel",
    "Visibilité limitée sur les moteurs de recherche",
    "Interface non adaptée aux mobiles"
  ];

  const solutions = [
    "Design moderne et authentique reflétant l'artisanat tunisien",
    "Site responsive optimisé pour tous les appareils",
    "Système de catalogue en ligne avec commandes",
    "Optimisation SEO complète",
    "Intégration des réseaux sociaux"
  ];

  const results = [
    { metric: "Augmentation du trafic web", value: "320%", icon: <TrendingUp className="h-6 w-6" /> },
    { metric: "Commandes en ligne", value: "+150%", icon: <ShoppingBag className="h-6 w-6" /> },
    { metric: "Taux de conversion", value: "4.2%", icon: <Target className="h-6 w-6" /> },
    { metric: "Temps de chargement", value: "1.8s", icon: <Smartphone className="h-6 w-6" /> }
  ];

  const features = [
    {
      title: "Galerie interactive",
      description: "Présentation immersive des produits artisanaux avec zoom haute résolution",
      icon: <Palette className="h-8 w-8" />
    },
    {
      title: "Catalogue en ligne",
      description: "Navigation intuitive par catégories et filtres avancés",
      icon: <ShoppingBag className="h-8 w-8" />
    },
    {
      title: "SEO optimisé",
      description: "Référencement naturel pour attirer plus de visiteurs",
      icon: <Search className="h-8 w-8" />
    },
    {
      title: "Design responsive",
      description: "Expérience utilisateur parfaite sur tous les appareils",
      icon: <Smartphone className="h-8 w-8" />
    }
  ];

  const technologies = [
    "Vue.js", "Tailwind CSS", "Firebase", "Algolia Search", "Cloudinary", "PWA", "Google Analytics"
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
              Site Vitrine pour Artisanat Traditionnel
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Refonte complète du site web d'un artisan tunisien pour valoriser le patrimoine culturel et développer les ventes en ligne
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
                Valoriser l'artisanat tunisien
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Artisanat Traditionnel Tunisien, basé à Sidi Bou Said, créait de magnifiques pièces artisanales mais peinait à les présenter 
                en ligne. Nous avons créé un site web qui capture l'essence de leur savoir-faire tout en modernisant leur présence digitale.
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
                <Palette className="h-12 w-12 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Impact commercial</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Nouveaux clients</span>
                    <span className="font-bold">+180/mois</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Commandes moyennes</span>
                    <span className="font-bold">€285</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Taux de retour</span>
                    <span className="font-bold">85%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Satisfaction client</span>
                    <span className="font-bold">4.8/5</span>
                  </div>
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
              Des fonctionnalités pensées pour mettre en valeur l'artisanat traditionnel
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

      {/* Before/After Comparison */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transformation visuelle
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Avant
              </h3>
              <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-red-500" />
                      <span className="text-gray-700 dark:text-gray-300">Design obsolète des années 2010</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-red-500" />
                      <span className="text-gray-700 dark:text-gray-300">Navigation confuse et lente</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-red-500" />
                      <span className="text-gray-700 dark:text-gray-300">Photos de mauvaise qualité</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-red-500" />
                      <span className="text-gray-700 dark:text-gray-300">Pas de système de commande</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Target className="h-5 w-5 text-red-500" />
                      <span className="text-gray-700 dark:text-gray-300">Non responsive</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Après
              </h3>
              <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Design moderne et authentique</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Navigation intuitive et rapide</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Galerie haute résolution</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Système de commande intégré</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700 dark:text-gray-300">Parfaitement responsive</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30 dark:bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Résultats obtenus
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Une amélioration spectaculaire de la performance en ligne
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

      {/* Testimonial */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/60 dark:bg-black/40 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8">
              <blockquote className="text-xl text-gray-700 dark:text-gray-300 mb-6 italic text-center">
                "Notre nouveau site web est magnifique ! Il capture parfaitement l'essence de notre artisanat traditionnel. 
                Depuis le lancement, nos ventes ont explosé et nous recevons des commandes du monde entier. 
                L'équipe de Catalina Home a vraiment compris notre vision."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  L.B
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-900 dark:text-white">Leila Ben Ahmed</div>
                  <div className="text-gray-600 dark:text-gray-300">Fondatrice - Artisanat Traditionnel Tunisien</div>
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
            Votre site web mérite une refonte ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Créons ensemble un site web qui valorise votre activité et attire plus de clients
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
                Voir notre portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}