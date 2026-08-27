export type PressSectionSlug = "news" | "vox-pop" | "vox-pop-team-1" | "vox-pop-team-2" | "interviews" | "podcast" | "speeches" | "op-ed" | "cartoons";

export type NewsArticle = {
  slug: string;
  title: string;
  standfirst: string;
  body: string[];
  session: "Final Session" | "Second Session" | "First Session";
  author: string;
  date: string;
  image?: string;
  extraImages?: { src: string; alt: string; caption?: string }[];
  caption?: string;
  pullQuote?: string;
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "final-session-consensus",
    session: "Final Session",
    title: "When the room found its language",
    standfirst: "A final session defined by sharper amendments, quieter negotiations and the discipline of listening.",
    body: [
      "By the final session, the room had learned its own rhythm. Delegates arrived with fewer speeches prepared and more questions ready, a small but meaningful sign that debate had become dialogue.",
      "The strongest resolutions were not the loudest. They were the ones revised in the margins, tested across blocs and carried forward because the room could recognise itself in them.",
      "Chairs spoke less and listened more. Notes still travelled between desks, but they were shorter now — a sentence, a concession, a request to meet after the unmoderated caucus. The conference had become fluent in its own diplomacy.",
    ],
    author: "International Press Corps",
    date: "August 2026",
    image: "/images/press/news/session-1/day-2/news-handshake.jpg",
    caption: "Agreement, when it arrives, is usually quieter than the debate that produced it.",
    extraImages: [
      { src: "/images/gallery/normal/gallery-gavel.jpg", alt: "A wooden gavel resting on a formal desk after session", caption: "The gavel waits." },
    ],
    pullQuote: "Consensus is not the absence of disagreement; it is the shape disagreement takes when people stay in the room.",
  },
  {
    slug: "second-session-pressure",
    session: "Second Session",
    title: "The pressure between the lines",
    standfirst: "As opening positions hardened, the most consequential work moved into the corridors.",
    body: [
      "The second session brought the familiar pressure of time. Notes travelled between desks, chairs balanced competing motions and delegates learned that a persuasive intervention begins long before the microphone is on.",
      "Outside the committee rooms, the conference became a study in small decisions: who to approach, when to yield and how to make a sentence carry the weight of a national position.",
      "By late afternoon the corridors were as busy as the chambers. A working paper changed hands three times before it returned to the dais. That, more than any formal speech, was the day's work.",
    ],
    author: "International Press Corps",
    date: "August 2026",
    image: "/images/press/news/session-2/day-1/news-notes.jpg",
    caption: "The day's most consequential sentences were often written in the margins.",
    extraImages: [
      { src: "/images/gallery/normal/gallery-delegates.jpg", alt: "Delegates in conversation around a formal table", caption: "Work continues between motions." },
    ],
    pullQuote: "The conference is built in public, but much of its diplomacy happens in the pause before a hand rises.",
  },
  {
    slug: "first-session-first-words",
    session: "First Session",
    title: "The first words set the weather",
    standfirst: "Opening statements gave each committee its atmosphere — and every delegate a place to begin.",
    body: [
      "The first session is full of beginnings. Placards are straightened, rules are tested and a room of strangers starts to understand how it might work together.",
      "Across the committees, opening statements turned broad global questions into particular points of view. They were not final positions. They were invitations to respond.",
      "Some rooms were formal from the first gavel. Others found their voice more slowly. In every chamber, the first words set a weather that the rest of the conference would have to live inside.",
    ],
    author: "International Press Corps",
    date: "August 2026",
    image: "/images/press/news/session-1/day-1/news-featured.jpg",
    caption: "The first edition is always a record of beginnings.",
    extraImages: [
      { src: "/images/gallery/normal/gallery-podium.jpg", alt: "An empty conference room with podium and chairs before the first session", caption: "Before the first statement." },
    ],
    pullQuote: "Every position paper is also a door: it tells the room where to enter the conversation.",
  },
];

