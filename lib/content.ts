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

export const story = {
  eyebrow: "The story",
  heading: "From a new immigrant to mentoring an industry.",
  body: [
    "Nine years ago, Karan landed in Canada with an accounting background and a simple observation: almost no one was taught how money actually works.",
    "So he built a different kind of practice — one that leads with education instead of pressure. Today that philosophy has guided 3,000+ families and trained a new generation of 200+ advisors who do business the right way.",
  ],
  pull: "No high-pressure pitch. Just pure, structured education.",
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
      "No high-pressure sales pitch — just pure, structured education. I finally understand my own money.",
    name: "Client review",
    detail: "Google review · ★★★★★",
  },
  {
    quote:
      "Karan's mentorship took me from zero to a real practice in months. The 60-day plan is gold.",
    name: "Mentored advisor",
    detail: "Build Your Business",
  },
  {
    quote:
      "Transparent, patient, and genuinely people-first. He treats your future like it's his own.",
    name: "Client review",
    detail: "Google review · ★★★★★",
  },
];

export const nav = [
  { label: "Story", href: "#story" },
  { label: "Coaching", href: "#offers" },
  { label: "Wealth Academy", href: "#offers" },
  { label: "Plan your future", href: "#doors" },
];
