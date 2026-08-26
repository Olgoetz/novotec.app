import coreCompetencies from "@/data/coreCompetencies";
import Link from "next/link";

export const MobileCompetencies = () => {
  return (
    <section
      id="mobile-competencies"
      className="block md:hidden bg-gray-900 py-8 px-4 scroll-mt-20"
    >
      <div className="max-w-lg mx-auto">
        <h2 className="mb-6 text-center text-sm font-semibold uppercase tracking-wider text-white">
          Unsere Kernkompetenzen
        </h2>

        {/* Competencies list - 1 per row on mobile */}
        <div className="flex flex-col gap-4">
          {coreCompetencies.map((c) => (
            <Link
              key={c.title}
              href="/leistungen"
              className="group flex items-center gap-4 rounded-lg bg-white/5 p-4 transition-colors hover:bg-white/10"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-white/20">
                {c.icon && <c.icon className="h-6 w-6" />}
              </div>
              <span className="text-sm font-medium text-white/90">
                {c.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
