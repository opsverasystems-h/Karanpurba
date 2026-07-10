import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { TwoDoors } from "@/components/TwoDoors";
import { Story } from "@/components/Story";
import { ClassroomBand } from "@/components/ClassroomBand";
import { ProofWall } from "@/components/ProofWall";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { Reels } from "@/components/Reels";
import { Outcomes } from "@/components/Outcomes";
import { Offers } from "@/components/Offers";
import { Booking } from "@/components/Booking";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <div className="lg:pl-64">
        <Hero />
        <TwoDoors />
        <Story />
        <ClassroomBand />
        <ProofWall />
        <VideoTestimonials />
        <Reels />
        <Outcomes />
        <Offers />
        <Booking />
        <FinalCTA />
        <Footer />
      </div>
      <StickyCTA />
    </main>
  );
}
