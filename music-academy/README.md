# 🎵 Music Academy Website

A modern, responsive website for a music academy built with Next.js 15, React 19, and Tailwind CSS. This project showcases a comprehensive music learning platform with course listings, instructor profiles, testimonials, and interactive features.

## ✨ Features

- **🎯 Hero Section** - Engaging landing page with call-to-action
- **📚 Course Catalog** - Browse and explore various music courses
- **👨‍🏫 Instructor Profiles** - Meet the talented music instructors
- **⭐ Testimonials** - Student reviews and success stories
- **🎓 Featured Webinars** - Upcoming live learning sessions
- **💡 Why Choose Us** - Highlighting academy benefits
- **📞 Contact Page** - Get in touch with the academy
- **🎨 Modern UI/UX** - Beautiful animations and responsive design
- **⚡ Performance Optimized** - Built with Next.js for fast loading

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Icons**: Custom SVG components
- **Development**: ESLint, Turbopack
- **Deployment**: Vercel-ready

## 📦 Dependencies

### Core Dependencies
- `next`: Latest version
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `motion`: ^12.23.0 (Framer Motion)
- `clsx`: ^2.1.1
- `tailwind-merge`: ^3.3.1
- `simplex-noise`: ^4.0.3

### Development Dependencies
- `typescript`: ^5
- `tailwindcss`: ^4
- `eslint`: ^9
- `@types/react`: ^19
- `@types/node`: ^20

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd music-academy
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
music-academy/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── contact/           # Contact page
│   │   └── courses/           # Courses page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── HeroSection.tsx   # Landing hero
│   │   ├── Navbar.tsx        # Navigation
│   │   ├── FeaturedCourses.tsx
│   │   ├── Instructors.tsx
│   │   ├── TestimonialCards.tsx
│   │   ├── FeaturedWebinars.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Footer.tsx
│   │   └── meteors.tsx       # Animation component
│   ├── data/                 # Static data
│   │   └── music_courses.json
│   └── lib/                  # Utility functions
├── public/                   # Static assets
│   └── courses/             # Course images
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.js
```

## 🎨 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Course Categories

The academy offers various music courses including:

- **Guitar Fundamentals** - Beginner guitar lessons
- **Piano for Beginners** - Foundation piano skills
- **Advanced Vocal Techniques** - Professional singing
- **Drumming Mastery** - Complete drum course
- **Jazz Improvisation** - Jazz music techniques
- **Music Production** - Sound engineering basics
- **Songwriting Essentials** - Creative composition
- **Electronic Music Production** - Digital music creation
- **Classical Music History** - Music theory and history
- **Blues Guitar Techniques** - Blues style playing

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

### Performance
- Next.js 15 with App Router
- Turbopack for fast development
- Optimized images and assets
- Server-side rendering

### Modern UI/UX
- Smooth animations with Framer Motion
- Interactive components
- Beautiful gradients and effects
- Professional typography

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Built as part of the Next.js learning course by Hitesh Chaudhary.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first styling
- Framer Motion for smooth animations
- All contributors and students

---

**Happy Coding! 🎵**
