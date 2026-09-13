import React from "react";

type ExperienceProps = {
  company: string;
  position: string;
  date: string;
  location?: string;
  summary: string;
  bullets: string[];
  stack: string[];
  current?: boolean;
};

const ExperienceCard: React.FC<ExperienceProps> = ({
  company,
  position,
  date,
  location,
  summary,
  bullets,
  stack,
  current = false,
}) => {
  return (
    <article>
      <header className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-foreground">
            {company}
          </h3>
          <p className="text-sm text-muted-foreground">
            {position}
            {location ? <span className="text-foreground/30"> · {location}</span> : null}
          </p>
        </div>
        <span
          className={`inline-flex w-fit items-center rounded-full border px-2.5 py-0.5 text-xs font-mono uppercase tracking-wider ${
            current
              ? "border-orange-200 bg-orange-50 text-brand-deep"
              : "border-border bg-secondary/60 text-muted-foreground"
          }`}
        >
          {date}
        </span>
      </header>

      <p className="mt-3 text-sm text-foreground/80 leading-relaxed">{summary}</p>

      <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border bg-secondary/60 px-2 py-0.5 text-[11px] text-foreground/70"
          >
            {s}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ExperienceCard;
