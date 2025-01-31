import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonilas from "@/components/Testimonials";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <main>
      <div className="h-full w-full">
        <Hero />
        <Navbar />
        {/* Add your content here */}
        <Testimonilas />
        <CTA />
        <Team />
        <Services />
        <NewsLetter />
        <Footer />
      </div>
    </main>
  );
}
