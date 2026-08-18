import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import BorderGlow from "@/components/BorderGlow";
import { LogoMark } from "@/components/LogoMark";
import type { Committee } from "@/lib/data";

const tones: Record<Committee["category"], string> = {
  national: "#16385c",
  international: "#1a4b7a",
  facilitating: "#0d2a4a",
};

export function CommitteeCard({ committee }: { committee: Committee }) {
  return (
    <Link to={`/committees/${committee.slug}`} className="group block h-full">
      <BorderGlow
        backgroundColor={tones[committee.category]}
        borderRadius={22}
        glowRadius={38}
        colors={["#c6a15b", "#e3c46a", "#f4efa8"]}
        className="h-full min-h-[240px] transition-transform duration-500 ease-out group-hover:-translate-y-1"
      >
        <div className="relative flex h-full min-h-[238px] flex-col justify-between overflow-hidden p-7">
          {committee.background && <img src={committee.background} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105" />}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
          <div className="relative z-10 flex items-start justify-between">
            {committee.logo ? (
              <span className="relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full bg-warm p-2 transition-transform duration-500 ease-out group-hover:scale-[1.06]">
                <img src={committee.logo} alt={`${committee.abbr} emblem`} className="h-full w-full object-contain" />
              </span>
            ) : (
              <LogoMark size={56} className="opacity-80 transition-transform duration-500 ease-out group-hover:scale-[1.06]" />
            )}
            <ArrowUpRight
              size={18}
              className="text-silver opacity-0 transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
            />
          </div>
          <div className="relative z-10 mt-8 transition-transform duration-500 ease-out group-hover:translate-x-1">
            <p className="font-display text-2xl font-semibold text-warm">{committee.abbr}</p>
            <p className="mt-1.5 text-sm leading-relaxed text-silver/75">{committee.name}</p>
          </div>
        </div>
      </BorderGlow>
    </Link>
  );
}
