import { Card } from "@/components/ui/card"
import { BookOpen, Users, Trophy, Clock, Star, Sparkles, Globe, ChefHat } from "lucide-react"

export const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "10 Recettes Exclusives",
      description: "Des créations uniques développées spécialement pour ce livre, introuvables ailleurs."
    },
    {
      icon: Users,
      title: "Techniques Professionnelles", 
      description: "Apprenez les secrets des grands pâtissiers avec des méthodes éprouvées."
    },
    {
      icon: Trophy,
      title: "Résultats Garantis",
      description: "Suivez nos instructions détaillées pour des créations parfaites à chaque fois."
    },
    {
      icon: Clock,
      title: "Timing Précis",
      description: "Chaque étape chronométrée pour une organisation parfaite en cuisine."
    },
    {
      icon: Star,
      title: "Photos Haute Qualité",
      description: "Des images professionnelles pour chaque étape, aucune confusion possible."
    },
    {
      icon: Sparkles,
      title: "Conseils d'Expert",
      description: "Les astuces secrètes qui font la différence entre amateur et professionnel."
    },
    {
      icon: ChefHat,
      title: "Formation Complète",
      description: "De débutant à expert avec une progression logique et structurée."
    },
    {
      icon: Globe,
      title: "Techniques Internationales",
      description: "Découvrez les méthodes des plus grandes pâtisseries mondiales."
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-luxury-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 animate-fade-in-up">
          <p className="text-luxury-accent font-inter font-medium tracking-wider uppercase text-sm">
            ✨ Points Forts
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-dark leading-tight">
            Ce qui Rend ce Livre <span className="text-luxury-primary">Unique</span>
          </h2>
          <p className="text-luxury-muted text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Découvrez pourquoi des milliers de passionnés ont choisi ce guide 
            pour transformer leur passion en véritable expertise.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white border-luxury-primary/10 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="p-4 lg:p-6 text-center space-y-3 lg:space-y-4">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto bg-luxury-light-bg rounded-full flex items-center justify-center group-hover:bg-luxury-primary group-hover:text-white transition-all duration-300">
                    <feature.icon size={20} />
                  </div>
                  
                  <h3 className="font-playfair text-sm lg:text-base font-bold text-luxury-dark group-hover:text-luxury-primary transition-colors duration-300 line-clamp-2">
                    {feature.title}
                  </h3>
                  
                  <p className="text-luxury-muted font-inter text-xs lg:text-sm leading-relaxed line-clamp-3">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Arabic Version Button */}
          <div className="text-center">
            <Card className="bg-luxury-primary text-white shadow-luxury max-w-md mx-auto">
              <div className="p-6 lg:p-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Globe className="w-6 h-6" />
                  <h3 className="font-playfair text-xl lg:text-2xl font-bold">
                    Version Arabe
                  </h3>
                </div>
                <p className="font-inter text-white/90 text-sm lg:text-base mb-6">
                  نسخة عربية متوفرة مع جميع الوصفات والتقنيات
                </p>
                <a 
                  href="#purchase" 
                  className="inline-flex items-center gap-2 bg-luxury-accent text-luxury-dark px-6 py-3 rounded-lg font-playfair font-bold text-base hover:bg-luxury-accent/90 transition-colors duration-300"
                >
                  <BookOpen className="w-5 h-5" />
                  طلب النسخة العربية
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}