import { UserRound } from 'lucide-react';
import { profile } from '@/data/portfolio-data';
import { SectionTitle } from './section-title';
import { Logo } from './logo';
import { useTheme } from 'next-themes';

export function About() {
  const { resolvedTheme } = useTheme();

  return (
    <section aria-labelledby="sobre-mi-title" id="sobre-mi" className="scroll-mt-20 pt-20">
      <SectionTitle icon={UserRound} title="Sobre mí" id="sobre-mi-title" />

      <div className="flex flex-col-reverse gap-10 md:flex-row md:items-start">
        <div className="space-y-5 leading-relaxed text-pretty text-muted-foreground md:basis-2/3">
          <p>
            Me interesé en la creación de páginas Web cuando, de adolescente, encontré un manual de HTML3. 
            Algunos años después me inicié en la programación haciendo un mod para el videojuego 
            Europa Universalis IV y, movido por estas experiencias, cursé el ciclo superior de {' '}
            <strong className="font-semibold text-foreground">Desarrollo de Aplicaciones Web</strong>.
          </p>
          <p>
            Comencé mi carrera profesional manteniendo una aplicación de {' '}
            <strong className="font-semibold text-foreground">AngularJS</strong> y luego di el salto  
            a <strong className="font-semibold text-foreground">QA</strong> {' '}
            tras interesarme por la <strong className="font-semibold text-foreground">automatización</strong> de pruebas. 
            Desde entonces he trabajado en varios equipos haciendo uso de {' '}
            <strong className="font-semibold text-foreground">metodologías agile</strong> {' '}
            y empleando tecnologías como: {' '}
            <strong className="font-semibold text-foreground">Java</strong>, {' '}
            <strong className="font-semibold text-foreground">Selenium</strong>, {' '} 
            <strong className="font-semibold text-foreground">Cucumber</strong>, {' '} 
            <strong className="font-semibold text-foreground">Git</strong> y {' '}
            <strong className="font-semibold text-foreground">Postman</strong>. 
            Trabajando, principalmente, en proyectos del {' '}
            <strong className="font-semibold text-foreground">sector banca</strong>.
          </p>
          <p>
            Actualmente me apasiona programar usando el entorno de <span className="text-primary font-semibold">TypeScript</span> y, 
            en particular, crear aplicaciones <span className="text-foreground font-semibold">frontend</span> con {' '}
            <span className="text-primary font-semibold">React</span> y {' '}
            <span className="text-primary font-semibold">Angular</span>. Valoro especialmente {' '} 
            realizar códigos legibles y robustos que permitan su fácil {' '}
            <strong className="font-semibold text-foreground">mantenimiento</strong> {' '}
            y, sobretodo, la <strong className="font-semibold text-foreground">calidad del producto</strong>.
          </p>
        </div>

        <div className="flex items-center justify-center md:basis-1/3">
          <img
            src={profile.photo}
            loading="lazy"
            alt={`Retrato de ${profile.name}`}
            width={320}
            height={320}
            className="aspect-square w-48 md:rotate-3 border-2 md:border-primary md:border-dashed md:p-2 rounded-2xl object-cover shadow-lg ring-1 ring-border md:w-full"
          />
        </div>
      </div>
      <div className="flex flex-1 w-full justify-center items-center mt-2">
        <Logo theme={resolvedTheme ?? 'dark'} svgProps={{ className: "h-70 w-70 md:h-95 md:w-95" }} />
      </div>
    </section>
  )
}
