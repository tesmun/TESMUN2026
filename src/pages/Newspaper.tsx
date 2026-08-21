import { useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getSessionArticles, newsSessionDays, type NewsDay, type NewsPage, type NewsSession, type SessionNewsArticle } from "@/lib/news-sessions";

const sessionLabels: Record<NewsSession, string> = { 1: "Session 1", 2: "Session 2", 3: "Session 3" };
const sessionFromPath = (pathname: string): NewsSession | null => {
  const match = pathname.match(/session-([123])/);
  return match ? Number(match[1]) as NewsSession : null;
};
const dayFromPath = (pathname: string): NewsDay | null => {
  const match = pathname.match(/day-([1-4])/);
  return match ? Number(match[1]) as NewsDay : null;
};

function Masthead({ session, day, page }: { session: NewsSession; day: NewsDay; page: NewsPage }) {
  return <header className="border-b-2 border-[#171717]/70 pb-6">
    <div className="flex justify-between text-[10px] font-semibold uppercase tracking-[0.24em] text-[#171717]/65"><span>TESMUN XIV · Kathmandu</span><span>{sessionLabels[session]} · Day {day} · Page {page}</span></div>
    <div className="mt-4 border-y-[6px] border-[#171717] px-3 py-5 text-center sm:px-8 sm:py-8"><p className="font-mono text-[9px] font-bold uppercase tracking-[0.45em] text-[#171717]/70">International Press Corps</p><h1 className="mt-3 font-display text-5xl font-semibold uppercase leading-[0.82] tracking-[-0.08em] text-[#171717] sm:text-7xl md:text-[7.5rem]">THE TESMUN TIMES</h1><p className="mt-4 border-t border-[#171717]/30 pt-3 font-mono text-[9px] uppercase tracking-[0.32em] text-[#171717]/65">A cinematic record of debate, diplomacy and the day</p></div>
  </header>;
}

function ArticleStory({ article }: { article: SessionNewsArticle }) {
  return <Link to={`/press/news/${article.slug}`} className="group block border-b border-[#171717]/25 py-10 first:pt-0 last:border-b-0 sm:py-14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#171717]"><div className="grid items-stretch gap-7 lg:grid-cols-[1.2fr_0.9fr] lg:gap-12"><figure className="flex h-full flex-col overflow-hidden bg-[#171717]"><img src={article.image} alt={`${article.committee} editorial photograph`} className="aspect-[16/10] w-full flex-none object-cover grayscale contrast-110 saturate-0 transition duration-700 group-hover:scale-[1.035]" /><figcaption className="bg-[#171717] px-3 py-2 font-mono text-[9px] uppercase tracking-[0.14em] text-[#f5f0e7]/70">Field image · {article.committee}</figcaption></figure><div className="min-w-0 overflow-hidden lg:max-h-full"><div className="flex items-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#171717]/60"><span>Report {article.articleNumber}</span><span>·</span><span>{article.date}</span></div><div className="mt-4 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#171717]/70">{article.committeeLogo && <img src={article.committeeLogo} alt="" className="size-7 rounded-full border border-[#171717]/40 bg-[#f5f0e7] object-contain p-1 grayscale" />}{article.committee}</div><h2 className="mt-4 line-clamp-3 font-display text-4xl leading-[0.9] tracking-[-0.04em] text-[#171717] sm:text-5xl">{article.title}</h2><p className="mt-5 line-clamp-3 font-serif text-lg leading-7 text-[#171717]/75">{article.standfirst}</p><p className="mt-5 line-clamp-4 font-serif text-[15px] leading-7 text-[#171717]/70">{article.body.join(" ")}</p><p className="mt-6 font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-[#171717]/50">By {article.author}</p></div></div></Link>;
}

