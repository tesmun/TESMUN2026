export type Person = {
  name: string;
  role: string;
  slug?: string;
  bio?: string;
  image?: string;
  testimonial?: string;
  sourceUrl?: string;
  voice?: string;
  placeholder?: boolean;
};

export const secretariat = {
  sg: {
    name: "Dibas Khadka",
    role: "Secretary-General",
    slug: "dibas-khadka",
    testimonial: "The only limit to our realization of tomorrow is our doubts of today.\n- Franklin D. Roosevelt\n\nMUN is not the loudest person's show. It's about listening, understanding, and t[...]
    image: "/images/our-team/secgen.png",
    placeholder: false,
  } as Person,
  dsg: {
    name: "Abhash Kunwar",
    role: "Deputy Secretary-General",
    slug: "abhash-kunwar",
    testimonial: "Leadership is not about holding a title; it is about creating opportunities, inspiring change, and giving every voice the chance to be heard.\n\nAs Deputy Secretary-General of TE[...]
    image: "/images/our-team/abhas.png",
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
  email?: string;
  category: CommitteeCategory;
  description: string;
  board: CommitteeBoard;
  guideUrl?: string;
  matrixUrl?: string;
  teamListUrl?: string;
  logo?: string;
  background?: string;
};

export const committees: Committee[] = [
  {
    slug: "lp1",
    email: "lp1@excelsior.edu.np",
    matrixUrl: "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?gid=85834387#gid=85834387",
    abbr: "MP I",
    name: "Model Parliament I",
    category: "national",
    description:
      "The first of TESMUN's three national Model Parliaments, deliberating on domestic policy through the lens of Nepal's parliamentary process.",
    board: {
      chair: { name: "Aakarshi Paudel", role: "Chair", image: "/images/committees/executive-board/aakarshi.png", testimonial: ""The only way to make sure people you agree with can speak is to su[...]
      viceChair: { name: "Dilasha Oli", role: "Vice Chair", image: "/images/committees/executive-board/dilasha.png", testimonial: "With the warmest heart, I welcome each and every one of you to th[...]
      moderator: { name: "Sijan Neupane", role: "Moderator", image: "/images/committees/executive-board/sijan.png", testimonial: "It is my pleasure to welcome you all to Model Parliament I. [...]
    },
    guideUrl: "https://docs.google.com/document/d/1q15bWChGR4lDrzNmgmZ_Q5DaFM8QDnOfn4PxaZ16s5Y/edit?tab=t.0",
    logo: "/images/committees/visuals/committee-lp.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-2qsmQq5yhmY1viQa0unkSfYqpucXZw.png",
  },
  {
    slug: "lp2",
    email: "lp2@excelsior.edu.np",
    matrixUrl: "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?gid=1089742237#gid=1089742237",
    abbr: "MP II",
    name: "Model Parliament II",
    category: "national",
    description:
      "The second Model Parliament, convened to debate national legislation and constitutional matters within a simulated parliamentary chamber.",
    board: {
      chair: {
        name: "Saksham Thapaliya",
        role: "Chair",
        image: "/images/committees/executive-board/sakshamthapaliya.png",
        testimonial: ""The art of leadership is not in being heard, but in making others feel heard."\n\nAs we begin this diplomatic journey, I urge each of you to approach the committee with [...]
      },
      viceChair: {
        name: "Diya Shrestha",
        role: "Vice Chair",
        image: "/images/committees/executive-board/diya.png",
        testimonial: ""We may have all come on different ships, but we're in the same boat now."\n— Martin Luther King Jr.\n\nFrom today onward, you will be addressed not merely by your na[...]
      },
      moderator: {
        name: "Dijesh Niroula",
        role: "Moderator",
        image: "/images/committees/executive-board/dijesh.png",
        testimonial: ""Where justice is denied, where poverty is enforced, where ignorance prevails, and where any one class is made to feel that society is an organized conspiracy to oppress, [...]
      },
    },
    guideUrl:
      "https://docs.google.com/document/d/1Fmh1U7z4DKfvuxWAhvQThbsbfq6n-NaB/edit?usp=sharing&ouid=104158985582123597718&rtpof=true&sd=true",
    logo: "/images/committees/visuals/committee-lp.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-2qsmQq5yhmY1viQa0unkSfYqpucXZw.png",
  },
  {
    slug: "lp3",
    email: "lp3@excelsior.edu.np",
    matrixUrl: "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?gid=2111183706#gid=2111183706",
    abbr: "MP III",
    name: "Model Parliament III",
    category: "national",
    description:
      "The third Model Parliament, offering delegates a parallel forum for legislative debate, coalition-building and procedural diplomacy.",
    board: {
      chair: {
        name: "Binayak Babu Rana",
        role: "Chair",
        image: "/images/committees/executive-board/binayak.png",
        testimonial: "It gives me immense pleasure to welcome you all to Model Parliament 3 of TESMUN 2026.\n\nAs your Chair, I am not only looking forward to witnessing the debates that wi[...]
      },
      viceChair: {
        name: "Alisa Rijal",
        role: "Vice Chair",
        image: "/images/committees/executive-board/alisa.png",
        testimonial: "I am very pleased and excited to work with the curious minds and young learners, the delegates of Model Parliament III committee for TESMUN 2026!\n\nWe are always ther[...]
      },
      moderator: {
        name: "Aayushma Shrestha",
        role: "Moderator",
        image: "/images/committees/executive-board/aayushma.png",
        testimonial: "It is with great pleasure and anticipation that I welcome all of you delegates to the Model Parliament Committee of  TESMUN-2026. As your moderator, I am thrilled to e[...]
      },
    },
    guideUrl: "https://docs.google.com/document/d/14ks8zy2wg8Aib0SunYwfMAxIbLR2h_Q2/edit",
    logo: "/images/committees/visuals/committee-lp.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-2qsmQq5yhmY1viQa0unkSfYqpucXZw.png",
  },
  {
    slug: "hrc",
    email: "hrc@excelsior.edu.np",
    matrixUrl: "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?gid=1439556256#gid=1439556256",
    abbr: "HRC",
    name: "Human Rights Council",
    category: "international",
    description:
      "The Human Rights Council addresses pressing violations and protections of fundamental human rights across the international community.",
    board: {
      chair: {
        name: "Kinjal Timalsina",
        role: "Chair",
        image: "/images/committees/executive-board/kinjal.png",
        testimonial: "As Chair, my number one ask of this committee is that you don't be afraid to speak! It's okay if you walk into this room with a perfectly prepared speech, or an extensively [...]
      },
      viceChair: {
        name: "Saanvi K.C.",
        role: "Vice Chair",
        image: "/images/committees/executive-board/saanvi.png",
        testimonial: "As your vice chair, I feel honoured to welcome you into a committee where your words, ideas and your unique perspectives will have the power to shape meaningful debates. As [...]
      },
      moderator: {
        name: "Kritish Ghimire",
        role: "Moderator",
        image: "/images/committees/executive-board/kritish.png",
        testimonial: "As we gather in this place, we are presented with something special; an opportunity to engage on the critical issues facing people's rights and dignity everywhere. This is n[...]
      },
    },
    guideUrl: "https://docs.google.com/document/d/1PX71jgNz19kJ0Gkz4WKtTsrWafjrZucocktpdjEeYUE/edit?tab=t.0",
    logo: "/images/committees/visuals/committee-hrc.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hrcbg-aPOQmJEXqbMnKTrW7eayyx3R1Ag6f4.png",
  },
  {
    slug: "disec",
    email: "disec@excelsior.edu.np",
    matrixUrl: "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?gid=2066997340#gid=2066997340",
    abbr: "DISEC",
    name: "Disarmament and International Security Committee",
    category: "international",
    description:
      "DISEC deliberates on matters of global disarmament, arms regulation and international security cooperation.",
    board: {
      chair: { name: "Dhiki Khando Lama", role: "Chair", image: "/images/committees/executive-board/dhiki.png", testimonial: ""Delegates, let your arguments be sharp, your diplomacy fearless, a[...]
      viceChair: { name: "Rijan Shrestha", role: "Vice Chair", image: "/images/committees/executive-board/rijan.png", testimonial: `"True security is not forged by the weight of our armaments, [...]
      moderator: { name: "Prasanna Budhathoki", role: "Moderator", image: "/images/committees/executive-board/prasanna.png", testimonial: `"The future belongs to those who prepare for it today.[...]
    },
    guideUrl: "https://www.canva.com/design/DAHSQOsEVpA/lPPbgTFS3vuy55lb6MEktA/edit",
    logo: "/images/committees/visuals/committee-disec.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disecbg-8UEOEzlJbtX0jnubETQb5eIiK841gD.png",
  },
  {
    slug: "ecosoc",
    email: "ecosoc@excelsior.edu.np",
    matrixUrl: "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?gid=2068843279#gid=2068843279",
    abbr: "ECOSOC",
    name: "Economic and Social Council",
    category: "international",
    description:
      "ECOSOC coordinates economic, social and related work, driving dialogue on sustainable development and global cooperation.",
    board: {
      chair: { name: "Prateek Bhattarai", role: "Chair", image: "/images/committees/executive-board/prateek.png", testimonial: "It is my great pleasure to welcome you all to this session of ECOSO[...]
      viceChair: { name: "Sima Thapa Magar", role: "Vice Chair", image: "/images/committees/executive-board/sima.png", testimonial: "It is my great pleasure to welcome you to this session of ECOS[...]
      moderator: { name: "Kunjal Karki", role: "Moderator", image: "/images/committees/executive-board/kunjal.png", testimonial: "Welcome to the ECOSOC committee. I am Kunjal Karki, the moderator[...]
    },
    guideUrl: "https://docs.google.com/document/d/1N7qyNlFmbFPEWrI2E6WW5T0khS3-Xx46/edit?usp=sharing&ouid=109174747489804758640&rtpof=true&sd=true",
    logo: "/images/committees/visuals/committee-ecosoc.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecosocbg-gEKeFmnfgyd9huRaiHnawVVFVDqyFN.png",
  },
  {
    slug: "unep",
    email: "unep@excelsior.edu.np",
    matrixUrl: "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?gid=399385211#gid=399385211",
    abbr: "UNEP",
    name: "United Nations Environment Programme",
    category: "international",
    description:
      "UNEP leads the global environmental agenda, guiding delegates through climate, biodiversity and sustainability negotiations.",
    board: {
      chair: {
        name: "Rujal Ojha",
        role: "Chair",
        image: "/images/committees/executive-board/rujal.png",
        testimonial: ""I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion." — Alexander the Great\n\nWelcome to the United Nations Environment[...]
      },
      viceChair: {
        name: "Sankalpa Neupane",
        role: "Vice Chair",
        image: "/images/committees/executive-board/sankalpa.png",
        testimonial: `"The ultimate test of man's conscience may be his willingness to sacrifice something today for future generations whose words of thanks will not be heard."" — Gaylord [...]
      },
      moderator: {
        name: "Unnat Aryal",
        role: "Moderator",
        image: "/images/committees/executive-board/unnat.png",
        testimonial: `"No problem of human destiny is beyond human beings."" – John F. Kennedy\n\nWelcome to the UNEP session of 2026. In this session we shall gather together to confront t[...]
      },
    },
    guideUrl:
      "https://docs.google.com/document/d/1dVN7n4nQLQ7KNc_ebO2xNRRPCkcKh40yNFKCsN4wRDM/edit?usp=sharing",
    logo: "/images/committees/visuals/committee-unep.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unepbg-ihLCYwOO6JWKqaOyQvf9mTbfPRY70Q.png",
  },
  {
    slug: "it",
    teamListUrl: "https://docs.google.com/spreadsheets/d/1De4QrNGDVpysKJCHSiHh7Sz1F8sPUW03A1X_D3ipEaU/edit?usp=sharing",
    abbr: "IT",
    name: "Information Technology Committee",
    category: "facilitating",
    description:
      "The IT Committee builds and maintains the technical backbone of TESMUN 2026 — from the conference website to on-site systems.",
    board: {
      headOf: { name: "Yubin KC", role: "Head of IT", image: "/images/our-team/it/yubin.png", testimonial: "The harder the conflict, the greater the triumph. — George Washington\n\nTo bring a c[...]
      deputyHeadOf: [
        { name: "Suyog Acharya", role: "Deputy Head", image: "/images/our-team/it/suyog.png", testimonial: "Technical work is strongest when curiosity becomes collaboration. Support the workflow [...]
        { name: "Swastik Manandhar", role: "Deputy Head", image: "/images/our-team/it/swastik.png" },
      ],
    },
    logo: "/images/our-team/logistics/logistic.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itbg-5u6BRlK6g1lLQzl5bmHy63n4KubeZt.png",
  },
  {
    slug: "press",
    teamListUrl: "https://docs.google.com/spreadsheets/d/1De4QrNGDVpysKJCHSiHh7Sz1F8sPUW03A1X_D3ipEaU/edit?gid=45536629#gid=45536629",
    abbr: "PRESS",
    name: "Press Committee",
    category: "facilitating",
    description:
      "The Press Committee documents TESMUN 2026 in real time, producing news, vox pop, interviews and visual coverage throughout the conference.",
    board: {
      headOf: { name: "Dechen Hira Tamang", role: "Chief Editor", image: "/images/our-team/press/dechen.png", testimonial: "The Press Committee gives the conference its living record. Observe car[...]
      deputyHeadOf: [
        { name: "Siddhartha Basnet", role: "Deputy Chief Editor", image: "/images/our-team/press/siddartha.png", testimonial: "Good press begins with attention and respect. Listen closely, verify[...]
        { name: "Simran Devkota", role: "Deputy Chief Editor", image: "/images/our-team/press/simran.png", testimonial: "Every interview, image and article is an opportunity to connect people wit[...]
        { name: "Renesha Maharjan", role: "Deputy Chief Editor", image: "/images/our-team/press/renesha.png", testimonial: "Renesha supports editorial planning and helps coordinate reporting acro[...]
      ],
    },
    logo: "/images/press/press.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pressbg-4VGSjt0tYG0ogIAtxIZJJrgZiJI5T0.png",
  },
  {
    slug: "logistics",
    abbr: "LOGISTICS",
    name: "Logistics Committee",
    category: "facilitating",
    description:
      "The Logistics Committee coordinates the operational execution of TESMUN 2026, ensuring every session runs precisely as planned.",
    board: {
      headOf: { name: "Kushal Poudel", role: "Head of Logistics", image: "/images/our-team/logistics/kushal.png", testimonial: "Every successful conference runs smoothly because of people who plan ahea[...]
      coHeadOf: { name: "Prasina Moktan", role: "Head of Logistics", image: "/images/our-team/logistics/prasina.png", testimonial: "As the Head of Logistics of TESMUN, I am privileged to serve on a t[...]
      deputyHeadOf: [
        { name: "Arbin Dhital", role: "Top Floor Incharge", image: "/images/our-team/logistics/arbin.png" },
        { name: "Harshid Bhetwal", role: "Second Floor Incharge", image: "/images/our-team/logistics/harshid.png" },
        { name: "Sushan Shrestha", role: "First Floor Incharge", image: "/images/our-team/logistics/sushan.png" },
      ],
      additionalMembers: [
        { name: "Rudraksh Devkota", role: "Overall Manager", image: "/images/our-team/logistics/rudraksh.png", testimonial: "Every moving part of the conference depends on shared responsibility. [...]
        { name: "Ojess Shrestha", role: "Material Head", image: "/images/our-team/logistics/ojess.png" },
      ],
    },
    logo: "/images/our-team/it/it.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logisticsbg-Fdux7ZSpuXLXtVkYKrYnKBU2NePfm3.png",
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
    image: "/images/our-team/chairperson.png",
    testimonial:
      "MUN is a place to discover yourself, build with others and learn how your voice can shape the world around you. Leadership is not about standing above others, but about building with other[...]
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/chairperson",
  },
  {
    name: "Prashant Rajak",
    role: "Principal",
    slug: "prashant-rajak",
    image: "/images/our-team/principal.jpg",
    testimonial:
      "Engagement creates interest. Exploration leads to a new world of knowledge. Expression helps to build confidence. TESMUN sharpens public speaking, researching, reading and writing skills w[...]
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/principal",
  },
];

export const coordinators: Person[] = [
  {
    name: "Govinda Gautam",
    role: "MUN Coordinator",
    slug: "govinda-gautam",
    image: "/images/our-team/muncoordinator.jpg",
    testimonial:
      "We are proud to announce the 14th session of TESMUN at our school. TESMUN provides students with a unique opportunity to learn about Nepalese politics, international diplomacy, cross-cultu[...]
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/mun-coordinator",
  },
  {
    name: "Pratik Subedi",
    role: "IT Coordinator",
    slug: "pratik-subedi",
    image: "/images/our-team/it/itcoordinator.jpeg",
    testimonial:
      "Serving as the IT Coordinator for TESMUN 2026 has been an enriching journey. Together, we shaped the digital face of the conference through the website, ceremony videos, invitation cards a[...]
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/it-coordinator",
  },
  {
    name: "Jitendra Basnet",
    role: "Logistics Coordinator",
    slug: "jitendra-basnet",
    image: "/images/our-team/logistics/logisticscoordinator.png",
    testimonial:
      "Love across the world and peace against the sword. As the logistics coordinator, I expect our team to be expressive according to MUN protocols and maintain discipline while working with th[...]
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/logistic-coordinator",
  },
  {
    name: "Dipendra Silwal",
    role: "Press Coordinator",
    slug: "dipendra-silwal",
    image: "/images/our-team/press/presscoordinator.jpg",
    testimonial:
      "Learning is a beautiful and transformative journey, shaped by conscious choices and enriched with knowledge and skills. TESMUN offers a vibrant palette of opportunities where students beco[...]
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/press-co-ordinator",
  },
];

export const conferenceDate = new Date("2026-08-31T09:00:00+05:45");

export const allocationsSheet =
  "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?usp=sharing";

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
  email: "itmun@excelsior.edu.np",
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
  { src: "/images/home/cover.png", alt: "The Excelsior School campus illuminated at night for TESMUN", caption: "" },
  { src: "/images/about/about-hero.png", alt: "Cinematic view of the TESMUN about hall", caption: "" },
  { src: "/images/committees/visuals/committees-hero.png", alt: "Committee room prepared for debate", caption: "" },
  { src: "/images/gallery/normal/gallery-assembly.jpg", alt: "United Nations flags along the Allée des Nations in Geneva", caption: "" },
  { src: "/images/gallery/normal/gallery-debate.jpg", alt: "A young speaker addressing a formal discussion from a microphone", caption: "" },
  { src: "/images/gallery/normal/gallery-kathmandu.jpg", alt: "Silhouette of people at a historic pavilion in Kirtipur, Kathmandu", caption: "" },
  { src: "/images/gallery/normal/gallery-flags.jpg", alt: "A speaker at a podium during a formal conference address", caption: "" },
  { src: "/images/gallery/normal/gallery-gavel.jpg", alt: "Close-up of a wooden gavel on a formal desk", caption: "" },
  { src: "/images/gallery/normal/gallery-library.jpg", alt: "Eyeglasses resting on a stack of research notebooks", caption: "" },
  { src: "/images/gallery/normal/gallery-campus.jpg", alt: "Tree-lined courtyard between academic buildings", caption: "" },
  { src: "/images/gallery/normal/gallery-podium.jpg", alt: "Empty conference room with a podium and rows of chairs", caption: "" },
  { src: "/images/gallery/normal/gallery-delegates.jpg", alt: "Young people seated around a formal meeting table in discussion", caption: "" },
  { src: "/images/about/about-purpose.png", alt: "A delegate's hand resting on a wooden podium", caption: "" },
  { src: "/images/about/about-vision.png", alt: "An empty conference table lined with chairs and flags", caption: "" },
  { src: "/images/home/mottobg.png", alt: "Atmospheric backdrop used for the TESMUN motto", caption: "" },
  { src: "/images/press/press-hero.png", alt: "Editorial still from the TESMUN press desk", caption: "" },
];
