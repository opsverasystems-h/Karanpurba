import { Sidebar } from "@/components/Sidebar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { ClassroomBand } from "@/components/ClassroomBand";
import { SectionIntro } from "@/components/SectionIntro";
import { VideoTestimonials } from "@/components/VideoTestimonials";
import { CoachContent } from "@/components/CoachContent";
import { ProofWall } from "@/components/ProofWall";
import { PlanningIncludes } from "@/components/PlanningIncludes";
import { Skool } from "@/components/Skool";
import { CtaBand } from "@/components/CtaBand";
import { Booking } from "@/components/Booking";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";
import { coach, planning, academy } from "@/lib/content";

export default function Home() {
  return (
    <main className="relative">
      <Sidebar />
      <div className="lg:pl-64">
        {/* Home */}
        <Hero />

        {/* About me */}
        <Story />
        <ClassroomBand />

        {/* Coach with Karan */}
        <SectionIntro
          id="coach"
          eyebrow={coach.eyebrow}
          title={coach.title}
          body={coach.body}
          cta={coach.cta}
          ctaHref="#book"
        />
        <VideoTestimonials />
        <CoachContent />
        <CtaBand heading={coach.ctaHeading} button={coach.ctaButton} href="#book" />

        {/* Financial planning */}
        <SectionIntro
          id="planning"
          eyebrow={planning.eyebrow}
          title={planning.title}
          body={planning.body}
          cta={planning.cta}
          ctaHref="#book"
        />
        <ProofWall />
        <PlanningIncludes />
        <CtaBand
          heading={planning.ctaHeading}
          button={planning.ctaButton}
          href="#book"
        />

        {/* Wealth Academy */}
        <SectionIntro
          id="academy"
          eyebrow={academy.eyebrow}
          title={academy.title}
          body={academy.body}
          cta={academy.cta}
          ctaHref={academy.skoolUrl || "#book"}
        />
        <Skool />
        <CtaBand
          heading={academy.ctaHeading}
          button={academy.ctaButton}
          href={academy.skoolUrl || "#book"}
        />

        {/* Contact */}
        <Booking />
        <FinalCTA />
        <Footer />
      </div>
      <StickyCTA />
    </main>
  );
}
