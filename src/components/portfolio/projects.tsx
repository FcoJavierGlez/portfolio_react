import { ExternalLink, FolderCode } from 'lucide-react';
import { projects } from '@/data/projects-data';
import { GitHubIcon, YouTubeIcon } from './brand-icons';
import { SectionTitle } from './section-title';
import type { Project } from '@/interfaces/project.interface';
import { cn } from 'cn';
import { TechLabel } from './tech-label';

const linkClass =
  'inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring hover:text-primary'

function ProjectCard({ project }: { project: Project }) {
  const { github, preview, youtube } = project.links

  return (
    <article className="group grid overflow-hidden rounded-2xl border border-border bg-card md:grid-cols-2 cursor-pointer">
      <div className="relative aspect-video overflow-hidden bg-muted md:aspect-auto md:min-h-72">
        <img
          src={project.image}
          alt={`Captura del proyecto ${project.title}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
        />
      </div>

      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <h3 className="text-xl font-bold tracking-tight text-card-foreground">{project.title}</h3>
        <ul className="flex flex-wrap gap-2" aria-label="Tecnologías usadas">
          {
            project.tech.map((tech) => (
              <TechLabel techName={tech}/>
            ))
          }
        </ul>

        <div className='font-semibold'>
          <span className="text-foreground">{project.kind}</span>
        </div>
        <p className="leading-relaxed text-pretty text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <GitHubIcon className="size-4" />
              Código
              <span className="sr-only"> de {project.title} en GitHub</span>
            </a>
          )}
          {preview && (
            <a href={preview} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <ExternalLink className="size-4" aria-hidden="true" />
              Preview
              <span className="sr-only"> de {project.title}</span>
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer" className={cn(linkClass,"youtube")}>
              <YouTubeIcon className={`size-4 youtube`} />
              Video
              <span className="sr-only"> de {project.title} en YouTube</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export const Projects = () => {
  return (
    <section aria-labelledby="proyectos-title" id="proyectos" className="scroll-mt-20 py-20">
      <SectionTitle icon={FolderCode} title="Proyectos" id="proyectos-title" />
      <div className="flex flex-col gap-8">
        {
          projects.map( project => (
              <ProjectCard key={project.title} project={project} />
            )
          )
        }
      </div>
    </section>
  )
}
