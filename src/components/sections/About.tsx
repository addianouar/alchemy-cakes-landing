import { Card } from "@/components/ui/card"
import { CheckCircle, Star, Award, Sparkles } from "lucide-react"
import ebookMockup from "@/assets/ebook-mockup.jpg"

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
                À Propos du Livre
              </p>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-luxury-light leading-tight">
                Une Expérience <span className="text-luxury-gold">Alchimique</span> Unique
              </h2>
              <p className="text-luxury-light/80 text-lg font-inter leading-relaxed">
                Découvrez le premier volume d'une collection exclusive de Sara Alöwe, 
                où chaque gâteau est conçu comme une expérience alchimique. 10 recettes 
                innovantes, précises et testées, alliant saveurs uniques, textures 
                parfaites et esthétisme irréprochable.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-6 hover:border-luxury-gold/40 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="bg-luxury-gold/20 p-3 rounded-lg">
                    <CheckCircle className="text-luxury-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-luxury-light mb-2">
                      Recettes Testées
                    </h3>
                    <p className="text-luxury-light/70 font-inter">
                      Chaque recette a été rigoureusement testée pour garantir un résultat parfait.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-6 hover:border-luxury-gold/40 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="bg-luxury-gold/20 p-3 rounded-lg">
                    <Star className="text-luxury-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-luxury-light mb-2">
                      Saveurs Uniques
                    </h3>
                    <p className="text-luxury-light/70 font-inter">
                      Des combinaisons de saveurs innovantes qui impressionneront vos invités.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-6 hover:border-luxury-gold/40 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="bg-luxury-gold/20 p-3 rounded-lg">
                    <Award className="text-luxury-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-luxury-light mb-2">
                      Esthétisme Parfait
                    </h3>
                    <p className="text-luxury-light/70 font-inter">
                      Des créations visuellement époustouflantes qui tiennent impeccablement.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-6 hover:border-luxury-gold/40 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="bg-luxury-gold/20 p-3 rounded-lg">
                    <Sparkles className="text-luxury-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-luxury-light mb-2">
                      Guide Essentiel
                    </h3>
                    <p className="text-luxury-light/70 font-inter">
                      Pour tous ceux qui souhaitent créer des cakes qui impressionnent.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative flex justify-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-luxury-gold/10 rounded-3xl blur-3xl transform -rotate-6 scale-110"></div>
              <img 
                src={ebookMockup}
                alt="Ebook Mockup"
                className="relative z-10 max-w-full h-auto rounded-2xl shadow-elegant hover:scale-105 transition-luxury"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}