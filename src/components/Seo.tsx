import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://tesmun.tech";
const DEFAULT_DESCRIPTION =
  "Official website of TESMUN XIV, The Excelsior School Model United Nations 2026, held from 31 August 2026 in Kathmandu, Nepal.";

const pageMeta: Record<string, { title: string; description: string }> = {
  "/": { title: "TESMUN XIV | Excelsior School Model United Nations 2026", description: DEFAULT_DESCRIPTION },
  "/about": { title: "About TESMUN XIV | TESMUN", description: "Learn about TESMUN XIV, The Excelsior School Model United Nations 2026, and its mission to develop diplomacy, leadership and global understanding in Kathmandu, Nepal." },
  "/committees": { title: "Committees | TESMUN XIV", description: "Explore the TESMUN XIV committees, agendas and formats for the 2026 Excelsior School Model United Nations conference." },
  "/our-team": { title: "Our Team | TESMUN XIV", description: "Meet the secretariat and team behind TESMUN XIV, The Excelsior School Model United Nations 2026." },
  "/press": { title: "Press | TESMUN XIV", description: "Read and watch official TESMUN XIV press coverage, interviews, speeches, podcasts, opinion and cartoons." },
  "/news": { title: "THE TESMUN TIMES | TESMUN XIV", description: "Read the latest official news and committee coverage from TESMUN XIV in The TESMUN Times." },
  "/gallery": { title: "Gallery | TESMUN XIV", description: "Browse photos and visual stories from TESMUN XIV, The Excelsior School Model United Nations." },
  "/resources": { title: "Resources | TESMUN XIV", description: "Find guides, agendas and delegate resources for TESMUN XIV 2026." },
  "/contact": { title: "Contact | TESMUN XIV", description: "Contact the TESMUN XIV secretariat and The Excelsior School Model United Nations team." },
};

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const basePath = pathname.startsWith("/news/") || pathname.startsWith("/press/news") ? "/news" : pathname.startsWith("/committees/") ? "/committees" : pathname.startsWith("/our-team/") ? "/our-team" : pathname.startsWith("/press/") ? "/press" : pathname;
    const meta = pageMeta[basePath] ?? pageMeta["/"];
    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname.replace(/\/$/, "")}`;

    document.title = meta.title;
    upsertMeta("name", "description", meta.description);
    upsertMeta("property", "og:title", meta.title);
    upsertMeta("property", "og:description", meta.description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:type", "website");
    upsertMeta("name", "twitter:title", meta.title);
    upsertMeta("name", "twitter:description", meta.description);

    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;

    let schema = document.head.querySelector<HTMLScriptElement>('script[data-tesmun-schema="organization"]');
    if (!schema) {
      schema = document.createElement("script");
      schema.type = "application/ld+json";
      schema.dataset.tesmunSchema = "organization";
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "TESMUN XIV",
      alternateName: "The Excelsior School Model United Nations",
      url: SITE_URL,
      logo: `${SITE_URL}/images/committees/visuals/munlogo.svg`,
      description: DEFAULT_DESCRIPTION,
      location: { "@type": "Place", name: "Kathmandu, Nepal" },
    });
  }, [pathname]);

  return null;
}
