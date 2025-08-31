# Threads Clone - Premium Streetwear E-commerce

A modern, responsive e-commerce website built with Next.js, TypeScript, and Tailwind CSS. This project replicates the design and functionality of a premium streetwear clothing brand website.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with premium aesthetics
- **Responsive Layout**: Fully responsive across all devices
- **Interactive Components**: Hover effects, animations, and smooth transitions
- **Product Showcase**: Featured products with detailed cards
- **Category Navigation**: Easy browsing by product categories
- **Search Functionality**: Integrated search with expandable search bar
- **Shopping Cart**: Cart icon with item count
- **Newsletter Signup**: Email subscription for updates
- **Social Media Integration**: Links to social platforms

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Images**: Unsplash (for demo purposes)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Hero banner
│   ├── CategorySection.tsx # Product categories
│   ├── ProductCard.tsx    # Individual product card
│   ├── FeaturedProducts.tsx # Featured products grid
│   ├── PromotionalBanner.tsx # Promotional section
│   └── Footer.tsx         # Footer with links
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Black (#000000)
- **Secondary**: Light Gray (#f8f8f8)
- **Accent**: Orange (#ff6b35)
- **Text**: Dark Gray (#0f0f0f)
- **Muted**: Gray (#6b7280)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold weights for impact
- **Body Text**: Regular weights for readability

### Components
- **Header**: Sticky navigation with search, cart, and mobile menu
- **Hero Section**: Full-screen banner with call-to-action buttons
- **Category Cards**: Hover effects with image scaling
- **Product Cards**: Interactive elements with quick actions
- **Footer**: Comprehensive links and newsletter signup

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd threads-clone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎯 Key Components Analysis

### Header Component
- **Logo**: Brand identity with "THREADS" text
- **Navigation**: Main menu items (Men, Women, Kids, Accessories, Sale)
- **Search**: Expandable search bar with icon
- **User Actions**: Account, cart with item count
- **Mobile Menu**: Hamburger menu for mobile devices

### Hero Section
- **Background**: High-quality fashion image with overlay
- **Typography**: Large, bold text with accent colors
- **Call-to-Action**: Primary and secondary buttons
- **Scroll Indicator**: Animated scroll hint

### Product Cards
- **Image Display**: Product images with hover scaling
- **Badges**: New and sale indicators
- **Quick Actions**: Wishlist, view, and quick add buttons
- **Pricing**: Current and original prices with discount calculation
- **Hover Effects**: Smooth transitions and animations

### Category Section
- **Grid Layout**: Responsive grid for category cards
- **Image Overlays**: Text overlays on category images
- **Hover Effects**: Scale and color transitions

## 🔧 Customization

### Colors
Update the CSS variables in `globals.css`:
```css
:root {
  --primary: #000000;
  --accent: #ff6b35;
  /* ... other colors */
}
```

### Fonts
Change the font in `layout.tsx`:
```tsx
import { YourFont } from 'next/font/google';
```

### Images
Replace Unsplash URLs with your own product images in the component files.

## 📦 Build and Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Please respect the original Threads brand and use this clone responsibly.

## 🙏 Acknowledgments

- **Unsplash**: For high-quality stock images
- **Lucide React**: For beautiful icons
- **Tailwind CSS**: For utility-first styling
- **Next.js**: For the amazing React framework

---

**Note**: This is a clone project for educational purposes. All product images and content are for demonstration only.
