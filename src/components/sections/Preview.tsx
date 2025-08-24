import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, BookOpen, Eye, Play, Pause } from "lucide-react"
import { useState, useEffect } from "react"
import recipe1Image from "@/assets/recipe-1-chocolate-raspberry.jpg"
import recipe2Image from "@/assets/recipe-2-vanilla-caramel.jpg"
import recipe3Image from "@/assets/recipe-3-signature.jpg"
import recipe4Image from "@/assets/recipe-4-tropical.jpg"
import recipe5Image from "@/assets/recipe-5-opera.jpg"

export const Preview = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  
  const recipes = [
    {
      title: "Recette 1: Élégance Chocolat-Framboises",
      content: "Découvrez cette création spectaculaire alliant ganache chocolat noir intense et coulis de framboises acidulé. Une recette précise avec tous les secrets pour une tenue parfaite et un goût inoubliable.",
      image: recipe1Image,
      icon: "🍰",
      preview: "Cake Design Professionnel",
      result: "Gâteau élégant à 3 étages avec décoration florale"
    },
    {
      title: "Recette 2: Vanille-Caramel Sculptural", 
      content: "Maîtrisez l'art du cake design avec cette création en 3 étages. Génoise vanille, crème caramel beurre salé et glaçage miroir. Technique de sculpture et stabilité garanties.",
      image: recipe2Image,
      icon: "🎂",
      preview: "Techniques de Sculpture",
      result: "Cake design architectural avec finitions dorées"
    },
    {
      title: "Recette 3: Création Signature",
      content: "La recette finale qui combine toutes les techniques apprises. Un chef-d'œuvre visuel et gustatif qui impressionnera vos clients les plus exigeants. Secret de conservation inclus.",
      image: recipe3Image,
      icon: "🧁",
      preview: "Votre Signature",
      result: "Chef-d'œuvre personnalisé avec techniques avancées"
    },
    {
      title: "Recette 4: Fruits Exotiques Glacé",
      content: "Une création rafraîchissante qui marie passion, mangue et noix de coco. Mousse légère et croquant tropical pour un résultat époustouflant.",
      image: recipe4Image,
      icon: "🥥",
      preview: "Saveurs Tropicales",
      result: "Entremet glacé aux couleurs vives"
    },
    {
      title: "Recette 5: Opera Moderne",
      content: "Revisitez le classique avec une approche contemporaine. Biscuit joconde, ganache café et glaçage miroir noir pour un résultat sophistiqué.",
      image: recipe5Image,
      icon: "☕",
      preview: "Classique Revisité", 
      result: "Opera aux lignes épurées et finition parfaite"
    }
  ]

  const nextRecipe = () => {
    setCurrentPage((prev) => (prev + 1) % recipes.length)
  }

  const prevRecipe = () => {
    setCurrentPage((prev) => (prev - 1 + recipes.length) % recipes.length)
  }

  const togglePause = () => {
    setIsPaused(!isPaused)
  }

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        nextRecipe()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, currentPage])

  return (
    <section className="py-16 lg:py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 animate-fade-in-up">
          <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
            📖 Aperçu du Livre
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-light leading-tight">
            Contenu <span className="text-luxury-gold">Exclusif</span>
          </h2>
          <p className="text-luxury-light/80 text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Un aperçu exclusif de ce qui vous attend : des recettes illustrées pas à pas, 
            des techniques expliquées clairement, et des secrets de pâtisserie jamais révélés.
          </p>
        </div>
        {/* Recipe Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Carousel Card */}
            <Card className="bg-luxury-dark-lighter border-luxury-gold/20 shadow-luxury overflow-hidden">
              <div className="relative">
                {/* Navigation Buttons */}
                <button 
                  onClick={prevRecipe}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-luxury-accent text-white rounded-full flex items-center justify-center hover:bg-luxury-accent/80 transition-colors duration-300 shadow-lg"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button 
                  onClick={nextRecipe}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-luxury-accent text-white rounded-full flex items-center justify-center hover:bg-luxury-accent/80 transition-colors duration-300 shadow-lg"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Play/Pause Button */}
                <button 
                  onClick={togglePause}
                  className="absolute top-4 right-4 z-10 w-10 h-10 bg-luxury-gold text-luxury-dark rounded-full flex items-center justify-center hover:bg-luxury-gold/90 transition-colors duration-300"
                >
                  {isPaused ? <Play size={16} /> : <Pause size={16} />}
                </button>

                {/* Recipe Content */}
                <div className="p-8 lg:p-12">
                  <div className="text-center space-y-6">
                    {/* Recipe Icon */}
                    <div className="w-24 h-24 mx-auto bg-luxury-gold/10 rounded-full flex items-center justify-center text-4xl border-2 border-luxury-gold/20">
                      {recipes[currentPage].icon}
                    </div>
                    
                    {/* Recipe Info */}
                    <div>
                      <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm mb-2">
                        {recipes[currentPage].preview}
                      </p>
                      <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-luxury-light mb-4">
                        {recipes[currentPage].title}
                      </h3>
                      <p className="text-luxury-light/80 font-inter text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                        {recipes[currentPage].content}
                      </p>
                    </div>

                    {/* Progress Indicators */}
                    <div className="flex justify-center gap-2">
                      {recipes.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentPage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentPage === index 
                              ? 'bg-luxury-gold scale-125' 
                              : 'bg-luxury-gold/30 hover:bg-luxury-gold/50'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recipe Result Section */}
            <div className="mt-8">
              <Card className="bg-luxury-dark-lighter border-luxury-gold/20 shadow-luxury overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="text-center space-y-6">
                    <div className="flex items-center justify-center gap-3 mb-6">
                      <Eye className="text-luxury-gold" size={20} />
                      <h4 className="font-playfair text-lg lg:text-xl font-semibold text-luxury-light">
                        Résultat Final
                      </h4>
                    </div>
                    
                    {/* Recipe Result Image */}
                    <div className="w-full aspect-[4/3] bg-luxury-dark rounded-xl overflow-hidden border-2 border-luxury-gold/20 shadow-luxury">
                      <img 
                        src={recipes[currentPage].image} 
                        alt={recipes[currentPage].result}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-luxury-light font-inter text-sm lg:text-base font-medium">
                        {recipes[currentPage].result}
                      </p>
                    </div>
                    
                    <div className="bg-luxury-gold/10 rounded-lg p-4 border border-luxury-gold/20">
                      <p className="text-luxury-light font-inter text-sm lg:text-base">
                        💡 <strong className="text-luxury-gold">Astuce Pro:</strong> Chaque recette inclut des photos étape par étape 
                        et des conseils exclusifs pour un résultat professionnel garanti.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}