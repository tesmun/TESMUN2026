import type { NewsArticle } from "./press-data";

export type NewsSession = 1 | 2 | 3;
export type NewsDay = 1 | 2 | 3 | 4;

export type SessionNewsArticle = NewsArticle & {
  sessionNumber: NewsSession;
  day: NewsDay;
  committee: string;
  committeeLogo?: string;
  articleNumber: string;
};

const placeholderBody = [
  "This placeholder dispatch will be replaced with the final report from the International Press Corps.",
  "The article space is reserved for committee context, delegate perspectives and the decisions that shape the session.",
];

const image = (session: NewsSession, day: NewsDay, number: number) =>
  `/images/press/news/session-${session}/day-${day}/news-${String(number).padStart(2, "0")}.webp`;

const article = (sessionNumber: NewsSession, day: NewsDay, number: number, committee: string, committeeLogo: string, title: string): SessionNewsArticle => ({
  slug: `session-${sessionNumber}-day-${day}-news-${String(number).padStart(2, "0")}`,
  title,
  standfirst: "Placeholder report from the committee floor.",
  body: placeholderBody,
  session: sessionNumber === 1 ? "First Session" : sessionNumber === 2 ? "Second Session" : "Final Session",
  sessionNumber,
  day,
  committee,
  committeeLogo,
  articleNumber: String(number).padStart(2, "0"),
  author: "International Press Corps",
  date: "August 2026",
  image: image(sessionNumber, day, number),
});

export const newsSessionDays: Record<NewsSession, NewsDay[]> = { 1: [1, 2], 2: [1, 2], 3: [1, 2, 3, 4] };

export const newsSessionArticles: SessionNewsArticle[] = [
  ...([1, 2] as NewsDay[]).flatMap((day) => [
    article(1, day, 1, "LP I", "/images/committees/visuals/committee-lp.png", "The opening debate takes shape"),
    article(1, day, 2, "HRC", "/images/committees/visuals/committee-hrc.webp", "Rights, responsibility and the room"),
    article(1, day, 3, "UNEP", "/images/committees/visuals/committee-unep.webp", "A shared agenda for the environment"),
  ]),
  ...([1, 2] as NewsDay[]).flatMap((day) => [
    article(2, day, 1, "DISEC", "/images/committees/visuals/committee-disec.webp", "Security questions move to the floor"),
    article(2, day, 2, "ECOSOC", "/images/committees/visuals/committee-ecosoc.webp", "Development priorities in conversation"),
    article(2, day, 3, "LP II", "/images/committees/visuals/committee-lp.png", "The work between the speeches"),
  ]),
  ...([1, 2, 3, 4] as NewsDay[]).flatMap((day) => [
    article(3, day, 1, "LP III", "/images/committees/visuals/committee-lp.png", "The final session finds its voice"),
    article(3, day, 2, "Press Committee", "/images/press/press.png", "Reporting the conference in motion"),
    article(3, day, 3, "All Committees", "/images/committees/visuals/committeesbackground.png", "What the delegates carried forward"),
  ]),
];

export function getSessionArticles(session: NewsSession, day: NewsDay) {
  return newsSessionArticles.filter((item) => item.sessionNumber === session && item.day === day);
}
