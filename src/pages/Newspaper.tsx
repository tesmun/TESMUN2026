import { useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getSessionArticles, newsSessionDays, type NewsDay, type NewsSession, type SessionNewsArticle } from "@/lib/news-sessions";

const sessionLabels: Record<NewsSession, string> = { 1: "Session 1", 2: "Session 2", 3: "Session 3" };
const sessionFromPath = (pathname: string): NewsSession | null => {
  const match = pathname.match(/session-([123])/);
  return match ? Number(match[1]) as NewsSession : null;
};

function NewsHeader({ session, day }: { session: NewsSession; day: NewsDay }) {
  return <header className="border-b-2 border-warm/30 pb-5">
    <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-warm/60"><span>TESMUN XIV · Kathmandu</span><span>{sessionLabels[session]} · Day {day}</span></div>
    <div className="mt-4 bg-navy-deep px-4 py-5 text-center sm:px-8 sm:py-7"><h1 className="font-display text-5xl font-semibold uppercase leading-none tracking-[-0.05em] text-warm sm:text-7xl md:text-8xl">THE TESMUN TIMES</h1><p className="mt-2 text-[10px] uppercase tracking-[0.38em] text-warm/70">A record of debate, diplomacy and the day</p></div>
  </header>;
}

function ArticleStory({ article }: { article: SessionNewsArticle }) {
  return <article className="border-b border-warm/25 py-8 first:pt-0">
    <div className="grid gap-6 lg:grid-cols-[1.05fr_1fr] lg:items-start">
      <div className="overflow-hidden"><img src={article.image} alt={`${article.committee} placeholder editorial image`} className="aspect-[16/10] w-full object-cover transition duration-500 hover:scale-[1.02]" /></div>
      <div>
        <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-gold"><span>Report {article.articleNumber}</span><span className="text-warm/40">·</span><span>{article.date}</span></div>
        <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-warm/75">{article.committeeLogo && <img src={article.committeeLogo} alt="" className="size-7 rounded-full bg-warm object-contain p-1" />}{article.committee}</div>
        <h2 className="mt-3 font-display text-3xl leading-[0.98] text-warm sm:text-4xl">{article.title}</h2>
        <p className="mt-4 text-base leading-7 text-warm/75">{article.standfirst}</p>
        <div className="mt-5 flex flex-col gap-3 text-sm leading-7 text-warm/65">{article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <p className="mt-5 text-[10px] uppercase tracking-[0.16em] text-warm/50">By {article.author}</p>
      </div>
    </div>
  </article>;
}

export default function Newspaper() {
  const location = useLocation();
  const navigate = useNavigate();
  const routedSession = sessionFromPath(location.pathname);
  const [selectedDay, setSelectedDay] = useState<NewsDay>(1);
  const session = routedSession ?? 1;
  const days = newsSessionDays[session];
  const day = days.includes(selectedDay) ? selectedDay : days[0];
  const articles = useMemo(() => getSessionArticles(session, day), [session, day]);

  if (!routedSession) return <main className="paper-grain min-h-screen bg-[linear-gradient(rgba(8,19,35,0.72),rgba(8,19,35,0.84)),url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pressbg-4VGSjt0tYG0ogIAtxIZJJrgZiJI5T0.png')] bg-cover bg-fixed bg-center bg-blend-multiply px-6 pb-24 pt-32 text-warm md:px-10"><div className="mx-auto max-w-5xl"><Link to="/press" className="text-[11px] uppercase tracking-[0.16em] text-warm/70 hover:text-gold">← Press hub</Link><p className="mt-16 text-[11px] uppercase tracking-[0.2em] text-gold">International Press Corps</p><h1 className="mt-3 max-w-3xl font-display text-6xl leading-[0.9] sm:text-8xl">The Gazette</h1><p className="mt-7 max-w-xl text-lg leading-8 text-warm/75">Choose a conference session to read dispatches grouped by committee and day.</p><div className="mt-12 grid gap-4 sm:grid-cols-3">{([1, 2, 3] as NewsSession[]).map((item) => <button key={item} type="button" onClick={() => navigate(`/press/news/session-${item}`)} className="border border-warm/25 bg-navy-deep/70 p-7 text-left transition hover:-translate-y-1 hover:border-gold"><span className="text-[10px] uppercase tracking-[0.18em] text-gold">Edition {item}</span><span className="mt-3 block font-display text-3xl text-warm">{sessionLabels[item]}</span><span className="mt-2 block text-sm text-warm/60">{newsSessionDays[item].length} days of reports</span></button>)}</div></div></main>;

  return <main className="paper-grain min-h-screen bg-[linear-gradient(rgba(8,19,35,0.72),rgba(8,19,35,0.84)),url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pressbg-4VGSjt0tYG0ogIAtxIZJJrgZiJI5T0.png')] bg-cover bg-fixed bg-center bg-blend-multiply px-3 pb-16 pt-24 text-warm sm:px-6 md:px-10 md:pt-32"><div className="mx-auto max-w-5xl bg-navy-deep/60 p-4 backdrop-blur-sm sm:p-8 md:p-12"><Link to="/press/news" className="mb-5 inline-block text-[10px] uppercase tracking-[0.2em] text-warm/70">← All sessions</Link><NewsHeader session={session} day={day} /><div className="mt-7 flex flex-wrap gap-2 border-b border-warm/25 pb-5">{([1, 2, 3] as NewsSession[]).map((item) => <button key={item} type="button" onClick={() => { setSelectedDay(1); navigate(`/press/news/session-${item}`); }} className={`border px-4 py-2 text-[10px] uppercase tracking-[0.15em] ${session === item ? "border-gold bg-gold text-navy-deep" : "border-warm/25 text-warm/65 hover:border-gold"}`}>{sessionLabels[item]}</button>)}<span className="mx-2 hidden h-7 w-px bg-warm/20 sm:block" />{days.map((item) => <button key={item} type="button" onClick={() => setSelectedDay(item)} className={`border px-3 py-2 text-[10px] uppercase tracking-[0.15em] ${day === item ? "border-warm bg-warm text-navy-deep" : "border-warm/25 text-warm/65 hover:border-warm"}`}>Day {item}</button>)}</div><div className="mt-8 flex items-end justify-between border-b-2 border-warm/30 pb-3"><div><p className="text-[10px] uppercase tracking-[0.2em] text-gold">{sessionLabels[session]} · Day {day}</p><h2 className="mt-1 font-display text-4xl sm:text-5xl">Committee dispatches</h2></div><span className="hidden text-right text-[10px] uppercase tracking-[0.16em] text-warm/50 sm:block">{articles.length} reports</span></div><section className="mt-8">{articles.map((article) => <ArticleStory key={article.slug} article={article} />)}</section><nav className="mt-8 flex items-center justify-between border-t border-warm/25 pt-4"><button type="button" onClick={() => navigate(`/press/news/session-${session === 1 ? 3 : session - 1}`)} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-warm/70"><ArrowLeft size={14} /> Previous session</button><button type="button" onClick={() => navigate(`/press/news/session-${session === 3 ? 1 : session + 1}`)} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-warm/70">Next session <ArrowRight size={14} /></button></nav></div></main>;
}