export const pressSections = {
  news: { label: "News", title: "The conference, in motion", intro: "Session-by-session dispatches from the rooms where debate becomes direction." },
  "vox-pop": { label: "Vox Pop", title: "Many voices, one moment", intro: "Short answers and honest reactions from the people between sessions." },
  "vox-pop-team-1": { label: "Vox Pop · Team 1", title: "Team 1 voices", intro: "Describe TESMUN in one word, then tell us why students love it." },
  "vox-pop-team-2": { label: "Vox Pop · Team 2", title: "Team 2 voices", intro: "Memorable moments and favourite committees from TESMUN 2026." },
  interviews: { label: "Interviews", title: "The people behind the placards", intro: "Long-form conversations about diplomacy, pressure and possibility." },
  podcast: { label: "Podcast", title: "The TESMUN Podcast", intro: "Two conversations from the conference floor, ready for your own video links." },
  speeches: { label: "Speeches", title: "Words with weight", intro: "An archive of opening statements, closing reflections and ideas worth carrying forward." },
  "op-ed": { label: "OP-ED", title: "A point of view", intro: "Reflective writing on youth leadership, diplomacy and the world beyond the hall." },
  cartoons: { label: "Cartoons", title: "Diplomacy, drawn", intro: "Visual commentary that finds the human and surprising details of conference life." },
} satisfies Record<PressSectionSlug, { label: string; title: string; intro: string }>;

export const voxQuestions = [
  {
    question: "What is one thing you learned today?",
    answers: [
      "Diplomacy starts with listening.",
      "A strong point can still make room for another voice.",
      "Procedure gives debate a rhythm.",
      "Every bloc has a story behind it.",
      "Confidence grows when you participate.",
      "The best ideas change as they travel.",
    ],
  },
  {
    question: "Which committee moment surprised you?",
    answers: [
      "A quiet amendment changed the whole direction.",
      "The room found common ground faster than expected.",
      "A question from the back row shifted the debate.",
      "Two opposing speakers agreed on the next step.",
      "The informal caucus became the real turning point.",
      "The chair made disagreement feel productive.",
    ],
  },
  {
    question: "What does good diplomacy sound like?",
    answers: [
      "A clear position, delivered with curiosity.",
      "The sentence that leaves someone space to respond.",
      "Firm on the issue, generous with the person.",
      "A proposal rather than a performance.",
      "The room getting quieter so the idea can land.",
      "A bridge built one question at a time.",
    ],
  },
  {
    question: "What would you tell a first-time delegate?",
    answers: [
      "Raise your placard before you feel ready.",
      "Research is useful; observation is essential.",
      "Find one person outside your bloc to speak with.",
      "A question is also a contribution.",
      "Do not confuse volume with influence.",
      "Stay present between the formal moments.",
    ],
  },
  {
    question: "What keeps the room moving?",
    answers: [
      "A good chair and a willing compromise.",
      "The feeling that every intervention matters.",
      "Notes passed at exactly the right moment.",
      "A shared deadline.",
      "Respect that survives disagreement.",
      "The next question.",
    ],
  },
];

export type Interview = {
  slug: string;
  title: string;
  subject: string;
  portrait?: string;
  youtubeUrl?: string;
};

export const interviews: Interview[] = [
  {
    slug: "finding-confidence",
    title: "A delegate on finding confidence in the room",
    subject: "Delegate, General Assembly",
    portrait: "/images/our-team/press/interview-portrait.jpg",
    youtubeUrl: "",
  },
  {
    slug: "chair-disagreement",
    title: "The chair's view: making space for disagreement",
    subject: "Committee Chair",
    youtubeUrl: "",
  },
  {
    slug: "behind-the-press-badge",
    title: "Behind the press badge: why documentation matters",
    subject: "Press Desk",
    youtubeUrl: "",
  },
];

export type Speech = {
  slug: string;
  title: string;
  speaker: string;
  role: string;
  committee: string;
  photo?: string;
  body: string[];
};

export const speeches: Speech[] = [
  {
    slug: "opening-address",
    title: "Opening address",
    speaker: "To be announced",
    role: "Speaker",
    committee: "Opening Ceremony",
    photo: "/images/our-team/press/speech-portrait.jpg",
    body: [
      "This speech will be published here once the conference record is complete. The Press Desk will add the speaker, role and full text as delivered.",
    ],
  },
  {
    slug: "practical-solidarity",
    title: "A delegate's call for practical solidarity",
    speaker: "To be announced",
    role: "Delegate",
    committee: "To be announced",
    body: [
      "A TESMUN editorial placeholder for the cadence and argument that shaped the committee floor. The delivered text will replace this note.",
    ],
  },
  {
    slug: "closing-reflection",
    title: "Closing reflection",
    speaker: "To be announced",
    role: "Speaker",
    committee: "Closing Ceremony",
    body: [
      "The closing reflection will be archived here after the final gavel, with the speaker, role and committee recorded as delivered.",
    ],
  },
];

