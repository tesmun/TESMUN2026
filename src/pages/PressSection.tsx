import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { pressSections, voxQuestions, opEdContributors, cartoons } from "@/lib/press-data";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const video = "https://www.youtube.com/watch?v=vxpm8OZRH30";
const voxTeamOne = [
  { name: "Harshid Bhetwal", role: "Second floor incharge", answer: "Unity", photo: "/images/our-team/logistics/harshid.png" },
  { name: "Renesha Maharjan", role: "Deputy Editor", answer: "Public Speaking", photo: "/images/our-team/press/renesha.png" },
  { name: "Sonam Maharjan", role: "Logistics", answer: "Debating skill", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Tk3WJvYajVJKgAmcbOr5qO8uJMali.png" },
  { name: "Pratik Subedi", role: "IT Coordinator", answer: "Collaboration", photo: "/images/our-team/it/itcoordinator.jpeg" },
  { name: "Kinjal Timalsina", role: "HRC Chief", answer: "Entertaining", photo: "/images/committees/executive-board/kinjal.png" },
  { name: "Laxmi Lamsal", role: "LP1 Committee Incharge", answer: "Research", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h9AICPiHmYVHXvhRWepVEQrDBVeQMV.png" },
  { name: "Govinda Gautam", role: "MUN advisor", answer: "Consesus building", photo: "/images/our-team/muncoordinator.jpg" },
  { name: "Degraj Sapkota", role: "LP3 Committee Teacher", answer: "Leadership", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mJa6TudkrdCLvYrWXN6NGNB3Zn0Lsd.png" },
  { name: "Siddhartha Basnet", role: "Deputy chief editor", answer: "Responsibility", photo: "/images/our-team/press/siddartha.png" },
  { name: "Unnat Aryal", role: "UNEP moderator", answer: "Innovation", photo: "/images/committees/executive-board/unnat.png" },
  { name: "Dipendra Silwal", role: "Press Coordinator", answer: "Creativity", photo: "/images/our-team/press/presscoordinator.jpg" },
];
const voxTeamTwo = [
  { name: "Samman Shrestha", role: "Graphic designer lead", answer: "The most memorable thing about TESMUN is the first time that you enter the committee.", photo: "/images/our-team/it/samman.png" },
  { name: "Saksham Adhikari", role: "Lead web designer", answer: "Interviews and debates I've done.", photo: "/images/our-team/it/sakshamadhikari.png" },
  { name: "Deg Raj Sapkota", role: "To help the students", answer: "Discussion of crisis", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-mJa6TudkrdCLvYrWXN6NGNB3Zn0Lsd.png" },
  { name: "Sammunat Burtakoti", role: "Delegate of Israel · HRC", answer: "GSL Sharing", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8CLnk0tJjP8J6997MZU1SUzNK4alKK.png" },
  { name: "Siddhartha Basnet", role: "Deputy Chief Editor · Press Committee", answer: "For me, I would say that my experience as the delegate of Tanardan Sharma during TESMUN 2024 was the most memorable time because I gained a lot of skills and important characteristics.", photo: "/images/our-team/press/siddartha.png" },
  { name: "Soumya Shrestha", role: "Delegate of Germany · DISEC", answer: "The most memorable thing in TESMUN is speaking for my committee.", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wQVK7yAYREIGrbh3JV9DFKiQrJxbTv.png" },
  { name: "Dilasha Oli", role: "Vice Chair · LP1", answer: "Enthusiasm of Delegates", photo: "/images/committees/executive-board/dilasha.png" },
  { name: "Kinjal Timalsina", role: "Chair · HRC", answer: "Country Policy", photo: "/images/committees/executive-board/kinjal.png" },
];
const voxTeamOneQ2 = [
  { name: "Hari Kumari Thapa", role: "Committee Incharge · LP II", answer: "They can explore knowledge, speak without hesitation, and form habits of debating, advocacy, and negotiation.", photo: "/images/press/vox-pop/hari-kumari-thapa.png" },
  { name: "Deenakar Kiran Khadka", role: "Instructional Supervisor · Science", answer: "Students can research topics, talk from different perspectives, and reach common ground after resolving issues respectfully.", photo: "/images/press/vox-pop/deenakar-kiran-khadka.png" },
  { name: "Bhakti Shrestha", role: "Maths Teacher · Floor Incharge", answer: "They will learn research work and, more than that, explore themselves.", photo: "/images/press/vox-pop/bhakti-shrestha.png" },
  { name: "Dipendra Silwal", role: "MUN Press Coordinator", answer: "It is a space for creativity and self-reliance.", photo: "/images/our-team/press/presscoordinator.jpg" },
  { name: "Sanskriti Uprety", role: "Logistics", answer: "Because it is very motivating and inspiring.", photo: "" },
  { name: "Rayna Kunwar", role: "Logistics", answer: "Because they gain more knowledge about politics and what is happening right now.", photo: "/images/our-team/logistics/ojess.png" },
  { name: "Ritika Pyakurel", role: "Logistics", answer: "Students can explore new things, speak their best, and get more opportunities.", photo: "/images/our-team/logistics/prasina.png" },
  { name: "Kamala Kharel", role: "LP III Incharge", answer: "They can share opinions, grow their debating and leadership skills, understand political parties and their country’s situation, and develop research skills.", photo: "" },
];
const voxTeamTwoQ2 = [
  { name: "Ritika Pyakurel", role: "Logistics", answer: "LP3 because all delegates are doing their best.", photo: "" },
  { name: "Rayna Kuwar", role: "Logistics", answer: "LP1 because all delegates are doing great.", photo: "" },
  { name: "Rashmi Ijam", role: "Press", answer: "It has to be Press as I always have been in this team since I started TESMUN.", photo: "/images/our-team/press/ranish.png" },
  { name: "Sonam Maharjan", role: "Logistics", answer: "LP1 because 2 years back, I was playing the role of delegate of CPN(UML) and now I am playing the role of logistics in LP1 in TESMUN 2026.", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Tk3WJvYajVJKgAmcbOr5qO8uJMali.png" },
  { name: "Ojess Shrestha", role: "Logistics", answer: "ECOSOC because I was in ECOSOC a year back.", photo: "/images/our-team/logistics/ojess.png" },
  { name: "Dijesh Niroula", role: "Moderator · LP-2", answer: "LP2 as it’s the first time we participated.", photo: "/images/committees/executive-board/dijesh.png" },
  { name: "Aryan Tamang", role: "Floor Head · UNEP", answer: "My favourite committee is UNEP as there are many good speakers and they speak logically.", photo: "" },
];

const chairPhotos: Record<string, string> = { "LP I": "/images/committees/executive-board/aakarshi.png", "LP II": "/images/committees/executive-board/sakshamthapaliya.png", "LP III": "/images/committees/executive-board/binayak.png", UNEP: "/images/committees/executive-board/rujal.png", DISEC: "/images/committees/executive-board/dhiki.png", ECOSOC: "/images/committees/executive-board/prateek.png", HRC: "/images/committees/executive-board/kinjal.png" };
const speechRoster = [{ speaker: "Dibas Khadka", role: "Secretary General", committee: "Opening Ceremony", photo: "/images/our-team/secgen.png" }, { speaker: "Abhash Kunwar", role: "Deputy Secretary General", committee: "Opening Ceremony", photo: "/images/our-team/abhas.png" }, ...["LP I", "LP II", "LP III", "UNEP", "DISEC", "ECOSOC", "HRC"].map((committee) => ({ speaker: `${committee} Chair`, role: "Committee Chair", committee, photo: chairPhotos[committee] })), { speaker: "Head of IT", role: "Head of IT", committee: "Information Technology", photo: "/images/our-team/it/yubin.png" }];
const interviewSubjects = Array.from({ length: 20 }, (_, i) => ({ title: `Interview ${String(i + 1).padStart(2, "0")}`, subject: "John Doe" }));

function VoxPopTeams() {
  const [team, setTeam] = useState<1 | 2>(1);
  const [question, setQuestion] = useState<1 | 2>(1);
  const people = question === 1 ? (team === 1 ? voxTeamOne : voxTeamTwo) : (team === 1 ? voxTeamOneQ2 : voxTeamTwoQ2);
  return <section className="mt-14">
    <div className="flex flex-wrap gap-3 border-b border-white/15 pb-5" role="tablist" aria-label="Vox-Pop teams">
      {[1, 2].map((item) => <button key={item} type="button" role="tab" aria-selected={team === item} onClick={() => setTeam(item as 1 | 2)} className={cn("px-5 py-3 text-xs uppercase tracking-[0.16em] transition", team === item ? "bg-gold text-navy-deep" : "border border-white/20 text-silver hover:border-gold hover:text-warm")}>Team {item}</button>)}
    </div>
    <div className="mt-6 flex flex-wrap gap-3" role="tablist" aria-label="Vox-Pop questions"><button type="button" role="tab" aria-selected={question === 1} onClick={() => setQuestion(1)} className={cn("border px-4 py-2 text-xs uppercase tracking-[0.14em]", question === 1 ? "border-gold bg-gold text-navy-deep" : "border-white/20 text-silver")}>Question 1</button><button type="button" role="tab" aria-selected={question === 2} onClick={() => setQuestion(2)} className={cn("border px-4 py-2 text-xs uppercase tracking-[0.14em]", question === 2 ? "border-gold bg-gold text-navy-deep" : "border-white/20 text-silver")}>Question 2</button></div>
    <div className="mt-10 border-t border-gold/30 pt-8"><p className="text-[11px] uppercase tracking-[0.18em] text-gold">Team {team}</p><h2 className="font-display mt-3 text-3xl sm:text-4xl">{question === 1 ? "Q1. Describe TES MUN in one word." : "Q2. Why do the students love TES MUN?"}</h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{people.map((person) => <article key={person.name} className="border border-white/10 bg-navy p-5 shadow-2xl">
        {person.photo ? <img src={person.photo} alt={`${person.name} portrait`} className="mx-auto h-40 w-40 rounded-full border border-gold/30 object-cover" /> : <div className="mx-auto h-40 w-40 rounded-full border border-dashed border-white/20" aria-label="Portrait not provided" />}
        <p className="mt-5 text-lg font-medium text-warm">{person.name}</p><p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-gold">{person.role}</p><p className="mt-5 text-sm leading-6 text-silver/80">“{person.answer}”</p>
      </article>)}</div>
    </div>
  </section>;
}

export default function PressSection() {
  const { slug = "" } = useParams(); const section = pressSections[slug as keyof typeof pressSections]; const [open, setOpen] = useState(0); const [lightbox, setLightbox] = useState<number | null>(null);
  if (!section || slug === "news") return <main className="min-h-screen bg-navy-deep px-6 py-40 text-center text-warm"><h1 className="font-display text-4xl">Section not found</h1><Link to="/press" className="mt-6 inline-block text-sm uppercase tracking-[0.14em] text-gold">← Press hub</Link></main>;
  return <main className="min-h-screen bg-[linear-gradient(135deg,#071a33,#123b72)] px-5 pb-24 pt-28 text-warm sm:px-8 md:px-10 md:pt-40"><div className="mx-auto max-w-6xl"><Link to="/press" className="text-[11px] uppercase tracking-[0.16em] text-silver hover:text-gold">← Press hub</Link><p className="mt-12 text-[11px] uppercase tracking-[0.18em] text-gold">Press Desk</p><h1 className="font-display mt-4 text-5xl leading-[0.92] sm:text-7xl">{section.title}</h1><p className="mt-6 max-w-xl text-base leading-8 text-silver/80">{section.intro}</p>
  {slug === "interviews" && <section className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{interviewSubjects.map((item) => <article key={item.title} className="border border-white/10 bg-navy p-5 shadow-2xl"><div className="mb-5 aspect-video bg-navy-deep"><YouTubeEmbed url={video} title={item.title}/></div><p className="text-[10px] uppercase tracking-[0.16em] text-gold">Interview</p><h2 className="mt-2 font-display text-2xl">{item.title}</h2><p className="mt-2 text-sm text-silver/70">{item.subject} · video placeholder</p></article>)}</section>}
  {slug === "podcast" && <section className="mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">{["Podcast episode 01", "Podcast episode 02"].map((title) => <article key={title} className="border border-white/10 bg-navy p-5"><div className="aspect-video bg-navy-deep"><YouTubeEmbed url={video} title={title}/></div><h2 className="mt-4 font-display text-3xl">{title}</h2></article>)}</section>}
  {slug === "speeches" && <section className="mt-14 max-w-5xl divide-y divide-white/15 border-y border-white/15">{speechRoster.map((speech, i) => <div key={speech.speaker}><button type="button" onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-5 py-8 text-left"><span className="flex items-center gap-6"><img src={speech.photo} alt={`${speech.speaker} portrait`} className="h-24 w-24 shrink-0 rounded-full border border-gold/30 object-cover sm:h-32 sm:w-32" /><span><span className="text-[10px] uppercase tracking-[0.16em] text-gold">{speech.committee} · {speech.role}</span><span className="mt-2 block font-display text-3xl sm:text-4xl">{speech.speaker}</span></span></span><ChevronDown className={`shrink-0 transition ${open === i ? "rotate-180 text-gold" : ""}`} /></button>{open === i && <div className="pb-8 pl-0 text-base leading-8 text-silver/80 sm:pl-36">Speech text will be added to this archive after the conference record is supplied.</div>}</div>)}</section>}
  {slug === "vox-pop" && <VoxPopTeams />}
  {slug === "cartoons" && <section className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{cartoons.map((cartoon, i) => <button key={i} type="button" onClick={() => setLightbox(i)} className="group border border-white/10 bg-navy p-4 text-left shadow-2xl"><img src={cartoon.src} alt={cartoon.alt} className="aspect-[4/3] w-full object-cover transition group-hover:opacity-80"/><p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-gold">Cartoon {String(i + 1).padStart(2, "0")}</p><p className="mt-2 text-sm text-silver">{cartoon.credit}</p></button>)}{lightbox !== null && <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 p-6" onClick={() => setLightbox(null)}><button type="button" aria-label="Close cartoon" className="absolute right-6 top-6"><X/></button><img src={cartoons[lightbox].src} alt={cartoons[lightbox].alt} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()}/></div>}</section>}
  {slug === "op-ed" && <section className="mt-14 grid gap-8 sm:grid-cols-2">{opEdContributors.map((contributor, index) => <a key={`${contributor.name}-${index}`} href={contributor.pdf || "https://drive.google.com/"} target="_blank" rel="noreferrer" className="group border-y border-white/15 py-10 transition-colors hover:border-gold/70"><div className="flex items-center gap-6"><img src={contributor.photo || "/images/our-team/press/interview-portrait.jpg"} alt={`${contributor.name} portrait`} className="h-48 w-48 shrink-0 rounded-full border border-gold/30 object-cover"/><div><p className="text-[10px] uppercase tracking-[0.16em] text-gold">Contributor · Read PDF</p><h2 className="mt-2 font-display text-4xl group-hover:text-gold">{contributor.name}</h2><p className="mt-2 text-sm text-silver/70">{contributor.role}</p></div></div></a>)}</section>}
  </div></main>;
}

