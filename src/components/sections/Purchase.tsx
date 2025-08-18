import { Card } from "@/components/ui/card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { Check, Download, Shield, MessageCircle, CreditCard } from "lucide-react"
import ebookCover from "@/assets/ebook-cover.jpg"

export const Purchase = () => {
  const benefits = [
    "10 recettes exclusives d'alchimie culinaire",
    "Instructions étape par étape avec photos",
    "Techniques professionnelles révélées",
    "Astuces pour des textures parfaites",
    "Conseils de présentation et esthétisme",
    "Téléchargement immédiat en PDF",
    "Accès à vie à vos achats",
    "Support client premium"
  ]

  const handlePayPalPayment = () => {
    // PayPal integration would go here
    console.log("Redirecting to PayPal...")
    // window.open("https://paypal.me/your-paypal-link", "_blank")
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Bonjour ! Je suis intéressé(e) par l'ebook 'Alchemical Cakes Volume 1' de Sara Alöwe et souhaiterais effectuer un paiement par virement bancaire. Pouvez-vous me donner les détails ?")
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, "_blank")
  }

  return (
    <section id="purchase" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
            Obtenir l'Ebook
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-luxury-light leading-tight">
            Commencez Votre <span className="text-luxury-gold">Transformation</span> Aujourd'hui
          </h2>
          <p className="text-luxury-light/80 text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Investissez dans votre passion et découvrez les secrets de l'alchimie culinaire 
            qui révolutionneront votre approche de la pâtisserie.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Product Image */}
          <div className="lg:col-span-1 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-3xl blur-2xl transform rotate-3 scale-105 animate-luxury-glow"></div>
              <img 
                src={ebookCover}
                alt="Sara Alöwe - Alchemical Cakes Volume 1"
                className="relative z-10 max-w-sm w-full h-auto rounded-2xl shadow-luxury"
              />
            </div>
          </div>
          
          {/* Purchase Card */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-luxury-dark-lighter border-luxury-gold/30 p-8 lg:p-12 shadow-elegant">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-luxury-light">
                    Alchemical Cakes - Volume 1
                  </h3>
                  <p className="text-luxury-light/80 font-inter">
                    Par <span className="text-luxury-gold font-semibold">Sara Alöwe</span>
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-luxury-light/60 line-through font-inter text-xl">€89</span>
                    <span className="font-playfair text-4xl font-bold text-luxury-gold">€49</span>
                    <span className="bg-luxury-gold text-luxury-dark px-3 py-1 rounded-full text-sm font-semibold">
                      -45%
                    </span>
                  </div>
                  <p className="text-luxury-light/60 font-inter text-sm">
                    Offre de lancement limitée
                  </p>
                </div>
                
                {/* Benefits */}
                <div className="space-y-4">
                  <h4 className="font-playfair text-xl font-semibold text-luxury-light">
                    Ce que vous obtenez :
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="text-luxury-gold flex-shrink-0" size={16} />
                        <span className="text-luxury-light/80 font-inter text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Payment Options */}
                <div className="space-y-6">
                  <h4 className="font-playfair text-xl font-semibold text-luxury-light text-center">
                    Options de Paiement
                  </h4>
                  
                  <div className="space-y-4">
                    {/* PayPal */}
                    <LuxuryButton 
                      variant="paypal" 
                      size="xl" 
                      className="w-full"
                      onClick={handlePayPalPayment}
                    >
                      <CreditCard className="mr-2" size={20} />
                      Payer avec PayPal
                    </LuxuryButton>
                    
                    <div className="text-center">
                      <span className="text-luxury-light/60 font-inter text-sm">ou</span>
                    </div>
                    
                    {/* WhatsApp for Bank Transfer */}
                    <LuxuryButton 
                      variant="whatsapp" 
                      size="xl" 
                      className="w-full"
                      onClick={handleWhatsAppContact}
                    >
                      <MessageCircle className="mr-2" size={20} />
                      Paiement par Virement (WhatsApp)
                    </LuxuryButton>
                  </div>
                </div>
                
                {/* Guarantees */}
                <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-luxury-gold/20">
                  <div className="text-center space-y-2">
                    <Download className="text-luxury-gold mx-auto" size={24} />
                    <p className="text-luxury-light/80 font-inter text-sm">
                      Téléchargement
                      <br />Immédiat
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <Shield className="text-luxury-gold mx-auto" size={24} />
                    <p className="text-luxury-light/80 font-inter text-sm">
                      Paiement
                      <br />Sécurisé
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <MessageCircle className="text-luxury-gold mx-auto" size={24} />
                    <p className="text-luxury-light/80 font-inter text-sm">
                      Support
                      <br />24/7
                    </p>
                  </div>
                </div>
                
                <p className="text-luxury-light/60 font-inter text-xs text-center">
                  En procédant à l'achat, vous acceptez nos conditions de vente et de confidentialité.
                  Satisfaction garantie ou remboursé sous 30 jours.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}