export const opEdContributors = [
  { name: "Dibas Khadka", role: "Secretary-General", pdf: "https://drive.google.com/file/d/1_K_fJxH1t3IidJKuqWotQ9SspnyWqCco/view?usp=sharing", photo: "/images/our-team/secgen.png" },
  { name: "Abhash Kunwar", role: "Deputy Secretary-General", pdf: "https://drive.google.com/file/d/1hZh1d1RQyxJgXvC9hCsoOSoj9CfeZnJ2/view?usp=sharing", photo: "/images/our-team/abhas.png" },
  { name: "John Doe", role: "Contributor", pdf: "" },
  { name: "John Doe", role: "Contributor", pdf: "" },
  { name: "John Doe", role: "Contributor", pdf: "" },
  { name: "John Doe", role: "Contributor", pdf: "" },
];

export const cartoons = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5sr5wIf3XTfrOXzGPEyqWAJW3e1193.png", alt: "Cartoon by Agrata Parajuli, Grade 7A", credit: "Agrata Parajuli · Grade 7A" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1yHn90E94MbUA1lIkn7wAc6tXf2H9r.png", alt: "Cartoon by Samip Dhakal, Grade 7A", credit: "Samip Dhakal · Grade 7A" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jRKX7EupENn9GJGGZQ2teJ9RCYXkCF.png", alt: "Cartoon by Ruja Adhikari, Grade 7C", credit: "Ruja Adhikari · Grade 7C" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7irIx7PHAF4gZjVxYDXjBWWlJLjr8s.png", alt: "Cartoon by Rituja Dhital, Grade 7A", credit: "Rituja Dhital · Grade 7A" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sCEzbigfQJq6dAiAtWb9siMoJZPsNx.png", alt: "Cartoon by Diya Shrestha, Grade 7B", credit: "Diya Shrestha · Grade 7B" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DdgS6IR46kl5sPuvDGEqBd3OvzSBei.png", alt: "Cartoon by Aagaman Adhikari, Grade 7C", credit: "Aagaman Adhikari · Grade 7C" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gdzQe2qEjei0DJ77xEnwHZYMsA0nIQ.png", alt: "Cartoon by Sakura Amgain, Grade 7B", credit: "Sakura Amgain · Grade 7B" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CG7qUvWyuXTNGyuLr222cCYe5TmuQx.png", alt: "Cartoon by Shreesha Neupane, Grade 7B", credit: "Shreesha Neupane · Grade 7B" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-AprsgwYgaF03SQZHIOJzQ12npRgGOL.png", alt: "Cartoon by Aagaman Adhikari, Grade 7C", credit: "Aagaman Adhikari · Grade 7C" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-7lPv3fkMyRMPff5G9gcXHIOMyvsH98.png", alt: "Cartoon by Ruja Adhikari, Grade 7C", credit: "Ruja Adhikari · Grade 7C" },
  { src: "/images/press/cartoons/cartoon-11.png", alt: "Cartoon by Ruja Adhikari, Grade 7C", credit: "Ruja Adhikari · Grade 7C" },
  { src: "/images/press/cartoons/cartoon-12.png", alt: "Cartoon by Aagaman Adhikari, Grade 7C", credit: "Aagaman Adhikari · Grade 7C" },
  { src: "/images/press/cartoons/cartoon-13.png", alt: "Cartoon by Akeerna Pradhan, Grade 7B", credit: "Akeerna Pradhan · Grade 7B" },
  { src: "/images/press/cartoons/cartoon-14.png", alt: "Cartoon by Agrata Parajuli, Grade 7A", credit: "Agrata Parajuli · Grade 7A" },
  { src: "/images/press/cartoons/cartoon-15.png", alt: "Cartoon by Rituja Dhital, Grade 7A", credit: "Rituja Dhital · Grade 7A" },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getInterview(slug: string) {
  return interviews.find((item) => item.slug === slug);
}

export function getSpeech(slug: string) {
  return speeches.find((item) => item.slug === slug);
}
