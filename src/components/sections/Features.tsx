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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <p className="text-rose-600 font-inter font-medium tracking-wider uppercase text-sm">
            ⚡ Caractéristiques principales
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Ce qui rend ce livre <span className="text-rose-600">unique</span>
          </h2>
          <p className="text-gray-700 text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Découvrez pourquoi "Alchemical Cakes Volume 1" est devenu la référence 
            incontournable des professionnels et passionnés de pâtisserie.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white border-rose-200 p-8 text-center hover:shadow-xl hover:shadow-rose-100/30 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-6">
                <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                  <feature.icon className="text-rose-600" size={32} />
                </div>
                <div className="space-y-3">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
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