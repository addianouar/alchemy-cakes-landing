import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Features } from "@/components/sections/Features"
import { Author } from "@/components/sections/Author"
import { Preview } from "@/components/sections/Preview"
import { Purchase } from "@/components/sections/Purchase"
import { Footer } from "@/components/sections/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-dark">
      <Hero />
      <About />
      <Features />
      <Author />
      <Preview />
      <Purchase />
      <Footer />
    </div>
  );
};

export default Index;
