// Single source of truth for site copy. Swap placeholders for real assets here.

export const brand = {
  name: "Karan Purba",
  role: "Financial Consultant & Coach",
  domain: "karanpurba.com",
  email: "hello@karanpurba.com",
};

// Appointment booking. Paste your scheduling page URL into `url` to go live.
// Recommended: Google Calendar "Appointment schedule" — free, and bookings land
// straight in your Google Calendar (calendar.google.com -> Create -> Appointment
// schedule -> ... -> "Share" -> copy the booking page link).
// Also works as-is with Cal.com or Calendly (paste their booking link instead).
// Leave `url` empty to show a "booking opens soon" placeholder with an email fallback.
export const booking = {
  url: "",
  provider: "Google Calendar",
};

export const stats = [
  { value: "5+", label: "Years experience" },
  { value: "200+", label: "Advisors mentored" },
  { value: "3,000+", label: "Clients served" },
  { value: "5.0", label: "Google rating", star: true },
];

// Real follower numbers go here once confirmed.
export const socials = [
  { platform: "Instagram", handle: "@karanpurba", value: "—" },
  { platform: "YouTube", handle: "Karan Purba", value: "—" },
  { platform: "TikTok", handle: "@karanpurba", value: "—" },
  { platform: "LinkedIn", handle: "Karan Purba", value: "—" },
];

export const doors = [
  {
    id: "plan",
    tag: "For individuals & families",
    title: "Plan your future",
    blurb:
      "Investment education, registered accounts, and a long-term wealth strategy built around your life — not a sales quota.",
    points: [
      "Personalized financial planning",
      "Investment & registered account guidance",
      "Education-first, zero pressure",
    ],
    cta: "Book a consultation",
  },
  {
    id: "build",
    tag: "For aspiring advisors",
    title: "Build your business",
    blurb:
      "The exact system Karan used to mentor 200+ advisors — weekly coaching, a 60-day launch plan, and real accountability.",
    points: [
      "Weekly coaching calls & mentorship",
      "60-day launch plan",
      "Sales, branding & social media training",
    ],
    cta: "Join the team",
  },
];

// Karan's own story — written in FIRST PERSON (this is his personal site).
export const story = {
  eyebrow: "About me",
  heading: "From a new immigrant to mentoring an industry.",
  body: [
    "Nine years ago I landed in Canada with an accounting background and one simple realization: almost no one is ever taught how money actually works.",
    "So I built a different kind of practice — one that leads with education instead of pressure. Today that approach has guided 3,000+ families and helped train a new generation of 200+ advisors who do this business the right way.",
  ],
  pull: "No high-pressure pitch. Just honest, structured education.",
};

export const offers = [
  {
    name: "1:1 Coaching",
    price: "By application",
    desc: "Direct mentorship to launch or scale your advisory practice.",
    features: ["Weekly calls", "60-day launch plan", "Accountability"],
    cta: "Apply now",
    featured: false,
  },
  {
    name: "Wealth Academy",
    price: "Membership",
    desc: "Karan's flagship community — training, live sessions, and a network of operators.",
    features: ["Live trainings", "Private community", "Resource vault"],
    cta: "Join the Academy",
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
      "He helped me see that my story as a newcomer wasn't something to hide — it was exactly why people would connect with me. That shift changed everything.",
    name: "Mentored advisor",
    detail: "New to Canada · Build Your Business",
  },
  {
    quote:
      "No high-pressure sales pitch — just pure, structured education. I finally understand my own money.",
    name: "Client review",
    detail: "Google review · ★★★★★",
  },
  {
    quote:
      "Transparent, patient, and genuinely people-first. He treats your future like it's his own.",
    name: "Client review",
    detail: "Google review · ★★★★★",
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Coaching", href: "#offers" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Plan your future", href: "#doors" },
];

// Video testimonials. Two ways to add each one (see public/videos/README):
//   1. YouTube/Vimeo (recommended — no repo bloat): { name, role, youtube: "VIDEO_ID" }
//      or { name, role, vimeo: "VIMEO_ID" }
//   2. Self-hosted small mp4 in public/videos: { name, role, src: "/videos/x.mp4", poster: "/videos/x.jpg" }
// Leave this array empty to show an "add your videos" placeholder.
export const videoTestimonials: {
  name: string;
  role: string;
  youtube?: string;
  vimeo?: string;
  src?: string;
  poster?: string;
}[] = [
  { name: "Prabhjit", role: "Client testimonial", src: "/videos/prabhjit.mp4", poster: "/videos/prabhjit.jpg" },
  { name: "Dishant", role: "Mentored advisor", src: "/videos/dishant.mp4", poster: "/videos/dishant.jpg" },
  { name: "Client story", role: "In their words", src: "/videos/testimonial-2.mp4", poster: "/videos/testimonial-2.jpg" },
];

// Instagram reels/posts to feature. Add the shortcode from the URL:
//   https://www.instagram.com/reel/DABC123xyz/  ->  { type: "reel", code: "DABC123xyz" }
//   https://www.instagram.com/p/DABC123xyz/     ->  { type: "p",    code: "DABC123xyz" }
// The post/reel must be public. Leave empty to show a placeholder.
export const reels: { type: "reel" | "p"; code: string; caption?: string }[] = [
  // Example: { type: "reel", code: "DABC123xyz", caption: "How money actually works" },
];
export const instagramHandle = "karanpurba_official";
