import { Card } from "@/components/ui/card"
import { Star, Quote, ChefHat, Trophy } from "lucide-react"

export const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      role: "Pâtissière Amateur",
      image: "👩‍🍳",
      rating: 5,
      comment: "Ce livre a transformé ma façon de faire de la pâtisserie. Les recettes sont claires et les résultats spectaculaires !",
      result: "Cake Design Réussi"
    },
    {
      name: "Ahmed K.",
      role: "Chef Professionnel",
      image: "👨‍🍳",
      rating: 5,
      comment: "Les techniques expliquées sont d'un niveau professionnel. Mes clients adorent mes nouvelles créations !",
      result: "Business Développé"
    },
    {
      name: "Lisa R.",
      role: "Maman Passionnée",
      image: "👩",
      rating: 5,
      comment: "Enfin un livre qui explique tout étape par étape. Mes enfants sont émerveillés par mes gâteaux !",
      result: "Famille Ravie"
    }
  ]

  const applications = [
    {
      title: "Gâteau d'Anniversaire Premium",
      student: "Marie D.",
      description: "Réalisation parfaite de la recette #3 pour l'anniversaire de sa fille",
      achievement: "Commandes de voisins obtenues"
    },
    {
      title: "Wedding Cake Professionnel",
      student: "Karim H.",
      description: "Application des techniques avancées pour un mariage de 150 invités",
      achievement: "Contrat avec wedding planner"
    },
    {
      title: "Pâtisserie Artistique",
      student: "Fatima L.",
      description: "Création originale inspirée des recettes du livre",
      achievement: "Exposition locale remportée"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-luxury-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 animate-fade-in-up">
          <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
            ⭐ Témoignages & Résultats
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-light leading-tight">
            Nos Élèves <span className="text-luxury-gold">Témoignent</span>
          </h2>
          <p className="text-luxury-light/80 text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Découvrez comment ce livre a transformé la passion pâtissière de nos lecteurs 
            en véritables succès personnels et professionnels.
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-12 lg:space-y-16">
          {/* Reviews Section */}
          <div>
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-luxury-light text-center mb-8 lg:mb-12">
              Avis de nos Lecteurs
            </h3>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-luxury-dark-lighter border-luxury-gold/10 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-luxury-gold/10 flex items-center justify-center text-2xl">
                        {review.image}
                      </div>
                      <div>
                        <h4 className="font-playfair text-lg font-bold text-luxury-light">{review.name}</h4>
                        <p className="text-luxury-light/70 text-sm font-inter">{review.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-luxury-gold text-luxury-gold" />
                      ))}
                    </div>
                    
                    <div className="relative mb-6">
                      <Quote className="absolute -top-2 -left-1 w-6 h-6 text-luxury-gold/30" />
                      <p className="text-luxury-light/80 font-inter text-sm lg:text-base leading-relaxed pl-6">
                        {review.comment}
                      </p>
                    </div>
                    
                    <div className="bg-luxury-accent/10 rounded-lg p-3 text-center">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <Trophy className="w-4 h-4 text-luxury-gold" />
                        <span className="font-playfair text-sm font-semibold text-luxury-light">
                          Résultat Obtenu
                        </span>
                      </div>
                      <p className="text-luxury-light/70 text-xs font-medium">{review.result}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Applications Section */}
          <div>
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-luxury-light text-center mb-8 lg:mb-12">
              Applications Pratiques de nos Élèves
            </h3>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {applications.map((app, index) => (
                <Card key={index} className="bg-luxury-dark-lighter border-luxury-accent/20 shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-2">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-luxury-gold rounded-lg flex items-center justify-center">
                        <ChefHat className="w-5 h-5 text-luxury-dark" />
                      </div>
                      <div>
                        <h4 className="font-playfair text-lg font-bold text-luxury-light line-clamp-1">
                          {app.title}
                        </h4>
                        <p className="text-luxury-gold text-sm font-medium">par {app.student}</p>
                      </div>
                    </div>
                    
                    <p className="text-luxury-light/70 font-inter text-sm leading-relaxed mb-4">
                      {app.description}
                    </p>
                    
                    <div className="bg-luxury-accent/10 rounded-lg p-3 border-l-4 border-luxury-accent">
                      <p className="text-luxury-light font-inter text-xs lg:text-sm font-semibold">
                        🎯 {app.achievement}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="bg-luxury-accent text-white shadow-luxury max-w-2xl mx-auto">
              <div className="p-8 lg:p-12">
                <h3 className="font-playfair text-2xl lg:text-3xl font-bold mb-4">
                  Rejoignez nos Élèves à Succès
                </h3>
                <p className="font-inter text-white/90 mb-6">
                  Votre transformation commence aujourd'hui. Obtenez les mêmes résultats exceptionnels.
                </p>
                <a 
                  href="#purchase" 
                  className="inline-flex items-center gap-2 bg-luxury-gold text-luxury-dark px-8 py-4 rounded-lg font-playfair font-bold text-lg hover:bg-luxury-gold/90 transition-colors duration-300"
                >
                  <ChefHat className="w-5 h-5" />
                  Commencer Ma Transformation
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}