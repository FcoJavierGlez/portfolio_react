import { ArrowRight, Briefcase } from 'lucide-react';
import { experiences } from '@/data/experience-data';
import { SectionTitle } from './section-title';

function TimelineDot({ pulse }: { pulse: boolean }) {
  return (
    <span className="absolute top-2 left-[-5px] flex size-3" aria-hidden="true">
      {pulse && (
        <span className="absolute inline-flex size-full right-[1px] bottom-[1px] animate-ping rounded-full bg-primary opacity-805 motion-reduce:hidden" />
      )}
      <span className="relative inline-flex size-2.5 rounded-full bg-primary" />
    </span>
  )
}

export function Experience() {
  return (
    <section aria-labelledby="experiencia-title" id="experiencia" className="scroll-mt-20 py-20">
      <SectionTitle icon={Briefcase} title="Experiencia laboral" id="experiencia-title" />

      <ol className="relative ml-1.5 border-l border-border">
        {experiences.map((exp, index) => (
          <li key={`${exp.company}-${exp.period}`} className="relative pb-14 pl-8 last:pb-2 sm:pl-10">
            <TimelineDot pulse={index === 0} />
            <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-10">
              <div>
                <h3 className="text-lg font-semibold text-primary">{exp.role}</h3>
                <p className="text-lg font-medium text-foreground">{exp.company}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  <time>{exp.period}</time>
                </p>
              </div>
              <div className="space-y-4">
                <p className="leading-relaxed text-pretty text-muted-foreground">{exp.description}</p>
                {exp.link && (
                  <a
                    href={exp.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 font-medium text-primary hover:underline underline-offset-4"
                  >
                    {exp.link.label}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
