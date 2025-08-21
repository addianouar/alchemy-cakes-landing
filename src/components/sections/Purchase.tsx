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
    <section id="purchase" className="py-16 lg:py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-4 lg:space-y-6 mb-12 lg:mb-16 animate-fade-in-up">
          <p className="text-luxury-gold font-inter font-medium tracking-wider uppercase text-sm">
            💳 Commandez maintenant
          </p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-light leading-tight">
            Obtenez votre <span className="text-luxury-gold">exemplaire</span>
          </h2>
          <p className="text-luxury-light/80 text-base sm:text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Transformez votre approche de la pâtisserie dès aujourd'hui avec ce guide révolutionnaire. 
            Offre limitée avec garantie satisfait ou remboursé.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Product Image */}
          <div className="lg:col-span-1 flex justify-center animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 bg-luxury-gold/10 rounded-3xl blur-2xl transform rotate-3 scale-105 animate-luxury-glow"></div>
            <img 
              src={ebookCover}
              alt="Sara Alöwe - Alchemical Cakes Volume 1"
              className="relative z-10 max-w-xs sm:max-w-sm w-full h-auto rounded-2xl shadow-luxury"
            />
            </div>
          </div>
          
          {/* Purchase Card */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-6 lg:p-8 xl:p-12 shadow-luxury">
              <div className="space-y-6 lg:space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-luxury-light">
                    Alchemical Cakes - Volume 1
                  </h3>
                  <p className="text-luxury-gold-muted font-inter">
                    Par Sara Alöwe
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-luxury-light/50 line-through font-inter text-lg sm:text-xl">€89</span>
                    <span className="font-playfair text-3xl sm:text-4xl font-bold text-luxury-gold">€47</span>
                    <span className="bg-luxury-gold text-luxury-dark px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      -47%
                    </span>
                  </div>
                  <p className="text-luxury-light/70 font-inter text-sm">
                    Offre de lancement limitée
                  </p>
                </div>
                
                {/* Benefits */}
                <div className="space-y-4">
                  <h4 className="font-playfair text-lg sm:text-xl font-semibold text-luxury-gold text-center">
                    Ce que vous obtenez :
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="text-luxury-gold flex-shrink-0" size={16} />
                        <span className="text-luxury-light/80 font-inter text-xs sm:text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Payment Options */}
                <div className="space-y-4 lg:space-y-6">
                  <h4 className="font-playfair text-lg sm:text-xl font-semibold text-luxury-light text-center">
                    Options de Paiement
                  </h4>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {/* PayPal */}
                    <LuxuryButton 
                      variant="primary" 
                      size="xl" 
                      className="w-full"
                      onClick={handlePayPalPayment}
                    >
                      <CreditCard className="mr-2" size={20} />
                      Payer avec PayPal - €47
                    </LuxuryButton>
                    
                    <div className="text-center">
                      <span className="text-luxury-light/50 font-inter text-sm">ou</span>
                    </div>
                    
                    {/* WhatsApp for Bank Transfer */}
                    <LuxuryButton 
                      variant="outline" 
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
                <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 lg:pt-6 border-t border-luxury-gold/20">
                  <div className="text-center space-y-2">
                    <Download className="text-luxury-gold mx-auto" size={20} />
                    <p className="text-luxury-light/70 font-inter text-xs">
                      Téléchargement
                      <br />Immédiat
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <Shield className="text-luxury-gold mx-auto" size={20} />
                    <p className="text-luxury-light/70 font-inter text-xs">
                      Paiement
                      <br />Sécurisé
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <MessageCircle className="text-luxury-gold mx-auto" size={20} />
                    <p className="text-luxury-light/70 font-inter text-xs">
                      Support
                      <br />24/7
                    </p>
                  </div>
                </div>
                
                <p className="text-luxury-light/50 font-inter text-xs text-center">
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