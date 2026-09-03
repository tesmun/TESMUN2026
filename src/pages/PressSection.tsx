import { useState } from "react";
import { cn } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, X } from "lucide-react";
import { pressSections, opEdContributors, cartoons } from "@/lib/press-data";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const podcastEpisodes = [
  { title: "Episode 01 · Rujal, Saksham A, Diya, Rudraksh and Dechen", url: "https://youtu.be/CwUKSr0yKv0" },
  { title: "Episode 02 · Unnat, Prasanna, Aayushma and Aakarshi", url: "https://www.youtube.com/watch?v=HFOKOMUbvQY" },
  { title: "Episode 03 · Sankalpa, Kunjal, Timothy, Swastik and Alisa", url: "https://www.youtube.com/watch?v=_Vpofc2r-vs" },
];
const voxTeamOne = [
  { name: "Harshid Bhetwal", role: "Second floor incharge", answer: "Unity", photo: "/images/our-team/logistics/harshid.png" },
  { name: "Renesha Maharjan", role: "Deputy Editor", answer: "Public Speaking", photo: "/images/our-team/press/renesha.png" },
  { name: "Sonam Maharjan", role: "Logistics", answer: "Debating skill", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Tk3WJvYajVJKgAmcbOr5qO8uJMali.png" },
  { name: "Pratik Subedi", role: "IT Coordinator", answer: "Collaboration", photo: "/images/our-team/it/itcoordinator.jpeg" },
  { name: "Kinjal Timalsina", role: "HRC Chief", answer: "Entertaining", photo: "/images/committees/executive-board/kinjal.png" },
  { name: "Laxmi Lamsal", role: "LP1 Committee Incharge", answer: "Research", photo: "/images/press/vox-pop/laxmi.png" },
  { name: "Govinda Gautam", role: "MUN advisor", answer: "Consensus building", photo: "/images/our-team/muncoordinator.jpg" },
  { name: "Degraj Sapkota", role: "LP3 Committee Teacher", answer: "Leadership", photo: "/images/press/vox-pop/degraj.png" },
  { name: "Siddhartha Basnet", role: "Deputy chief editor", answer: "Responsibility", photo: "/images/our-team/press/siddartha.png" },
  { name: "Unnat Aryal", role: "UNEP moderator", answer: "Innovation", photo: "/images/committees/executive-board/unnat.png" },
  { name: "Dipendra Silwal", role: "Press Coordinator", answer: "Creativity", photo: "/images/our-team/press/presscoordinator.jpg" },
];
const voxTeamTwo = [
  { name: "Samman Shrestha", role: "Graphic designer lead", answer: "The most memorable thing about TESMUN is the first time that you enter the committee.", photo: "/images/our-team/it/samman.png" },
  { name: "Saksham Adhikari", role: "Lead web designer", answer: "Interviews and debates I've done.", photo: "/images/our-team/it/sakshamadhikari.png" },
  { name: "Deg Raj Sapkota", role: "To help the students", answer: "Discussion of crisis", photo: "/images/press/vox-pop/degraj.png" },
  { name: "Sammunat Burtakoti", role: "Delegate of Israel · HRC", answer: "GSL Sharing", photo: "/images/press/vox-pop/sammunat.png" },
  { name: "Siddhartha Basnet", role: "Deputy Chief Editor · Press Committee", answer: "For me, I would say that my experience as the delegate of Tanardan Sharma during TESMUN 2024 was the most memorable time because I gained a lot of skills and important characteristics.", photo: "/images/our-team/press/siddartha.png" },
  { name: "Soumya Shrestha", role: "Delegate of Germany · DISEC", answer: "The most memorable thing in TESMUN is speaking for my committee.", photo: "/images/press/vox-pop/soumya.png" },
  { name: "Dilasha Oli", role: "Vice Chair · LP1", answer: "Enthusiasm of Delegates", photo: "/images/committees/executive-board/dilasha.png" },
  { name: "Kinjal Timalsina", role: "Chair · HRC", answer: "Country Policy", photo: "/images/committees/executive-board/kinjal.png" },
];
const voxTeamOneQ2 = [
  { name: "Hari Kumari Thapa", role: "Committee Incharge · LP II", answer: "They can explore knowledge, speak without hesitation, and form habits of debating, advocacy, and negotiation.", photo: "/images/press/vox-pop/hari-kumari-thapa.png" },
  { name: "Deenakar Kiran Khadka", role: "Instructional Supervisor · Science", answer: "Students can research topics, talk from different perspectives, and reach common ground after resolving issues respectfully.", photo: "/images/press/vox-pop/deenakar-kiran-khadka.png" },
  { name: "Bhakti Shrestha", role: "Maths Teacher · Floor Incharge", answer: "They will learn research work and, more than that, explore themselves.", photo: "/images/press/vox-pop/bhakti-shrestha.png" },
  { name: "Dipendra Silwal", role: "MUN Press Coordinator", answer: "It is a space for creativity and self-reliance.", photo: "/images/our-team/press/presscoordinator.jpg" },
  { name: "Sanskriti Uprety", role: "Logistics", answer: "Because it is very motivating and inspiring.", photo: "/images/press/vox-pop/sanskriti.png" },
  { name: "Rayna Kunwar", role: "Logistics", answer: "Because they gain more knowledge about politics and what is happening right now.", photo: "/images/press/vox-pop/rayna.png" },
  { name: "Ritika Pyakurel", role: "Logistics", answer: "Students can explore new things, speak their best, and get more opportunities.", photo: "/images/press/vox-pop/ritika.png" },
  { name: "Kamala Kharel", role: "LP III Incharge", answer: "They can share opinions, grow their debating and leadership skills, understand political parties and their country’s situation, and develop research skills.", photo: "/images/press/vox-pop/kamala.png" },
];
const voxTeamTwoQ2 = [
  { name: "Ritika Pyakurel", role: "Logistics", answer: "LP3 because all delegates are doing their best.", photo: "/images/press/vox-pop/ritika.png" },
  { name: "Rayna Kunwar", role: "Logistics", answer: "LP1 because all delegates are doing great.", photo: "/images/press/vox-pop/rayna.png" },
  { name: "Rashmi Ijam", role: "Press", answer: "It has to be Press as I always have been in this team since I started TESMUN.", photo: "/images/press/vox-pop/rashmi-ijam.png" },
  { name: "Sonam Maharjan", role: "Logistics", answer: "LP1 because 2 years back, I was playing the role of delegate of CPN(UML) and now I am playing the role of logistics in LP1 in TESMUN 2026.", photo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Tk3WJvYajVJKgAmcbOr5qO8uJMali.png" },
  { name: "Ojess Shrestha", role: "Logistics", answer: "ECOSOC because I was in ECOSOC a year back.", photo: "/images/our-team/logistics/ojess.png" },
  { name: "Dijesh Niroula", role: "Moderator · LP-2", answer: "LP2 as it’s the first time we participated.", photo: "/images/committees/executive-board/dijesh.png" },
  { name: "Aryan Tamang", role: "Floor Head · UNEP", answer: "My favourite committee is UNEP as there are many good speakers and they speak logically.", photo: "/images/press/vox-pop/aaryan.png" },
];

const voxTeamOneQ3 = [
  { name: "Deepa Ghimire", role: "IT Department Manager", answer: "The solution comes from debate.", photo: "/images/press/vox-pop/deepa.png" },
  { name: "Lisha Maharjan", role: "Camera Person", answer: "Confidence and current news about our country.", photo: "/images/press/vox-pop/lisha.png" },
  { name: "Bipin Koirala", role: "Teacher In-charge", answer: "It teaches us about different countries, increases debating skills, and helps solve issues between countries.", photo: "/images/press/vox-pop/bipin.png" },
  { name: "Barsha Anex Dit Chenaud", role: "Logistics", answer: "Leadership skills.", photo: "/images/press/vox-pop/barsha.png" },
  { name: "Shovana Oliya", role: "Logistics", answer: "Debating skills.", photo: "/images/press/vox-pop/shovana.png" },
  { name: "Bikas Lamu", role: "Parent Spectator (Priyanshu Lama, Grade 8)", answer: "They get to learn international topics from a young age.", photo: "/images/press/vox-pop/bikas.png" },
  { name: "Alisa Rijal", role: "Vice Chair of LP3", answer: "One who is inspired can also inspire many others.", photo: "/images/committees/executive-board/alisa.png" },
  { name: "Prasina Moktan", role: "Logistics Head (Girl)", answer: "Coordination, cooperation, and knowing about our surroundings and global issues.", photo: "/images/our-team/logistics/prasina.png" },
  { name: "Rashika Regmi", role: "Logistics", answer: "We can communicate in every area and build our inner confidence.", photo: "/images/press/vox-pop/rashika.png" },
];
const voxTeamOneQ4 = [
  { name: "Simran Devkota", role: "Deputy Chief Editor", answer: "The newcomers were confused and needed more time and guidance, but it was inspiring as well.", photo: "/images/our-team/press/simran.png" },
  { name: "Garima Dhal", role: "Interview Team Leader", answer: "Running around to find people to interview because they all have different schedules.", photo: "/images/press/vox-pop/garima.png" },
  { name: "Lila Phuyal", role: "MP 1 Teacher", answer: "As the 8th graders aren’t familiar with political affairs and parties, it was challenging to nurture them.", photo: "/images/press/vox-pop/lila.png" },
  { name: "Saya Luitel", role: "DISEC Israel", answer: "Telling accusations related to weapons.", photo: "/images/press/vox-pop/saya.png" },
  { name: "Shushatmiks Ghimire", role: "Delegate of Brazil (UNEP)", answer: "Unpredictable crises can occur.", photo: "/images/press/vox-pop/shushatmiks.png" },
  { name: "Uttam Luitel", role: "Coordinator in ECOSOC", answer: "Identifying the crisis and solutions.", photo: "/images/press/vox-pop/uttam.png" },
  { name: "Prasiddha Rajak", role: "Arjun Narsing K.C. (Nepali Congress LP1)", answer: "Having to speak from a minority opposition.", photo: "/images/press/vox-pop/prasiddha.png" },
  { name: "Samman Shrestha", role: "Graphics Team Lead (IT)", answer: "Managing the work in a short period of time.", photo: "/images/our-team/it/samman.png" },
];
const voxTeamTwoQ3 = [
  { name: "Degraj Raj Sapkota", role: "LP3 Teacher", answer: "The most interesting event in the committee is when delegate members give feedback to each other about their weaknesses and try to solve problems through dialogue and diplomacy.", photo: "/images/press/vox-pop/degraj.png" },
  { name: "Ayub Lamsal", role: "Delegate of LP1 as Balendra Shah", answer: "The funniest incident that happened in the committee was Suhang Nembang accusing his own party.", photo: "/images/press/vox-pop/ayub.png" },
  { name: "Harshid Bhetwal", role: "Floor Head, Logistics Team", answer: "I think the funniest incident was when the Chair of Legislative Parliament-2 was suspended for using A.I.", photo: "/images/our-team/logistics/harshid.png" },
  { name: "Deep Kiran Neupane", role: "HRC Delegate of Bangladesh", answer: "The funniest incident was when a delegate of Germany talked about the Epstein Files and America was trying to ignore it.", photo: "/images/press/vox-pop/deep-kiran.png" },
  { name: "Niyukta Shrestha", role: "HRC Delegate of South Sudan", answer: "The funniest incident was when our crisis topic was the Epstein Files and the USA was accused of trying to hide the matter.", photo: "/images/press/vox-pop/niyukta.png" },
  { name: "Kamala Kharel", role: "Committee In-charge, LP3 (Teacher)", answer: "TES MUN teaches students to debate and research, helps develop their personality, and teaches them about international leadership and current affairs.", photo: "/images/press/vox-pop/kamala.png" },
  { name: "Shreeni Chapagain", role: "ECOSOC Reporter, Press Team", answer: "It teaches students how to be independent and solve real-life problems, making them more confident. It also helps them academically, keeps them updated about real-world issues, and creates citizens that the nation needs.", photo: "/images/press/vox-pop/shreeni.png" },
];
const voxTeamTwoQ4 = [
  { name: "Ritisha Tiwari", role: "UNEP, Delegate of Bangladesh", answer: "I am representing a developing country because globally powerful countries contribute to the climate crisis.", photo: "/images/press/vox-pop/ritisha.png" },
  { name: "Agrata Silwal", role: "HRC, Delegate of Syria", answer: "If you are representing smaller countries, you should have the ability to defend strongly against bigger countries.", photo: "/images/press/vox-pop/agrata.png" },
  { name: "Mikel Shrestha", role: "ECOSOC, Delegate of Iran", answer: "We have to support developing nations so that bigger nations cannot control smaller nations.", photo: "/images/press/vox-pop/mikel.png" },
  { name: "Prasidha Neupane", role: "HRC, Delegate of Russia", answer: "I learned about my country’s rules and regulations, the importance of its sovereignty, and diplomacy.", photo: "/images/press/vox-pop/prasidha.png" },
  { name: "Samyog Sedhai", role: "UNHRC, Delegate of China", answer: "Blocs, alliances, and state sovereignty.", photo: "/images/press/vox-pop/samyog.png" },
  { name: "Shayara Khakurel", role: "ECOSOC, Delegate of Argentina", answer: "I learned about my country’s economic growth and my country’s stance according to the agenda.", photo: "/images/press/vox-pop/shayara.png" },
  { name: "Aashutosh Poudel", role: "HRC, Delegate of Germany", answer: "I learned about the country that accuses others and learned about my alliance.", photo: "/images/press/vox-pop/aashutosh.png" },
  { name: "Sammunat Burlakoti", role: "UNHRC, Delegate of Israel", answer: "The country I’m representing experiences frequent terrorism attacks.", photo: "/images/press/vox-pop/sammunat.png" },
  { name: "Niyukta Shrestha", role: "HRC, Delegate of South Sudan", answer: "I learned about politics, corruption, and their solutions.", photo: "/images/press/vox-pop/niyukta-q4.png" },
  { name: "Deep Kiran Neupane", role: "HRC, Delegate of Bangladesh", answer: "I learned about geopolitics and the problems in this country. I also learned about corruption in this country.", photo: "/images/press/vox-pop/deep-kiran-q4.png" },
  { name: "Krish Pandey", role: "ECOSOC, Delegate of Pakistan", answer: "I learned about the corruption happening in the country, as well as politics and the crisis.", photo: "/images/press/vox-pop/krish.png" },
  { name: "Kristina Gurung", role: "UNEP, Delegate of Malaysia", answer: "I learned about UNEP (United Nations Environment Programme) and the stances of my own country.", photo: "/images/press/vox-pop/kristina.png" },
];

const chairPhotos: Record<string, string> = { "LP I": "/images/committees/executive-board/aakarshi.png", "LP II": "/images/committees/executive-board/sakshamthapaliya.png", "LP III": "/images/committees/executive-board/binayak.png", UNEP: "/images/committees/executive-board/rujal.png", DISEC: "/images/committees/executive-board/dhiki.png", ECOSOC: "/images/committees/executive-board/prateek.png", HRC: "/images/committees/executive-board/kinjal.png" };
const speechRoster = [{ speaker: "Dibas Khadka", role: "Secretary General", committee: "Opening Ceremony", photo: "/images/our-team/secgen.png" }, { speaker: "Abhash Kunwar", role: "Deputy Secretary General", committee: "Opening Ceremony", photo: "/images/our-team/abhas.png" }, ...["LP I", "LP II", "LP III", "UNEP", "DISEC", "ECOSOC", "HRC"].map((committee) => ({ speaker: `${committee} Chair`, role: "Committee Chair", committee, photo: chairPhotos[committee] })), { speaker: "Head of IT", role: "Head of IT", committee: "Information Technology", photo: "/images/our-team/it/yubin.png" }];
const interviewSubjects = [
  { title: "EPISODE 01", subject: "Degraj Sapkota", url: "https://www.youtube.com/watch?v=2r5BgkLx-Mk&t=32s" },
  { title: "EPISODE 02", subject: "Deenakar Kiran Khadka", url: "https://www.youtube.com/watch?v=M3Tp1v33q28" },
  { title: "EPISODE 03", subject: "Govinda Gautam", url: "https://www.youtube.com/watch?v=7NCOq1V7ILw&t=80s" },
  { title: "EPISODE 04", subject: "Diya Shrestha", url: "https://www.youtube.com/watch?v=6XIqauT44kw&t=1s" },
  { title: "EPISODE 05", subject: "Kinjal Timalsina", url: "https://www.youtube.com/watch?v=Xg3X-h33oXg&t=1s" },
  { title: "EPISODE 06", subject: "Aakarshi Poudel", url: "https://www.youtube.com/watch?v=C8rIXuh7Xrg&t=1s" },
  { title: "EPISODE 07", subject: "Binayak Babu Rana", url: "https://www.youtube.com/watch?v=oKlUSbiv5ig&t=1s" },
  { title: "EPISODE 08", subject: "Aayushma Shrestha", url: "https://www.youtube.com/watch?v=JDkop1Z_K94&t=2s" },
  { title: "EPISODE 09", subject: "Saksham Thapaliya", url: "https://www.youtube.com/watch?v=MIswbwENbYM" },
  { title: "EPISODE 10", subject: "Jitendra Basnet", url: "https://www.youtube.com/watch?v=WT9LbKX2PFI" },
  { title: "EPISODE 11", subject: "Dhiki Khando Lama", url: "https://www.youtube.com/watch?v=Unr_HnUKVcc" },
  { title: "EPISODE 12", subject: "Ram Basnet", url: "https://www.youtube.com/watch?v=tlt8hGq0VPA" },
  { title: "EPISODE 13", subject: "Prateek Bhattarai", url: "https://www.youtube.com/watch?v=X6XQgzLTboA" },
  { title: "EPISODE 14", subject: "Sheetal Rana", transcript: true },
  { title: "EPISODE 15", subject: "Dipendra Silwal", url: "https://www.youtube.com/watch?v=KOjDXIhPhyo" },
];

function VoxPopTeams() {
  const [team, setTeam] = useState<1 | 2>(1);
  const [question, setQuestion] = useState<1 | 2 | 3 | 4>(1);
  const people = team === 1
    ? [voxTeamOne, voxTeamOneQ2, voxTeamOneQ3, voxTeamOneQ4][question - 1]
    : [voxTeamTwo, voxTeamTwoQ2, voxTeamTwoQ3, voxTeamTwoQ4][question - 1];
  return <section className="mt-14">
    <div className="flex flex-wrap gap-3 border-b border-white/15 pb-5" role="tablist" aria-label="Vox-Pop teams">
      {[1, 2].map((item) => <button key={item} type="button" role="tab" aria-selected={team === item} onClick={() => setTeam(item as 1 | 2)} className={cn("px-5 py-3 text-xs uppercase tracking-[0.16em] transition", team === item ? "bg-gold text-navy-deep" : "border border-white/20 text-silver hover:border-gold hover:text-warm")}>Team {item}</button>)}
    </div>
    <div className="mt-6 flex flex-wrap gap-3" role="tablist" aria-label="Vox-Pop questions">{[1, 2, 3, 4].map((item) => <button key={item} type="button" role="tab" aria-selected={question === item} onClick={() => setQuestion(item as 1 | 2 | 3 | 4)} className={cn("border px-4 py-2 text-xs uppercase tracking-[0.14em]", question === item ? "border-gold bg-gold text-navy-deep" : "border-white/20 text-silver")}>Question {item}</button>)}</div>
    <div className="mt-10 border-t border-gold/30 pt-8"><p className="text-[11px] uppercase tracking-[0.18em] text-gold">Team {team}</p><h2 className="font-display mt-3 text-3xl sm:text-4xl">{team === 1 && question === 1 ? "Q1. Describe TESMUN in one word." : team === 1 && question === 2 ? "Q2. Why do the students love TESMUN?" : team === 1 && question === 3 ? "Q3. What is the most important life lesson you learned in TES MUN?" : team === 1 ? "Q4. What was the most challenging part of MUN?" : question === 1 ? "Q1. What is the most memorable thing about TESMUN 2026?" : question === 2 ? "Q2. Which is your favourite committee and why?" : question === 3 ? "Q3. What was the most interesting part of this MUN program?" : "Q4. What did you learn from representing your country?"}</h2>
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
  {slug === "interviews" && <section className="mt-14 grid gap-7 lg:grid-cols-2">{interviewSubjects.map((item) => <article key={item.title} className="border border-white/10 bg-navy p-5 shadow-2xl">{item.transcript ? <Link to="/press/interviews/episode-14" className="group block"><div className="mb-5 flex aspect-video items-center justify-center bg-navy-deep px-8 text-center"><span className="font-display text-4xl text-gold transition group-hover:text-warm">Read the transcript</span></div></Link> : <div className="mb-5 aspect-video bg-navy-deep"><YouTubeEmbed url={item.url} title={`${item.title} — ${item.subject}`}/></div>}<p className="text-[10px] uppercase tracking-[0.16em] text-gold">Interview</p><h2 className="mt-2 font-display text-3xl">{item.title} — {item.subject}</h2></article>)}</section>}
  {slug === "podcast" && <section className="mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">{podcastEpisodes.map((episode) => <article key={episode.url} className="border border-white/10 bg-navy p-5"><div className="aspect-video bg-navy-deep"><YouTubeEmbed url={episode.url} title={episode.title}/></div><h2 className="mt-4 font-display text-3xl">{episode.title}</h2></article>)}</section>}
  {slug === "speeches" && <section className="mt-14 max-w-5xl divide-y divide-white/15 border-y border-white/15">{speechRoster.map((speech, i) => <div key={speech.speaker}><button type="button" onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-5 py-8 text-left"><span className="flex items-center gap-6"><img src={speech.photo} alt={`${speech.speaker} portrait`} className="h-24 w-24 shrink-0 rounded-full border border-gold/30 object-cover sm:h-32 sm:w-32" /><span><span className="text-[10px] uppercase tracking-[0.16em] text-gold">{speech.committee} · {speech.role}</span><span className="mt-2 block font-display text-3xl sm:text-4xl">{speech.speaker}</span></span></span><ChevronDown className={`shrink-0 transition ${open === i ? "rotate-180 text-gold" : ""}`} /></button>{open === i && <div className="pb-8 pl-0 text-base leading-8 text-silver/80 sm:pl-36">Speech text will be added to this archive after the conference record is supplied.</div>}</div>)}</section>}
  {slug === "vox-pop" && <VoxPopTeams />}
  {slug === "cartoons" && <section className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{cartoons.map((cartoon, i) => <button key={i} type="button" onClick={() => setLightbox(i)} className="group border border-white/10 bg-navy p-4 text-left shadow-2xl"><img src={cartoon.src} alt={cartoon.alt} className="aspect-[4/3] w-full object-cover transition group-hover:opacity-80"/><p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-gold">Cartoon {String(i + 1).padStart(2, "0")}</p><p className="mt-2 text-sm text-silver">{cartoon.credit}</p></button>)}{lightbox !== null && <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy-deep/95 p-6" onClick={() => setLightbox(null)}><button type="button" aria-label="Close cartoon" className="absolute right-6 top-6"><X/></button><img src={cartoons[lightbox].src} alt={cartoons[lightbox].alt} className="max-h-[85vh] max-w-full object-contain" onClick={(e) => e.stopPropagation()}/></div>}</section>}
  {slug === "op-ed" && <section className="mt-14 grid gap-8 sm:grid-cols-2">{opEdContributors.map((contributor, index) => <a key={`${contributor.name}-${index}`} href={contributor.pdf || "https://drive.google.com/"} target="_blank" rel="noreferrer" className="group border-y border-white/15 py-10 transition-colors hover:border-gold/70"><div className="flex items-center gap-6"><img src={contributor.photo || "/images/our-team/press/interview-portrait.jpg"} alt={`${contributor.name} portrait`} className="h-48 w-48 shrink-0 rounded-full border border-gold/30 object-cover"/><div><p className="text-[10px] uppercase tracking-[0.16em] text-gold">Contributor · Read PDF</p><h2 className="mt-2 font-display text-4xl group-hover:text-gold">{contributor.name}</h2><p className="mt-2 text-sm text-silver/70">{contributor.role}</p></div></div></a>)}</section>}
  </div></main>;
}

