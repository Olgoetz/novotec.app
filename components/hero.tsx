import coreCompetencies from "@/data/coreCompetencies";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay for better text readability - covers everything */}
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Hero Content - added more top padding to account for navbar */}
      <div className="relative z-10 flex min-h-screen flex-col justify-start pt-40 md:justify-center px-4 md:pt-48 md:px-8 lg:px-16">
        <div className="max-w-4xl">
          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl [text-shadow:_2px_2px_8px_rgb(0_0_0_/_60%)]">
            Ihre Vision.
            <br />
            <span className="text-red-600">Unser Handwerk.</span>
          </h1>

          {/* Red accent line */}
          <div className="mb-6 h-1 w-16 bg-red-600 shadow-[0_2px_8px_rgba(220,38,38,0.5)]" />

          {/* Subtitle */}
          <p className="mb-12 max-w-xl text-lg text-white drop-shadow-md md:text-xl">
            Ihr erfahrener Partner für erstklassige Leistungen im Ausbau- und
            Sanierungsmanagement.
          </p>
        </div>

        {/* Core Competencies Card - hidden on mobile, visible on desktop */}
        <div className="mt-auto mb-6 hidden md:flex w-full justify-center">
          <div className="w-full max-w-6xl rounded-xl bg-gray-900/80 backdrop-blur-sm p-6 md:p-8">
            <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-white">
              Unsere Kernkompetenzen
            </h2>

            {/* Competencies in single row with vertical dividers */}
            <div className="flex flex-wrap justify-center lg:flex-nowrap lg:items-start">
              {coreCompetencies.map((c, index) => (
                <div key={c.title} className="flex items-start">
                  <Link
                    href="/leistungen"
                    className="group flex flex-col items-center px-3 py-2 text-center transition-transform hover:scale-105 lg:px-4 xl:px-5"
                  >
                    <div className="mb-3 flex h-12 w-12 lg:h-14 lg:w-14 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
                      {c.icon && <c.icon className="h-6 w-6 lg:h-7 lg:w-7" />}
                    </div>
                    <span className="text-[10px] lg:text-xs font-medium text-white/90 leading-tight whitespace-pre-line min-h-[2.5rem]">
                      {c.heroTitle || c.title}
                    </span>
                  </Link>
                  {/* Vertical divider - not after the last item */}
                  {index < coreCompetencies.length - 1 && (
                    <div className="hidden lg:block h-20 w-px bg-white/30 self-center" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Badge & CTA */}
        <div className="mb-12 flex flex-col mt-24 md:mt-0 items-center gap-6 md:flex-row md:items-center md:gap-8">
          {/* Trust Badge */}
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-transparent">
              {/* Shield outline with checkmark - matches example */}
              <svg
                viewBox="0 0 24 24"
                className="h-16 w-16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shield outline */}
                <path
                  d="M12 3L4 7v5c0 4.5 3.4 8.7 8 10 4.6-1.3 8-5.5 8-10V7l-8-4z"
                  stroke="#dc2626"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Checkmark */}
                <path
                  d="M8.5 12.5l2.5 2.5 4.5-5"
                  stroke="#ffffff"
                  strokeWidth="1.0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <div className="flex flex-col justify-center text-white">
              <p className="font-semibold">15 Jahre Erfahrung.</p>
              <p className="font-semibold">
                Zahlreiche erfolgreich abgeschlossene Projekte.
              </p>
              <p className="text-sm text-white/70">
                Qualität, auf die Sie bauen können.
              </p>
            </div>
          </div>

          {/* CTA Button - different for mobile and desktop */}
          {/* Mobile: Arrow down to scroll to competencies */}
          <a
            href="#mobile-competencies"
            className="md:hidden flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white transition-colors hover:bg-red-700"
            aria-label="Zu den Kernkompetenzen scrollen"
          >
            <ChevronDown className="h-8 w-8" />
          </a>
          {/* Desktop: Mehr erfahren button */}
          <div className="hidden md:block">
            <Link
              href="/leistungen"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-red-600 px-6 py-3 font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-700"
            >
              Mehr erfahren
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
