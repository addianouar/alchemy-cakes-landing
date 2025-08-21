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
    <section className="py-16 lg:py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Author Image */}
          <div className="relative flex justify-center lg:justify-start animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-luxury-gold/10 rounded-full blur-3xl scale-110"></div>
              <img 
                src={authorPortrait}
                alt="Sara Alöwe - Chef Pâtissière"
                className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full shadow-luxury border-4 border-luxury-gold/20"
              />
              <div className="absolute -bottom-4 -right-4 bg-luxury-gold text-luxury-dark p-3 lg:p-4 rounded-full shadow-lg">
                <Award size={24} />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
                👩‍🍳 Rencontrez l'auteure
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-light leading-tight">
                Sara <span className="text-luxury-gold">Alöwe</span>
              </h2>
              <p className="text-luxury-gold-muted font-inter text-lg font-medium">
                Maître en Cake Design Alchimique
              </p>
              <p className="text-luxury-light/80 text-base sm:text-lg font-inter leading-relaxed">
                Pionnière de l'approche alchimique en pâtisserie, Sara Alöwe révolutionne l'art du cake design 
                depuis plus de 15 ans. Ses créations uniques allient tradition ancestrale et innovation moderne 
                pour des résultats à couper le souffle.
              </p>
            </div>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="bg-luxury-dark-lighter border-luxury-gold/20 p-4 lg:p-6 text-center hover:shadow-card hover:border-luxury-gold/40 transition-all duration-300"
                >
                  <achievement.icon className="text-luxury-gold mx-auto mb-2 lg:mb-3" size={20} />
                  <div className="font-playfair text-xl lg:text-2xl font-bold text-luxury-gold mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-luxury-light/70 font-inter text-xs lg:text-sm">
                    {achievement.label}
                  </div>
                </Card>
              ))}
            </div>
            
            <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-4 lg:p-6">
              <blockquote className="space-y-4">
                <p className="text-luxury-light/80 font-inter italic text-base lg:text-lg leading-relaxed">
                  "L'alchimie n'est pas de la magie, c'est une science précise. Chaque ingrédient, 
                  chaque geste, chaque moment compte pour créer l'harmonie parfaite."
                </p>
                <footer className="text-luxury-gold font-playfair font-semibold">
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