import { SiteHeader } from '@/components/portfolio/site-header';
import { Owner } from '@/components/portfolio/owner';
import { Experience } from '@/components/portfolio/experience';
import { Projects } from '@/components/portfolio/projects';
import { About } from '@/components/portfolio/about';
import { profile } from '@/data/portfolio-data';

export default function PortfolioApp() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5">
        <Owner />
        <Experience />
        <Projects />
        <About />
      </main>
      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>
            © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
          </p>
          <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">
            Contacto
          </a>
        </div>
      </footer>
    </>
  )
}