import { Card } from "@/components/ui/card"
import { CheckCircle, Star, Award, Sparkles } from "lucide-react"
import ebookMockup from "@/assets/ebook-mockup.jpg"

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-rose-600 font-inter font-medium tracking-wider uppercase text-sm">
                📖 À propos du livre
              </p>
              <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Un guide <span className="text-rose-600">révolutionnaire</span>
              </h2>
              <p className="text-gray-700 text-lg font-inter leading-relaxed">
                Ce livre unique combine l'art ancestral de l'alchimie avec les techniques modernes de pâtisserie. 
                Chaque recette est le résultat d'années de perfectionnement pour atteindre l'équilibre parfait 
                entre goût, texture et présentation.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-white border-rose-200 p-6 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-lg">
                    <CheckCircle className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                      Recettes Testées
                    </h3>
                    <p className="text-gray-600 font-inter">
                      Chaque recette a été rigoureusement testée pour garantir un résultat parfait.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-rose-200 p-6 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-lg">
                    <Star className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                      Saveurs Uniques
                    </h3>
                    <p className="text-gray-600 font-inter">
                      Des combinaisons de saveurs innovantes qui impressionneront vos invités.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-rose-200 p-6 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-lg">
                    <Award className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                      Esthétisme Parfait
                    </h3>
                    <p className="text-gray-600 font-inter">
                      Des créations visuellement époustouflantes qui tiennent impeccablement.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white border-rose-200 p-6 hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-rose-100 p-3 rounded-lg">
                    <Sparkles className="text-rose-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-2">
                      Guide Essentiel
                    </h3>
                    <p className="text-gray-600 font-inter">
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
            <div className="absolute inset-0 bg-rose-200/20 rounded-3xl blur-3xl transform -rotate-6 scale-110"></div>
            <img 
              src={ebookMockup}
              alt="Ebook Mockup"
              className="relative z-10 max-w-full h-auto rounded-2xl shadow-xl shadow-rose-100/50 hover:scale-105 transition-all duration-500"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}