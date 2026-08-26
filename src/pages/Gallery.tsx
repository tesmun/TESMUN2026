import { useState } from "react";
import { X } from "lucide-react";
import AccordionGallery from "@/components/AccordionGallery";
import BorderGlow from "@/components/BorderGlow";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { Reveal } from "@/components/Reveal";
import { Eyebrow, PageHero } from "@/components/section-parts";
import { galleryImages } from "@/lib/data";

const accordionItems = [1, 2, 3, 4, 5].map((n) => ({ image: `/images/gallery/accordion/${n}.png`, label: "", link: "#" }));
const firstPracticePhotos = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6K3ofJHkm0CtbVq92n0oLqOSgpkOyZ.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DuMf0DGLFIr8QFa9UDfxZsXBzs1aZG.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pyh5DPATl0XLV6FIMVg3i1eNjbfShi.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vrpxjU6v40YNuuUaX248qvlX18bT9G.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l0xL4gwQBFmRIk74qGAzmLVmFvb93G.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-K5zNqSUPKRpzEr8fI6cYPPu5DabVvv.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-R24DjDYuPKvEdrJ8qZAOlUqeThFxEO.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-TApTGmEta51yfVelmtwI0YjWmn6iOI.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-w6Olks3twuSgJyhmzTscYl9NdUsbVa.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Ln9AXL0u0yOSCmsVONIZQ5IUL3Uykb.png",
];
const photos = (offset: number, count: number, custom?: string[]) => custom ? Array.from({ length: count }, (_, index) => ({ src: custom[index % custom.length], alt: "First Practice Session" })) : Array.from({ length: count }, (_, index) => galleryImages[(offset + index) % galleryImages.length]);
const sessions = [
  { title: "CLOSING CEREMONY", count: 8, offset: 0 },
  { title: "Final Session", count: 12, offset: 4 },
  { title: "OPENING CEREMONY", count: 8, offset: 2 },
  { title: "SECOND PRACTICE SESSION", count: 12, offset: 1 },
  { title: "FIRST PRACTICE SESSION", count: 12, offset: 5 },
];

function PhotoGrid({ offset, count, onSelect, circular = false, customPhotos }: { offset: number; count: number; onSelect: (photo: { src: string; alt: string }) => void; circular?: boolean; customPhotos?: string[] }) {
  const items = photos(offset, count, customPhotos);
  return <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 ${circular ? "lg:grid-cols-3" : ""}`}>{items.map((photo, index) => <button key={`${photo.src}-${index}`} type="button" onClick={() => onSelect(photo)} className="group relative aspect-[4/3] overflow-hidden"><img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-0 bg-navy-deep/0 transition group-hover:bg-navy-deep/20" /></button>)}</div>;
}

export default function Gallery() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);
  return <main className="bg-navy-deep">
    <PageHero image="/images/gallery/gallery.png" alt="The Excelsior School campus at night" title="GALLERY" subtitle="A considered visual record of TESMUN XIV." />
    <section className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow>Event archive</Eyebrow><h2 className="mt-3 font-display text-3xl text-warm sm:text-4xl">Highlights of the Event</h2></Reveal><div className="mt-10"><AccordionGallery items={accordionItems} defaultIndex={2} expandRatio={0.52} trigger="hover" /></div></div></section>
    {sessions.slice(0, 3).map((section) => <section key={section.title} className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow className="text-warm">{section.title === "Final Session" ? "Conference record" : "Ceremony archive"}</Eyebrow><h2 className="mt-3 font-display text-3xl text-warm sm:text-4xl">{section.title}</h2></Reveal><div className="mt-10"><PhotoGrid offset={section.offset} count={section.count} onSelect={setActive} circular={section.title === "Final Session"} /></div></div></section>)}
    <section className="border-t border-ink/10 bg-navy-deep px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow className="text-silver/70">Video archive</Eyebrow><h2 className="mt-3 font-display text-3xl text-warm sm:text-4xl">OPENING CEREMONY VIDEO &amp; CLOSING CEREMONY VIDEO</h2></Reveal><div className="mt-10 grid gap-6 md:grid-cols-2">{["Opening Ceremony", "Closing Ceremony"].map((title) => <BorderGlow key={title} backgroundColor="#0d2a4a" borderRadius={24} colors={["#c6a15b", "#e3c46a", "#f4efa8"]}><article className="p-5"><h3 className="font-display text-2xl text-warm">{title}</h3><div className="mt-5"><YouTubeEmbed url="" title={title} /></div></article></BorderGlow>)}</div></div></section>
    {sessions.slice(3).map((section) => <section key={section.title} className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow className="text-warm">Practice archive</Eyebrow><h2 className="mt-3 font-display text-3xl text-warm sm:text-4xl">{section.title}</h2></Reveal><div className="mt-10"><PhotoGrid offset={section.offset} count={section.count} onSelect={setActive} customPhotos={section.title === "FIRST PRACTICE SESSION" ? firstPracticePhotos : undefined} /></div></div></section>)}
    {active !== null && <div role="dialog" aria-modal="true" aria-label={active.alt} className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/95 p-4 sm:p-6" onClick={() => setActive(null)} onKeyDown={(event) => { if (event.key === "Escape") setActive(null); }} tabIndex={-1}><button type="button" aria-label="Close photograph" className="absolute right-4 top-4 rounded-full p-3 text-warm transition hover:bg-warm/10 sm:right-6 sm:top-6"><X size={28} /></button><img src={active.src} alt={active.alt} className="max-h-[88vh] max-w-[min(94vw,80rem)] object-contain" onClick={(event) => event.stopPropagation()} /></div>}
  </main>;
}
