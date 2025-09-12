"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import Image from "next/image";

interface Sponsor {
  logo: string;
  alt: string;
}

const sponsors: Sponsor[] = [
  { logo: "/assets/Kinedu.png", alt: "Acmebrand" },
  { logo: "/assets/gruposalinas.png", alt: "Acmebrand" },
  { logo: "/assets/axity.png", alt: "Acmebrand" },
  { logo: "/assets/once.webp", alt: "Acmebrand" },
  { logo: "/assets/vonman.png", alt: "Acmebrand" },
  { logo: "/assets/crateclogo.png", alt: "Acmebrand" },
  { logo: "/assets/chocodrop.png", alt: "Acmebrand" },
  { logo: "/assets/upax.webp", alt: "Acmebrand" },

];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">
        Our Platinum Sponsors
      </h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ logo, alt }) => (
            <div key={alt} className="flex items-center">
              <Image
                src={logo}
                alt={alt}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};