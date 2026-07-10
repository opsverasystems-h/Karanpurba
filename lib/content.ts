// Single source of truth for site copy. Swap placeholders for real assets here.

export const brand = {
  name: "Karan Purba",
  role: "Financial Consultant & Coach",
  domain: "karanpurba.com",
  email: "hello@karanpurba.com",
};

// Appointment booking. Paste your scheduling page URL into `url` to go live.
// Recommended: Google Calendar "Appointment schedule" - free, and bookings land
// straight in your Google Calendar (calendar.google.com -> Create -> Appointment
// schedule -> ... -> "Share" -> copy the booking page link).
// Also works as-is with Cal.com or Calendly (paste their booking link instead).
// Leave `url` empty to show a "booking opens soon" placeholder with an email fallback.
export const booking = {
  url: "https://calendly.com/karanpurba_?hide_gdpr_banner=1",
  provider: "Calendly",
};

export const stats = [
  { value: "5+", label: "Years experience" },
  { value: "200+", label: "Advisors mentored" },
  { value: "3,000+", label: "Clients served" },
  { value: "5.0", label: "Google rating", star: true },
];

// Real follower numbers go here once confirmed.
export const socials = [
  { platform: "Instagram", handle: "@karanpurba", value: "-" },
  { platform: "YouTube", handle: "Karan Purba", value: "-" },
  { platform: "TikTok", handle: "@karanpurba", value: "-" },
  { platform: "LinkedIn", handle: "Karan Purba", value: "-" },
];

