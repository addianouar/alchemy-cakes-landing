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
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Author Image */}
          <div className="relative flex justify-center lg:justify-start animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-full blur-3xl scale-110"></div>
              <img 
                src={authorPortrait}
                alt="Sara Alöwe - Chef Pâtissière"
                className="relative z-10 w-80 h-80 object-cover rounded-full shadow-luxury border-4 border-luxury-gold/30"
              />
              <div className="absolute -bottom-4 -right-4 bg-luxury-gold text-luxury-dark p-4 rounded-full shadow-elegant">
                <Award size={32} />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-4">
              <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
                Rencontrez l'Auteure
              </p>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-luxury-light leading-tight">
                <span className="text-luxury-gold">Sara Alöwe</span>
                <br />
                Chef Pâtissière & Alchimiste Culinaire
              </h2>
              <p className="text-luxury-light/80 text-lg font-inter leading-relaxed">
                Passionnée par l'art de la pâtisserie depuis plus de 15 ans, Sara Alöwe 
                a développé une approche unique qu'elle nomme "l'alchimie culinaire". 
                Formée dans les plus grandes maisons parisiennes, elle révolutionne 
                l'art du gâteau en alliant tradition et innovation.
              </p>
              <p className="text-luxury-light/80 text-lg font-inter leading-relaxed">
                Son expertise reconnue internationalement lui a permis de former 
                des milliers d'apprentis pâtissiers et de créer des recettes qui 
                défient les conventions tout en respectant les fondamentaux de l'art culinaire.
              </p>
            </div>
            
            {/* Achievements */}
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="bg-luxury-dark-lighter border-luxury-gold/20 p-6 text-center hover:border-luxury-gold/40 transition-smooth"
                >
                  <achievement.icon className="text-luxury-gold mx-auto mb-3" size={24} />
                  <div className="font-playfair text-2xl font-bold text-luxury-gold mb-1">
                    {achievement.number}
                  </div>
                  <div className="text-luxury-light/70 font-inter text-sm">
                    {achievement.label}
                  </div>
                </Card>
              ))}
            </div>
            
            <blockquote className="border-l-4 border-luxury-gold pl-6 italic text-luxury-light/90 font-inter text-lg">
              "La pâtisserie est un art d'équilibre entre science et créativité. 
              Chaque gâteau raconte une histoire, chaque texture révèle un secret."
              <footer className="text-luxury-gold font-semibold mt-2">— Sara Alöwe</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}