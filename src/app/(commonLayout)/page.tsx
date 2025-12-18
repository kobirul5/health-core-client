import { Features } from "@/components/modules/Home/Features";
import { HeroSection } from "@/components/modules/Home/HeroSection";
import { HowItWorks } from "@/components/modules/Home/HowItWorks";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col mx-auto">
     <HeroSection />
     <Features />
     <HowItWorks />
    </div>
  );
}
