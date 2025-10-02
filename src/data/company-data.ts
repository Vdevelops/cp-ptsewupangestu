import { Service, Branch, Partner, Testimonial, ClientSegment, Advantage } from '@/types'

export const companyInfo = {
  name: "PT Sewu Pangestu Lestari",
  tagline: "Excellence in Cleaning & Security Solutions",
  description: "Sebagai penyedia solusi kebersihan dan keamanan terdepan di Indonesia, kami menghadirkan layanan profesional dengan standar internasional. Dengan pengalaman 14+ tahun melayani berbagai industri, kami berkomitmen memberikan solusi terintegrasi yang meningkatkan produktivitas dan keamanan bisnis Anda.",
  founded: "2010",
  employees: "200+",
  customers: "500+",
  vision: "Menjadi mitra terpercaya nomor satu dalam solusi kebersihan dan keamanan di Indonesia dengan standar internasional yang diakui global",
  mission: "Menyediakan solusi kebersihan dan keamanan terintegrasi berkualitas tinggi melalui inovasi berkelanjutan, pelayanan prima, dan komitmen total terhadap kepuasan pelanggan"
}

export const services: Service[] = [
  {
    id: "cleaning-services",
    title: "Professional Cleaning Services",
    description: "Layanan pembersihan berstandar internasional dengan teknologi canggih dan protokol kesehatan yang ketat untuk berbagai jenis properti komersial dan industri.",
    icon: "Sparkles",
    features: ["Office Cleaning", "Industrial Cleaning", "Residential Services", "Deep Cleaning & Sanitization"]
  },
  {
    id: "security-services",
    title: "Integrated Security Solutions",
    description: "Sistem keamanan berteknologi tinggi dengan personel bersertifikat dan terlatih untuk memberikan perlindungan optimal 24/7.",
    icon: "Shield",
    features: ["Professional Security Guards", "24/7 CCTV Monitoring", "Access Control Systems", "Emergency Response"]
  },
  {
    id: "integrated-packages",
    title: "Comprehensive Solutions",
    description: "Paket solusi terintegrasi yang menggabungkan layanan kebersihan dan keamanan untuk efisiensi operasional maksimal dengan single point of contact.",
    icon: "Package",
    features: ["24/7 Service Coverage", "Customized Solutions", "Competitive Pricing", "Single Point of Contact"]
  }
]

export const branches: Branch[] = [
  {
    id: "jakarta",
    name: "Jakarta Head Office",
    address: "Jl. Sudirman No. 123, Jakarta Selatan",
    phone: "+62 21 1234 5678",
    city: "Jakarta"
  },
  {
    id: "surabaya",
    name: "Surabaya Branch",
    address: "Jl. Tunjungan No. 45, Surabaya",
    phone: "+62 31 9876 5432",
    city: "Surabaya"
  },
  {
    id: "bandung",
    name: "Bandung Branch",
    address: "Jl. Dago No. 78, Bandung",
    phone: "+62 22 5555 1234",
    city: "Bandung"
  }
]

export const clientSegments: ClientSegment[] = [
  {
    id: "corporate",
    name: "Corporate Offices",
    description: "Solusi kebersihan dan keamanan premium untuk gedung perkantoran dan korporasi dengan standar internasional dan protokol ketat",
    icon: "Building"
  },
  {
    id: "industrial",
    name: "Industrial Facilities",
    description: "Layanan terintegrasi khusus untuk pabrik dan kawasan industri dengan fokus pada efisiensi operasional dan compliance standar industri",
    icon: "Factory"
  },
  {
    id: "residential",
    name: "Residential Complexes",
    description: "Solusi komprehensif untuk kompleks perumahan, apartemen, dan kondominium dengan layanan 24/7 yang dapat diandalkan",
    icon: "Home"
  },
  {
    id: "commercial",
    name: "Commercial Properties",
    description: "Layanan khusus untuk mall, hotel, pusat perbelanjaan, dan properti komersial dengan standar hospitality yang tinggi",
    icon: "Store"
  }
]

