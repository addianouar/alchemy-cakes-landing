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
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <p className="text-rose-600 font-inter font-medium tracking-wider uppercase text-sm">
            🔥 Option 1 : Aperçu du Livre
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Preview <span className="text-rose-600">Section</span>
          </h2>
          <p className="text-gray-700 text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Un aperçu exclusif de ce qui vous attend : des recettes illustrées pas à pas, 
            des techniques expliquées clairement, et des secrets de pâtisserie jamais révélés.
          </p>
        </div>
        
        {/* Cards Grid Layout */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {pages.map((page, index) => (
              <Card 
                key={index}
                className={`relative overflow-hidden bg-white border-2 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:-translate-y-2 ${
                  currentPage === index 
                    ? 'border-rose-500 shadow-xl scale-105' 
                    : 'border-gray-200 hover:border-rose-300'
                }`}
                onClick={() => setCurrentPage(index)}
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentPage === index ? 'bg-rose-500 text-white' : 'bg-rose-100 text-rose-600'
                    }`}>
                      <BookOpen size={20} />
                    </div>
                    <span className="font-playfair text-sm font-semibold text-gray-600">
                      {page.preview}
                    </span>
                  </div>
                  
                  <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {page.title}
                  </h3>
                  
                  <p className="text-gray-600 font-inter text-sm leading-relaxed mb-6 line-clamp-3">
                    {page.content}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="h-1 bg-rose-200/60 rounded w-full"></div>
                    <div className="h-1 bg-rose-200/40 rounded w-4/5"></div>
                    <div className="h-1 bg-rose-200/30 rounded w-3/4"></div>
                  </div>
                  
                  {currentPage === index && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-rose-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Sélectionné
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
          
          {/* Selected Page Details */}
          <Card className="bg-white border-rose-200 shadow-lg animate-scale-in">
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Enhanced Preview */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-rose-50 to-white rounded-xl p-8 shadow-lg border border-rose-100">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-rose-200 pb-4">
                        <Eye className="text-rose-500" size={20} />
                        <span className="font-playfair text-lg font-semibold text-gray-900">
                          Aperçu Détaillé
                        </span>
                      </div>
                      
                      <h3 className="font-playfair text-2xl font-bold text-gray-900">
                        {pages[currentPage].title}
                      </h3>
                      
                      <p className="text-gray-700 font-inter leading-relaxed">
                        {pages[currentPage].content}
                      </p>
                      
                      <div className="bg-rose-50 rounded-lg p-4">
                        <p className="text-rose-700 font-inter text-sm font-medium">
                          {pages[currentPage].image}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-playfair font-bold shadow-lg">
                    {currentPage + 1}
                  </div>
                </div>
                
                {/* Right: Features */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-playfair text-2xl font-semibold text-gray-900 flex items-center gap-3">
                      <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
                        <BookOpen className="text-white" size={16} />
                      </div>
                      Contenu Professionnel
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      "Instructions détaillées",
                      "Photos haute qualité", 
                      "Conseils exclusifs",
                      "Timing précis"
                    ].map((feature, index) => (
                      <div key={index} className="bg-rose-50 rounded-lg p-4 text-center">
                        <div className="w-3 h-3 bg-rose-500 rounded-full mx-auto mb-2"></div>
                        <span className="text-gray-700 font-inter text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl p-6 text-white text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <BookOpen className="fill-current" size={20} />
                      <span className="font-playfair text-xl font-bold">180 pages</span>
                    </div>
                    <p className="text-rose-100 font-inter text-sm">
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