# Testimonial videos

Two ways to add a video testimonial. Edit `lib/content.ts` → `videoTestimonials`.

## Option 1 — YouTube / Vimeo (recommended)
No repo bloat, fast loading, works on every device. Upload the clip (can be
**Unlisted**), grab the ID, and add an entry:

```ts
{ name: "Full name", role: "Short line (e.g. Mentored to a full practice)", youtube: "VIDEO_ID" }
// or
{ name: "Full name", role: "Client · Vancouver", vimeo: "VIMEO_ID" }
```

- YouTube ID = the part after `watch?v=` (e.g. `https://youtu.be/dQw4w9WgXcQ` → `dQw4w9WgXcQ`).
- Vimeo ID = the number in the URL (e.g. `https://vimeo.com/123456789` → `123456789`).

## Option 2 — Self-hosted mp4
Only for short, small clips (keep each under ~10 MB). Drop the file here in
`public/videos/`, then:

```ts
{ name: "Full name", role: "Client", src: "/videos/jane.mp4", poster: "/videos/jane.jpg" }
```

A `poster` image (a thumbnail) is optional but recommended.
