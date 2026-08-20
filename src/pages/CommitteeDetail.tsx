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
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/80">
            {person.placeholder
              ? "This appointment will be published when the Secretariat confirms the dais."
              : `${person.name} serves as ${person.role} for this committee, guiding procedure, debate and the drafting of resolutions across the conference.`}
          </p>
          {person.testimonial && (
            <blockquote className="mt-8 max-w-xl border-l-2 border-gold pl-5 text-left font-display text-xl leading-relaxed text-warm sm:text-2xl">
              “{person.testimonial}”
            </blockquote>
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
              href={allocationsSheet}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/25 px-5 py-3 text-[11px] uppercase tracking-[0.14em] text-white transition-colors hover:border-gold"
            >
              <TableProperties size={14} /> Country Matrix
            </a>
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
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/80">
              Leading the IT desk for TESMUN XIV, Yubin KC oversees the conference website, on-site systems and the digital infrastructure that keeps every committee connected.
            </p>
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
            { name: "Swastik Manandar", role: "Deputy Head", text: "Supporting the technical workflow behind the conference." },
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
              { name: "Timothy Rajiv Kandel", role: "IT/Press Coordinator", image: "/images/gallery/normal/gallery-library.jpg" },
              { name: "Saksham Adhikari", role: "Web Designing Lead", image: "/images/our-team/it/sakshamadhikari.png" },
              { name: "Jonesh Gurung", role: "Video Editing Lead", image: "/images/gallery/normal/gallery-debate.jpg" },
              { name: "Samman Shrestha", role: "Graphic Designing Lead", image: "/images/press/cartoons/cartoon-1.png" },
            ].map((lead) => (
              <div key={lead.role} className="flex flex-col">
                <Reveal>
                  <div className="relative aspect-[4/5] overflow-hidden bg-navy">
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
            ["Web Designing Members", [{ name: "Sulav Sapkota" }, { name: "Abin Man Singh" }, { name: "Rinesh Karki", image: "/images/our-team/it/rinesh.png" }]],
            ["Video Editing Members", [{ name: "Anish Rana" }, { name: "Pratyush Rayamajhi" }]],
            ["Graphics Members", [{ name: "Shivam Bharati" }, { name: "Aarush Bajracharya" }, { name: "Bibek Devkota" }]],
          ].map(([label, members]) => (
            <div key={label as string} className="border-t border-white/15 pt-5">
              <p className="text-[10px] uppercase tracking-[0.16em] text-gold">{label as string}</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {(members as { name: string; image?: string }[]).map((member) => (
                  <div key={member.name} className="flex items-center gap-4 border border-white/10 bg-navy px-4 py-3">
                    {member.image ? <img src={member.image} alt={member.name} className="h-28 w-28 shrink-0 rounded-full object-cover" /> : <PersonPlaceholder name={member.name} className="h-28 w-28 shrink-0 rounded-full" />}
                    <span className="text-lg leading-snug text-white/85">{member.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

function PressDetail({ committee }: { committee: Committee }) {
  const editors = [
    { name: "Dechen Hira Tamang", role: "Chief Editor", reverse: false, text: "As Chief Editor, Dechen Hira Tamang leads the Press Committee in covering every committee session, interview and behind-the-scenes moment of TESMUN XIV." },
    { name: "Siddhartha Basnet", role: "Deputy Chief Editor", image: "/images/our-team/press/siddartha.png", reverse: true, text: "Siddhartha supports editorial planning and works with reporters to ensure each publication reflects the depth and diversity of the conference." },
    { name: "Simran Devkota", role: "Deputy Chief Editor", image: "/images/our-team/press/simran.png", reverse: false, text: "Simran coordinates press coverage across sessions, helping writers and photographers capture the urgency and nuance of every debate." },
    { name: "Renesha Maharjan", role: "Deputy Chief Editor", reverse: true, text: "Renesha supports editorial planning and helps coordinate reporting across every committee session." },
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
                  <p className="mt-6 max-w-md text-[15px] leading-relaxed text-white/80">{editor.text}</p>
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
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["HRC", "Anishka Kuikel", "Sambriddhi Phuyal"],
              ["ECOSOC", "Shreni Chapagai", "Alishka Kuikel"],
              ["UNEP", "Ranish Mahat"],
              ["DISEC", "Osang Ghising", "Shubam Shrestha"],
              ["LP I", "Krishna Shrestha", "Aarush Katuwal"],
              ["LP II", "Pari Maharjan"],
              ["LP III", "Aashiya Shrestha"],
            ].map(([committeeName, ...reporters]) => (
              <div key={committeeName} className="border border-white/10 bg-navy px-5 py-5">
                <p className="text-[10px] uppercase tracking-[0.18em] text-gold">{committeeName}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {reporters.map((reporter) => (
                    <div key={reporter} className="flex items-center gap-3">
                      <PersonPlaceholder name={reporter} className="h-20 w-20 shrink-0 rounded-full" />
                      <span className="text-sm leading-snug text-white/80">{reporter}</span>
                    </div>
                  ))}
                </div>
              </div>
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

function LogisticsDetail({ committee }: { committee: Committee }) {
  const { headOf, coHeadOf } = committee.board;

  return (
    <main className="bg-navy-deep text-white">
      <CommitteeHero committee={committee} />
      <CommitteeDescription committee={committee} />

      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2">
            {[headOf, coHeadOf].filter(Boolean).map((person, i) => (
              <div key={person!.name} className="flex flex-col">
                <Reveal delay={i * 0.08}>
                  <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden bg-navy">
                  {person!.image ? <img src={person!.image} alt={person!.name} className="photo-fill" /> : <PersonPlaceholder name={person!.name} className="h-full w-full" />}
                </div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-silver">{person!.role}</p>
                  <h3 className="font-display mt-1 text-2xl text-white">{person!.name}</h3>
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
