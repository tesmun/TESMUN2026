import { useState } from "react";
import { X } from "lucide-react";
import AccordionGallery from "@/components/AccordionGallery";
import BorderGlow from "@/components/BorderGlow";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, PageHero } from "@/components/section-parts";
import { galleryImages } from "@/lib/data";

const accordionItems = [1, 2, 3, 4, 5].map((n) => ({ image: `/images/gallery/accordion/${n}.png`, label: "", link: "#" }));
const photos = (offset: number, count: number) => Array.from({ length: count }, (_, index) => galleryImages[(offset + index) % galleryImages.length]);
const sessions = [
  { title: "CLOSING CEREMONY", count: 8, offset: 0 },
  { title: "Final Session", count: 12, offset: 4 },
  { title: "OPENING CEREMONY", count: 8, offset: 2 },
  { title: "SECOND PRACTICE SESSION", count: 12, offset: 1 },
  { title: "FIRST PRACTICE SESSION", count: 12, offset: 5 },
];

function PhotoGrid({ offset, count, onSelect, circular = false }: { offset: number; count: number; onSelect: (index: number) => void; circular?: boolean }) {
  return <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 ${circular ? "lg:grid-cols-3" : ""}`}>{photos(offset, count).map((photo, index) => <button key={`${photo.src}-${index}`} type="button" onClick={() => onSelect((offset + index) % galleryImages.length)} className="group relative aspect-[4/3] overflow-hidden"><img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-0 bg-navy-deep/0 transition group-hover:bg-navy-deep/20" /></button>)}</div>;
}

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return <main className="bg-warm">
    <PageHero image="/images/home/cover.png" alt="The Excelsior School campus at night" title="GALLERY" subtitle="A considered visual record of TESMUN XIV." />
    <section className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow>Event archive</Eyebrow><h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Highlights of the Event</h2></Reveal><div className="mt-10"><AccordionGallery items={accordionItems} defaultIndex={2} expandRatio={0.52} trigger="hover" /></div></div></section>
    {sessions.slice(0, 3).map((section) => <section key={section.title} className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow>{section.title === "Final Session" ? "Conference record" : "Ceremony archive"}</Eyebrow><h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{section.title}</h2></Reveal><div className="mt-10"><PhotoGrid offset={section.offset} count={section.count} onSelect={setActive} circular={section.title === "Final Session"} /></div></div></section>)}
    <section className="border-t border-ink/10 bg-navy-deep px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow className="text-silver/70">Video archive</Eyebrow><h2 className="mt-3 font-display text-3xl text-warm sm:text-4xl">OPENING CEREMONY VIDEO &amp; CLOSING CEREMONY VIDEO</h2></Reveal><div className="mt-10 grid gap-6 md:grid-cols-2">{["Opening Ceremony", "Closing Ceremony"].map((title) => <BorderGlow key={title} backgroundColor="#0d2a4a" borderRadius={24} colors={["#c6a15b", "#e3c46a", "#f4efa8"]}><article className="p-5"><h3 className="font-display text-2xl text-warm">{title}</h3><div className="mt-5"><YouTubeEmbed url="" title={title} /></div></article></BorderGlow>)}</div></div></section>
    {sessions.slice(3).map((section) => <section key={section.title} className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow>Practice archive</Eyebrow><h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">{section.title}</h2></Reveal><div className="mt-10"><PhotoGrid offset={section.offset} count={section.count} onSelect={setActive} /></div></div></section>)}
    {active !== null && <div className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/95 p-6" onClick={() => setActive(null)}><button type="button" aria-label="Close photograph" className="absolute right-6 top-6 text-warm"><X size={28} /></button><img src={galleryImages[active].src} alt={galleryImages[active].alt} className="max-h-[82vh] max-w-5xl object-contain" /></div>}
  </main>;
}