// Social icon links for the sidebar. Confirm/replace these URLs with Karan's
// exact profile links.
export const socialLinks: { name: "Instagram" | "TikTok" | "Facebook" | "LinkedIn" | "YouTube"; url: string }[] = [
  { name: "Instagram", url: "https://www.instagram.com/karanpurba_official/" },
  { name: "TikTok", url: "https://www.tiktok.com/@karanpurba_official" },
  { name: "Facebook", url: "https://www.facebook.com/karanpurba" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/karanpurba/" },
  { name: "YouTube", url: "https://www.youtube.com/@karanpurba" },
];

export const doors = [
  {
    id: "build",
    tag: "For new & experienced financial advisors",
    title: "Build your business",
    blurb:
      "Skip the pressure tactics on friends and family. Build a sustainable practice, a real personal brand, and lasting client relationships.",
    points: [
      "Weekly coaching calls",
      "60-day launch plan",
      "Sales & communication training",
      "Social media & branding support",
      "Mentorship & accountability",
    ],
    cta: "Join the team",
    href: "#coach",
  },
  {
    id: "plan",
    tag: "For individuals, families & businesses",
    title: "Plan your future",
    blurb:
      "Investment education, registered accounts, and a long-term wealth strategy built around your life - never a sales quota.",
    points: [
      "Financial planning",
      "Investment education",
      "Registered account guidance",
      "Long-term wealth strategy",
      "Personalized consultations",
    ],
    cta: "Get started",
    href: "#planning",
  },
];

// "What you'll achieve" - advisor coaching outcomes (from the coaching program).
export const outcomes = [
  {
    title: "Build confidence",
    desc: "Walk into any conversation sure of your value - no scripts, no pressure.",
  },
  {
    title: "Sustainable growth systems",
    desc: "Proven, repeatable systems that grow your practice without burning out.",
  },
  {
    title: "Sales & communication",
    desc: "Have real conversations that build trust instead of chasing a quota.",
  },
  {
    title: "Grow your personal brand",
    desc: "Build a presence that brings clients to you - social, content and reputation.",
  },
  {
    title: "Long-term client relationships",
    desc: "Turn one-time sales into decades-long, referral-driving relationships.",
  },
  {
    title: "Leadership & business skills",
    desc: "Develop the leadership to build a team and scale beyond yourself.",
  },
];

// Karan's own story - written in FIRST PERSON (this is his personal site).
export const story = {
  eyebrow: "About me",
  heading: "From a new immigrant to mentoring an industry.",
  body: [
    "I came to Canada in 2017 and started out in accounting. What struck me was simple: almost no one is ever taught how money actually works.",
    "So instead of the usual pressure-based sales, I built my own path - education-first. Since then I've guided 3,000+ families to better financial decisions and mentored 200+ advisors to do this business the right way.",
  ],
  pull: "No high-pressure pitch. Just honest, structured education.",
};

export const offers = [
  {
    name: "1:1 Coaching",
    price: "By application",
    desc: "Direct mentorship to build your practice the right way - no pressure tactics.",
    features: ["Weekly coaching calls", "60-day launch plan", "Mentorship & accountability"],
    cta: "Apply now",
    featured: false,
  },
  {
    name: "Advisor Community",
    price: "Membership",
    desc: "Karan's flagship community - training, live sessions, and a network of advisors doing it the right way.",
    features: ["Sales & communication training", "Social media & branding", "Community support"],
    cta: "Join the community",
    featured: true,
  },
  {
    name: "Plan Your Future",
    price: "Free consult",
    desc: "A personalized financial plan for individuals and families.",
    features: ["Investment education", "Registered accounts", "Long-term strategy"],
    cta: "Book a call",
    featured: false,
  },
];

export const testimonials = [
  {
    quote:
      "No high-pressure sales pitch - just pure, structured education. I finally understand my own money.",
    name: "David K.",
    detail: "Business owner",
  },
  {
    quote:
      "Karan's mentorship is about delivering real value - not the traditional, exhausting pressure tactics.",
    name: "Sarah M.",
    detail: "Financial Consultant",
  },
  {
    quote:
      "A genuinely people-first approach, with clear frameworks I could actually follow.",
    name: "Rajit S.",
    detail: "Tech professional",
  },
];

export const nav = [
  { label: "Home", href: "#top" },
  { label: "About me", href: "#about" },
  { label: "Coach with Karan", href: "#coach" },
  { label: "Financial planning", href: "#planning" },
  { label: "Wealth Academy", href: "#academy" },
  { label: "Contact", href: "#contact" },
];

// ---- Three offerings, each: intro (start) -> proof -> content -> CTA ----

export const coach = {
  eyebrow: "Coach with Karan",
  title: "Build your advisory business the right way",
  body: "Most advisors start with unclear direction and pressure tactics on friends and family. This is the opposite - a proven system to build a sustainable practice, a real personal brand, and lasting client relationships.",
  cta: "Start your journey",
  // "What you get" - program inclusions
  get: [
    "Weekly coaching calls",
    "Mentorship & accountability",
    "60-day launch plan",
    "Sales & communication training",
    "Social media & personal branding",
    "Client presentation support",
    "Growth systems & strategy",
    "Community support",
  ],
  ctaHeading: "Ready to build it the right way?",
  ctaButton: "Start your journey",
};

export const planning = {
  eyebrow: "Financial planning",
  title: "Plan your future - not a sales quota",
  body: "Investment education, registered accounts, and a long-term wealth strategy built around your life. Education-first, zero pressure - so you finally understand and control your money.",
  cta: "Book a consultation",
  includes: [
    "Personalized financial plan",
    "Investment & registered account guidance",
    "Retirement & first-home planning",
    "Family protection & insurance",
    "Long-term, education-first strategy",
    "A partner who treats your future like their own",
  ],
  ctaHeading: "Let's plan your future together",
  ctaButton: "Book a consultation",
};

export const academy = {
  eyebrow: "Wealth Academy",
  title: "Join the community",
  body: "Karan's flagship community - trainings, live sessions, resources, and a network of advisors and learners all doing this the right way.",
  cta: "Join the Academy",
  // Set skoolUrl to your Skool community link, and add a screenshot at
  // public/photos/skool.png (or .webp) once you share it.
  skoolUrl: "",
  skoolImage: "/photos/skool.webp",
  ctaHeading: "Your seat is waiting",
  ctaButton: "Join the Wealth Academy",
};

// Video testimonials. Two ways to add each one (see public/videos/README):
//   1. YouTube/Vimeo (recommended - no repo bloat): { name, role, youtube: "VIDEO_ID" }
//      or { name, role, vimeo: "VIMEO_ID" }
//   2. Self-hosted small mp4 in public/videos: { name, role, src: "/videos/x.mp4", poster: "/videos/x.jpg" }
// Leave this array empty to show an "add your videos" placeholder.
export const videoTestimonials: {
  name: string;
  role: string;
  quote?: string; // short pull-quote shown above the video
  handle?: string; // e.g. "@name" (Instagram) - optional
  followers?: string; // e.g. "21.9k followers" - optional
  youtube?: string;
  vimeo?: string;
  src?: string;
  poster?: string;
}[] = [
  {
    name: "Prabhjit",
    role: "Mentored advisor",
    quote: "The mentorship gave me a real plan - I finally feel in control of my growth.",
    src: "/videos/prabhjit.mp4",
    poster: "/videos/prabhjit.jpg",
  },
  {
    name: "Dishant",
    role: "Mentored advisor",
    quote: "From starting out to real momentum - being around the right energy changed everything.",
    src: "/videos/dishant.mp4",
    poster: "/videos/dishant.jpg",
  },
  {
    name: "Sukhmeet",
    role: "Mentored advisor",
    quote: "I learned to lead with education, not pressure - and clients actually trust me now.",
    src: "/videos/testimonial-2.mp4",
    poster: "/videos/testimonial-2.jpg",
  },
];

// Instagram reels/posts to feature. Add the shortcode from the URL:
//   https://www.instagram.com/reel/DABC123xyz/  ->  { type: "reel", code: "DABC123xyz" }
//   https://www.instagram.com/p/DABC123xyz/     ->  { type: "p",    code: "DABC123xyz" }
// The post/reel must be public. Leave empty to show a placeholder.
export const reels: { type: "reel" | "p"; code: string; caption?: string }[] = [
  // Example: { type: "reel", code: "DABC123xyz", caption: "How money actually works" },
];
export const instagramHandle = "karanpurba_official";
