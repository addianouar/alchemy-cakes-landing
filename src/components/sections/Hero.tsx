import { LuxuryButton } from "@/components/ui/luxury-button"
import { ArrowDown } from "lucide-react"
import ebookCover from "@/assets/ebook-cover.jpg"

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-rose-50 flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl animate-luxury-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200/15 rounded-full blur-3xl animate-luxury-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/20 rounded-full blur-3xl animate-luxury-glow"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-rose-600 font-inter font-medium tracking-wider uppercase text-sm">
              🧪 Sara Alöwe - Collection Exclusive
            </p>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Alchemical Cakes</span>
              <br />
              <span className="text-rose-600">Volume 1</span>
            </h1>
            <p className="text-gray-700 text-lg md:text-xl font-inter leading-relaxed max-w-2xl">
              Découvrez le premier volume d'une collection exclusive où chaque gâteau est conçu comme une expérience alchimique. 
              <span className="text-rose-600 font-semibold">10 recettes innovantes</span>, précises et testées.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-inter">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                Saveurs uniques
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                Textures parfaites
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                Esthétisme irréprochable
              </span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <LuxuryButton 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection('purchase')}
                className="group"
              >
                Obtenir l'Ebook
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </LuxuryButton>
              <LuxuryButton 
                variant="outline" 
                size="xl"
                onClick={() => scrollToSection('about')}
              >
                En savoir plus
              </LuxuryButton>
            </div>
          </div>
        </div>
        
        {/* Ebook Cover */}
        <div className="relative flex justify-center lg:justify-end animate-scale-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative">
            <div className="absolute inset-0 bg-rose-200/30 rounded-3xl blur-2xl transform rotate-6 scale-105 animate-luxury-glow"></div>
            <img 
              src={ebookCover}
              alt="Sara Alöwe - Alchemical Cakes Volume 1"
              className="relative z-10 max-w-sm lg:max-w-md xl:max-w-lg w-full h-auto rounded-2xl shadow-xl shadow-rose-100/50 hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-rose-500 hover:text-rose-600 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  )
}