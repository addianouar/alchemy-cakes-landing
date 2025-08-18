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
    <section className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
            Points Clés
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-luxury-light leading-tight">
            Pourquoi Choisir <span className="text-luxury-gold">Cette Collection</span>
          </h2>
          <p className="text-luxury-light/80 text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Un guide essentiel pour tous ceux qui souhaitent créer des cakes qui impressionnent 
            et tiennent impeccablement, avec des techniques révolutionnaires.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-luxury-dark-lighter border-luxury-gold/20 p-8 hover:border-luxury-gold/40 hover:bg-luxury-dark-lightest transition-smooth group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className="bg-luxury-gold/20 p-4 rounded-xl w-fit group-hover:bg-luxury-gold/30 transition-smooth">
                  <feature.icon className="text-luxury-gold" size={32} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-luxury-light">
                  {feature.title}
                </h3>
                <p className="text-luxury-light/70 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}