export const navLinks = [
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'sobre-mi', label: 'Sobre mí' },
] as const

const URL = import.meta.env.BASE_URL;

export const profile = {
  name: 'Francisco Javier',
  role: 'Frontend Developer',
  location: 'Córdoba, España',
  photo: `${URL}/images/profile_photo.png`,
  github: 'https://github.com/FcoJavierGlez',
  linkedin: 'https://www.linkedin.com/in/francisco-javier-gonz%C3%A1lez-sabariego-51052a175/',
  email: 'FJGS_86@hotmail.com',
}