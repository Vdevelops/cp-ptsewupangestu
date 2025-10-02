# SkyWander Travel Agency - Company Profile Website

A modern, responsive company profile website for a travel agency built with Next.js, TypeScript, Tailwind CSS, and Shad UI components.

## Features

- 🎨 Modern UI with sky blue color scheme
- 📱 Fully responsive design
- 🚀 Smooth scrolling navigation
- 💬 WhatsApp integration for customer support
- 🎭 Beautiful animations and transitions
- 📊 Company statistics and testimonials
- 🏢 Branch locations showcase
- 🤝 Partners and services sections

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shad UI (Radix UI primitives)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd company-profile
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── sections/       # Page sections
├── lib/                # Utility functions
├── types/              # TypeScript type definitions
├── data/               # Static data and content
└── assets/             # Images and other assets
```

## Sections

1. **Header** - Hero section with carousel and company introduction
2. **About Us** - Company information, mission, vision, and branch locations
3. **Services** - Travel services and packages offered
4. **Partners** - Trusted partners and collaboration benefits
5. **Testimonials** - Customer reviews and feedback
6. **Footer** - Contact information and links

## Customization

### Colors
The website uses a sky blue color scheme. You can customize colors in:
- `tailwind.config.js` - Tailwind configuration
- `src/app/globals.css` - CSS variables

### Content
Update company information in `src/data/company-data.ts`:
- Company details
- Services offered
- Branch locations
- Partners
- Testimonials

### Images
Add your images to `src/assets/images/` and update the paths in the components.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Manual Deployment

```bash
npm run build
npm start
```

## Features in Detail

### Navigation
- Smooth scroll to sections
- Active section highlighting
- Mobile-responsive menu

### WhatsApp Integration
- Floating WhatsApp button
- Appears after scrolling past header
- Direct link to WhatsApp chat

### Animations
- Fade-in animations
- Hover effects
- Smooth transitions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email info@skywander.com or contact us through our website.