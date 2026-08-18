import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { articlesBySession, sessions, type NewsSession, type NewspaperArticle } from "@/lib/newspaper-data";

const dayCounts: Record<NewsSession, number> = { final: 4, second: 2, first: 2 };
const committeeOrder = ["lp1", "lp2", "lp3", "unep", "hrc", "ecosoc", "disec"];

function Header({ session, day }: { session: NewsSession; day: number }) {
  const meta = sessions.find((item) => item.id === session)!;
  return <>
    <div className="flex justify-between border-b border-ink/30 pb-2 text-[10px] uppercase tracking-[0.2em] text-ink/60"><span>TESMUN XIV · Kathmandu</span><span>{meta.edition} · Day {day}</span></div>
    <div className="mt-4 bg-ink px-4 py-5 text-center text-paper sm:px-8 sm:py-7"><h1 className="font-masthead text-[13vw] font-semibold uppercase leading-none tracking-[-0.05em] sm:text-7xl md:text-8xl">THE TESMUN TIMES</h1><p className="mt-2 text-[10px] uppercase tracking-[0.38em] text-paper/70">A record of debate, diplomacy and the day</p></div>
    <div className="mt-3 flex justify-between border-y border-ink/30 py-2 text-[10px] uppercase tracking-[0.2em] text-ink/60"><span>{meta.label}</span><span>Press Corps Edition</span><span>August 2026</span></div>
  </>;
}

function Story({ article, index }: { article: NewspaperArticle; index: number }) {
  return <Link to={`/news/${article.slug}`} className="group block border-b border-ink/30 py-7 first:pt-0 lg:grid lg:grid-cols-[1.25fr_1fr] lg:gap-7">
    <div className="overflow-hidden"><img src={article.image} alt={article.imageAlt} className="aspect-[16/9] w-full object-cover grayscale-[15%] transition duration-500 group-hover:scale-[1.02]" /></div>
    <div className="mt-5 lg:mt-0"><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue">{article.committeeAbbr} · {article.session} · Day {Math.min(index + 1, 4)}</p><h2 className="font-masthead mt-2 text-3xl leading-[0.95] text-ink group-hover:text-blue sm:text-4xl">{article.headline}</h2><p className="mt-3 text-sm leading-6 text-ink/70">{article.dek}</p><p className="mt-4 text-[10px] uppercase tracking-[0.18em] text-ink/50">By {article.author} · Read full story</p></div>
  </Link>;
}

export default function Newspaper() {
  const [session, setSession] = useState<NewsSession>("final");
  const [day, setDay] = useState(1);
  const [page, setPage] = useState<1 | 2>(1);
  const all = useMemo(() => articlesBySession(session), [session]);
  const articles = useMemo(() => committeeOrder.map((slug) => all.find((item) => item.committeeSlug === slug)).filter(Boolean) as NewspaperArticle[], [all]);
  const visible = page === 1 ? articles.slice(0, 3) : articles.slice(3, 7);
  const selectSession = (next: NewsSession) => { setSession(next); setDay(1); setPage(1); };
  return <main className="paper-grain min-h-screen px-3 pb-16 pt-24 text-ink sm:px-6 md:px-10 md:pt-32"><div className="news-sheet mx-auto max-w-5xl p-4 sm:p-8 md:p-12"><Link to="/press" className="mb-5 inline-block text-[10px] uppercase tracking-[0.2em] text-blue">← Press hub</Link><Header session={session} day={day} />
    <div className="mt-7 grid gap-3 border-b-2 border-ink pb-5 sm:flex sm:items-center sm:justify-between"><div className="flex flex-wrap gap-2">{sessions.map((item) => <button key={item.id} type="button" onClick={() => selectSession(item.id)} className={`border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.15em] transition ${session === item.id ? "border-ink bg-ink text-paper" : "border-ink/30 text-ink/60 hover:border-ink"}`}>{item.label}</button>)}</div><div className="flex items-center gap-2"><span className="text-[10px] uppercase tracking-[0.18em] text-ink/50">Edition day</span>{Array.from({ length: dayCounts[session] }, (_, i) => i + 1).map((item) => <button key={item} type="button" onClick={() => { setDay(item); setPage(1); }} className={`h-8 w-8 border text-xs ${day === item ? "border-blue bg-blue text-paper" : "border-ink/25"}`}>{item}</button>)}</div></div>
    <div className="mt-8 flex items-end justify-between border-b-2 border-ink pb-3"><div><p className="text-[10px] uppercase tracking-[0.2em] text-blue">Day {day} dispatches</p><h2 className="font-masthead mt-1 text-4xl sm:text-5xl">The day in seven stories</h2></div><p className="hidden text-right text-[10px] uppercase tracking-[0.16em] text-ink/50 sm:block">Page {page} of 2<br/>Exactly seven reports</p></div>
    <section className="mt-8">{visible.map((article, index) => <Story key={article.slug} article={article} index={index + (page === 2 ? 3 : 0)} />)}</section>
    <nav className="mt-8 flex items-center justify-between border-t border-ink/30 pt-4"><button type="button" disabled={page === 1} onClick={() => setPage(1)} className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] disabled:opacity-30"><ChevronLeft size={14}/> Page 1</button><span className="text-[10px] uppercase tracking-[0.2em]">{page} / 2</span><button type="button" disabled={page === 2} onClick={() => setPage(2)} className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.18em] disabled:opacity-30">Page 2 <ChevronRight size={14}/></button></nav>
  </div></main>;
}
