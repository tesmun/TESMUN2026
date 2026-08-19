export type Person = {
  name: string;
  role: string;
  slug?: string;
  bio?: string;
  image?: string;
  testimonial?: string;
  sourceUrl?: string;
  placeholder?: boolean;
};

export const secretariat = {
  sg: {
    name: "Dibas Khadka",
    role: "Secretary-General",
    slug: "dibas-khadka",
    image: "/images/secgen.png",
    placeholder: false,
  } as Person,
  dsg: {
    name: "Abhas Kunwar",
    role: "Deputy Secretary-General",
    slug: "abhas-kunwar",
    placeholder: false,
  } as Person,
};

export type CommitteeCategory = "national" | "international" | "facilitating";

export type CommitteeBoard = {
  chair?: Person;
  viceChair?: Person;
  moderator?: Person;
  headOf?: Person;
  coHeadOf?: Person;
  deputyHeadOf?: Person[];
  additionalMembers?: Person[];
};

export type Committee = {
  slug: string;
  abbr: string;
  name: string;
  category: CommitteeCategory;
  description: string;
  board: CommitteeBoard;
  guideUrl?: string;
  logo?: string;
  background?: string;
};

export const committees: Committee[] = [
  {
    slug: "lp1",
    abbr: "LP I",
    name: "Legislative Parliament I",
    category: "national",
    description:
      "The first of TESMUN's three national Legislative Parliaments, deliberating on domestic policy through the lens of Nepal's parliamentary process.",
    board: {
      chair: {
        name: "Aakarshi Paudel",
        role: "Chair",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aakarshi-HN3svKUIphBmLA49e1n7p9RbVEhmLz.png",
        testimonial: "The only way to make sure people you agree with can speak is to support the rights of people you don't agree with.\n\n— Eleanor Holmes Norton\n\nGreetings, Honorable Delegates,\n\nIt is my greatest honor to welcome you all to Legislative Parliament-I at this year’s Model United Nations Conference. I am Aakarshi Paudel, and I am truly privileged to serve as your Chair. As we enter this committee, remember that you are not here merely to speak; you are here to represent. Behind every placard lies a political ideology, a constituency, and the voice of people who have entrusted you to speak on their behalf. Legislative Parliament is a space where ideas are challenged, policies are questioned, and disagreements are transformed into solutions. Our agenda brings us face-to-face with important questions surrounding freedom and responsibility, expression and accountability, protest and public order, and individual rights and collective security.\n\nI do not expect every delegate to agree with one another. In fact, I expect the opposite. Disagree. Challenge. Question. Defend. Reconsider. Negotiate. But do so with substance. Come prepared with facts, legislation, statistics, political positions, and credible sources. Know your party, understand its ideology, and most importantly, understand the people you represent. Do not be afraid to challenge another delegate, but always do so with respect and purpose.\n\nYou may be nervous, lose your words, or disagree with someone more experienced. That is completely fine. Every strong parliamentarian started somewhere. As your Chair, I promise to remain fair, impartial, and approachable, ensuring every voice receives an opportunity to be heard. Remember, you are not simply simulating Parliament; you are practicing the responsibility of democracy.\n\nSo question the government, challenge the opposition, defend your party, negotiate with your rivals, and when necessary, be willing to change your position for a better solution. Let this committee be remembered not for how many speeches were delivered, but for how many ideas were challenged, solutions were created, and voices were heard. I wish you all the very best, and I look forward to hearing you on the floor."
      },
      viceChair: { name: "Dilasha Oli", role: "Vice Chair", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dilasha-bknfMdaCB8xM7cx5lFiWGN5V9r2s5p.png" },
      moderator: { name: "Sijan Neupane", role: "Moderator", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sijan-Q1f9miJnxFuUI5G3h5UHtIvXWNiJ0y.png" },
    },
    guideUrl: "https://docs.google.com/document/d/1q15bWChGR4lDrzNmgmZ_Q5DaFM8QDnOfn4PxaZ16s5Y/edit?tab=t.730t2ke51dw#heading=h.1w5hc8pmaz4y",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lplogo-RkZLYdYrExi02qtYsIugYCwSscHbOb.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-x6wuvx9YYkXC0L39Ow7xnK50aFnTNx.png",
  },
  {
    slug: "lp2",
    abbr: "LP II",
    name: "Legislative Parliament II",
    category: "national",
    description:
      "The second Legislative Parliament, convened to debate national legislation and constitutional matters within a simulated parliamentary chamber.",
    board: {
      chair: {
        name: "Saksham Thapaliya",
        role: "Chair",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sakshamthapaliya-RMRvv39ahyH4AjvZQUTdREvjzBRzfx.png",
        testimonial: "The art of leadership is not in being heard, but in making others feel heard. Welcome to LP II: a room for reasoned debate, respectful challenge and practical solutions. Represent your position with confidence, listen closely, and use your words to build understanding and advance constructive change.",
      },
      viceChair: {
        name: "Diya Shrestha",
        role: "Vice Chair",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/diya-2LXZZl4unpTvcdAZgPYXFMJVtUgMUl.png",
        testimonial: "Strengthening transparency, accountability and institutional integrity requires more than identifying problems. Study Nepal’s Constitution, listen to opposing arguments, and bring solutions to the House. Debate fiercely, question fearlessly, and govern responsibly.",
      },
      moderator: {
        name: "Dijesh Niroula",
        role: "Moderator",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dijesh-MC8uhQpbRVWQknjvshuLn823Op5s47.png",
        testimonial: "Every opinion matters. LP II is a place to learn, grow and find the confidence to express ideas with respect and purpose. Participate actively, challenge viewpoints thoughtfully, and work together so every delegate leaves with greater confidence than when they arrived.",
      },
    },
    guideUrl:
      "https://docs.google.com/document/d/1Fmh1U7z4DKfvuxWAhvQThbsbfq6n-NaB/edit?usp=sharing&ouid=104158985582123597718&rtpof=true&sd=true",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lplogo-RkZLYdYrExi02qtYsIugYCwSscHbOb.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-x6wuvx9YYkXC0L39Ow7xnK50aFnTNx.png",
  },
  {
    slug: "lp3",
    abbr: "LP III",
    name: "Legislative Parliament III",
    category: "national",
    description:
      "The third Legislative Parliament, offering delegates a parallel forum for legislative debate, coalition-building and procedural diplomacy.",
    board: {
      chair: {
        name: "Binayak Babu Rana",
        role: "Chair",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/binayak-R1itSS8jjreCJ8KztiBs8OLlW8HbSd.png",
        testimonial: "LP III is more than a platform for speeches. Challenge your opponents, defend your position with evidence, form alliances and turn debate into meaningful solutions. Come prepared, come confident, and make your voice heard.",
      },
      viceChair: {
        name: "Alisa Rijal",
        role: "Vice Chair",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alisa-zpIEj5RHLa7BEVPfhbb4S6kQUmg71T.png",
        testimonial: "Do not run after awards. TESMUN is an opportunity to develop confidence, research and diplomatic skills. Ask questions, seek clarity, and remember that the dais is here to guide you as you learn and grow.",
      },
      moderator: {
        name: "Aayushma Shrestha",
        role: "Moderator",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aayushma-UwQjGqhphI24XnVcWGSDvy9TFPpIhs.png",
        testimonial: "Every delegate has the opportunity to represent leaders and ministers while building public speaking, research and consensus-building skills. Bring curiosity, evidence and a willingness to engage with Nepal’s legislative challenges.",
      },
    },
    guideUrl: "https://docs.google.com/document/d/14ks8zy2wg8Aib0SunYwfMAxIbLR2h_Q2/edit",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lplogo-RkZLYdYrExi02qtYsIugYCwSscHbOb.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-x6wuvx9YYkXC0L39Ow7xnK50aFnTNx.png",
  },
  {
    slug: "hrc",
    abbr: "HRC",
    name: "Human Rights Council",
    category: "international",
    description:
      "The Human Rights Council addresses pressing violations and protections of fundamental human rights across the international community.",
    board: {
      chair: {
        name: "Kinjal Timalsina",
        role: "Chair",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kinjal-f9zXhuGCssHBezk5DrfSKUTiGTuHXa.png",
        testimonial: "Do not be afraid to speak. HRC is a room of opposing interests, hard questions and hard facts where diplomacy begins. Research your country, understand your agenda, and be ready to adjust. The strongest contribution is the one that shifts a viewpoint or turns an argument into a solution.",
      },
      viceChair: {
        name: "Saanvi K.C.",
        role: "Vice Chair",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/saanvi-d5833fzdECD0WS9RQfmBAa02tjtxdb.png",
        testimonial: "Your words, ideas and perspectives can shape meaningful debate. HRC demands more than knowing national policy: listen to perspectives you may not like, defend your country with preparation, and remain willing to compromise. The floor is yours.",
      },
      moderator: {
        name: "Kritish Ghimire",
        role: "Moderator",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kritish-UQYmhq5N893SKLfmUpnapeR5rgysiS.png",
        testimonial: "All voices matter. Be brave, forthright and vocal as you explore the issues affecting rights and dignity everywhere. Let the committee be collaborative, respectful and meaningful—and make your contributions worthwhile.",
      },
    },
    guideUrl: "https://docs.google.com/document/d/1PX71jgNz19kJ0Gkz4WKtTsrWafjrZucocktpdjEeYUE/edit?tab=t.0",
    logo: "/images/committee-hrc.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hrc-fUE6mLW3NQJXIFrgToLEWkgSiCr6ZW.png",
  },
  {
    slug: "disec",
    abbr: "DISEC",
    name: "Disarmament and International Security Committee",
    category: "international",
    description:
      "DISEC deliberates on matters of global disarmament, arms regulation and international security cooperation.",
    board: {
      chair: { name: "Dhiki Khando Lama", role: "Chair", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dhiki-rVTdFlXzwZe7joLh3SzfSIyfqVzZSp.png" },
      viceChair: { name: "Rijan Shrestha", role: "Vice Chair", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rijan-PdPCTvI5rHJSvL94XuA34P4uixS5oq.png" },
      moderator: { name: "Prasanna Budhathoki", role: "Moderator", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prasanna-sSKVmFAt3NFu1lczOmptlil5SEFp3u.png" },
    },
    guideUrl: "https://canva.link/k8coc4efih3aon9",
    logo: "/images/committee-disec.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disec-z3751wrQjd3yvDW9KOsx96bCkr3Ne5.png",
  },
  {
    slug: "ecosoc",
    abbr: "ECOSOC",
    name: "Economic and Social Council",
    category: "international",
    description:
      "ECOSOC coordinates economic, social and related work, driving dialogue on sustainable development and global cooperation.",
    board: {
      chair: { name: "Prateek Bhattarai", role: "Chair", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/prateek-4ocal0VPgbUeijHbz5VpgqOZ7T7caA.png" },
      viceChair: { name: "Sima Thapa Magar", role: "Vice Chair", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sima-7mYRmWRMoUvGbPeQNUByGO1X2osza1.png" },
      moderator: { name: "Kunjal Kakki", role: "Moderator", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kunjal-H9yLKjZsn1K9NGh7S6JqIEpA2pSFLw.png" },
    },
    logo: "/images/committee-ecosoc.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecosoc-84xAxvepfKfpnbgz49vstXclzNLbae.png",
  },
  {
    slug: "unep",
    abbr: "UNEP",
    name: "United Nations Environment Programme",
    category: "international",
    description:
      "UNEP leads the global environmental agenda, guiding delegates through climate, biodiversity and sustainability negotiations.",
    board: {
      chair: {
        name: "Rujal Ojha",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rujal-AQ1AtfuXFsbh6XT5xU5YVCdj0eCjTE.png",
        role: "Chair",
        testimonial: "Climate change is no longer a distant threat. Research your country’s emissions, vulnerabilities, economic capacity and climate policies. Debate firmly, negotiate wisely, and work toward solutions that balance environmental responsibility with development.",
      },
      viceChair: {
        name: "Sankalpa Neupane",
        role: "Vice Chair",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sankalpa-fQDODyMIyvlYdWLRdAH6GDYoBozufx.png",
        testimonial: "Environmental governance demands scientific evidence, historical responsibility and climate justice. Study the guide carefully, stay organised and propose solutions that are ambitious, visionary and evidence-based.",
      },
      moderator: {
        name: "Unnat Aryal",
        role: "Moderator",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnat-RrEHIWOQOPPHvbCYL8rPhTPmGxmaTG.png",
        testimonial: "Leadership requires research, critical thinking and formal diplomatic dialogue. Bring individuality, clear evidence and a willingness to solve difficult ecological and geopolitical problems together. This is a development of self as well as an academic journey.",
      },
    },
    guideUrl:
      "https://docs.google.com/document/d/1dVN7n4nQLQ7KNc_ebO2xNRRPCkcKh40yNFKCsN4wRDM/edit?usp=sharing",
    logo: "/images/committee-unep.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unepbg-jWpwDDyDFzYbH5AOqwuymBEJabA7hr.png",
  },
  {
    slug: "it",
    abbr: "IT",
    name: "Information Technology Committee",
    category: "facilitating",
    description:
      "The IT Committee builds and maintains the technical backbone of TESMUN XIV — from the conference website to on-site systems.",
    board: {
      headOf: { name: "Yubin KC", role: "Head of IT", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yubin-kO06f1FIuhcV7TXNZTNO6bNlbkr2rf.png" },
      deputyHeadOf: [
        { name: "Suyog Acharya", role: "Deputy Head", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/suyog-qT25Fe7En52fpP1UaDhLUS1NhkbmG3.png" },
        { name: "Swastik Manandar", role: "Deputy Head" },
      ],
    },
    logo: "/images/logistic.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itbg-PsxAFmus4v6k4rns9DSS7Uy9aDS6Lr.png",
  },
  {
    slug: "press",
    abbr: "PRESS",
    name: "Press Committee",
    category: "facilitating",
    description:
      "The Press Committee documents TESMUN XIV in real time, producing news, vox pop, interviews and visual coverage throughout the conference.",
    board: {
      headOf: { name: "Dechen Hira Tamang", role: "Chief Editor" },
      deputyHeadOf: [
        { name: "Siddhartha Basnet", role: "Deputy Chief Editor", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/siddartha-Erst5MTTlgVJrPD9ObWsEvDOxxqBTm.png" },
        { name: "Simran Devkota", role: "Deputy Chief Editor", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/simran-yPkeHxRPihPtdDfThwedOcTiYWDU8C.png" },
        { name: "John Doe", role: "Deputy Chief Editor", placeholder: true },
      ],
    },
    logo: "/images/press.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pressbg-YXg2R0VGLD8fqATrDAtdUxsxNxXXKd.png",
  },
  {
    slug: "logistics",
    abbr: "LOGISTICS",
    name: "Logistics Committee",
    category: "facilitating",
    description:
      "The Logistics Committee coordinates the operational execution of TESMUN XIV, ensuring every session runs precisely as planned.",
    board: {
      headOf: { name: "Kushal Poudel", role: "Head of Press", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kushal-LRs11YTPepG3wHCPte7NqQDZiJ1aii.png" },
      coHeadOf: { name: "Prasina Moktan", role: "Head of Press" },
      deputyHeadOf: [
        { name: "Arbin Dhital", role: "Top Floor Incharge" },
        { name: "Harshid Bhetwal", role: "Second Floor Incharge" },
        { name: "Sushan Shrestha", role: "First Floor Incharge" },
      ],
      additionalMembers: [
        { name: "Rudraksh Devkota", role: "Overall Manager", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rudraksh-pwOO2CtJOgoCua6f5DubB8VpGX2l0z.png" },
        { name: "Yugesh Adhikari", role: "Material Head" },
      ],
    },
    logo: "/images/it.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logisticsbg-eQkpkxkwEOVS5KXSp6hsJSmRHMn6dx.png",
  },
];

export const committeesByCategory = {
  national: committees.filter((c) => c.category === "national"),
  international: committees.filter((c) => c.category === "international"),
  facilitating: committees.filter((c) => c.category === "facilitating"),
};

export function getCommittee(slug: string) {
  return committees.find((c) => c.slug === slug);
}

export const seniorLeadership: Person[] = [
  {
    name: "Sheetal Rana",
    role: "Chairperson",
    slug: "sheetal-rana",
    image: "/images/chairperson.png",
    testimonial:
      "It is a joy to see you all take part in the Model United Nations here at Excelsior. MUN is not just about debating global issues; it is about discovering more about yourself and how you can shape the world around you. Leadership is not about standing above others, but about building with others.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/chairperson",
  },
  {
    name: "Prashant Rajak",
    role: "Principal",
    slug: "prashant-rajak",
    image: "/images/principal.jpg",
    testimonial:
      "Engagement creates interest. Exploration leads to a new world of knowledge. Expression helps to build confidence. TESMUN sharpens public speaking, researching, reading and writing skills while developing diplomatic negotiation, conflict resolution and peace-building across the world.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/principal",
  },
];

export const coordinators: Person[] = [
  {
    name: "Govinda Gautam",
    role: "MUN Coordinator",
    slug: "govinda-gautam",
    image: "/images/muncoordinator.jpg",
    testimonial:
      "We are proud to announce the 14th session of TESMUN at our school. TESMUN provides students with a unique opportunity to learn about Nepalese politics, international diplomacy, cross-cultural understanding, and global governance. It is a platform where young minds communicate, argue and reach a consensus over national and global issues.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/mun-coordinator",
  },
  {
    name: "Pratik Subedi",
    role: "IT Coordinator",
    slug: "pratik-subedi",
    image: "/images/itcoordinator.jpeg",
    testimonial:
      "Serving as the IT Coordinator for TESMUN 2025 has been an enriching journey. Together, we shaped the digital face of the conference through the website, ceremony videos, invitation cards and dais portfolios. What stands out most is the way technology became a bridge for creativity and diplomacy.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/it-coordinator",
  },
  {
    name: "Jitendra Basnet",
    role: "Logistics Coordinator",
    slug: "jitendra-basnet",
    image: "/images/logisticscoordinator.png",
    testimonial:
      "Love across the world and peace against the sword. As the logistics coordinator, I expect our team to be expressive according to MUN protocols and maintain discipline while working with the committees. The key to achieving the best is friendliness and the development of suitable habits.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/logistic-coordinator",
  },
  {
    name: "Dipendra Silwal",
    role: "Press Coordinator",
    slug: "dipendra-silwal",
    image: "/images/presscoordinator.jpg",
    testimonial:
      "Learning is a beautiful and transformative journey, shaped by conscious choices and enriched with knowledge and skills. TESMUN offers a vibrant palette of opportunities where students become diplomats and policymakers, grappling with the world's most pressing issues and transforming from observers into active participants in society.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/press-co-ordinator",
  },
];

export const conferenceDate = new Date("2026-08-31T09:00:00+05:45");

export const allocationsSheet =
  "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?gid=2111183706#gid=2111183706";

export const teamMembers: Person[] = [
  ...seniorLeadership,
  ...coordinators,
  secretariat.sg,
  secretariat.dsg,
];

export function getTeamMember(slug: string) {
  return teamMembers.find((person) => person.slug === slug);
}

export const contactInfo = {
  school: "The Excelsior School",
  address: "Swoyambhu Cir Rd, Kathmandu 44600",
  phone: "01-5301917",
  email: "tesmun@excelsior.edu.np",
  mapEmbed:
    "https://maps.google.com/maps?q=The%20Excelsior%20School%20Swoyambhu%20Kathmandu&t=&z=16&ie=UTF8&iwloc=&output=embed",
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@TheExcelsiorSchool" },
    { label: "Facebook", href: "https://www.facebook.com/TheExcelsiorSchool/" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/committees", label: "Committees" },
  { href: "/our-team", label: "Our Team" },
  { href: "/press", label: "Press" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export const galleryImages = [
  { src: "/images/cover.png", alt: "The Excelsior School campus illuminated at night for TESMUN", caption: "Campus at night" },
  { src: "/images/about-hero.png", alt: "Cinematic view of the TESMUN about hall", caption: "The hall" },
  { src: "/images/committees-hero.png", alt: "Committee room prepared for debate", caption: "Committee room" },
  { src: "/images/gallery-assembly.jpg", alt: "United Nations flags along the Allée des Nations in Geneva", caption: "Allée des Nations" },
  { src: "/images/gallery-debate.jpg", alt: "A young speaker addressing a formal discussion from a microphone", caption: "The floor" },
  { src: "/images/gallery-kathmandu.jpg", alt: "Silhouette of people at a historic pavilion in Kirtipur, Kathmandu", caption: "Kathmandu dusk" },
  { src: "/images/gallery-flags.jpg", alt: "A speaker at a podium during a formal conference address", caption: "The podium" },
  { src: "/images/gallery-gavel.jpg", alt: "Close-up of a wooden gavel on a formal desk", caption: "In session" },
  { src: "/images/gallery-library.jpg", alt: "Eyeglasses resting on a stack of research notebooks", caption: "Preparation" },
  { src: "/images/gallery-campus.jpg", alt: "Tree-lined courtyard between academic buildings", caption: "The grounds" },
  { src: "/images/gallery-podium.jpg", alt: "Empty conference room with a podium and rows of chairs", caption: "Before the gavel" },
  { src: "/images/gallery-delegates.jpg", alt: "Young people seated around a formal meeting table in discussion", caption: "Delegates" },
  { src: "/images/about-purpose.png", alt: "A delegate's hand resting on a wooden podium", caption: "The floor opens" },
  { src: "/images/about-vision.png", alt: "An empty conference table lined with chairs and flags", caption: "Ready for session" },
  { src: "/images/mottobg.png", alt: "Atmospheric backdrop used for the TESMUN motto", caption: "Engage · Express · Excell" },
  { src: "/images/press-hero.png", alt: "Editorial still from the TESMUN press desk", caption: "Press desk" },
];
