import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import AccordionGallery from "@/components/AccordionGallery";
import BorderGlow from "@/components/BorderGlow";
import SpecularButton from "@/components/SpecularButton";
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
const secondPracticePhotos = Array.from({ length: 10 }, (_, index) => `/images/gallery/second-practice/${String(index + 1).padStart(2, "0")}.jpg`);
const finalSessionPhotos = [
  "/images/gallery/final-session/006A9365.jpg",
  "/images/gallery/final-session/006A9235.jpg",
  "/images/gallery/final-session/006A9237.jpg",
  "/images/gallery/final-session/006A9427.jpg",
  "/images/gallery/final-session/006A9408.jpg",
  "/images/gallery/final-session/006A9137.jpg",
  "/images/gallery/final-session/006A9388.jpg",
  "/images/gallery/final-session/006A9397.jpg",
  "/images/gallery/final-session/006A9369.jpg",
  "/images/gallery/final-session/006A9394.jpg",
  "/images/gallery/final-session/006A9376.jpg",
  "/images/gallery/final-session/006A9377.jpg",
  "/images/gallery/final-session/DSC_0019.jpeg",
  "/images/gallery/final-session/DSC_0044.jpeg",
  "/images/gallery/final-session/DSC_0046.jpeg",
  "/images/gallery/final-session/DSC_0130.jpeg",
  "/images/gallery/final-session/DSC_0134.jpeg",
  "/images/gallery/final-session/DSC_0112.jpeg",
  "/images/gallery/final-session/IMG_9805.jpeg",
  "/images/gallery/final-session/IMG_9882.jpeg",
  "/images/gallery/final-session/IMG_9860.jpeg",
  "/images/gallery/final-session/IMG_9842.jpeg",
  "/images/gallery/final-session/IMG_9795.jpeg",
  "/images/gallery/final-session/IMG_2642.jpeg",
  "/images/gallery/final-session/IMG_2622.jpeg",
  "/images/gallery/final-session/006A9155.jpg",
  "/images/gallery/final-session/006A9392.jpg",
  "/images/gallery/final-session/006A9373.jpg",
];
const openingCeremonyPhotos = [
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20134101-Rm6BxfMfB062hAqQ0dP7nywZwHSiWz.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20134026-2l2vSr4fMbZo85pGO9yZrIoG8NL75S.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20135009-nNV0qSUWLOGTfKg792Gkl1arViEYbp.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140559-5c4ImebtD9GE1INYZPdR1vz7OAFKU6.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20135053-AzuKtrg6SRI6eWI9kEVvMu17Sumlqr.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140545-cs5jjQnIuBFbEgElkbohEd0xyMriKu.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140141-0DlAHBhcyG074KLRcBFUIUev8qxRYF.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140132-MtBGXXSSssqSVukkVyJaLiA4USWrxz.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20133915-8AS47AykVeDIqIM7d5qfruXoMhaZHo.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20134124-uIZOOfF1WctPjn0i92JJjd50d1LIvy.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140116-IR3BqWr9467oMHcMvk3vx701gnL6KP.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140630-O3arFl2ll7dieBXSj9vCDS4uVNqpVj.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140217-Y7AlYSxkDlRSCFDTvAdZG8nmZwwbzp.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20134040-VZFqRKZJcctsfrZlcAchMabynxBNwC.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140152-ruDGR9cUXZaeCS0je4Os9SrOQ6cnXE.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140002-jR75DVXOhz0bfWKKe7yEfOykEYpPsQ.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20135951-TJYTfViHyaLfWrxkZPnQ8KMVVrgbXG.png",
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-09-01%20140229-1Dn6gq0iIJSXkQ1B6nhZoFVwRzpo3h.png",
];
const photos = (offset: number, count: number, custom?: string[], alt = "Gallery photograph"): { src: string; alt: string }[] => custom ? Array.from({ length: count }, (_, index) => ({ src: custom[index % custom.length], alt })) : Array.from({ length: count }, (_, index) => ({ src: galleryImages[(offset + index) % galleryImages.length].src, alt: galleryImages[(offset + index) % galleryImages.length].alt || alt }));
const blankCeremony = new Set(["CLOSING CEREMONY", "Final Session", "OPENING CEREMONY"]);
const sessions = [
  { title: "CLOSING CEREMONY", count: 8, offset: 0 },
  { title: "Final Session", count: finalSessionPhotos.length, offset: 4, customPhotos: finalSessionPhotos },
  { title: "OPENING CEREMONY", count: openingCeremonyPhotos.length, offset: 2, customPhotos: openingCeremonyPhotos },
  { title: "SECOND PRACTICE SESSION", count: 10, offset: 1 },
  { title: "FIRST PRACTICE SESSION", count: 12, offset: 5 },
];

