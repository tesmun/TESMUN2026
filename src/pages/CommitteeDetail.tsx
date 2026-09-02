import { Link, useParams } from "react-router-dom";
import { FileText, TableProperties } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Divider, Eyebrow } from "@/components/section-parts";
import { PersonPlaceholder } from "@/components/PersonCard";
import { LogoMark } from "@/components/LogoMark";
import SpecularButton from "@/components/SpecularButton";
import { allocationsSheet, getCommittee, type Committee, type Person } from "@/lib/data";

function BoardRow({
  person,
  reverse,
}: {
  person: Person;
  reverse?: boolean;
}) {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className={`mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16 ${reverse ? "" : ""}`}>
        <Reveal className={reverse ? "order-2 md:order-1" : ""}>
          {person.image ? (
            <img src={person.image} alt={`${person.name}, ${person.role}`} className="aspect-[4/5] w-full max-w-md object-cover" />
          ) : (
            <PersonPlaceholder name={person.name} className="aspect-[4/5] w-full max-w-md" />
          )}
        </Reveal>
        <Reveal delay={0.08} className={reverse ? "order-1 md:order-2" : ""}>
          <Eyebrow className="text-silver/80">{person.role}</Eyebrow>
          <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">
            {person.placeholder ? "To Be Announced" : person.name}
          </h2>
          <div className="rule mt-6 max-w-[7rem]" />
          {person.placeholder && (
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/80">
              This appointment will be published when the Secretariat confirms the dais.
            </p>
          )}
          {person.testimonial && (
            <div className="mt-7 max-w-xl text-left text-sm leading-6 text-warm/90 sm:text-base sm:leading-7">
              {person.testimonial.split("\n\n").map((paragraph, index) => (
                <p key={index} className={`${index > 0 ? "mt-5" : ""} whitespace-pre-line`}>{paragraph.includes("“") || paragraph.includes("\"") ? <strong>{paragraph}</strong> : paragraph}</p>
              ))}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function CommitteeHero({ committee }: { committee: Committee }) {
  return (
    <section className="relative flex h-[65vh] min-h-[440px] w-full items-center justify-center overflow-hidden bg-navy-deep">
      <img src={committee.background || "/images/committees/visuals/committees-hero.png"} alt={`${committee.name} committee background`} className="absolute inset-0 h-full w-full object-cover opacity-55" />
      <div className="navy-hero-overlay absolute inset-0" />
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <Reveal>
          {committee.logo ? (
            <span className="mx-auto mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-warm p-3 shadow-lg">
              <img src={committee.logo} alt={`${committee.abbr} emblem`} className="h-full w-full object-contain" />
            </span>
          ) : (
            <LogoMark size={72} className="mx-auto mb-6" />
          )}
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display text-4xl tracking-[0.04em] text-warm sm:text-6xl">{committee.name}</h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 text-xs uppercase tracking-[0.28em] text-silver">{committee.abbr}</p>
        </Reveal>
      </div>
    </section>
  );
}

function CommitteeDescription({ committee }: { committee: Committee }) {
  const isFacilitating = committee.category === "facilitating";
  return (
    <section className="bg-navy-deep px-6 py-16 md:px-10">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center">
        <p className="text-[15px] leading-relaxed text-white/80">{committee.description}</p>
        {!isFacilitating && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            {committee.guideUrl ? (
              <SpecularButton href={committee.guideUrl} size="md">
                <span className="inline-flex items-center gap-2">
                  <FileText size={14} /> Background Guide
                </span>
              </SpecularButton>
            ) : (
              <span className="border border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.14em] text-silver">
                Background Guide forthcoming
              </span>
            )}
            <a
              href={committee.matrixUrl || allocationsSheet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:border-gold"
            >
              <TableProperties size={14} /> Delegate Matrix
              </a>
              {committee.email && (
                <a href={`mailto:${committee.email}`} className="basis-full text-xs text-gold underline underline-offset-4">{committee.email}</a>
              )}
            </div>
        )}
      </div>
    </section>
  );
}

function ITDetail({ committee }: { committee: Committee }) {
  return (
    <main className="bg-navy-deep text-white">
      <CommitteeHero committee={committee} />
      <CommitteeDescription committee={committee} />

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <Eyebrow className="text-silver/80">Head of IT</Eyebrow>
            <h2 className="font-display mt-3 text-4xl text-white sm:text-5xl">Yubin KC</h2>
            <div className="rule mt-6 max-w-[7rem]" />
<div className="mt-6 max-w-md space-y-5 text-[15px] leading-relaxed text-white/80">
            <p><strong>“If I had asked people what they wanted, they would have said faster horses.” — Henry Ford</strong></p>
            <p>TESMUN 2026 is more than a conference to me. It is an opportunity to be part of something that brings together students with different perspectives, ambitions, and ideas, and give them a platform to engage with the world beyond the classroom.</p>
            <p>As the Head of IT, I have the privilege of contributing to that experience from behind the scenes. Whether through the website, media, or digital platforms, my aim was never simply to produce content, but to help shape how delegates experienced and remembered the conference.</p>
            <p>The process was not always straightforward. Ideas changed, expectations evolved, and turning a vision into something tangible required constant adaptation. But that is also what made the experience meaningful. It taught me to take ownership of my work, remain open to criticism, and continue pursuing a higher standard even when the process became difficult.</p>
            <p>What I value most from TESMUN is the opportunity to contribute to a conference created by students, for students. I am proud to be playing a part in that process and even prouder of what our collective effort is becoming.</p>
            <p>TESMUN 2026 is an experience of learning, creating, and, above all, being part of something larger than any one role.</p>
          </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-navy">
              <img src="/images/our-team/it/yubin.png" alt="Yubin KC, Head of IT" className="photo-fill" />
            </div>
          </Reveal>
        </div>
      </section>
      <Divider />

      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 sm:grid-cols-2 md:gap-20">
          {[
            { name: "Suyog Acharya", role: "Deputy Head", image: "/images/our-team/it/suyog.png", text: "Supporting the technical workflow behind the conference." },
            { name: "Swastik Manandhar", role: "Deputy Head", image: "/images/our-team/it/swastik.png", text: "Supporting the technical workflow behind the conference." },
          ].map((person) => (
            <div key={person.name} className="flex flex-col">
              <Reveal>
                {person.image ? <img src={person.image} alt={person.name} className="mb-4 aspect-[4/5] w-full object-cover" /> : <PersonPlaceholder name={person.name} className="mb-4 aspect-[4/5] w-full" />}
                <p className="text-[11px] uppercase tracking-[0.16em] text-silver">{person.role}</p>
                <h3 className="font-display mt-1 text-2xl text-white">{person.name}</h3>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">{person.text}</p>
              </Reveal>
              <hr className="rule mt-10" />
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <Eyebrow className="text-silver/80">Specialist Leads</Eyebrow>
            <h2 className="font-display mt-3 text-3xl text-white sm:text-4xl">Web, Video &amp; Graphics</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Timothy Rajiv Kandel", role: "IT/Press Coordinator", image: "/images/our-team/it/timothy.png" },
              { name: "Saksham Adhikari", role: "Website Editing Lead", image: "/images/our-team/it/sakshamadhikari.png?v=2" },
              { name: "Jonesh Gurung", role: "Video Editing Lead", image: "/images/our-team/it/jonesh.png" },
              { name: "Samman Shrestha", role: "Graphic Design Lead", image: "/images/our-team/it/samman.png" },
            ].map((lead) => (
              <div key={lead.role} className="flex flex-col">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden bg-navy sm:scale-[1.08] sm:origin-top">
                    <img src={lead.image} alt={lead.role} className="photo-fill" />
                  </div>
                  <p className="mt-4 text-[11px] uppercase tracking-[0.16em] text-silver">{lead.role}</p>
                  <p className="font-display mt-1 text-xl text-white">{lead.name}</p>
                </Reveal>
                <hr className="rule mt-8" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 pb-20 md:px-10">
        <div className="mx-auto max-w-7xl space-y-12">
          {[
            ["Web Designing Members", [{ name: "Sulav Sapkota", image: "/images/our-team/it/sulav.png" }, { name: "Abin Man Singh", image: "/images/our-team/it/abin.png" }, { name: "Rinesh Karki", image: "/images/our-team/it/rinesh.png" }]],
            ["Video Editing Members", [{ name: "Anish Rana", image: "/images/our-team/it/anish.png" }, { name: "Pratyush Rayamajhi", image: "/images/our-team/it/pratyush.png" }]],
            ["Graphics Members", [{ name: "Shivam Bharati", image: "/images/our-team/it/shivam.png" }, { name: "Aarush Bajracharya", image: "/images/our-team/it/aarushbajracharya.png" }, { name: "Bibek Devkota", image: "/images/our-team/it/bibek.png" }]],
          ].map(([label, members]) => (
            <div key={label as string} className="border-t border-white/15 pt-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-gold">{label as string}</p>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {(members as { name: string; image?: string }[]).map((member) => (
                  <div key={member.name} className="flex min-h-40 items-center gap-5 border border-white/10 bg-navy px-5 py-4">
                    {member.image ? <img src={member.image} alt={member.name} className="h-44 w-44 shrink-0 rounded-full object-cover" /> : <PersonPlaceholder name={member.name} className="h-36 w-36 shrink-0 rounded-full" />}
                    <span className="text-xl leading-snug text-white/85">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="bg-navy-deep pb-10 text-center">
        {committee.teamListUrl && <a href={committee.teamListUrl} target="_blank" rel="noopener noreferrer" className="mb-8 inline-flex border border-gold px-6 py-3 text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-navy-deep">Full Team List</a>}
        <div><Link to="/committees" className="text-xs uppercase tracking-[0.14em] text-silver hover:text-white">← Back to Committees</Link></div>
      </div>
    </main>
  );
}

const interviewTeam = [
  { name: "Rishika Lama", role: "Interview Team Lead", image: "/images/our-team/press/rishika.png" },
  { name: "Garima Dahal", role: "Interview Team 2", image: "/images/our-team/press/garima.png" },
  { name: "Sofiya Roka", role: "Interview Team 3", image: "/images/our-team/press/sofiyaroka.png" },
];
const cameraPersons = [
  { name: "Shriyan Basnet", role: "Interview Camera Person", image: "/images/our-team/press/shriyan.png" },
  { name: "Sujal Lal Munakarmi", role: "MP1, MP2, MP3 Camera Person", image: "/images/our-team/press/sujal.png" },
  { name: "Lisha Maharjan", role: "ECOSOC, DISEC, HRC Camera Person", image: "/images/press/vox-pop/lisha.png" },
  { name: "Sushant Tamang", role: "UNEP Camera Person", image: "/images/our-team/press/sushant.png" },
];
function PressProfiles({ title, people }: { title: string; people: readonly { name: string; role: string; image?: string }[] }) { return <section className="mt-20"><Eyebrow className="text-silver/80">{title}</Eyebrow><div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{people.map((person) => <article key={person.name} className="border border-white/10 bg-navy px-5 py-6 text-center"><div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-gold/30">{person.image ? <img src={person.image} alt={person.name} className="h-full w-full rounded-full object-cover" /> : <PersonPlaceholder name={person.name} className="h-full w-full rounded-full" />}</div><h3 className="mt-4 text-lg text-white">{person.name}</h3><p className="mt-2 text-[10px] uppercase tracking-[0.14em] text-gold">{person.role}</p></article>)}</div></section>; }
function PressDetail({ committee }: { committee: Committee }) {
  const editors = [
    { name: "Dechen Hira Tamang", role: "Chief Editor", image: "/images/our-team/press/dechen.png", reverse: false, text: "While TESMUN unfolds, many work behind the curtains, orchestrating the concert from behind. They are the true pillars of the program–the ones who construct the foundation for greater things to be built on. The Press, IT, and Logistics team have all put in immense effort into creating that structure for TESMUN 2026. As the head of the Press team, I’d like to commence this annual event by quoting,\n\n“Write what should not be forgotten.” -Isabel Allendeas\n\nAs the Press records history,capturing it and storing text in a digital archive, one which might be stumbled upon in the future by generations to come." },
    { name: "Siddartha Basnet", role: "Deputy Chief Editor", image: "/images/our-team/press/siddartha.png", reverse: true, text: "Siddhartha supports editorial planning and works with reporters to ensure each publication reflects the depth and diversity of the conference." },
    { name: "Simran Devkota", role: "Press Deputy Chief Editor", image: "/images/our-team/press/simran.png", reverse: false, text: `“We tell ourselves stories in order to live.” - Joan Didion\n\nWhile TESMUN unfolds through speeches, motions, and debate, the Press Team works behind the scenes to observe, record, and preserve its story. As the Deputy Press Head, I have had the privilege of turning fleeting moments into a record that outlives the conference.\n\nBeyond reporting, our role is to recognize what matters, give it context, and preserve the voices and turning points of TESMUN 2026. Through deadlines, revisions, and the pursuit of accuracy, I have learned that meaningful journalism is knowing which words deserve to remain.\n\nA conference may last for days, but the story it leaves behind can last far longer.` },
    { name: "Renesha Maharjan", role: "Deputy Chief Editor", image: "/images/our-team/press/renesha.png", reverse: true, text: "Renesha supports editorial planning and helps coordinate reporting across every committee session." },
  ];

  return (
    <main className="bg-navy-deep text-white">
      <CommitteeHero committee={committee} />
      <CommitteeDescription committee={committee} />

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl space-y-16">
          {editors.map((editor, index) => (
            <div key={`${editor.role}-${editor.name}`}>
              <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={`relative aspect-[4/5] overflow-hidden bg-navy ${editor.reverse ? "md:order-2" : ""}`}>
                  {editor.image ? <img src={editor.image} alt={editor.name} className="photo-fill" /> : <PersonPlaceholder name={editor.name} className="h-full w-full" />}
                </div>
                <div className={editor.reverse ? "md:order-1" : ""}>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-silver">{editor.role}</p>
                  <h2 className="font-display mt-2 text-3xl text-white sm:text-4xl">{editor.name}</h2>
                  <div className="rule mt-5 max-w-[7rem]" />
                  <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-7 text-white/80">{editor.text.split("\n\n").map((paragraph, paragraphIndex) => { const isSimran = editor.name === "Simran Devkota"; const isQuote = paragraph.startsWith("“") || paragraph.startsWith("\""); return <p key={paragraphIndex} className={`${isSimran || paragraphIndex === 1 ? "font-semibold text-warm" : ""} ${isQuote ? "border-l-2 border-gold pl-5 font-display text-2xl leading-tight text-warm sm:text-3xl" : ""}`}>{paragraph}</p>; })}</div>
                </div>
              </article>
              {index < editors.length - 1 && <Divider className="mt-16" />}
            </div>
          ))}
        </div>
      </section>
      <Divider />
      <section className="px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow className="text-silver/80">Committee-wise chief reporters</Eyebrow>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["HRC", "/images/committees/visuals/committee-hrc.webp", { name: "Anishka Kuikel", image: "/images/our-team/press/anishkakuikel.png" }, { name: "Sambriddhi Phuyal", image: "/images/our-team/press/sambridhi.png" }],
              ["ECOSOC", "/images/committees/visuals/committee-ecosoc.webp", { name: "Shreni Chapagain", image: "/images/our-team/press/shreni.png" }, { name: "Alishka Kuikel", image: "/images/our-team/press/alishkakuikel.png" }],
              ["UNEP", "/images/committees/visuals/committee-unep.webp", { name: "Ranish Mahat", image: "/images/our-team/press/ranish.png" }],
              ["DISEC", "/images/committees/visuals/committee-disec.webp", { name: "Osang Ghising", image: "/images/our-team/press/osang.png" }, { name: "Shubam Shrestha", image: "/images/our-team/press/shubhamshrestha.png" }],
              ["TES-MP I", "/images/committees/visuals/committee-lp.png", { name: "Krishna Shrestha", image: "/images/our-team/press/krishna.png" }, { name: "Aarush Katuwal", image: "/images/our-team/press/aarushkatuwal.png" }],
              ["TES-MP II", "/images/committees/visuals/committee-lp.png", { name: "Pari Maharjan", image: "/images/our-team/press/pari.png" }],
              ["TES-MP III", "/images/committees/visuals/committee-lp.png", { name: "Aashiya Shrestha", image: "/images/our-team/press/aashiyashrestha.png" }],
            ].map(([committeeName, logo, ...reporters]) => (
              <div key={String(committeeName)} className="border border-white/10 bg-navy px-5 py-5">
                <div className="flex items-center gap-3 mb-4">
                  {logo && <img src={String(logo)} alt={`${committeeName} logo`} className="h-8 w-8 object-contain" />}
                  <p className="text-[10px] uppercase tracking-[0.18em] text-gold flex-1">{String(committeeName)}</p>
                </div>
                <div className="space-y-4">
                  {reporters.map((reporter) => {
                    const person = typeof reporter === "string" ? { name: reporter, image: undefined } : reporter as { name: string; image?: string };
                    return (
                      <div key={person.name} className="text-center">
                        {person.image ? <img src={person.image} alt={person.name} className="h-24 w-24 shrink-0 rounded-full object-cover mx-auto border border-gold/30" /> : <PersonPlaceholder name={person.name} className="h-20 w-20 shrink-0 rounded-full mx-auto" />}
                        <p className="text-xs leading-tight text-white/80 mt-2 line-clamp-2">{person.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-6 py-20 md:px-10"><div className="mx-auto max-w-7xl"><PressProfiles title="Interview Team" people={interviewTeam} /><PressProfiles title="Camera Persons" people={cameraPersons} /></div></section>

      <div className="bg-navy-deep pb-10 text-center">
        {committee.teamListUrl && <a href={committee.teamListUrl} target="_blank" rel="noopener noreferrer" className="mb-8 inline-flex border border-gold px-6 py-3 text-xs uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-navy-deep">Full Team List</a>}
        <div><Link to="/committees" className="text-xs uppercase tracking-[0.14em] text-silver hover:text-white">← Back to Committees</Link></div>
      </div>
    </main>
  );
}

function LogisticsDetail({ committee }: { committee: Committee }) {
  const { headOf, coHeadOf } = committee.board;

  return (
    <main className="bg-navy-deep text-white">
      <CommitteeHero committee={committee} />
      <CommitteeDescription committee={committee} />

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-20">
            {[headOf, coHeadOf].filter(Boolean).map((person, i) => (
              <div key={person!.name} className={`grid items-center gap-10 md:grid-cols-2 md:gap-20 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}>
                <Reveal>
                  <div className="relative aspect-[4/5] max-w-lg overflow-hidden bg-navy">
                    {person!.image ? <img src={person!.image} alt={person!.name} className="photo-fill" /> : <PersonPlaceholder name={person!.name} className="h-full w-full" />}
                  </div>
                </Reveal>
                <Reveal delay={0.12}>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-silver">{person!.role}</p>
                  <h3 className="font-display mt-2 text-4xl text-white sm:text-5xl">{person!.name}</h3>
                  <div className="mt-6 max-w-xl space-y-5 text-[15px] leading-relaxed text-white/80">
                    {person!.testimonial?.split("\\n\\n").map((paragraph) => <p key={paragraph}>{paragraph.includes("“") || paragraph.includes("\"") ? <strong>{paragraph}</strong> : paragraph}</p>)}
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[...(committee.board.deputyHeadOf || []), ...(committee.board.additionalMembers || [])].map((person, i) => (
              <Reveal key={person.name} delay={i * 0.06}>
                <div className="relative mb-4 aspect-square w-full overflow-hidden bg-navy">
                  {person.image ? <img src={person.image} alt={person.name} className="photo-fill" /> : <PersonPlaceholder name={person.name} className="h-full w-full" />}
                </div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-silver">{person.role}</p>
                <h3 className="font-display mt-1 text-xl text-white">{person.name}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-navy-deep pb-10 text-center">
        <Link to="/committees" className="text-xs uppercase tracking-[0.14em] text-silver hover:text-white">
          ← Back to Committees
        </Link>
      </div>
    </main>
  );
}

export default function CommitteeDetail() {
  const { slug = "" } = useParams();
  const committee = getCommittee(slug);

  if (!committee) {
    return (
      <main className="bg-navy-deep px-6 py-40 text-center">
        <h1 className="font-display text-4xl text-white">Committee not found</h1>
        <Link to="/committees" className="mt-6 inline-block text-sm uppercase tracking-[0.14em] text-silver">
          ← Back to Committees
        </Link>
      </main>
    );
  }

  if (slug === "it") return <ITDetail committee={committee} />;
  if (slug === "press") return <PressDetail committee={committee} />;
  if (slug === "logistics") return <LogisticsDetail committee={committee} />;

  const { chair, viceChair, moderator, headOf, deputyHeadOf } = committee.board;

  return (
    <main className="bg-navy-deep text-white">
      <CommitteeHero committee={committee} />
      <CommitteeDescription committee={committee} />

      <Divider />

      {chair && <BoardRow person={chair} />}
      {viceChair && (
        <>
          <Divider />
          <BoardRow person={viceChair} reverse />
        </>
      )}
      {moderator && (
        <>
          <Divider />
          <BoardRow person={moderator} />
        </>
      )}

      {headOf && (
        <>
          <Divider />
          <BoardRow person={headOf} />
          {deputyHeadOf && deputyHeadOf.length > 0 && (
            <section className="px-6 pb-16 md:px-10">
              <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2">
                {deputyHeadOf.map((d, i) => (
                  <Reveal key={`${d.role}-${i}`}>
                    <PersonPlaceholder name={d.name} className="mb-4 aspect-[5/4] w-full" />
                    <p className="font-display text-xl text-white">{d.placeholder ? "To Be Announced" : d.name}</p>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-silver">{d.role}</p>
                  </Reveal>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      <div className="bg-navy-deep pb-10 text-center">
        <Link to="/committees" className="text-xs uppercase tracking-[0.14em] text-silver hover:text-white">
          ← Back to Committees
        </Link>
      </div>
    </main>
  );
}
