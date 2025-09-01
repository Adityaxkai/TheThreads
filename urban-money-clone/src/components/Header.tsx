'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, User, Menu, X, Heart } from 'lucide-react';
import Sidebar from './Sidebar';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Mobile: Left side - Hamburger and Search */}
            <div className="flex items-center space-x-3 md:hidden">
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-1.5 text-gray-700 hover:text-black transition-colors"
              >
                <Menu size={16} />
              </button>
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-1.5 text-gray-700 hover:text-black transition-colors"
              >
                <Search size={16} />
              </button>
            </div>

            {/* Logo - Centered on mobile, left on desktop */}
            <Link href="/" className="flex items-center space-x-2 md:ml-0">
              <div className="text-base md:text-lg font-bold text-black">THREADS</div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/men" className="text-gray-700 hover:text-black font-medium transition-colors text-sm">
                MEN
              </Link>
              <Link href="/women" className="text-gray-700 hover:text-black font-medium transition-colors text-sm">
                WOMEN
              </Link>
              <Link href="/kids" className="text-gray-700 hover:text-black font-medium transition-colors text-sm">
                KIDS
              </Link>
              <Link href="/accessories" className="text-gray-700 hover:text-black font-medium transition-colors text-sm">
                ACCESSORIES
              </Link>
              <Link href="/sale" className="text-red-600 hover:text-red-700 font-medium transition-colors text-sm">
                SALE
              </Link>
            </nav>

            {/* Right side icons */}
            <div className="flex items-center space-x-3">
              {/* Desktop Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="hidden md:block p-1.5 text-gray-700 hover:text-black transition-colors"
              >
                <Search size={16} />
              </button>

              {/* Wishlist - Mobile only */}
              <Link href="/wishlist" className="md:hidden p-1.5 text-gray-700 hover:text-black transition-colors">
                <Heart size={16} />
              </Link>

              {/* User Account - Desktop only */}
              <div className="hidden md:flex items-center space-x-2">
                <Link href="/auth/login" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                  Sign In
                </Link>
                <span className="text-gray-300">|</span>
                <Link href="/auth/signup" className="text-gray-700 hover:text-black transition-colors text-sm font-medium">
                  Sign Up
                </Link>
              </div>

              {/* Shopping Cart */}
              <Link href="/cart" className="p-1.5 text-gray-700 hover:text-black transition-colors relative">
                <ShoppingBag size={16} />
                <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs rounded-full h-3.5 w-3.5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          {isSearchOpen && (
            <div className="py-2 border-t border-gray-200">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-3 py-1.5 pl-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
                />
                <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
          )}

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <nav className="py-2 space-y-2">
                <Link href="/men" className="block text-gray-700 hover:text-black font-medium transition-colors text-sm">
                  MEN
                </Link>
                <Link href="/women" className="block text-gray-700 hover:text-black font-medium transition-colors text-sm">
                  WOMEN
                </Link>
                <Link href="/kids" className="block text-gray-700 hover:text-black font-medium transition-colors text-sm">
                  KIDS
                </Link>
                <Link href="/accessories" className="block text-gray-700 hover:text-black font-medium transition-colors text-sm">
                  ACCESSORIES
                </Link>
                <Link href="/sale" className="block text-red-600 hover:text-red-700 font-medium transition-colors text-sm">
                  SALE
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
    </>
  );
}
