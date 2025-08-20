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
    <section id="purchase" className="py-20 bg-gradient-to-br from-white to-rose-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center space-y-6 mb-16 animate-fade-in-up">
          <p className="text-rose-600 font-inter font-medium tracking-wider uppercase text-sm">
            💳 Commandez maintenant
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Obtenez votre <span className="text-rose-600">exemplaire</span>
          </h2>
          <p className="text-gray-700 text-lg font-inter leading-relaxed max-w-3xl mx-auto">
            Transformez votre approche de la pâtisserie dès aujourd'hui avec ce guide révolutionnaire. 
            Offre limitée avec garantie satisfait ou remboursé.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Product Image */}
          <div className="lg:col-span-1 flex justify-center animate-scale-in">
          <div className="relative">
            <div className="absolute inset-0 bg-rose-200/30 rounded-3xl blur-2xl transform rotate-3 scale-105 animate-luxury-glow"></div>
            <img 
              src={ebookCover}
              alt="Sara Alöwe - Alchemical Cakes Volume 1"
              className="relative z-10 max-w-sm w-full h-auto rounded-2xl shadow-xl shadow-rose-100/50"
            />
            </div>
          </div>
          
          {/* Purchase Card */}
          <div className="lg:col-span-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-white border-rose-200 p-8 lg:p-12 shadow-xl">
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-4">
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900">
                    Alchemical Cakes - Volume 1
                  </h3>
                  <p className="text-rose-500 font-inter">
                    Par Sara Alöwe
                  </p>
                  
                  {/* Price */}
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-gray-400 line-through font-inter text-xl">€89</span>
                    <span className="font-playfair text-4xl font-bold text-rose-600">€47</span>
                    <span className="bg-rose-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      -47%
                    </span>
                  </div>
                  <p className="text-gray-600 font-inter text-sm">
                    Offre de lancement limitée
                  </p>
                </div>
                
                {/* Benefits */}
                <div className="space-y-4">
                  <h4 className="font-playfair text-xl font-semibold text-rose-600 text-center">
                    Ce que vous obtenez :
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <Check className="text-rose-600 flex-shrink-0" size={16} />
                        <span className="text-gray-700 font-inter text-sm">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Payment Options */}
                <div className="space-y-6">
                  <h4 className="font-playfair text-xl font-semibold text-gray-900 text-center">
                    Options de Paiement
                  </h4>
                  
                  <div className="space-y-4">
                    {/* PayPal */}
                    <LuxuryButton 
                      variant="primary" 
                      size="xl" 
                      className="w-full bg-rose-600 hover:bg-rose-700 text-white"
                      onClick={handlePayPalPayment}
                    >
                      <CreditCard className="mr-2" size={20} />
                      Payer avec PayPal - €47
                    </LuxuryButton>
                    
                    <div className="text-center">
                      <span className="text-gray-500 font-inter text-sm">ou</span>
                    </div>
                    
                    {/* WhatsApp for Bank Transfer */}
                    <LuxuryButton 
                      variant="outline" 
                      size="xl" 
                      className="w-full border-rose-600 text-rose-600 hover:bg-rose-50"
                      onClick={handleWhatsAppContact}
                    >
                      <MessageCircle className="mr-2" size={20} />
                      Paiement par Virement (WhatsApp)
                    </LuxuryButton>
                  </div>
                </div>
                
                {/* Guarantees */}
                <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-rose-200">
                  <div className="text-center space-y-2">
                    <Download className="text-rose-600 mx-auto" size={24} />
                    <p className="text-gray-600 font-inter text-sm">
                      Téléchargement
                      <br />Immédiat
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <Shield className="text-rose-600 mx-auto" size={24} />
                    <p className="text-gray-600 font-inter text-sm">
                      Paiement
                      <br />Sécurisé
                    </p>
                  </div>
                  <div className="text-center space-y-2">
                    <MessageCircle className="text-rose-600 mx-auto" size={24} />
                    <p className="text-gray-600 font-inter text-sm">
                      Support
                      <br />24/7
                    </p>
                  </div>
                </div>
                
                <p className="text-gray-500 font-inter text-xs text-center">
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