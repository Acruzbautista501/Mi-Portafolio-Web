
export interface Skill {
  id: number
  icon: [string, string]
  skill: string
}

export interface Experience {
  id: number
  company: string
  role: string
  period: string
  location: string 
  description: string
  color?: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link: string
  github: string
}