export default function Newspaper() {
  const location = useLocation();
  const navigate = useNavigate();
  const session = sessionFromPath(location.pathname);
  const requestedDay = dayFromPath(location.pathname);
  const queryPage = new URLSearchParams(location.search).get("page");
  const page: NewsPage = queryPage === "2" ? 2 : 1;
  const days = session ? newsSessionDays[session] : [];
  const day = session && requestedDay && days.includes(requestedDay) ? requestedDay : days[0];
  const articles = useMemo(() => session && day ? getSessionArticles(session, day, page) : [], [session, day, page]);
  const goTo = (nextSession: NewsSession, nextDay: NewsDay, nextPage: NewsPage) => navigate(`/press/news/session-${nextSession}/day-${nextDay}${nextPage === 2 ? "?page=2" : ""}`);

  if (!session || !day) return <main className="min-h-screen bg-[#152b48] px-5 py-24 text-[#f5f0e7] sm:px-10"><div className="mx-auto max-w-6xl"><Link to="/press" className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#f5f0e7]/70 hover:text-[#d9b56d]">← Press hub</Link><p className="mt-20 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#d9b56d]">International Press Corps</p><h1 className="mt-4 max-w-5xl font-display text-7xl uppercase leading-[0.8] tracking-[-0.08em] sm:text-[10rem]">THE TESMUN TIMES</h1><p className="mt-8 max-w-xl font-serif text-xl leading-8 text-[#f5f0e7]/75">The conference, seen from the press room. Choose an edition to enter the archive.</p><div className="mt-14 grid gap-4 sm:grid-cols-3">{([1, 2, 3] as NewsSession[]).map((item) => <button key={item} type="button" onClick={() => goTo(item, newsSessionDays[item][0], 1)} className="group border border-[#f5f0e7]/25 p-7 text-left transition duration-500 hover:-translate-y-1 hover:border-[#d9b56d]"><span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#d9b56d]">Edition {item}</span><span className="mt-3 block font-display text-4xl uppercase text-[#f5f0e7]">{sessionLabels[item]}</span><span className="mt-3 block font-serif text-sm text-[#f5f0e7]/60">{newsSessionDays[item].length} days · National and international desks</span></button>)}</div></div></main>;

  const currentIndex = days.indexOf(day);
  const previous = page === 2 ? { session, day, page: 1 as NewsPage } : currentIndex > 0 ? { session, day: days[currentIndex - 1], page: 2 as NewsPage } : null;
  const next = page === 1 ? { session, day, page: 2 as NewsPage } : currentIndex < days.length - 1 ? { session, day: days[currentIndex + 1], page: 1 as NewsPage } : null;

  return <main className="min-h-screen bg-[#f5f0e7] px-3 py-8 text-[#171717] sm:px-6 md:px-10 md:py-14"><div className="mx-auto max-w-6xl border-x border-[#171717]/20 bg-[#f5f0e7] px-4 py-5 shadow-[0_18px_80px_rgba(23,23,23,0.28)] sm:px-8 sm:py-8 md:px-12 md:py-10"><nav className="mb-7 flex flex-wrap items-center justify-between gap-3 border-b border-[#171717]/25 pb-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#171717]/60"><Link to="/press/news" className="hover:text-[#171717]">← Editions</Link><span>{sessionLabels[session]} · Day {day} · Page {page}</span></nav><Masthead session={session} day={day} page={page} /><div className="mt-7 flex flex-wrap gap-2 border-b border-[#171717]/25 pb-5">{([1, 2, 3] as NewsSession[]).map((item) => <button key={item} type="button" onClick={() => goTo(item, newsSessionDays[item][0], 1)} className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] ${session === item ? "border-[#171717] bg-[#171717] text-[#f5f0e7]" : "border-[#171717]/25 hover:border-[#171717]"}`}>{sessionLabels[item]}</button>)}<span className="mx-2 hidden h-7 w-px bg-[#171717]/20 sm:block" />{days.map((item) => <button key={item} type="button" onClick={() => goTo(session, item, 1)} className={`border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] ${day === item ? "border-[#171717] bg-[#171717] text-[#f5f0e7]" : "border-[#171717]/25 hover:border-[#171717]"}`}>Day {item}</button>)}<button type="button" onClick={() => goTo(session, day, page === 1 ? 2 : 1)} className="border border-[#171717]/25 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] hover:border-[#171717]">Page {page === 1 ? 2 : 1}</button></div><div className="mt-8 flex items-end justify-between border-b-2 border-[#171717] pb-3"><div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#171717]/60">{page === 1 ? "National Desk" : "International Desk"}</p><h2 className="mt-2 font-display text-5xl uppercase leading-[0.85] tracking-[-0.05em] sm:text-6xl">Committee dispatches</h2></div><span className="hidden font-mono text-right text-[10px] uppercase tracking-[0.16em] text-[#171717]/50 sm:block">{articles.length} reports</span></div><section className="mt-8">{articles.map((article) => <ArticleStory key={article.slug} article={article} />)}</section><nav className="mt-6 flex items-center justify-between border-t-2 border-[#171717] pt-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em]">{previous ? <button type="button" onClick={() => goTo(previous.session, previous.day, previous.page)} className="flex items-center gap-2 hover:text-[#80662f]"><ArrowLeft size={15} /> Previous page</button> : <span />}{next ? <button type="button" onClick={() => goTo(next.session, next.day, next.page)} className="flex items-center gap-2 hover:text-[#80662f]">Next page <ArrowRight size={15} /></button> : <span />}</nav></div></main>;
}