export const advantages: Advantage[] = [
  {
    id: "professional-team",
    title: "Certified Professional Team",
    description: "Personel terlatih dan bersertifikat dengan pengalaman bertahun-tahun serta standar kompetensi internasional yang diakui industri",
    icon: "Users"
  },
  {
    id: "modern-equipment",
    title: "Advanced Technology & Equipment",
    description: "Menggunakan teknologi dan peralatan terdepan dengan standar internasional untuk memberikan hasil optimal dan efisiensi maksimal",
    icon: "Wrench"
  },
  {
    id: "flexible-schedule",
    title: "24/7 Flexible Service",
    description: "Layanan 24 jam dengan jadwal yang dapat disesuaikan dengan kebutuhan operasional klien untuk memastikan kontinuitas bisnis",
    icon: "Clock"
  },
  {
    id: "competitive-pricing",
    title: "Competitive & Transparent Pricing",
    description: "Paket layanan dengan harga kompetitif, transparan, dan memberikan nilai terbaik untuk investasi jangka panjang bisnis Anda",
    icon: "DollarSign"
  }
]

export const partners: Partner[] = [
  {
    id: "garuda",
    name: "Garuda Indonesia",
    logo: "/assets/images/logo/ptsewu.png",
    website: "https://www.garuda-indonesia.com"
  },
  {
    id: "lion-air",
    name: "Lion Air",
    logo: "/assets/images/logo/ptsewu.png",
    website: "https://www.lionair.co.id"
  },
  {
    id: "hotel-bali",
    name: "Bali Hotels",
    logo: "/assets/images/logo/ptsewu.png",
    website: "https://www.balihotels.com"
  },
  {
    id: "tour-guide",
    name: "Professional Tour Guides",
    logo: "/assets/images/logo/ptsewu.png",
    website: "https://www.tourguides.com"
  },
  {
    id: "mandiri",
    name: "Bank Mandiri",
    logo: "/assets/images/logo/ptsewu.png",
    website: "https://www.bankmandiri.co.id"
  },
  {
    id: "bca",
    name: "Bank BCA",
    logo: "/assets/images/logo/ptsewu.png",
    website: "https://www.bca.co.id"
  },
  {
    id: "telkom",
    name: "Telkom Indonesia",
    logo: "/assets/images/logo/ptsewu.png",
    website: "https://www.telkom.co.id"
  },
  {
    id: "pertamina",
    name: "Pertamina",
    logo: "/assets/images/logo/ptsewu.png",
    website: "https://www.pertamina.com"
  }
]

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Budi Santoso",
    role: "General Manager, PT Maju Jaya",
    content: "Layanan kebersihan dan keamanan dari PT Sewu Pangestu Lestari sangat profesional dan memuaskan. Tim mereka responsif, terlatih, dan berkomitmen tinggi. Gedung kantor kami selalu terjaga kebersihan dan keamanannya dengan standar internasional yang konsisten.",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Sari Dewi",
    role: "Property Manager, Grand Residence",
    content: "Kami telah mempercayakan properti kepada mereka selama 3 tahun. Pelayanan 24/7 yang konsisten dan personel yang terlatih serta bersertifikat membuat properti kami terjaga dengan standar tertinggi. Highly recommended!",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Ahmad Wijaya",
    role: "Factory Owner, PT Industri Mandiri",
    content: "Solusi terintegrasi kebersihan dan keamanan mereka sangat membantu efisiensi operasional pabrik kami. Layanan yang efisien, cost-effective, dan memberikan nilai tambah yang signifikan untuk bisnis kami. Excellent service!",
    rating: 5
  }
]

export const navItems = [
  { title: "Home", href: "#home" },
  { title: "About Us", href: "#about" },
  { title: "Services", href: "#services" },
  { title: "Client Segments", href: "#clients" },
  { title: "Advantages", href: "#advantages" },
  { title: "Contact", href: "#contact" }
]
