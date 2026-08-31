import { Link } from "react-router-dom";

const articleParagraphs = [
  "The secretariat and the press gathered on August 31, 2026 in the auditorium hall for a press conference to address pressing global issues ranging from child safety and labor exploitation to intervention limits and energy cooperation.",
  "As the journalists assembled, the press conference wasted no time getting to the heart of the matter. Moderator Rudraksh Devkota opened proceedings and introduced the conference before handing the floor over to the Secretary-General, Dibas Khadka, who briefed on the matters of TESMUN 2026.",
  "The first question was raised by the press journalist Simran Devkota, who questioned, “Major powers often dominate MUN debates. How have you ensured delegates representing smaller or less influential nations are not over-shadowed, but have a meaningful opportunity to shape the discussion?”",
  "In response, the Secretary General emphasized the importance of allowing delegates who wish to participate to make their voices heard and the importance of their We have implemented a policy where we, the dais panel encourage all delegates to speak even if they aren’t confident in themselves. We have also helped them to the point where we tell them what to say alongside providing various websites and resources they can rely on.”",
  "The tone shifted as journalist Rishika Lama turned the questioning toward child protection and the enforcement of safeguards, directing it at Akarshi Paudel, chair of Model Parliament I. Paudel took a moment to gather her response before highlighting, the concerns surrounding child labour, misuse of existing rules and the protection of children in schools. She ultimately called for stronger legal protections alongside greater awareness among children themselves.",
  "Before the conference ended, Paudel found herself back in the spotlight, questioned by journalist Aarush Katuwal. The journalist invoked a case that had gripped the nation, “Chair, following the recent rape and killing of a three-year-old girl in Bara, that raised concerns over the authorities’ response”, Katuwal continued, “How does the Dais expect delegates to address the gap between Nepal’s existing child-protection laws and the ability of authorities to act effectively when a child is actually at risk?”",
  "Paudel identified legal protection as a priority, arguing that safeguards must extend beyond written provisions to their actual implementation. She further emphasized the role of the dais in creating greater opportunities for delegates to speak and participate.",
  "The discussion also examined the boundaries of international intervention. In response to another journalist Shubham Shrestha, Dhiki Khando Lama–chair of DISEC–pointed to the existing framework as providing clearer parameters for intervention, stating that such measures should remain limited rather than expand in ways that could further escalate conflicts.",
  "The representation of smaller nations emerged as another key concern. Replying to Shreni Chapagain, Prateek Bhattarai, the chair of ECOSOC, argued that smaller countries often have the greatest need to participate in international discussions because they are frequently among those most affected by global crises. He emphasized international cooperation and diversification of energy sources as essential components of addressing these challenges.",
  "The conference concluded with recurring emphasis on participation, practical implementation and equal rights, underscoring the broader responsibility of international institutions to ensure that those most affected by global issues are not left unheard.",
];

const photos = [
  { src: "/images/press/conference/main.png", alt: "TESMUN press conference panel", caption: "The secretariat gathered for the TESMUN 2026 press conference." },
  { src: "/images/press/conference/secondary.png", alt: "Student speaking at a TESMUN podium", caption: "Proceedings opened in the auditorium hall." },
  { src: "/images/press/conference/reporterspeaking.png", alt: "Student reporter speaking into a microphone", caption: "The press desk put questions to the conference." },
  { src: "/images/press/press-hero.png", alt: "TESMUN press desk", caption: "TES Press recorded the day’s discussion." },
];

export default function PressConference() {
  return (
    <main className="min-h-screen bg-[#e8e2d5] px-4 py-6 text-[#171717] sm:px-8 sm:py-10">
      <article className="mx-auto max-w-6xl border border-[#24211d]/30 bg-[#f4f0e7] px-5 py-6 shadow-[0_12px_35px_rgba(25,20,15,0.16)] sm:px-10 sm:py-8 lg:px-16">
        <header className="border-b-2 border-[#171717] pb-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#171717]/50 pb-3 font-mono text-[10px] uppercase tracking-[0.2em]">
            <span>TES PRESS</span><span>TESMUN 2026</span><span>August 31, 2026</span><span>Issue 09</span>
          </div>
          <div className="py-8 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.35em]">The official conference record</p>
            <h1 className="mt-3 font-serif text-5xl font-black uppercase tracking-[-0.06em] sm:text-7xl lg:text-8xl">Press Conference</h1>
          </div>
        </header>

        <section className="border-b border-[#171717]/50 py-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em]">Special report · Kathmandu</p>
          <h2 className="mt-4 max-w-5xl font-serif text-4xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl">TESMUN 2026 Officially Announced at Press Conference</h2>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
            <span>By the Editorial Board of TES Press</span><span>Kathmandu, August 31, 2026 | 1:17 p.m.</span>
          </div>
        </section>

        <figure className="mt-8">
          <img src={photos[0].src} alt={photos[0].alt} className="h-auto max-h-[620px] w-full object-cover grayscale-[15%]" />
          <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em]">{photos[0].caption}</figcaption>
        </figure>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.32fr]">
          <div className="columns-1 gap-8 text-[16px] leading-7 sm:text-[17px] lg:columns-2">
            {articleParagraphs.map((paragraph, index) => (
              <p key={index} className="mb-6 break-inside-avoid font-serif">{paragraph}</p>
            ))}
          </div>
          <aside className="space-y-7 border-t border-[#171717]/50 pt-6 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <blockquote className="font-serif text-2xl font-bold leading-tight">“The conference wasted no time getting to the heart of the matter.”</blockquote>
            {photos.slice(1).map((photo) => (
              <figure key={photo.src}>
                <img src={photo.src} alt={photo.alt} className="h-auto w-full object-cover" />
                <figcaption className="mt-2 font-mono text-[10px] uppercase leading-4 tracking-[0.08em]">{photo.caption}</figcaption>
              </figure>
            ))}
            <div className="border-y border-[#171717] py-4 font-mono text-[10px] uppercase leading-5 tracking-[0.12em]">Participation · Implementation · Equal rights</div>
          </aside>
        </div>
        <footer className="mt-10 flex justify-between border-t-2 border-[#171717] pt-4 font-mono text-[10px] uppercase tracking-[0.16em]"><span>TES PRESS · ISSUE 09</span><Link to="/press" className="underline underline-offset-4">Back to press</Link></footer>
      </article>
    </main>
  );
}

