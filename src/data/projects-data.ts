import type { Project } from "@/interfaces/project.interface";

export const projects: Project[] = [
  {
    title: 'E-commerce - Amazon like',
    kind: 'Frontend',
    description:
      `Tienda online inspirada en Amazon con carrito persistente, búsqueda de productos por etiquetas o nombre, 
      sugerencia de productos similares, uso de token para enrutamientos seguros, etc.`,
    image: `${import.meta.env.BASE_URL}/images/projects/project-amazon-like-angular.png`,
    tech: ['Angular 12', 'Angular Material', 'TypeScript', 'Bootstrap 5'],
    links: {
      github: 'https://github.com/FcoJavierGlez/tienda-online',
      // preview: 'https://example.com',
      youtube: 'https://www.youtube.com/watch?v=g4le1tt5_as',
    },
  },
]