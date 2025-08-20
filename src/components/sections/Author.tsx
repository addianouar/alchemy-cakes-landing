import { Card } from "@/components/ui/card"
import { Award, Star, Users, BookOpen } from "lucide-react"
import authorPortrait from "@/assets/author-portrait.jpg"

export const Author = () => {
  const achievements = [
    {
      icon: Award,
      number: "15+",
      label: "Années d'expérience"
    },
    {
      icon: Star,
      number: "500+",
      label: "Recettes créées"
    },
    {
      icon: Users,
      number: "10k+",
      label: "Élèves formés"
    },
    {
      icon: BookOpen,
      number: "3",
      label: "Livres publiés"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Author Image */}
          <div className="relative flex justify-center lg:justify-start animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-rose-200/30 rounded-full blur-3xl scale-110"></div>
              <img 
                src={authorPortrait}
                alt="Sara Alöwe - Chef Pâtissière"
                className="relative z-10 w-80 h-80 object-cover rounded-full shadow-xl shadow-rose-100/50 border-4 border-rose-200/50"
              />
              <div className="absolute -bottom-4 -right-4 bg-rose-600 text-white p-4 rounded-full shadow-lg">
                <Award size={32} />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <p className="text-rose-600 font-inter font-medium tracking-wider uppercase text-sm">
                👩‍🍳 Rencontrez l'auteure
              </p>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Sara <span className="text-rose-600">Alöwe</span>
              </h2>
              <p className="text-rose-500 font-inter text-lg font-medium">
                Maître en Cake Design Alchimique
              </p>
              <p className="text-gray-700 text-lg font-inter leading-relaxed">
                Pionnière de l'approche alchimique en pâtisserie, Sara Alöwe révolutionne l'art du cake design 
                depuis plus de 15 ans. Ses créations uniques allient tradition ancestrale et innovation moderne 
                pour des résultats à couper le souffle.
              </p>
            </div>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="bg-white border-rose-200 p-6 text-center hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300"
                >
                  <achievement.icon className="text-rose-600 mx-auto mb-3" size={24} />
                  <div className="font-playfair text-2xl font-bold text-rose-600 mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 font-inter text-sm">
                    {achievement.label}
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="bg-white border-rose-200 p-6">
              <blockquote className="space-y-4">
                <p className="text-gray-700 font-inter italic text-lg leading-relaxed">
                  "L'alchimie n'est pas de la magie, c'est une science précise. Chaque ingrédient, 
                  chaque geste, chaque moment compte pour créer l'harmonie parfaite."
                </p>
                <footer className="text-rose-600 font-playfair font-semibold">
                  — Sara Alöwe
                </footer>
              </blockquote>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}