import { Mail, MapPin } from 'lucide-react';
import { profile } from '@/data/portfolio-data';
import { GitHubIcon, LinkedInIcon } from './brand-icons';

const pillClass =
  `inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring hover:text-primary`

export const Owner = () => {
  return (
    <section id="inicio" aria-labelledby="owner-title" className="scroll-mt-20 pt-16 pb-24 sm:pt-24 sm:pb-32">
      <div className="flex flex-col items-start gap-8">
        <div className="flex items-center gap-4">
          <img
            src={profile.photo}
            alt={`Foto de ${profile.name}`}
            width={80}
            height={80}
            fetchPriority="high"
            className="size-20 rounded-full object-cover ring-2 ring-primary/80 ring-offset-4 ring-offset-background"
          />
          <a href={`${profile.linkedin}`} target='_blank'>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent_success px-3 py-1 text-xs font-medium text-success cursor-pointer">{/* text-accent-foreground */}
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-success" />
              </span>
              Disponible para nuevos proyectos
            </span>
          </a>
        </div>

        <div className="space-y-5">
          <h1 id="hero-title" className="text-4xl font-bold tracking-tight text-balance sm:text-6xl">
            Hola, soy {profile.name}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground sm:text-xl">
            <span className="font-semibold text-primary">+4 años de experiencia</span>. {profile.role} en{' '}
            <span className="inline-flex items-center gap-1 text-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </span>
            .
            <br />
            Creo SPA robustas y accesibles con{' '}
            <span className="font-semibold text-primary">React</span> y <span className="font-semibold text-primary">Angular</span> usando{' '}
            <span className="font-semibold text-primary">TypeScript</span>.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className={pillClass}>
            <Mail className="size-4" aria-hidden="true" />
            Contáctame
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className={pillClass}>
            <GitHubIcon className="size-4" />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={pillClass}>
            <LinkedInIcon className="size-4" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}