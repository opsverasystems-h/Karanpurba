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
      "Most advisors start with unclear direction and pressure tactics on friends and family. This is the opposite — a system to build a sustainable practice, a real personal brand, and lasting client relationships.",
    points: [
      "Weekly coaching calls & accountability",
      "60-day launch plan",
      "Sales, communication & branding training",
    ],
    cta: "Start your journey",
  },
];

// "What you'll achieve" — advisor coaching outcomes (from the coaching program).
export const outcomes = [
  {
    title: "Build confidence",
    desc: "Walk into any conversation sure of your value — no scripts, no pressure.",
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
    desc: "Build a presence that brings clients to you — social, content and reputation.",
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

// Karan's own story — written in FIRST PERSON (this is his personal site).
export const story = {
  eyebrow: "About me",
  heading: "From a new immigrant to mentoring an industry.",
  body: [
    "I came to Canada in 2017 and started out in accounting. What struck me was simple: almost no one is ever taught how money actually works.",
    "So instead of the usual pressure-based sales, I built my own path — education-first. Since then I've guided 3,000+ families to better financial decisions and mentored 200+ advisors to do this business the right way.",
  ],
  pull: "No high-pressure pitch. Just honest, structured education.",
};

export const offers = [
  {
    name: "1:1 Coaching",
    price: "By application",
    desc: "Direct mentorship to build your practice the right way — no pressure tactics.",
    features: ["Weekly coaching calls", "60-day launch plan", "Mentorship & accountability"],
    cta: "Apply now",
    featured: false,
  },
  {
    name: "Advisor Community",
    price: "Membership",
    desc: "Karan's flagship community — training, live sessions, and a network of advisors doing it the right way.",
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
      "No high-pressure sales pitch — just pure, structured education. I finally understand my own money.",
    name: "David K.",
    detail: "Business owner",
  },
  {
    quote:
      "Karan's mentorship is about delivering real value — not the traditional, exhausting pressure tactics.",
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
  { name: "Prabhjit", role: "Mentored advisor", src: "/videos/prabhjit.mp4", poster: "/videos/prabhjit.jpg" },
  { name: "Dishant", role: "Mentored advisor", src: "/videos/dishant.mp4", poster: "/videos/dishant.jpg" },
  { name: "Sukhmeet", role: "Mentored advisor", src: "/videos/testimonial-2.mp4", poster: "/videos/testimonial-2.jpg" },
];

// Instagram reels/posts to feature. Add the shortcode from the URL:
//   https://www.instagram.com/reel/DABC123xyz/  ->  { type: "reel", code: "DABC123xyz" }
//   https://www.instagram.com/p/DABC123xyz/     ->  { type: "p",    code: "DABC123xyz" }
// The post/reel must be public. Leave empty to show a placeholder.
export const reels: { type: "reel" | "p"; code: string; caption?: string }[] = [
  // Example: { type: "reel", code: "DABC123xyz", caption: "How money actually works" },
];
export const instagramHandle = "karanpurba_official";