function PhotoGrid({ offset, count, onSelect, circular = false, customPhotos, customAlt }: { offset: number; count: number; onSelect: (photo: { src: string; alt: string }) => void; circular?: boolean; customPhotos?: string[]; customAlt?: string }) {
  const items = photos(offset, count, customPhotos, customAlt);
  return <div className={`grid grid-cols-2 gap-4 sm:grid-cols-3 ${circular ? "lg:grid-cols-3" : ""}`}>{items.map((photo, index) => { const blank = !customPhotos && blankCeremony.has(customAlt ?? ""); return <button key={`${photo.src}-${index}`} type="button" onClick={() => !blank && onSelect(photo)} aria-label={blank ? `${customAlt} photograph placeholder` : photo.alt} className={`group relative aspect-[4/3] overflow-hidden ${blank ? "bg-slate-700/60" : "bg-navy-deep"}`}>{!blank && <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />} {!blank && <span className="absolute inset-0 bg-navy-deep/0 transition group-hover:bg-navy-deep/20" />}</button>; })}</div>;
}

export default function Gallery() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);
  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActive(null); };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKeyDown); document.body.style.overflow = ""; };
  }, [active]);
  return <main className="bg-navy-deep">
    <PageHero image="/images/gallery/gallery.png" alt="The Excelsior School campus at night" title="GALLERY" subtitle="A considered visual record of TESMUN XIV." />
    <section className="px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow>Event archive</Eyebrow><h2 className="mt-3 font-display text-3xl text-warm sm:text-4xl">Highlights of the Event</h2></Reveal><div className="mt-10"><AccordionGallery items={accordionItems} defaultIndex={2} expandRatio={0.52} trigger="hover" /></div></div></section>
    {sessions.slice(0, 3).map((section) => <section key={section.title} className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow className="text-warm">{section.title === "Final Session" ? "Conference record" : "Ceremony archive"}</Eyebrow><h2 className="mt-3 font-display text-3xl text-warm sm:text-4xl">{section.title}</h2></Reveal><div className="mt-10"><PhotoGrid offset={section.offset} count={section.count} onSelect={setActive} circular={section.title === "Final Session"} customPhotos={section.customPhotos} customAlt={section.title} /></div></div></section>)}
    <section className="border-t border-ink/10 bg-navy-deep px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow className="text-silver/70">Video archive</Eyebrow><h2 className="mt-3 font-display text-3xl text-warm sm:text-4xl">OPENING CEREMONY VIDEO &amp; CLOSING CEREMONY VIDEO</h2></Reveal><div className="mt-10 grid gap-6 md:grid-cols-2"><BorderGlow backgroundColor="#0d2a4a" borderRadius={24} colors={["#c6a15b", "#e3c46a", "#f4efa8"]}><article className="p-5"><h3 className="font-display text-2xl text-warm">Opening Ceremony</h3><div className="mt-5"><YouTubeEmbed url="https://www.youtube.com/watch?v=5dChXh_c1Ec" title="Opening Ceremony" /></div></article></BorderGlow><BorderGlow backgroundColor="#0d2a4a" borderRadius={24} colors={["#c6a15b", "#e3c46a", "#f4efa8"]}><article className="p-5"><h3 className="font-display text-2xl text-warm">Closing Ceremony</h3><div className="mt-5"><YouTubeEmbed url="https://www.youtube.com/watch?v=vxpm8OZRH30" title="Closing Ceremony" /></div></article></BorderGlow></div><div className="mt-6 grid gap-6 md:grid-cols-2"><BorderGlow backgroundColor="#0d2a4a" borderRadius={24} colors={["#c6a15b", "#e3c46a", "#f4efa8"]}><article className="p-5"><h3 className="font-display text-2xl text-warm">INAUGURATION CEREMONY HIGHLIGHTS</h3><div className="mt-5"><YouTubeEmbed url="https://www.youtube.com/watch?v=lQ3a9QDS7IA" title="Inauguration Ceremony Highlights" /></div></article></BorderGlow></div></div></section>
    {sessions.slice(3).map((section) => <section key={section.title} className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><Eyebrow className="text-warm">Practice archive</Eyebrow><h2 className="mt-3 font-display text-3xl text-warm sm:text-4xl">{section.title}</h2></Reveal><div className="mt-10"><PhotoGrid offset={section.offset} count={section.count} onSelect={setActive} customPhotos={section.title === "FIRST PRACTICE SESSION" ? firstPracticePhotos : section.title === "SECOND PRACTICE SESSION" ? secondPracticePhotos : undefined} customAlt={section.title} /></div></div></section>)}
    <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-20"><div className="mx-auto flex max-w-7xl justify-center"><BorderGlow backgroundColor="#0d2a4a" borderRadius={24} colors={["#c6a15b", "#e3c46a", "#f4efa8"]}><div className="p-2"><SpecularButton href="https://sites.google.com/excelsior.edu.np/tesmun2026-gallery/home" size="lg">Grade 7 Photography Library</SpecularButton></div></BorderGlow></div></section>
    <AnimatePresence>{active !== null && <motion.div role="dialog" aria-modal="true" aria-label={active.alt} className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-deep/95 p-4 sm:p-6" onClick={() => setActive(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}><motion.button type="button" aria-label="Close photograph" className="absolute right-4 top-4 rounded-full p-3 text-warm transition hover:bg-warm/10 sm:right-6 sm:top-6" onClick={() => setActive(null)} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }}><X size={28} /></motion.button><motion.img src={active.src} alt={active.alt} className="max-h-[88vh] max-w-[min(94vw,80rem)] object-contain" onClick={(event) => event.stopPropagation()} initial={{ opacity: 0, scale: 0.94, y: 14 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }} /></motion.div>}</AnimatePresence>
  </main>;
}
