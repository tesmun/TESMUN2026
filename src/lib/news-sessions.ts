import type { NewsArticle } from "./press-data";

export type NewsSession = 1 | 2 | 3;
export type NewsDay = 1 | 2 | 3 | 4;
export type NewsPage = 1 | 2;

export type SessionNewsArticle = NewsArticle & {
  sessionNumber: NewsSession;
  day: NewsDay;
  page: NewsPage;
  committee: string;
  committeeLogo?: string;
  articleNumber: string;
};

const placeholderBody = [
  "This dispatch records the committee’s work as the session moved from opening positions toward the decisions still to come.",
  "Across the room, delegates balanced national priorities with the shared language of negotiation, leaving the next page open to revision.",
  "The debate developed through a sequence of formal interventions, informal consultations and careful amendments. Each contribution changed the temperature of the room, even when the wording remained measured.",
  "By the close of the sitting, the committee had not resolved every question, but it had made its disagreements legible. Delegates left with clearer priorities and a more precise sense of what compromise would require.",
  "The next session will test whether those conversations can become text. For now, the record is one of movement: a room learning how to disagree with purpose and continue working together.",
];

const image = (session: NewsSession, day: NewsDay, page: NewsPage, number: number) =>
  `/images/press/news/session-${session}/day-${day}/page-${page}-${String(number).padStart(2, "0")}.webp`;

const article = (sessionNumber: NewsSession, day: NewsDay, page: NewsPage, number: number, committee: string, committeeLogo: string, title: string): SessionNewsArticle => ({
  slug: `session-${sessionNumber}-day-${day}-page-${page}-news-${String(number).padStart(2, "0")}`,
  title,
  standfirst: "A placeholder report from the committee floor.",
  body: placeholderBody,
  session: sessionNumber === 1 ? "First Session" : sessionNumber === 2 ? "Second Session" : "Final Session",
  sessionNumber,
  day,
  page,
  committee,
  committeeLogo,
  articleNumber: String(number).padStart(2, "0"),
  author: "International Press Corps",
  date: "August 2026",
  image: image(sessionNumber, day, page, number),
});

export const newsSessionDays: Record<NewsSession, NewsDay[]> = { 1: [1, 2], 2: [1, 2], 3: [1, 2, 3, 4] };

const nationalCommittees = [
  ["LP I", "/images/committees/visuals/committee-lp.png", "The opening debate takes shape"],
  ["LP II", "/images/committees/visuals/committee-lp.png", "The work between the speeches"],
  ["LP III", "/images/committees/visuals/committee-lp.png", "The final session finds its voice"],
] as const;

const internationalCommittees = [
  ["UNEP", "/images/committees/visuals/committee-unep.webp", "A shared agenda for the environment"],
  ["HRC", "/images/committees/visuals/committee-hrc.webp", "Rights, responsibility and the room"],
  ["DISEC", "/images/committees/visuals/committee-disec.webp", "Security questions move to the floor"],
  ["ECOSOC", "/images/committees/visuals/committee-ecosoc.webp", "Development priorities in conversation"],
] as const;

export const newsSessionArticles: SessionNewsArticle[] = ([1, 2, 3] as NewsSession[]).flatMap((session) =>
  newsSessionDays[session].flatMap((day) => [
    ...nationalCommittees.map(([committee, logo, title], index) => article(session, day, 1, index + 1, committee, logo, title)),
    ...internationalCommittees.map(([committee, logo, title], index) => article(session, day, 2, index + 1, committee, logo, title)),
  ]),
);

export function getSessionArticles(session: NewsSession, day: NewsDay, page: NewsPage) {
  return newsSessionArticles.filter((item) => item.sessionNumber === session && item.day === day && item.page === page);
}

export function getSessionNewsArticle(slug: string) {
  return newsSessionArticles.find((item) => item.slug === slug);
}

export function getPageCommittees(page: NewsPage) {
  return page === 1 ? nationalCommittees.map(([committee]) => committee) : internationalCommittees.map(([committee]) => committee);
}
