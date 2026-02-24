
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