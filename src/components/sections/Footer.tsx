import { Card } from "@/components/ui/card"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { Mail, MessageCircle, Instagram, Facebook, Twitter } from "lucide-react"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent("Bonjour ! Je souhaiterais obtenir plus d'informations sur vos ebooks de pâtisserie.")
    window.open(`https://wa.me/YOUR_PHONE_NUMBER?text=${message}`, "_blank")
  }

  const handleEmailContact = () => {
    window.location.href = "mailto:contact@saraalowe.com"
  }

  return (
    <footer className="py-20 bg-luxury-dark border-t border-luxury-gold/20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <h3 className="font-playfair text-2xl md:text-3xl font-bold text-luxury-light">
                Restons en <span className="text-luxury-gold">Contact</span>
              </h3>
              <p className="text-luxury-light/80 font-inter leading-relaxed">
                Vous avez des questions sur nos ebooks ou souhaitez découvrir 
                les prochains volumes de la collection ? N'hésitez pas à nous contacter.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <LuxuryButton 
                variant="whatsapp" 
                onClick={handleWhatsAppContact}
                className="flex-1"
              >
                <MessageCircle className="mr-2" size={18} />
                WhatsApp
              </LuxuryButton>
              <LuxuryButton 
                variant="outline" 
                onClick={handleEmailContact}
                className="flex-1"
              >
                <Mail className="mr-2" size={18} />
                Email
              </LuxuryButton>
            </div>
          </div>
          
          {/* Newsletter */}
          <Card className="bg-luxury-dark-lighter border-luxury-gold/20 p-8 animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="text-center space-y-3">
                <h4 className="font-playfair text-xl font-semibold text-luxury-light">
                  Newsletter Exclusive
                </h4>
                <p className="text-luxury-light/80 font-inter text-sm">
                  Recevez en avant-première nos nouvelles recettes et techniques secrètes
                </p>
              </div>
              
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="w-full px-4 py-3 bg-luxury-dark-lightest border border-luxury-gold/20 rounded-lg text-luxury-light placeholder:text-luxury-light/50 focus:outline-none focus:border-luxury-gold transition-smooth"
                />
                <LuxuryButton variant="primary" size="lg" className="w-full">
                  S'inscrire Gratuitement
                </LuxuryButton>
              </div>
              
              <p className="text-luxury-light/60 font-inter text-xs text-center">
                Pas de spam, uniquement du contenu de qualité. Désabonnement facile.
              </p>
            </div>
          </Card>
        </div>
        
        {/* Social Links & Copyright */}
        <div className="border-t border-luxury-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-luxury-light/70 font-inter text-sm">Suivez-nous :</span>
              <div className="flex gap-3">
                <button className="bg-luxury-dark-lighter border border-luxury-gold/20 p-2 rounded-lg text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-smooth">
                  <Instagram size={18} />
                </button>
                <button className="bg-luxury-dark-lighter border border-luxury-gold/20 p-2 rounded-lg text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-smooth">
                  <Facebook size={18} />
                </button>
                <button className="bg-luxury-dark-lighter border border-luxury-gold/20 p-2 rounded-lg text-luxury-gold hover:bg-luxury-gold hover:text-luxury-dark transition-smooth">
                  <Twitter size={18} />
                </button>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-luxury-light/60 font-inter text-sm">
                © {currentYear} Sara Alöwe. Tous droits réservés.
              </p>
              <p className="text-luxury-light/50 font-inter text-xs mt-1">
                Conception & Développement par l'équipe Sara Alöwe
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}