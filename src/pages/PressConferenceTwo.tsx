import { Link } from "react-router-dom";

const articleParagraphs = [
  "TESMUN’s committee chairs took the stage on Wednesday for a formal press conference to present draft resolutions spanning human exploitation, nuclear disarmament, political accountability, and the environmental impact of data centers. But the press wanted to know one thing: will they actually work?",
  "During one exchange, UNEP Chair Rujal Ojha outlined the committee’s proposal on the environmental impact of AI and data centers. Journalist Ranish Mahat questioned whether companies could be trusted. Because the question was phrased so broadly, it drew immediate laughter and applause from the floor.",
  "The Chair responded by cross-questioning, “Which company specifically?” Press Coordinator Dipendra Silwal then clarified the question, allowing the Chair to address transparency regarding data shared with AI centers. Earlier in the session, journalist Rishika Lama pressed the UNEP Chair for factual information on collaboration rather than opinion. The Chair replied, “My opinion is relevant as it is my committee,” before declining further comment.",
  "Addressing human trafficking, the Human Rights Council, led by Kinjal Timalsina, highlighted practical frameworks to combat the issue. The Chair faced a question citing UNICEF’s report of more than 105,000 verified cases of children recruited for the military.",
  "Despite the question falling outside HRC’s direct mandate, Timalsina redirected the concern toward the organization itself, adding that HRC would work in collaboration with UNICEF to help affected children secure justice.",
  "With a focus on strengthening disarmament measures for nuclear, drone, chemical, and biological weapons, DISEC Chair Dhiki Khando Lama stated that gradual, verifiable, and mutually agreed nuclear disarmament would build transparency and confidence, reduce reliance on nuclear weapons, and balance state sovereignty with international security.",
  "Meanwhile, the LP I Chair faced journalist Krishna Shrestha’s question on effective implementation of measures to prevent human trafficking. The Chair stressed, “Prevention and protection are the key,” adding that a resolution must address government coordination, effective law implementation, and child-friendly awareness.",
  "From trafficking, the discussion shifted to corruption, political impunity, and accountability, as the chairs of LP II and LP III addressed questions on Nepal’s existing system. The LP II Chair identified the gap between policy and implementation as a call for stronger institutions, official accountability, and effective implementation. The LP III Chair continued the focus on accountability, addressing how political impunity and corruption could be tackled by holding both people and officials accountable.",
  "Though ECOSOC Chair Prateek Bhattarai was not questioned due to time, he presented the committee’s draft resolution, which focused on reducing dependence on vulnerable routes and building resilience. The proposal added to a wider discussion: can international solutions build long-term resilience rather than simply respond to problems?",
  "By the final exchanges, the hall echoed with laughter, applause, and gavel sounds. Deputy Secretary-General Abhash Kunwar closed the session by thanking the press and returning to the conference’s central ideals: dialogue, debate, and diplomacy.",
];

const photos = [
  { src: "/images/press/conference-2/01.png", alt: "Delegate working at the press conference", caption: "The conference begins with preparation." },
  { src: "/images/press/conference-2/02.png", alt: "Kinjal Timalsina chairing a committee", caption: "The dais keeps the discussion moving." },
  { src: "/images/press/conference-2/03.png", alt: "Two delegates working together at laptops", caption: "Collaboration continues behind the placards." },
  { src: "/images/press/conference-2/04.png", alt: "TESMUN press conference panel", caption: "The press conference brings the record into focus." },
  { src: "/images/press/conference-2/05.png", alt: "Three delegates seated at a conference table", caption: "Every committee adds another perspective." },
];

export default function PressConference() {
  return (
    <main className="min-h-screen bg-[#e8e2d5] px-4 py-6 text-[#171717] sm:px-8 sm:py-10">
      <article className="mx-auto max-w-6xl border border-[#24211d]/30 bg-[#f4f0e7] px-5 py-6 shadow-[0_12px_35px_rgba(25,20,15,0.16)] sm:px-10 sm:py-8 lg:px-16">
        <header className="border-b-2 border-[#171717] pb-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#171717]/50 pb-3 font-mono text-[10px] uppercase tracking-[0.2em]">
            <span>TES PRESS</span><span>TESMUN 2026</span><span>September 2, 2026</span><span>Issue 09</span>
          </div>
          <div className="py-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.35em]">The official conference record</p>
            <h1 className="mt-3 font-serif text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl lg:text-8xl">Press Conference #2</h1>
          </div>
        </header>

        <section className="border-b border-[#171717]/50 py-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Special report · Kathmandu</p>
          <h2 className="mt-4 max-w-5xl font-serif text-4xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl">Heavy Questions Turn to Laughter as TESMUN Chairs Face the Press</h2>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
            <span>By the Editorial Board of TES Press</span><span>Kathmandu, September 2, 2026 | 1:17 p.m.</span>
          </div>
        </section>

        <figure className="mt-8">
          <img src={photos[0].src} alt={photos[0].alt} className="h-auto max-h-[620px] w-full object-cover grayscale-[15%]" />
          <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em]">{photos[0].caption}</figcaption>
        </figure>

        <div className="mt-10">
          <div className="columns-1 gap-8 text-[16px] leading-7 sm:text-[17px] lg:columns-2">
            {articleParagraphs.map((paragraph, index) => (
              <p key={index} className="mb-6 break-inside-avoid font-serif">{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {photos.slice(1).map((photo) => (
              <figure key={photo.src} className="sm:odd:col-span-2">
                <img src={photo.src} alt={photo.alt} className="h-auto max-h-[640px] w-full object-cover" />
                <figcaption className="mt-2 font-mono text-[10px] uppercase leading-4 tracking-[0.08em]">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <footer className="mt-10 flex justify-between border-t-2 border-[#171717] pt-4 font-mono text-[10px] uppercase tracking-[0.16em]"><span>TES PRESS · ISSUE 09</span><Link to="/press" className="underline underline-offset-4">Back to press</Link></footer>
      </article>
    </main>
  );
}

