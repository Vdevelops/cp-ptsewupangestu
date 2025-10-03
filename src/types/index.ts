export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Branch {
  id: string
  name: string
  address: string
  phone: string
  city: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  website?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  rating: number
  avatar?: string
}

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
}

export interface ClientSegment {
  id: string
  name: string
  description: string
  icon: string
}

export interface Advantage {
  id: string
  title: string
  description: string
  icon: string
}

export interface ShowcaseItem {
  id: string
  title: string
  description: string
  image: string
  category: 'project' | 'layanan'
  details: string[]
  client?: string
  year?: string
  location?: string
}
