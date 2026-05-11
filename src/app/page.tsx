
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Features } from "@/components/sections/Features";
import { AiIntelligence } from "@/components/sections/AiIntelligence";
import { UseCases } from "@/components/sections/UseCases";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <Features />
        <AiIntelligence />
        <UseCases />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
