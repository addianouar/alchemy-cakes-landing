import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, BookOpen, Eye } from "lucide-react"
import { useState } from "react"

export const Preview = () => {
  const [currentPage, setCurrentPage] = useState(0)
  
  const pages = [
    {
      title: "Introduction à l'Alchimie Culinaire",
      content: "Découvrez les secrets fondamentaux qui transforment la pâtisserie traditionnelle en art alchimique. Cette méthode révolutionnaire vous permettra de créer des gâteaux d'une stabilité parfaite.",
      image: "Première page avec introduction élégante",
      preview: "Chapter 1: Les Bases de l'Alchimie Pâtissière"
    },
    {
      title: "Recette Signature: Le Phoenix Doré",
      content: "Technique exclusive: comment maîtriser les températures et les textures pour obtenir un cake moelleux qui conserve sa forme pendant des jours. Timing précis et astuces professionnelles inclus.",
      image: "Page recette avec photos étape par étape", 
      preview: "Recette complète avec illustrations détaillées"
    },
    {
      title: "Secrets des Maîtres Pâtissiers",
      content: "Les techniques gardées secrètes par les grands chefs révélées pour la première fois. Apprenez les gestes précis qui font la différence entre un gâteau ordinaire et une création exceptionnelle.",
      image: "Page technique avec schémas détaillés",
      preview: "Techniques professionnelles expliquées simplement"
    }
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)
  }

  return (
    <section className="py-20 bg-luxury-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
            🔥 Option 1 : Aperçu du Livre
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-luxury-light leading-tight">
            Preview <span className="text-luxury-gold">Section</span>
          </h2>
          <p className="text-luxury-light/80 text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Un aperçu exclusif de ce qui vous attend : des recettes illustrées pas à pas, 
            des techniques expliquées clairement, et des secrets de pâtisserie jamais révélés.
          </p>
        </div>
        
        {/* Book Preview Gallery */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Preview Card */}
            <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-8 md:p-12 animate-scale-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Book Page Mockup */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-luxury-light to-luxury-light/90 rounded-lg p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition-smooth">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-luxury-gold/30 pb-4">
                        <BookOpen className="text-luxury-gold" size={24} />
                        <span className="font-playfair text-lg font-semibold text-luxury-dark">
                          {pages[currentPage].preview}
                        </span>
                      </div>
                      
                      <h3 className="font-playfair text-2xl font-bold text-luxury-dark mb-4">
                        {pages[currentPage].title}
                      </h3>
                      
                      <div className="space-y-4 text-luxury-dark/80 font-inter leading-relaxed">
                        <p>{pages[currentPage].content}</p>
                        
                        {/* Mockup content lines */}
                        <div className="space-y-2 pt-4">
                          <div className="h-1 bg-luxury-gold/30 rounded w-full"></div>
                          <div className="h-1 bg-luxury-gold/20 rounded w-4/5"></div>
                          <div className="h-1 bg-luxury-gold/20 rounded w-3/4"></div>
                        </div>
                        
                        {/* Page number */}
                        <div className="text-center pt-6">
                          <span className="text-luxury-gold font-playfair text-sm">
                            Page {currentPage + 1} de {pages.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Page number indicator */}
                  <div className="absolute -bottom-4 -right-4 bg-luxury-gold text-luxury-dark rounded-full w-12 h-12 flex items-center justify-center font-playfair font-bold">
                    {currentPage + 1}
                  </div>
                </div>
                
                {/* Right: Description */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Eye className="text-luxury-gold" size={24} />
                      <h3 className="font-playfair text-2xl font-semibold text-luxury-light">
                        Contenu Exclusif
                      </h3>
                    </div>
                    
                    <p className="text-luxury-light/80 font-inter leading-relaxed">
                      {pages[currentPage].image}
                    </p>
                  </div>
                  
                  {/* Features list */}
                  <div className="space-y-4">
                    <h4 className="font-playfair text-lg font-semibold text-luxury-gold">
                      Dans cette page :
                    </h4>
                    <div className="space-y-2">
                      {[
                        "Instructions détaillées étape par étape",
                        "Photos professionnelles haute qualité", 
                        "Conseils techniques exclusifs",
                        "Timing précis pour chaque étape"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                          <span className="text-luxury-light/70 font-inter text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevPage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-luxury-gold/20 hover:bg-luxury-gold/30 text-luxury-gold rounded-full p-3 transition-smooth backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={nextPage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-luxury-gold/20 hover:bg-luxury-gold/30 text-luxury-gold rounded-full p-3 transition-smooth backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Page Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
                  currentPage === index 
                    ? 'bg-luxury-gold' 
                    : 'bg-luxury-gold/30 hover:bg-luxury-gold/50'
                }`}
              />
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-luxury-light/80 text-lg font-inter mb-6">
              Découvrez les 10 recettes complètes avec toutes les techniques secrètes
            </p>
            <div className="flex items-center justify-center gap-2 text-luxury-gold">
              <BookOpen className="fill-current" size={20} />
              <span className="font-playfair text-xl font-bold">180 pages</span>
              <span className="text-luxury-light/70 font-inter">de contenu exclusif</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}