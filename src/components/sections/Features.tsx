import { Card } from "@/components/ui/card"
import { BookOpen, Clock, Users, Trophy, Lightbulb, Heart } from "lucide-react"

export const Features = () => {
  const features = [
    {
      icon: BookOpen,
      title: "10 Recettes Exclusives",
      description: "Chaque recette est unique et n'a jamais été publiée ailleurs"
    },
    {
      icon: Clock,
      title: "Instructions Précises",
      description: "Timing exact et étapes détaillées pour un résultat garanti"
    },
    {
      icon: Users,
      title: "Pour Tous Niveaux",
      description: "Des explications claires adaptées aux débutants comme aux experts"
    },
    {
      icon: Trophy,
      title: "Techniques Professionnelles",
      description: "Apprenez les secrets des grands pâtissiers"
    },
    {
      icon: Lightbulb,
      title: "Astuces d'Expert",
      description: "Conseils exclusifs pour perfectionner vos créations"
    },
    {
      icon: Heart,
      title: "Passion Artisanale",
      description: "Chaque recette reflète l'amour de l'art pâtissier"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-luxury-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 animate-fade-in-up">
          <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
            ⚡ Caractéristiques principales
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-light leading-tight">
            Ce qui rend ce livre <span className="text-luxury-gold">unique</span>
          </h2>
          <p className="text-luxury-light/80 text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Découvrez pourquoi "Alchemical Cakes Volume 1" est devenu la référence 
            incontournable des professionnels et passionnés de pâtisserie.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-luxury-dark-lighter border-luxury-gold/20 p-6 lg:p-8 text-center hover:shadow-card hover:border-luxury-gold/40 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4 lg:space-y-6">
                <div className="bg-luxury-gold/10 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="text-luxury-gold" size={28} />
                </div>
                <div className="space-y-2 lg:space-y-3">
                  <h3 className="font-playfair text-lg lg:text-xl font-semibold text-luxury-light">
                    {feature.title}
                  </h3>
                  <p className="text-luxury-light/70 font-inter text-sm lg:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}