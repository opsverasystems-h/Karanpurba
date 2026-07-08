import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { TwoDoors } from "@/components/TwoDoors";
import { Story } from "@/components/Story";
import { ClassroomBand } from "@/components/ClassroomBand";
import { ProofWall } from "@/components/ProofWall";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Reels } from "@/components/Reels";
import { Offers } from "@/components/Offers";
import { Booking } from "@/components/Booking";
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
      <ClassroomBand />
      <ProofWall />
      <VideoTestimonials />
      <Reels />
      <Offers />
      <Booking />
      <FinalCTA />
      <Footer />
      <StickyCTA />
    </main>
  );
}
