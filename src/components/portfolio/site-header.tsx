import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { navLinks, profile } from '@/data/portfolio-data';
import { cn } from '@/lib/utils';

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
        type="button"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className={`inline-flex size-9 items-center justify-center rounded-full text-muted-foreground 
            transition-colors hover:bg-muted hover:text-primary focus-visible:outline-2 focus-visible:outline-ring cursor-pointer`}
    >
        <Sun className="size-[20px] dark:hidden" aria-hidden="true" />
        <Moon className="hidden size-[20px] dark:block" aria-hidden="true" />
        <span className="sr-only">Cambiar tema claro u oscuro</span>
    </button>
  )
}

export const SiteHeader = () => {
  const [active, setActive] = useState<string>('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = [ 'inicio', ...navLinks.map( link => link.id ) ]
      .map( id => document.getElementById(id) )
      .filter( (element): element is HTMLElement => element !== null )

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-2 border-border/60 bg-background/75 backdrop-blur-lg">
      <nav aria-label="Principal" className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
            <div
                onClick={ () => { 
                        scrollTo(0,0);
                    } 
                }
                className="font-mono text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary cursor-pointer"
            >
                {`<${profile.name} />`}
            </div>

            <div className="flex items-center gap-1">
                <ul className="hidden items-center gap-1 sm:flex">
                    {
                        navLinks.map( link => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    aria-current={active === link.id ? 'true' : undefined}
                                    className={
                                        cn(
                                            'rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary',
                                            active === link.id && 'bg-muted text-primary',
                                        )
                                    }
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>

                <ThemeToggle />

                <button
                    type="button"
                    onClick={ () => setOpen( open => !open ) }
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    className="inline-flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:hidden"
                >
                    {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
                    <span className="sr-only">{open ? 'Cerrar menú' : 'Abrir menú'}</span>
                </button>
            </div>
      </nav>

      {
        open && (
                <ul id="mobile-menu" className="flex flex-col gap-1 border-t border-border/60 px-5 py-3 sm:hidden">
                    {
                        navLinks.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={`#${link.id}`}
                                    onClick={() => setOpen(false)}
                                    aria-current={active === link.id ? 'true' : undefined}
                                    className={cn(
                                    'block rounded-lg px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
                                    active === link.id && 'bg-muted text-foreground',
                                    )}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))
                    }
                </ul>
            )
        }
    </header>
  )
}