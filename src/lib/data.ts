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
    testimonial: "The only limit to our realization of tomorrow is our doubts of today.\n- Franklin D. Roosevelt\n\nMUN is not the loudest person's show. It's about listening, understanding, and taking the courageous approach to speak up when necessary. To me, as Secretary-General, the vision of TESMUN 2026 is very straightforward: that all voices are heard. Whether you are an old pro or you've brought your placard to the table for the first time, your ideas can make a difference in the room.\n\nBe ready for challenging ideas, creating alliances, making mistakes, and learning from them.Make TESMUN 2026 a more than just a conference. Let It be where your voice begins.",
    image: "/images/our-team/secgen.png",
    placeholder: false,
  } as Person,
  dsg: {
    name: "Abhash Kunwar",
    role: "Deputy Secretary-General",
    slug: "abhash-kunwar",
    testimonial: "Leadership is not about holding a title; it is about creating opportunities, inspiring change, and giving every voice the chance to be heard.\n\nAs Deputy Secretary-General of TES-MUN 2026, I believe that diplomacy begins with respect, grows through dialogue, and succeeds through unity. Together, let us debate with purpose, think beyond borders, and shape solutions for a better tomorrow.\n\nWelcome to TES-MUN 2026, where ideas become action, and delegates become leaders.",
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
    abbr: "LP I",
    name: "TES Model Parliament I",
    category: "national",
    description:
      "The first of TESMUN's three national TES Model Parliaments, deliberating on domestic policy through the lens of Nepal's parliamentary process.",
    board: {
      chair: { name: "Aakarshi Paudel", role: "Chair", image: "/images/committees/executive-board/aakarshi.png", testimonial: "“The only way to make sure people you agree with can speak is to support the rights of people you don't agree with.\"\n— Eleanor Holmes Norton\n\nIt is my greatest honor to welcome you all to TES Model Parliament-I at this year’s Model United Nations Conference. I am Aakarshi Paudel, and I am truly privileged to serve as your Chair. As we enter this committee, remember that you are not here merely to speak; you are here to represent. Behind every placard lies a political ideology, a constituency, and the voice of people who have entrusted you to speak on their behalf.\n\nYou may be nervous, lose your words, or disagree with someone more experienced. That is completely fine. Every strong parliamentarian started somewhere. As your Chair, I promise to remain fair, impartial, and approachable, ensuring every voice receives an opportunity to be heard.\n\nRemember, you are not simply simulating Parliament; you are practicing the responsibility of democracy. I wish you all the very best, and I look forward to hearing you on the floor." },
      viceChair: { name: "Dilasha Oli", role: "Vice Chair", image: "/images/committees/executive-board/dilasha.png", testimonial: "With the warmest heart, I welcome each and every one of you to the TES Model Parliament I of  TESMUN 2026.\n\nIt is an absolute honour to serve as your Vice Chair, and I am genuinely excited to meet you all, hear your ideas, and watch this committee come alive through your voices. As your Vice Chair I want you to know that I am always here to help and guide you. Whether you are giving your speech with trembling hands or speaking with confidence, during a discussion every single thing you do is important. I hope we can build a committee that's not only interesting and thought-provoking but also friendly, kind and something that stays with people.\n\nSo once again, welcome to the TES Model Parliament delegates. Bring your ideas, your passion, your questions, and your willingness to learn. I cannot wait to see you all step forward, find your voices, and make this committee truly yours." },
      moderator: { name: "Sijan Neupane", role: "Moderator", image: "/images/committees/executive-board/sijan.png", testimonial: "It is my pleasure to welcome you all to TES Model Parliament-I. As your Moderator, my goal is to make this committee active, engaging, and most importantly, a space where every delegate feels confident enough to participate.\n\nYou will not always agree with one another and that is exactly what Parliament is about. Question ideas, defend your position, challenge others respectfully, and most importantly, be willing to negotiate. Whether you are an experienced delegate or stepping into MUN for the first time, your voice can influence the direction of this committee.\n\nCome prepared, stay involved, and do not be afraid to speak. I look forward to seeing you turn your research and ideas into meaningful parliamentary debate." },
    },
    guideUrl: "https://docs.google.com/document/d/1q15bWChGR4lDrzNmgmZ_Q5DaFM8QDnOfn4PxaZ16s5Y/edit?tab=t.0",
    logo: "/images/committees/visuals/committee-lp.png",
    background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lpbg-2qsmQq5yhmY1viQa0unkSfYqpucXZw.png",
  },
  {
    slug: "lp2",
    email: "lp2@excelsior.edu.np",
    matrixUrl: "https://docs.google.com/spreadsheets/d/1IXmUFmMha65Kks6TOtv_PV8vw6qFZa_1fla4kFSwGUA/edit?gid=1089742237#gid=1089742237",
    abbr: "LP II",
    name: "TES Model Parliament II",
    category: "national",
    description:
      "The second TES Model Parliament, convened to debate national legislation and constitutional matters within a simulated parliamentary chamber.",
    board: {
      chair: {
        name: "Saksham Thapaliya",
        role: "Chair",
        image: "/images/committees/executive-board/sakshamthapaliya.png",
        testimonial: "“The art of leadership is not in being heard, but in making others feel heard.”\n\nAs we begin this diplomatic journey, I urge each of you to approach the committee with an open mind and a strong commitment to dialogue, negotiation, compromise, and cooperation. Every delegate carries the responsibility of representing the perspectives and interests of their respective political parties. This committee is structured around the House of Representatives of the Federal Parliament of Nepal, where national issues are examined, differing perspectives are debated, and meaningful solutions are pursued.\n\nI encourage you to make every discussion purposeful by presenting your ideas with confidence, challenging perspectives respectfully, and remaining receptive to opinions different from your own. Remember that meaningful progress is rarely achieved through individual effort; it emerges when diverse ideas come together through collaboration and thoughtful deliberation.\n\nLet your voice be guided by reason, diplomacy, and responsibility. Use your words not merely to argue, but to build understanding and advance constructive solutions. Most importantly, embrace this committee as an opportunity to learn, grow, and experience the essence of parliamentary diplomacy.",
      },
      viceChair: {
        name: "Diya Shrestha",
        role: "Vice Chair",
        image: "/images/committees/executive-board/diya.png",
        testimonial: "“We may have all come on different ships, but we’re in the same boat now.”\n— Martin Luther King Jr.\n\nFrom today onward, you will be addressed not merely by your names, but by the positions and delegations entrusted to you. It is my privilege to serve as your Vice-Chair. Having once been a delegate myself, I understand the nervousness and excitement that come with stepping into the House. My responsibility is to ensure that every voice is heard and every debate remains meaningful and respectful.\n\nRecent public protests have raised serious questions about corruption, institutional accountability, transparency, government response, and declining public trust. Study Nepal’s Constitution, existing laws, anti-corruption mechanisms, parliamentary oversight, and the role of institutions. Examine the causes and impact of recent protests using verified information, while distinguishing facts from allegations and political claims.\n\nRepresent your delegation with confidence, challenge opposing arguments with evidence, and propose solutions that are practical and suitable for Nepal. Most importantly, do not simply identify problems—bring solutions to the House.",
      },
      moderator: {
        name: "Dijesh Niroula",
        role: "Moderator",
        image: "/images/committees/executive-board/dijesh.png",
        testimonial: "“Where justice is denied, where poverty is enforced, where ignorance prevails, and where any one class is made to feel that society is an organized conspiracy to oppress, rob and degrade them, neither persons nor property will be safe.” -Frederick Douglass\n\nAs you begin this exciting journey, I encourage you to remember that every opinion matters. TESMUN is not only about debate and diplomacy , it is about learning, growing, and having the confidence to express your thoughts with respect and purpose. Every great leader begins by taking the first step, and this committee is your opportunity to do just that.\n\nI look forward to witnessing engaging discussions, well researched arguments, and the exchange of creative ideas throughout our sessions. Like many of you, I have experienced the excitement and nervousness that come with participating in MUN. Those moments taught me that confidence is built through participation, and every speech, no matter how small, is a step toward becoming a better leader and communicator.\n\nAs we commence this conference, I warmly welcome every delegate and wish you an enriching and memorable experience. I hope this committee becomes a place where ideas are exchanged freely, friendships are formed, and every delegate leaves with greater confidence than when they arrived.",
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
    abbr: "LP III",
    name: "TES Model Parliament III",
    category: "national",
    description:
      "The third TES Model Parliament, offering delegates a parallel forum for legislative debate, coalition-building and procedural diplomacy.",
    board: {
      chair: {
        name: "Binayak Babu Rana",
        role: "Chair",
        image: "/images/committees/executive-board/binayak.png",
        testimonial: "It gives me immense pleasure to welcome you all to TES Model Parliament 3 of TESMUN 2026.\n\nAs your Chair, I am not only looking forward to witnessing the debates that will unfold in this committee, but also to experiencing the journey that each of you will take throughout our sessions.\n\nThroughout our sessions, I want to see delegates who are fearless in debate but responsible in their arguments. Challenge your opponents. Question their decisions. Defend your political position. Form alliances when it benefits your cause. I do not expect this committee to be quiet. I expect disagreements, unexpected alliances, intense questioning and moments where the entire direction of the debate changes. However, remember that the strongest delegate is not necessarily the one who speaks the loudest, but the one who knows when to speak, what to say, and how to turn an argument into influence.\n\nAt the same time, I hope you leave this committee with more than an award. MUN has the ability to develop confidence, critical thinking, public speaking, negotiation and leadership—skills that extend far beyond these sessions.\n\nSo come prepared, come confident, and most importantly, come ready to make your voice heard. Let us debate the past, question the present, and legislate for the future.",
      },
      viceChair: {
        name: "Alisa Rijal",
        role: "Vice Chair",
        image: "/images/committees/executive-board/alisa.png",
        testimonial: "I am very pleased and excited to work with the curious minds and young learners, the delegates of TES Model Parliament III committee for TESMUN 2026!\n\nWe are always there to guide you whenever and are actually looking forward to your questions. Remember, only through proper clarity you’ll be able to do your best in the session to come. A special note from the vice-chair, please do not run after awards. This MUN is an opportunity for you to develop your confidence, research and diplomatic skills, not just a platform to win an award. Trust me, you’ll perform way better if you aren’t under the constant stress and pressure to win. If you can conquer your fear and speak confidently in a room full of people, you are already a winner.\nAnd lastly, your vice-chair is always willing to help you out. I assure you that each one of you will be guided and helped and your shaking hands will be held just like the way mine had been. This event might sound scary, like the way it did to me but nothing actually is scary. We all are here to learn and grow. You, me, all of us.\n\nBest wishes to my fellow delegates! I am thrilled to hear your voice, your words and feel the radiating confidence. Feel no fear, you aren’t judged by any one, not by me in the least! Once again, best wishes to all the young leaders.",
      },
      moderator: {
        name: "Aayushma Shrestha",
        role: "Moderator",
        image: "/images/committees/executive-board/aayushma.png",
        testimonial: "It is with great pleasure and anticipation that I welcome all of you delegates to the TES Model Parliament Committee of  TESMUN-2026. As your moderator, I am thrilled to embark on this journey with you to explore some of the most significant and pressing legislative and parliamentary challenges that Nepal still faces today.\n\nAll of you delegates  have the opportunity to represent different leaders and ministers throughout this conference, an experience that will not only enhance your understanding of Nepal's legislative process but also develop your skills in research, public speaking, and consensus-building. And I hope these MUN sessions will also help ignite your passion for public speaking, politics or just general debates like it did for me.\nPlease do not hesitate to reach out to me or any other member of the dais if you have any questions, inquiries, or require assistance. We are here to support and guide you, ensuring that your experience at the 2026 TES Model United Nations is memorable, enjoyable, and enriching. I eagerly await the opportunity to meet each of you and witness the insightful debates and innovative solutions you will bring to the table. Together, let us strive to make this conference a resounding success and a testament to the transformative power of youth in shaping Nepal's future. Best of luck and see you soon!",
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
        testimonial: "As Chair, my number one ask of this committee is that you don't be afraid to speak! It's okay if you walk into this room with a perfectly prepared speech, or an extensively researched position, or just absolutely no idea what to expect. Wherever you start, I want you to come out of this committee knowing that you made a difference with your voice.\n\nThe HRC is not the forum for parroting your nation's foreign policy. It is a room of opposing interests, hard questions, and hard facts. You might find yourself defending a stance with which you don't agree, negotiating with a country you never imagined you'd work with, or be challenged by another delegate. It is from there that diplomacy starts.\n\nDo not let the number of speeches or the volume of speech be the basis for judging your performance. Evaluate it by what you do to the room. Have you shifted the viewpoint of another? Have you brought up a suggestion that no one had thought of? Did you take an argument and make it a solution?\n\nArrive at HRC confident, but allow for the questions. Be ready to fight for your nation, but ready to learn about other nations. Most importantly, be prepared to make this committee your own!\nI hope you bring some of your own ideas that are going to challenge, and create together on the floor.",
      },
      viceChair: {
        name: "Saanvi K.C.",
        role: "Vice Chair",
        image: "/images/committees/executive-board/saanvi.png",
        testimonial: "As your vice chair, I feel honoured to welcome you into a committee where your words, ideas and your unique perspectives will have the power to shape meaningful debates. As the conference continues, I want you to keep something in your mind; you will not simply be representing a country but you will be stepping into a world of diplomacy, where each and every decision is to be made with precision and with responsibility.\n\nHRC is a committee that demands more than just simply knowing your country’s policies, it requires you to understand the reality of current affairs, listen to perspectives you may not like, and work towards solutions that are ambitious yet practical. At the same, this is an opportunity for you to improve your speaking skills, strengthen your diplomacy and critical thinking skills.  Every speech you share, every question you ask and every resolution you make is an opportunity for you to make your voice heard and contribute to the committee.\n\nSo, research your country, understand your agenda, prepare your arguments and most importantly, trust yourself. Walk into the committee prepared, confident and curious. Walk into the committee ready to make your voice one of the most powerful in the room. With great power comes great responsibility.",
      },
      moderator: {
        name: "Kritish Ghimire",
        role: "Moderator",
        image: "/images/committees/executive-board/kritish.png",
        testimonial: "As we gather in this place, we are presented with something special; an opportunity to engage on the critical issues facing people's rights and dignity everywhere. This is not just another committee or another conference. It is an opportunity to amplify your voice, your perspective, your passion, and make a difference.\n\nAs your moderator, I wish to create an atmosphere in which our discussion will be fun, collaborative, respectful and meaningful. I am here to support you, help ensure that everyone has an opportunity for their voice to be heard, and to cheer you on as you engage, learn and lead! I hope we do more than just succeed; we collaborate, we learn and we create impact.\n\nBeing a delegate is not merely stating facts or following procedures. It is about immersing yourself in the situation: challenging yourself, forming bonds, experiencing the highs and lows–even learning from the unfortunate moments. I ask each of you to be brave, to be forthright, to be vocal and to show everyone what you are made of.\n\nThis is your chance. These opportunities do not often present themselves each day, so take full advantage of it. Make your contributions worthwhile, make your efforts rewarding, and most importantly–enjoy the process. Let us make this committee a productive one–be it awards, resolutions, and debates and even enjoyable through conversations, development and experience.",
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
      chair: { name: "Dhiki Khando Lama", role: "Chair", image: "/images/committees/executive-board/dhiki.png", testimonial: "“Delegates, let your arguments be sharp, your diplomacy fearless, and your resolve stronger than the conflicts we are here to confront—this committee is ready, are you?”\n\nWelcome to DISEC, where the questions before us are not distant problems confined to headlines, but matters that shape the security, stability, and future of nations around the world. As your Chair, it is my privilege to welcome you to a committee where diplomacy will be tested, perspectives will collide, and every decision carries weight.\n\nI encourage every delegate to approach this committee with confidence and purpose. Represent your country faithfully, but do not be afraid to challenge ideas, reconsider your own position, or find common ground with those who initially stand opposite you. The strongest diplomat is not necessarily the loudest voice in the room, but the one who knows when to speak, when to listen, and when to turn disagreement into progress.\n\nThis committee will challenge you to think beyond your position paper and engage with the complexity of the world you are representing. Research deeply, negotiate intelligently, and remember that diplomacy is not about avoiding conflict; it is about confronting it with reason.", },
      viceChair: { name: "Rijan Shrestha", role: "Vice Chair", image: "/images/committees/executive-board/rijan.png", testimonial: `“True security is not forged by the weight of our armaments, but by the courage of our convictions to dismantle them.”"\n\nAs your Vice-Chair, I hope this committee becomes more than a place where delegates deliver speeches and compete for recognition. DISEC should be a space where ideas are challenged, perspectives are understood, and diplomacy becomes more than a word written into a resolution. Every delegate brings a different national interest, a different understanding of security, and a different vision for how conflicts should be addressed. That diversity is what makes meaningful debate possible.\n\nDo not be afraid to disagree. Disagreement is not the failure of diplomacy; refusing to understand the other side is. Challenge one another with evidence, defend your country's position with conviction, and remain willing to listen when another delegate presents an argument that forces you to reconsider your own. The best moments in committee often come not from perfect speeches, but from the unexpected ideas that emerge when delegates genuinely engage with one another.\n\nAt the same time, remember the responsibility behind the flags you represent. The decisions discussed in DISEC can affect nations far beyond this room, and the consequences of conflict are ultimately carried by people who rarely have a seat at the negotiating table. Debate with that reality in mind.` },
      moderator: { name: "Prasanna Budhathoki", role: "Moderator", image: "/images/committees/executive-board/prasanna.png", testimonial: `“The future belongs to those who prepare for it today.”"  — Malcolm X\n\nDebate in DISEC moves fast. Between fast-paced moderated caucuses, shifting alliances, and constant resolution drafting, keeping the momentum alive takes real focus from everyone in the room. As your Moderator, my focus is on powering that debate forward and making sure every single point on the floor gets the attention it deserves.\n\nA great DISEC session doesn't happen when a few voices dominate; it happens when every delegate actively drives the conversation. I want to see you raise your placards with confidence, respond quickly to emerging crises, and challenge each other's ideas with energy and respect. Don't sit back waiting for the perfect moment—jump into the queue, push the debate into deeper waters, and keep the energy high from the first motion to the final vote.` },
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
      chair: { name: "Prateek Bhattarai", role: "Chair", image: "/images/committees/executive-board/prateek.png", testimonial: "It is my great pleasure to welcome you all to this session of ECOSOC. As your Chair, I am honored to lead this committee and look forward to seeing the ideas, debates, negotiations, and solutions that each of you will bring to the floor.\n\nAs delegates, your preparation will be the foundation of your performance. Take the time to understand your country's economic position, policies, priorities, allies, and relationships with other nations. Strong research will not only help you deliver impactful speeches, but will also allow you to negotiate effectively, challenge other delegates with confidence, and contribute meaningfully to the committee.\n\nAt the same time, remember that MUN is not about being perfect. You will make mistakes, forget points, lose track of your speech, and occasionally say something you researched five minutes ago and pray nobody asks you a follow-up question. That is all part of the experience. What matters is how you adapt, learn, and continue participating.\n\nSo delegates, research well, speak confidently, negotiate strategically, stay diplomatic, and make your country's voice heard. I wish you all the very best and good luck. May the best delegate thrive in the moderated caucuses, the unmoderated caucuses, and, of course, the resolutions." },
      viceChair: { name: "Sima Thapa Magar", role: "Vice Chair", image: "/images/committees/executive-board/sima.png", testimonial: "It is my great pleasure to welcome you to this session of ECOSOC. As your Vice-Chair, I am delighted to be part of this committee and look forward to witnessing the ideas, debates, and solutions that each of you will bring to the floor.\n\nAs delegates, your preparation will be the foundation of your performance. Take the time to understand your country's economic position, policies, priorities, and relationships with other nations. Strong research will not only help you deliver better speeches, but will also allow you to negotiate confidently and contribute meaningfully to the discussion.\n\nAs your Vice Chair, I’ll do my best to keep the committee fair, engaging, and maybe just a little chaotic,in a good way.So, delegates, research well, speak up, negotiate hard, stay diplomatic, and most importantly, have fun." },
      moderator: { name: "Kunjal Karki", role: "Moderator", image: "/images/committees/executive-board/kunjal.png", testimonial: "Welcome to the ECOSOC committee. I am Kunjal Karki, the moderator. As you prepare for the committee, I encourage you to approach this guide not simply as a collection of information, but as the starting point for your research, preparation, and debate.\n\nECOSOC will challenge you to look beyond the surface of global economic and social issues. Understanding your country's policies, priorities, challenges, and relationships with other nations will be essential. Come prepared with facts, statistics, previous international commitments, and, most importantly, realistic solutions that your country would genuinely support.\n\nAt the same time, remember that MUN is not about memorising speeches. It is about diplomacy. Listen to other delegates, question their proposals, defend your country's interests, and be willing to negotiate when necessary. The strongest delegates are not always the ones who speak the most, but those who know when to speak, what to say, and how to turn discussion into action.\n\nI look forward to seeing this committee filled with meaningful debate, constructive negotiation, and passionate diplomacy. Prepare well, participate actively, and most importantly, enjoy the experience.\nBest of luck, delegates. I cannot wait to see what you bring to ECOSOC." },
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
        testimonial: "“I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.” — Alexander the Great\n\nWelcome to the United Nations Environment Organisation at TES MUN 2026.\n\nClimate change is no longer a distant threat. Rising temperatures, melting glaciers, extreme weather, and water insecurity are already affecting nations across the world. Yet the responsibility for this crisis is not equally shared. This raises a crucial question: Who should bear the greatest responsibility, and how can the world respond fairly?\n\nAs delegates, you are expected to look beyond statistics and national interests. Research your country's history, emissions, vulnerabilities, economic capacity, and climate policies. Debate firmly, negotiate wisely, and work toward solutions that balance environmental responsibility with economic development.\n\nRemember, diplomacy is not about proving that your country is right—it is about finding a solution that the international community can move forward with.\n\nThe glaciers are melting, the climate is changing, and the world is watching.",
      },
      viceChair: {
        name: "Sankalpa Neupane",
        role: "Vice Chair",
        image: "/images/committees/executive-board/sankalpa.png",
        testimonial: `“The ultimate test of man's conscience may be his willingness to sacrifice something today for future generations whose words of thanks will not be heard.”" — Gaylord Nelson\n\nDear Delegates,\nWelcome to this UNEP session! As we gather to address some of the most pressing environmental crises confronting our planet today, I am thrilled to witness your passion, leadership, and commitment.\n\nLeadership in environmental governance demands a thorough examination of scientific evidence, a keen assessment of historical contributions, and an unwavering commitment to climate justice.\n\nTime management and structured diplomatic dialogue will be crucial as we navigate these intense discussions. Your ability to remain organized, collaborative, and focused will be essential as we tackle these multi-faceted issues. In addition to being deeply engaging, I anticipate that our deliberations will be ambitious and visionary. Your proposed solutions should be bold and innovative, and your positions carefully reasoned and evidence-based.\n\nKeep in mind that true leadership requires a deep understanding of ongoing environmental crises, international treaties, and climate resolutions. Thorough preparation will empower you to step up, lead the debate with confidence, and drive meaningful compromise. As your Vice-Chair, I am optimistic that we can inspire real progress together, and I have high hopes for what this committee will achieve. Best of luck to you all!`,
      },
      moderator: {
        name: "Unnat Aryal",
        role: "Moderator",
        image: "/images/committees/executive-board/unnat.png",
        testimonial: `“No problem of human destiny is beyond human beings.”" – John F. Kennedy\n\nWelcome to the UNEP session of 2026. In this session we shall gather together to confront the grave environmental issues that have been spreading all over our planet. I am very much excited to see your passion,research and your leadership skills.\n\nIn these sessions you will have to take on the role of having leadership of various nations all throughout the world. But this role of leadership requires you to have knowledge of scientific evidence in regard to the agenda,historical knowledge of your nation and a goal making sure that our environment will stay protected.\n\nThis session will require you to use critical thinking,manage your time and have formal diplomatic dialogue with each other. Throughout our session you have to think critically,manage your time and interact with all your fellow delegates in a proper manor while paying focus to every word that shall be spoken  as we ought to face complex issues with difficult answers that you will have to figure out.\n\nRemember that leadership requires well developed research,critical understanding of the modern geopolitical and ecological problems in our world,creation of treaties and resolutions. This is not just research but a development of self in both academic and personal way. As your moderator I hope that all shall push each other for the better. I have hopes that everyone of my delegates will achieve greatness.`,
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
      headOf: { name: "Yubin KC", role: "Head of IT", image: "/images/our-team/it/yubin.png", testimonial: "The harder the conflict, the greater the triumph. — George Washington\n\nTo bring a conference as dynamic as TESMUN 2026 to life, countless hours of work happen far beyond the committees. As the IT department, we stand behind the screen, behind the systems, behind the designs, behind the digital experiences and in helping make the vision of TESMUN a reality.\n\nIt's not just about managing technology. Whether it's creating engaging videos, building the official TESMUN website, or providing real-time updates, we ensure that every aspect of the conference is connected, accessible, and alive.\n\nEach page of the website, each visual, each announcement and each video is the result of hours of creativity, precision and collaboration. As delegates debate resolutions and chairs lead committees, our team is busy behind the scenes making sure their efforts are captured, communicated and remembered.\n\nThe challenges may be demanding, the deadlines relentless, and the work often unseen—but that is what makes the final result worthwhile. Because when the screens light up, the videos roll, and every piece comes together, we know that the effort behind the scenes has helped create something worth remembering." },
      deputyHeadOf: [
        { name: "Suyog Acharya", role: "Deputy Head", image: "/images/our-team/it/suyog.png", testimonial: "Technical work is strongest when curiosity becomes collaboration. Support the workflow behind every session, stay ready to learn and help turn creative ideas into reliable systems that serve every delegate." },
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
      headOf: { name: "Dechen Hira Tamang", role: "Chief Editor", image: "/images/our-team/press/dechen.png", testimonial: "The Press Committee gives the conference its living record. Observe carefully, ask thoughtful questions and tell each story with clarity, fairness and purpose. Our work is to make the ideas, people and moments of TESMUN visible." },
      deputyHeadOf: [
        { name: "Siddhartha Basnet", role: "Deputy Chief Editor", image: "/images/our-team/press/siddartha.png", testimonial: "Good press begins with attention and respect. Listen closely, verify what you learn and capture the energy of the conference in a way that is honest, engaging and meaningful." },
        { name: "Simran Devkota", role: "Deputy Chief Editor", image: "/images/our-team/press/simran.png", testimonial: "Every interview, image and article is an opportunity to connect people with the conference. Stay curious, work thoughtfully and help create a record that reflects the voices and spirit of TESMUN." },
        { name: "Renesha Maharjan", role: "Deputy Chief Editor", image: "/images/our-team/press/renesha.png", testimonial: "Renesha supports editorial planning and helps coordinate reporting across every committee session." },
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
headOf: { name: "Kushal Poudel", role: "Head of Logistics", image: "/images/our-team/logistics/kushal.png", testimonial: "Every successful conference runs smoothly because of people who plan ahead, stay organized and take responsibility. Bring your ideas, dedication and energy to TESMUN, and as Logistics Head, help create a conference where every detail is managed, every challenge is handled, and every participant feels welcomed and supported." },
  coHeadOf: { name: "Prasina Moktan", role: "Head of Logistics", image: "/images/our-team/logistics/prasina.png", testimonial: "As the Head of Logistics of TESMUN, I am privileged to serve on a team that works behind the scenes to make sure every aspect of this conference runs smoothly.\n\nLogistics is not just booking rooms, materials, registrations, and schedules. It’s about teamwork, accountability, communication, and making sure everyone has what they need to be at their best.\nWe may not always be in the limelight, but our work underpins every committee, every delegate, every session. I am thankful for the dedication and hard work of each and every member of the logistics team that makes TESMUN happen.\n\n“With our teamwork and dedication, we can overcome any obstacle and make TESMUN a well-organized, memorable and successful experience for all.”" },
      deputyHeadOf: [
        { name: "Arbin Dhital", role: "Top Floor Incharge", image: "/images/our-team/logistics/arbin.png" },
        { name: "Harshid Bhetwal", role: "Second Floor Incharge", image: "/images/our-team/logistics/harshid.png" },
        { name: "Sushan Shrestha", role: "First Floor Incharge", image: "/images/our-team/logistics/sushan.png" },
      ],
      additionalMembers: [
        { name: "Rudraksh Devkota", role: "Overall Manager", image: "/images/our-team/logistics/rudraksh.png", testimonial: "Every moving part of the conference depends on shared responsibility. Stay attentive, support your team and take pride in the details. When we work with discipline and kindness, the whole conference becomes stronger." },
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
      "Serving as the IT Coordinator for TESMUN 2026 has been an enriching journey. Together, we shaped the digital face of the conference through the website, ceremony videos, invitation cards and dais portfolios. What stands out most is the way technology became a bridge for creativity and diplomacy.",
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
