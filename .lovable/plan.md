## Add "What We Offer" Section

Add a new SplitSection just above the "Career Pathway" (The Benefits of a Government Career) section on the ADLAC Foundation Course page. It will match the existing video+content layout used across the page.

### Changes

**1. `src/data/foundationVideos.ts`** — Add a new entry:
```
whatWeOffer: {
  id: "whatWeOffer",
  youtubeUrl: "",   // empty -> shows "Video Coming Soon" placeholder
  title: "What We Offer at ADLAC",
  description: "A complete preparation ecosystem — classroom training, tests, mentorship and study material.",
}
```

**2. `src/pages/AdlacFoundationCourse.tsx`** — Insert a new `<SplitSection>` between the Learning Centre section (ends line 249) and the Career Pathway section (starts line 251). Layout: Video L / Content R (`reverse`) so it alternates correctly with the surrounding sections. Wrapped in a `bg-warm` section for visual rhythm.

Content:
- Label chip: **What We Offer**
- Headline: **Everything You Need to Crack Government Exams**
- Sub-headline: short paragraph describing the holistic offering (classes, tests, mentorship, material, doubt-solving, performance tracking).
- Video placeholder: pulls from `foundationVideos.whatWeOffer` (empty URL → shows "▶ Video Coming Soon" until a YouTube link is added later).

No other sections are touched.