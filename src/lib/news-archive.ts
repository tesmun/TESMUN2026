import { newsSessionArticles, type NewsSession, type NewsDay } from "./news-sessions";

export type ArchiveArticle = {
  session: NewsSession;
  day: NewsDay;
  committee: string;
  committeeSlug: string;
  committeeLogo: string;
  headline: string;
  summary: string;
  image: string;
  imageAlt: string;
  date: string;
};

export type ArchiveDay = { session: NewsSession; day: NewsDay; articles: ArchiveArticle[] };

const committees = [
  ["LP1", "lp1", "/images/committees/visuals/committee-lp.png"],
  ["LP2", "lp2", "/images/committees/visuals/committee-lp.png"],
  ["LP3", "lp3", "/images/committees/visuals/committee-lp.png"],
  ["DISEC", "disec", "/images/committees/visuals/committee-disec.webp"],
  ["HRC", "hrc", "/images/committees/visuals/committee-hrc.webp"],
  ["ECOSOC", "ecosoc", "/images/committees/visuals/committee-ecosoc.webp"],
  ["UNEP", "unep", "/images/committees/visuals/committee-unep.webp"],
] as const;

const sessions: { session: NewsSession; days: NewsDay[] }[] = [
  { session: 3, days: [3, 2, 1] },
  { session: 2, days: [2, 1] },
  { session: 1, days: [2, 1] },
];

export const newsArchive: ArchiveDay[] = sessions.flatMap(({ session, days }) =>
  days.map((day) => ({
    session,
    day,
    articles: committees.map(([committee, committeeSlug, committeeLogo], index) => {
      const source = newsSessionArticles.find((item) => item.sessionNumber === session && item.day === day && item.committee === committee) ?? newsSessionArticles.find((item) => item.sessionNumber === session && item.day === day);
      const page = index < 3 ? 1 : 2;
      const number = index < 3 ? index + 1 : index - 2;
      return {
        session,
        day,
        committee,
        committeeSlug,
        committeeLogo,
        headline: source?.title ?? `${committee} dispatch from the floor`,
        summary: source?.standfirst ?? "A concise report from the committee floor, where delegates turn preparation into diplomacy.",
        image: `/images/press/news/session-${session}/day-${day}/page-${page}-${String(number).padStart(2, "0")}.webp`,
        imageAlt: `${committee} delegates in session`,
        date: source?.date ?? "TESMUN XIV",
      };
    }),
  })),
);

export const sessionLabel: Record<NewsSession, string> = { 1: "FIRST SESSION", 2: "SECOND SESSION", 3: "FINAL SESSION" };

export const dayLabel = (day: NewsDay) => `DAY ${day}`;

export const archiveArticleCount = newsArchive.reduce((total, day) => total + day.articles.length, 0);

export const committeeOrder = committees.map(([name]) => name);

export type { NewsSession, NewsDay };
/* */
