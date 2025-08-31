'use client';

import Link from 'next/link';

const categories = [
  {
    name: 'HATS & CAPS',
    icon: <img src="/images/icons8-cap-64.png" alt="Hats & Caps" className="w-7 h-7" />,
    href: '/category/hats-caps'
  },
  {
    name: 'TSHIRTS',
    icon: <img src="/images/icons8-tshirt-64.png" alt="T-Shirts" className="w-7 h-7" />,
    href: '/category/tshirts'
  },
  {
    name: 'WALLETS',
    icon: <img src="/images/icons8-wallet.gif" alt="Wallets" className="w-7 h-7" />,
    href: '/category/wallets'
  },
  {
    name: 'EYEWEAR',
    icon: <img src="/images/icons8-eyewear-48.png" alt="Eyewear" className="w-7 h-7" />,
    href: '/category/eyewear'
  },
  {
    name: 'SHIRTS',
    icon: <img src="/images/icons8-shirt-99.png" alt="Shirts" className="w-7 h-7" />,
    href: '/category/shirts'
  },
  {
    name: 'BOTTOMS',
    icon: <img src="/images/icons8-jeans-80.png" alt="Bottoms" className="w-7 h-7" />,
    href: '/category/bottoms'
  },
  {
    name: 'ACCESSORIES',
    icon: <img src="/images/icons8-belt-94.png" alt="Accessories" className="w-7 h-7" />,
    href: '/category/accessories'
  },
  {
    name: 'BACKPACK',
    icon: <img src="/images/icons8-bagpack-64.png" alt="Backpack" className="w-7 h-7" />,
    href: '/category/backpack'
  },
  {
    name: 'JACKETS',
    icon: <img src="/images/icons8-jacket-48.png" alt="Jackets" className="w-7 h-7" />,
    href: '/category/jackets'
  },
  {
    name: 'HOODIES',
    icon: <img src="/images/icons8-hoodie-100.png" alt="Hoodies" className="w-7 h-7" />,
    href: '/category/hoodies'
  }
];

const navigationButtons = [
  {
    name: 'NEW ARRIVALS',
    href: '/new-arrivals',
    isActive: true
  },
  {
    name: 'HATS & CAPS',
    href: '/category/hats-caps',
    isActive: false
  },
  {
    name: 'T-SHIRTS',
    href: '/category/tshirts',
    isActive: false
  },
  {
    name: 'WALLETS',
    href: '/category/wallets',
    isActive: false
  },
  {
    name: 'EYEWEAR',
    href: '/category/eyewear',
    isActive: false
  },
  {
    name: 'SHIRTS',
    href: '/category/shirts',
    isActive: false
  }
];

export default function CategoryGrid() {
  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Horizontal Scrollable Categories */}
        <div className="flex overflow-x-auto scrollbar-hide gap-0 pb-1">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex-shrink-0 text-center min-w-[80px]"
            >
              <div className="mb-0.5">
                <div className="mb-0.5 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-[10px] font-medium text-gray-900 uppercase tracking-wide">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Horizontal Scrollable Navigation Buttons */}
        <div className="flex overflow-x-auto scrollbar-hide gap-0 pb-1 mt-2">
          {navigationButtons.map((button) => (
            <Link
              key={button.name}
              href={button.href}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm uppercase tracking-wide transition-colors duration-300 ${
                button.isActive
                  ? 'bg-black text-white hover:bg-gray-800'
                  : 'bg-white text-black border border-gray-300 hover:bg-gray-50'
              }`}
            >
              {button.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
