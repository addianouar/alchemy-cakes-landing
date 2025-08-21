import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, BookOpen, Eye } from "lucide-react"
import { useState } from "react"

export const Preview = () => {
  const [currentPage, setCurrentPage] = useState(0)
  
  const pages = [
    {
      title: "Cake Design #1: Élégance Chocolat-Framboises",
      content: "Découvrez cette création spectaculaire alliant ganache chocolat noir intense et coulis de framboises acidulé. Une recette précise avec tous les secrets pour une tenue parfaite et un goût inoubliable.",
      image: "Recette complète avec photos du processus de montage",
      preview: "Recette 1/10: Cake Design Professionnel"
    },
    {
      title: "Cake Design #5: Vanille-Caramel Sculptural",
      content: "Maîtrisez l'art du cake design avec cette création en 3 étages. Génoise vanille, crème caramel beurre salé et glaçage miroir. Technique de sculpture et stabilité garanties.",
      image: "Étapes détaillées du montage et décoration", 
      preview: "Recette 5/10: Techniques de Sculpture"
    },
    {
      title: "Cake Design #10: Création Signature",
      content: "La recette finale qui combine toutes les techniques apprises. Un chef-d'œuvre visuel et gustatif qui impressionnera vos clients les plus exigeants. Secret de conservation inclus.",
      image: "Résultat final avec astuces de présentation",
      preview: "Recette 10/10: Votre Signature"
    }
  ]

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % pages.length)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + pages.length) % pages.length)
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 animate-fade-in-up">
          <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
            🔥 Aperçu du Livre
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-light leading-tight">
            Contenu <span className="text-luxury-gold">Exclusif</span>
          </h2>
          <p className="text-luxury-light/80 text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Un aperçu exclusif de ce qui vous attend : des recettes illustrées pas à pas, 
            des techniques expliquées clairement, et des secrets de pâtisserie jamais révélés.
          </p>
        </div>
        
        {/* Cards Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {pages.map((page, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden bg-luxury-dark-lighter border-2 transition-all duration-500 cursor-pointer hover:shadow-card hover:-translate-y-2 ${
                  currentPage === index 
                    ? 'border-luxury-gold shadow-luxury scale-105' 
                    : 'border-luxury-gold/20 hover:border-luxury-gold/40'
                }`}
                onClick={() => setCurrentPage(index)}
              >
                <div className="p-6 lg:p-8">
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center ${
                      currentPage === index ? 'bg-luxury-gold text-luxury-dark' : 'bg-luxury-gold/10 text-luxury-gold'
                    }`}>
                      <BookOpen size={18} />
                    </div>
                    <span className="font-playfair text-xs lg:text-sm font-semibold text-luxury-light/70">
                      {page.preview}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-lg lg:text-xl font-bold text-luxury-light mb-3 lg:mb-4 line-clamp-2">
                    {page.title}
                  </h3>
                  
                  <p className="text-luxury-light/70 font-inter text-xs lg:text-sm leading-relaxed mb-4 lg:mb-6 line-clamp-3">
                    {page.content}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="h-1 bg-luxury-gold/60 rounded w-full"></div>
                    <div className="h-1 bg-luxury-gold/40 rounded w-4/5"></div>
                    <div className="h-1 bg-luxury-gold/30 rounded w-3/4"></div>
                  </div>
                  
                  {currentPage === index && (
                    <div className="absolute top-3 lg:top-4 right-3 lg:right-4">
                      <div className="bg-luxury-gold text-luxury-dark text-xs px-2 py-1 rounded-full font-medium">
                        Sélectionné
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
          
          {/* Selected Page Details */}
          <Card className="bg-luxury-dark-lighter border-luxury-gold/20 shadow-luxury animate-scale-in">
            <div className="p-6 sm:p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Enhanced Preview */}
                <div className="relative">
                  <div className="bg-luxury-dark rounded-xl p-6 lg:p-8 shadow-card border border-luxury-gold/10">
                    <div className="space-y-4 lg:space-y-6">
                      <div className="flex items-center gap-3 border-b border-luxury-gold/20 pb-4">
                        <Eye className="text-luxury-gold" size={20} />
                        <span className="font-playfair text-base lg:text-lg font-semibold text-luxury-light">
                          Aperçu Détaillé
                        </span>
                      </div>
                      
                      <h3 className="font-playfair text-xl lg:text-2xl font-bold text-luxury-light">
                        {pages[currentPage].title}
                      </h3>
                      
                      <p className="text-luxury-light/80 font-inter text-sm lg:text-base leading-relaxed">
                        {pages[currentPage].content}
                      </p>
                      
                      <div className="bg-luxury-gold/10 rounded-lg p-4">
                        <p className="text-luxury-gold font-inter text-xs lg:text-sm font-medium">
                          {pages[currentPage].image}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-3 -right-3 bg-luxury-gold text-luxury-dark rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center font-playfair font-bold shadow-lg">
                    {currentPage + 1}
                  </div>
                </div>
                
                {/* Right: Features */}
                <div className="space-y-6 lg:space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-playfair text-xl lg:text-2xl font-semibold text-luxury-light flex items-center gap-3">
                      <div className="w-8 h-8 bg-luxury-gold rounded-lg flex items-center justify-center">
                        <BookOpen className="text-luxury-dark" size={16} />
                      </div>
                      Contenu Professionnel
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 lg:gap-4">
                    {[
                      "Instructions détaillées",
                      "Photos haute qualité", 
                      "Conseils exclusifs",
                      "Timing précis"
                    ].map((feature, index) => (
                      <div key={index} className="bg-luxury-gold/10 rounded-lg p-3 lg:p-4 text-center">
                        <div className="w-3 h-3 bg-luxury-gold rounded-full mx-auto mb-2"></div>
                        <span className="text-luxury-light/80 font-inter text-xs lg:text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-luxury-gold rounded-xl p-4 lg:p-6 text-luxury-dark text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <BookOpen className="fill-current" size={20} />
                      <span className="font-playfair text-lg lg:text-xl font-bold">180 pages</span>
                    </div>
                    <p className="text-luxury-dark/80 font-inter text-xs lg:text-sm">
                      de contenu exclusif
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}