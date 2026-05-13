# 🐾 Sentryx-Pet — Pet Care Done Right

A pixel-perfect replica of the Sentryx-Pet pet care e-commerce website, built with **Next.js**, **React**, and **Tailwind CSS**.

---

## 🖼️ Design Reference
Faithfully replicates the Sentryx-Pet Dribbble design including:
- Purple hero section with animated dog SVG illustration
- Browse by Pet Type cards
- Top Rated & Best Selling Products grid
- Expert Pet Care Guides
- Subscription banner
- Book Care Services section
- Customer Testimonials with dot navigation
- Community email signup + footer

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
sentryx-pet/
├── components/
│   ├── Navbar.js           # Sticky nav with mobile hamburger menu
│   ├── Hero.js             # Purple hero + custom SVG dog illustration
│   ├── BrowseByPet.js      # 4-column pet type cards
│   ├── TopRatedProducts.js # 3-column product grid with badges
│   ├── ExpertGuides.js     # 3-column colored guide cards
│   ├── Subscription.js     # Green subscription banner
│   ├── CareServices.js     # 3-column service booking cards
│   ├── Testimonials.js     # Testimonial carousel with dot nav
│   └── Footer.js           # Community signup + footer links + watermark
├── pages/
│   ├── _app.js             # Global styles wrapper
│   └── index.js            # Main page assembling all components
├── styles/
│   └── globals.css         # Tailwind base + custom animations
├── tailwind.config.js      # Custom colors, fonts, animations
├── postcss.config.js
└── package.json
```

---

## 🎨 Color Palette

| Token            | Hex       | Usage                        |
|------------------|-----------|------------------------------|
| `purple-light`   | `#c8b6ff` | Hero background              |
| `purple-dark`    | `#7c3aed` | Buttons, accents, collar     |
| `navy`           | `#1e1b4b` | Headings, text, dark buttons |
| `navy-soft`      | `#312e81` | Subheadings, secondary text  |
| `yellow`         | `#fde68a` | Testimonials background      |
| `yellow-light`   | `#fef9c3` | Card backgrounds             |
| `green-light`    | `#bbf7d0` | Subscription section         |
| `orange-light`   | `#fed7aa` | Products section background  |
| `blue-light`     | `#bfdbfe` | Cat card accent              |

---

## ✨ Features

- **Fully responsive** — mobile, tablet, desktop
- **Scroll animations** — IntersectionObserver fade-up reveals
- **Floating dog** — CSS keyframe animation on hero + subscription
- **Interactive** — cart counter, testimonial dots, mobile hamburger
- **Custom SVG dog** — hand-crafted inline illustration (no image deps)
- **Hover effects** — card lift on products, guides, pet type cards
- **Staggered animations** — cascade delays on grid items
- **Reusable components** — each section is a standalone component

---

## 🛠️ Tech Stack

- **Next.js 14** — App framework
- **React 18** — Component library  
- **Tailwind CSS 3** — Utility-first styling
- **Google Fonts** — Fredoka One (display) + Nunito (body)

---

## 📝 Notes

- All product images use emoji placeholders (replace with real images via `next/image`)
- Cart counter is local state — connect to a state manager (Zustand/Redux) for production
- Email subscription form is UI-only — wire to a backend/Mailchimp for production
- Testimonials carousel auto-advances; dots allow manual navigation


just for testing....