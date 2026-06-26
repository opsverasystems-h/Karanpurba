import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { TwoDoors } from "@/components/TwoDoors";
import { Story } from "@/components/Story";
import { ProofWall } from "@/components/ProofWall";
import { Offers } from "@/components/Offers";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <SocialProof />
      <TwoDoors />
      <Story />
      <ProofWall />
      <Offers />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
