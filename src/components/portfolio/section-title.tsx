import type { LucideIcon } from 'lucide-react'

export const SectionTitle = ({ icon: Icon, title, id }: { icon: LucideIcon; title: string; id: string }) => {
  return (
    <div className="mb-12">
      <h2 id={id} className="flex items-center gap-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
        <Icon className="size-7 shrink-0 text-foreground" aria-hidden="true" />
        {title}
      </h2>
      <div className="mt-3 h-0.5 w-20 rounded-full bg-gradient-to-r from-primary to-transparent" aria-hidden="true" />
    </div>
  )
}