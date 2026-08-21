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
    testimonial: "TESMUN is a space where preparation, curiosity and respectful dialogue become meaningful leadership. I encourage every delegate and team member to contribute with purpose, support one another and make this conference an experience that extends beyond the sessions.",
    image: "/images/our-team/secgen.png",
    placeholder: false,
  } as Person,
  dsg: {
    name: "Abhash Kunwar",
    role: "Deputy Secretary-General",
    slug: "abhas-kunwar",
    testimonial: "Every successful committee begins with people who are prepared to listen, guide and take responsibility. Bring your questions, ideas and energy to TESMUN, and help create a conference where every participant feels supported and heard.",
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
      chair: { name: "Aakarshi Paudel", role: "Chair", image: "/images/committees/executive-board/aakarshi.png", testimonial: "It is my greatest honor to welcome you all to Legislative Parliament I. You are here not merely to speak, but to represent the political ideology and people behind your placard. You may be nervous or lose your words, and that is completely fine. As your Chair, I promise to remain fair, impartial and approachable. Remember that you are practicing the responsibility of democracy, and I look forward to hearing you on the floor." },
      viceChair: { name: "Dilasha Oli", role: "Vice Chair", image: "/images/committees/executive-board/dilasha.png", testimonial: "With the warmest heart, I welcome you to Legislative Parliament I of TESMUN 2026. I am excited to hear your ideas and watch this committee come alive through your voices. I am always here to guide you, whether you speak with trembling hands or confidence. Bring your ideas, passion, questions and willingness to learn, and make this committee truly yours." },
      moderator: { name: "Sijan Neupane", role: "Moderator", image: "/images/committees/executive-board/sijan.png", testimonial: "It is my pleasure to welcome you to Legislative Parliament I. My goal is to make this committee active, engaging and a space where every delegate feels confident enough to participate. Question ideas, defend your position, challenge others respectfully and be willing to negotiate. Come prepared, stay involved and turn your research into meaningful parliamentary debate." },
    },
    guideUrl: "https://docs.google.com/document/d/1q15bWChGR4lDrzNmgmZ_Q5DaFM8QDnOfn4PxaZ16s5Y/edit?tab=t.0",
    logo: "/images/committees/visuals/committee-lp.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-2qsmQq5yhmY1viQa0unkSfYqpucXZw.png",
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
        image: "/images/committees/executive-board/sakshamthapaliya.png",
        testimonial: "As we begin this diplomatic journey, approach the committee with an open mind and a commitment to dialogue, negotiation, compromise and cooperation. Represent your political party with confidence, challenge perspectives respectfully and remain receptive to opinions different from your own. Meaningful progress emerges when diverse ideas come together through thoughtful deliberation. Let your voice be guided by reason, diplomacy and responsibility, and use this committee as an opportunity to learn, grow and experience parliamentary diplomacy.",
      },
      viceChair: {
        name: "Diya Shrestha",
        role: "Vice Chair",
        image: "/images/committees/executive-board/diya.png",
        testimonial: "From today onward, you will be entrusted with positions and delegations in the House. Having once been a delegate, I understand the nervousness and excitement of this experience. Study Nepal’s Constitution, laws and anti-corruption mechanisms, and examine recent protests using verified information. Represent your delegation with confidence, challenge arguments with evidence, and bring practical solutions to the House.",
      },
      moderator: {
        name: "Dijesh Niroula",
        role: "Moderator",
        image: "/images/committees/executive-board/dijesh.png",
        testimonial: "Every opinion matters. TESMUN is about learning, growing and gaining the confidence to express your thoughts with respect and purpose. I look forward to well-researched arguments and creative ideas. Confidence is built through participation, and every speech is a step toward becoming a better leader and communicator. I warmly welcome every delegate and wish you an enriching and memorable experience.",
      },
    },
    guideUrl:
      "https://docs.google.com/document/d/1Fmh1U7z4DKfvuxWAhvQThbsbfq6n-NaB/edit?usp=sharing&ouid=104158985582123597718&rtpof=true&sd=true",
    logo: "/images/committees/visuals/committee-lp.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-2qsmQq5yhmY1viQa0unkSfYqpucXZw.png",
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
        image: "/images/committees/executive-board/binayak.png",
        testimonial: "It gives me immense pleasure to welcome you to Legislative Parliament III. I want to see delegates who are fearless in debate but responsible in their arguments. Challenge opponents, question decisions, defend your political position and form alliances when it benefits your cause. The strongest delegate is not always the loudest, but the one who knows when to speak and how to turn an argument into influence. Come prepared and confident, ready to make your voice heard.",
      },
      viceChair: {
        name: "Alisa Rijal",
        role: "Vice Chair",
        image: "/images/committees/executive-board/alisa.png",
        testimonial: "I am excited to work with the curious minds of Legislative Parliament III. We are here to guide you and look forward to your questions. Please do not run after awards; this MUN is an opportunity to develop confidence, research and diplomatic skills. If you can conquer your fear and speak confidently in a room full of people, you are already a winner. We are all here to learn and grow, so feel no fear and let your voice be heard.",
      },
      moderator: {
        name: "Aayushma Shrestha",
        role: "Moderator",
        image: "/images/committees/executive-board/aayushma.png",
        testimonial: "It is a pleasure to welcome you to Legislative Parliament III. You will explore Nepal’s legislative and parliamentary challenges while developing research, public speaking and consensus-building skills. Please reach out whenever you need help. I look forward to witnessing the insightful debates and innovative solutions you bring to the table. Together, let us make this conference memorable and enriching.",
      },
    },
    guideUrl: "https://docs.google.com/document/d/14ks8zy2wg8Aib0SunYwfMAxIbLR2h_Q2/edit",
    logo: "/images/committees/visuals/committee-lp.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-2qsmQq5yhmY1viQa0unkSfYqpucXZw.png",
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
        image: "/images/committees/executive-board/kinjal.png",
        testimonial: "Do not be afraid to speak. Whether you arrive with a prepared speech, extensive research or no idea what to expect, I want you to leave HRC knowing that your voice made a difference. This is a room of opposing interests, hard questions and hard facts where diplomacy begins. Be ready to defend your nation, learn from others and turn arguments into solutions. Most importantly, be prepared to make this committee your own.",
      },
      viceChair: {
        name: "Saanvi K.C.",
        role: "Vice Chair",
        image: "/images/committees/executive-board/saanvi.png",
        testimonial: "Your words, ideas and perspectives can shape meaningful debate. HRC demands more than knowing your country’s policies; it requires current affairs, precision and responsibility. Research your country and agenda, prepare your arguments, trust yourself and remain willing to listen. Every speech, question and resolution is an opportunity to make your voice heard.",
      },
      moderator: {
        name: "Kritish Ghimire",
        role: "Moderator",
        image: "/images/committees/executive-board/kritish.png",
        testimonial: "This is an opportunity to engage with critical issues affecting people’s rights and dignity everywhere. I want our discussion to be fun, collaborative, respectful and meaningful, with every voice heard. Being a delegate is more than stating facts or following procedure: be brave, forthright and vocal, challenge yourself, form bonds and learn from every moment. Make your contributions worthwhile and enjoy the process.",
      },
    },
    guideUrl: "https://docs.google.com/document/d/1PX71jgNz19kJ0Gkz4WKtTsrWafjrZucocktpdjEeYUE/edit?tab=t.0",
    logo: "/images/committees/visuals/committee-hrc.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hrcbg-aPOQmJEXqbMnKTrW7eayyx3R1Ag6f4.png",
  },
  {
    slug: "disec",
    abbr: "DISEC",
    name: "Disarmament and International Security Committee",
    category: "international",
    description:
      "DISEC deliberates on matters of global disarmament, arms regulation and international security cooperation.",
    board: {
      chair: { name: "Dhiki Khando Lama", role: "Chair", image: "/images/committees/executive-board/dhiki.png", testimonial: "Welcome to DISEC. Approach every question of disarmament and international security with preparation, evidence and a willingness to understand perspectives beyond your own. Strong diplomacy begins with careful research, respectful challenge and solutions that protect both security and human life." },
      viceChair: { name: "Rijan Shrestha", role: "Vice Chair", image: "/images/committees/executive-board/rijan.png", testimonial: "Bring curiosity, discipline and an open mind to the committee. Listen closely, defend your country with confidence and remain willing to negotiate. Every contribution can help move a difficult security conversation toward a practical resolution." },
      moderator: { name: "Prasanna Budhathoki", role: "Moderator", image: "/images/committees/executive-board/prasanna.png", testimonial: "DISEC is a space for thoughtful debate, careful procedure and meaningful cooperation. Prepare well, question ideas respectfully and help create a committee where every delegate can participate with confidence." },
    },
    guideUrl: "https://www.canva.com/design/DAHSQOsEVpA/lPPbgTFS3vuy55lb6MEktA/edit",
    logo: "/images/committees/visuals/committee-disec.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/disecbg-8UEOEzlJbtX0jnubETQb5eIiK841gD.png",
  },
  {
    slug: "ecosoc",
    abbr: "ECOSOC",
    name: "Economic and Social Council",
    category: "international",
    description:
      "ECOSOC coordinates economic, social and related work, driving dialogue on sustainable development and global cooperation.",
    board: {
      chair: { name: "Prateek Bhattarai", role: "Chair", image: "/images/committees/executive-board/prateek.png", testimonial: "Welcome to ECOSOC, where economic and social policy meets the responsibility to build a fairer and more sustainable world. Research deeply, listen generously and bring solutions that connect ambition with practical action. Meaningful progress begins when every perspective is taken seriously." },
      viceChair: { name: "Sima Thapa Magar", role: "Vice Chair", image: "/images/committees/executive-board/sima.png", testimonial: "ECOSOC rewards delegates who combine evidence with empathy. Understand your country’s priorities, engage with perspectives different from your own and work toward resolutions that communities can genuinely implement." },
      moderator: { name: "Kunjal Kakki", role: "Moderator", image: "/images/committees/executive-board/kunjal.png", testimonial: "Come prepared to ask difficult questions and build constructive dialogue. Every speech, negotiation and amendment is an opportunity to turn complex economic and social challenges into shared solutions." },
    },
    guideUrl: "https://docs.google.com/document/d/1N7qyNlFmbFPEWrI2E6WW5T0khS3-Xx46/edit?usp=sharing&ouid=109174747489804758640&rtpof=true&sd=true",
    logo: "/images/committees/visuals/committee-ecosoc.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ecosocbg-gEKeFmnfgyd9huRaiHnawVVFVDqyFN.png",
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
        role: "Chair",
        image: "/images/committees/executive-board/rujal.png",
        testimonial: "Welcome to UNEP at TESMUN 2026. Climate change is no longer a distant threat, and its responsibility is not equally shared. Research your country’s history, emissions, vulnerabilities, economic capacity and climate policies. Debate firmly, negotiate wisely and work toward solutions that balance environmental responsibility with economic development. Diplomacy is not about proving your country right; it is about finding a solution the international community can move forward with.",
      },
      viceChair: {
        name: "Sankalpa Neupane",
        role: "Vice Chair",
        image: "/images/committees/executive-board/sankalpa.png",
        testimonial: "Welcome to UNEP. Leadership in environmental governance demands scientific evidence, historical responsibility and climate justice. Stay organised, manage time well and maintain structured diplomatic dialogue. Your solutions should be bold, innovative, carefully reasoned and evidence-based. Thorough preparation will help you lead the debate with confidence and drive meaningful compromise.",
      },
      moderator: {
        name: "Unnat Aryal",
        role: "Moderator",
        image: "/images/committees/executive-board/unnat.png",
        testimonial: "Welcome to the UNEP session. This committee requires scientific evidence, historical knowledge and a commitment to protecting our environment. Think critically, manage your time and engage in formal diplomatic dialogue while facing complex issues with difficult answers. Research, treaties and resolutions are part of a journey that develops you academically and personally. Push one another forward and strive for greatness.",
      },
    },
    guideUrl:
      "https://docs.google.com/document/d/1dVN7n4nQLQ7KNc_ebO2xNRRPCkcKh40yNFKCsN4wRDM/edit?usp=sharing",
    logo: "/images/committees/visuals/committee-unep.webp",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unepbg-ihLCYwOO6JWKqaOyQvf9mTbfPRY70Q.png",
  },
  {
    slug: "it",
    abbr: "IT",
    name: "Information Technology Committee",
    category: "facilitating",
    description:
      "The IT Committee builds and maintains the technical backbone of TESMUN XIV — from the conference website to on-site systems.",
    board: {
      headOf: { name: "Yubin KC", role: "Head of IT", image: "/images/our-team/it/yubin.png", testimonial: "The IT Committee turns ideas into the digital systems that carry TESMUN forward. Bring creativity, precision and a willingness to solve problems together. Every detail matters, and every contribution helps make the conference clearer, more connected and more memorable." },
      deputyHeadOf: [
        { name: "Suyog Acharya", role: "Deputy Head", image: "/images/our-team/it/suyog.png", testimonial: "Technical work is strongest when curiosity becomes collaboration. Support the workflow behind every session, stay ready to learn and help turn creative ideas into reliable systems that serve every delegate." },
        { name: "Swastik Manandar", role: "Deputy Head" },
      ],
    },
    logo: "/images/our-team/logistics/logistic.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/itbg-5u6BRlK6g1lLQzl5bmHy63n4KubeZt.png",
  },
  {
    slug: "press",
    abbr: "PRESS",
    name: "Press Committee",
    category: "facilitating",
    description:
      "The Press Committee documents TESMUN XIV in real time, producing news, vox pop, interviews and visual coverage throughout the conference.",
    board: {
      headOf: { name: "Dechen Hira Tamang", role: "Chief Editor", testimonial: "The Press Committee gives the conference its living record. Observe carefully, ask thoughtful questions and tell each story with clarity, fairness and purpose. Our work is to make the ideas, people and moments of TESMUN visible." },
      deputyHeadOf: [
        { name: "Siddhartha Basnet", role: "Deputy Chief Editor", image: "/images/our-team/press/siddartha.png", testimonial: "Good press begins with attention and respect. Listen closely, verify what you learn and capture the energy of the conference in a way that is honest, engaging and meaningful." },
        { name: "Simran Devkota", role: "Deputy Chief Editor", image: "/images/our-team/press/simran.png", testimonial: "Every interview, image and article is an opportunity to connect people with the conference. Stay curious, work thoughtfully and help create a record that reflects the voices and spirit of TESMUN." },
        { name: "John Doe", role: "Deputy Chief Editor", placeholder: true },
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
      "The Logistics Committee coordinates the operational execution of TESMUN XIV, ensuring every session runs precisely as planned.",
    board: {
      headOf: { name: "Kushal Poudel", role: "Head of Logistics", image: "/images/our-team/logistics/kushal.png", testimonial: "Logistics is where preparation becomes experience. Stay organised, communicate clearly and look after the details that allow every committee to run smoothly. A successful conference is built by people who are ready to help one another." },
      coHeadOf: { name: "Prasina Moktan", role: "Head of Press" },
      deputyHeadOf: [
        { name: "Arbin Dhital", role: "Top Floor Incharge" },
        { name: "Harshid Bhetwal", role: "Second Floor Incharge" },
        { name: "Sushan Shrestha", role: "First Floor Incharge" },
      ],
      additionalMembers: [
        { name: "Rudraksh Devkota", role: "Overall Manager", image: "/images/our-team/logistics/rudraksh.png", testimonial: "Every moving part of the conference depends on shared responsibility. Stay attentive, support your team and take pride in the details. When we work with discipline and kindness, the whole conference becomes stronger." },
        { name: "Yugesh Adhikari", role: "Material Head" },
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
      "MUN is a place to discover yourself, build with others and learn how your voice can shape the world around you. Leadership is not about standing above others, but about building with others.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/chairperson",
  },
  {
    name: "Prashant Rajak",
    role: "Principal",
    slug: "prashant-rajak",
    image: "/images/our-team/principal.jpg",
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
    image: "/images/our-team/muncoordinator.jpg",
    testimonial:
      "We are proud to announce the 14th session of TESMUN at our school. TESMUN provides students with a unique opportunity to learn about Nepalese politics, international diplomacy, cross-cultural understanding, and global governance. It is a platform where young minds communicate, argue and reach a consensus over national and global issues.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/mun-coordinator",
  },
  {
    name: "Pratik Subedi",
    role: "IT Coordinator",
    slug: "pratik-subedi",
    image: "/images/our-team/it/itcoordinator.jpeg",
    testimonial:
      "Serving as the IT Coordinator for TESMUN 2025 has been an enriching journey. Together, we shaped the digital face of the conference through the website, ceremony videos, invitation cards and dais portfolios. What stands out most is the way technology became a bridge for creativity and diplomacy.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/it-coordinator",
  },
  {
    name: "Jitendra Basnet",
    role: "Logistics Coordinator",
    slug: "jitendra-basnet",
    image: "/images/our-team/logistics/logisticscoordinator.png",
    testimonial:
      "Love across the world and peace against the sword. As the logistics coordinator, I expect our team to be expressive according to MUN protocols and maintain discipline while working with the committees. The key to achieving the best is friendliness and the development of suitable habits.",
    sourceUrl: "https://sites.google.com/view/tes-mun2025/testimonials/logistic-coordinator",
  },
  {
    name: "Dipendra Silwal",
    role: "Press Coordinator",
    slug: "dipendra-silwal",
    image: "/images/our-team/press/presscoordinator.jpg",
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
  { src: "/images/home/cover.png", alt: "The Excelsior School campus illuminated at night for TESMUN", caption: "Campus at night" },
  { src: "/images/about/about-hero.png", alt: "Cinematic view of the TESMUN about hall", caption: "The hall" },
  { src: "/images/committees/visuals/committees-hero.png", alt: "Committee room prepared for debate", caption: "Committee room" },
  { src: "/images/gallery/normal/gallery-assembly.jpg", alt: "United Nations flags along the Allée des Nations in Geneva", caption: "Allée des Nations" },
  { src: "/images/gallery/normal/gallery-debate.jpg", alt: "A young speaker addressing a formal discussion from a microphone", caption: "The floor" },
  { src: "/images/gallery/normal/gallery-kathmandu.jpg", alt: "Silhouette of people at a historic pavilion in Kirtipur, Kathmandu", caption: "Kathmandu dusk" },
  { src: "/images/gallery/normal/gallery-flags.jpg", alt: "A speaker at a podium during a formal conference address", caption: "The podium" },
  { src: "/images/gallery/normal/gallery-gavel.jpg", alt: "Close-up of a wooden gavel on a formal desk", caption: "In session" },
  { src: "/images/gallery/normal/gallery-library.jpg", alt: "Eyeglasses resting on a stack of research notebooks", caption: "Preparation" },
  { src: "/images/gallery/normal/gallery-campus.jpg", alt: "Tree-lined courtyard between academic buildings", caption: "The grounds" },
  { src: "/images/gallery/normal/gallery-podium.jpg", alt: "Empty conference room with a podium and rows of chairs", caption: "Before the gavel" },
  { src: "/images/gallery/normal/gallery-delegates.jpg", alt: "Young people seated around a formal meeting table in discussion", caption: "Delegates" },
  { src: "/images/about/about-purpose.png", alt: "A delegate's hand resting on a wooden podium", caption: "The floor opens" },
  { src: "/images/about/about-vision.png", alt: "An empty conference table lined with chairs and flags", caption: "Ready for session" },
  { src: "/images/home/mottobg.png", alt: "Atmospheric backdrop used for the TESMUN motto", caption: "Engage · Express · Excel" },
  { src: "/images/press/press-hero.png", alt: "Editorial still from the TESMUN press desk", caption: "Press desk" },
];
