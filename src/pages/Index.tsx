import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Preview } from "@/components/sections/Preview"
import { Features } from "@/components/sections/Features"
import { Reviews } from "@/components/sections/Reviews"
import { Author } from "@/components/sections/Author"
import { Purchase } from "@/components/sections/Purchase"
import { Footer } from "@/components/sections/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-neutral">
      <Hero />
      <About />
      <Preview />
      <Features />
      <Reviews />
      <Author />
      <Purchase />
      <Footer />
    </div>
  );
};

export default Index;
