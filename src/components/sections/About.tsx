import { Card } from "@/components/ui/card"
import { CheckCircle, Star, Award, Sparkles } from "lucide-react"
import ebookMockup from "@/assets/ebook-mockup.jpg"

export const About = () => {
  return (
    <section id="about" className="py-16 lg:py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
                📖 À propos du livre
              </p>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-light leading-tight">
                Un guide <span className="text-luxury-gold">révolutionnaire</span>
              </h2>
              <p className="text-luxury-light/80 text-base sm:text-lg font-inter leading-relaxed">
                Ce livre unique combine l'art ancestral de l'alchimie avec les techniques modernes de pâtisserie. 
                Chaque recette est le résultat d'années de perfectionnement pour atteindre l'équilibre parfait 
                entre goût, texture et présentation.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-4 lg:p-6 hover:shadow-card hover:border-luxury-gold/40 transition-all duration-300">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="bg-luxury-gold/10 p-2 lg:p-3 rounded-lg flex-shrink-0">
                    <CheckCircle className="text-luxury-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg lg:text-xl font-semibold text-luxury-light mb-2">
                      Recettes Testées
                    </h3>
                    <p className="text-luxury-light/70 font-inter text-sm lg:text-base">
                      Chaque recette a été rigoureusement testée pour garantir un résultat parfait.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-4 lg:p-6 hover:shadow-card hover:border-luxury-gold/40 transition-all duration-300">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="bg-luxury-gold/10 p-2 lg:p-3 rounded-lg flex-shrink-0">
                    <Star className="text-luxury-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg lg:text-xl font-semibold text-luxury-light mb-2">
                      Saveurs Uniques
                    </h3>
                    <p className="text-luxury-light/70 font-inter text-sm lg:text-base">
                      Des combinaisons de saveurs innovantes qui impressionneront vos invités.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-4 lg:p-6 hover:shadow-card hover:border-luxury-gold/40 transition-all duration-300">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="bg-luxury-gold/10 p-2 lg:p-3 rounded-lg flex-shrink-0">
                    <Award className="text-luxury-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg lg:text-xl font-semibold text-luxury-light mb-2">
                      Esthétisme Parfait
                    </h3>
                    <p className="text-luxury-light/70 font-inter text-sm lg:text-base">
                      Des créations visuellement époustouflantes qui tiennent impeccablement.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-4 lg:p-6 hover:shadow-card hover:border-luxury-gold/40 transition-all duration-300">
                <div className="flex items-start gap-3 lg:gap-4">
                  <div className="bg-luxury-gold/10 p-2 lg:p-3 rounded-lg flex-shrink-0">
                    <Sparkles className="text-luxury-gold" size={20} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg lg:text-xl font-semibold text-luxury-light mb-2">
                      Guide Essentiel
                    </h3>
                    <p className="text-luxury-light/70 font-inter text-sm lg:text-base">
                      Pour tous ceux qui souhaitent créer des cakes qui impressionnent.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative flex justify-center animate-scale-in order-first lg:order-last" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-luxury-gold/10 rounded-3xl blur-3xl transform -rotate-6 scale-110"></div>
            <img 
              src={ebookMockup}
              alt="Ebook Mockup"
              className="relative z-10 max-w-full h-auto rounded-2xl shadow-luxury hover:scale-105 transition-all duration-500"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}