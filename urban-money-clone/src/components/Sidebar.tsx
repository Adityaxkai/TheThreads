'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, Search, Plus, User, Truck, Package, Heart, Settings, Phone, Award, ShoppingBag, Shirt } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const subBrands = [
  {
    name: "CORE",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
    description: "URBAN MONKEY'S CORE, CURATES MINIMAL, SUBTLE EVERYDAY WEAR"
  },
  {
    name: "URBANMNKYSYS",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=200&fit=crop",
    description: "URBANMNKYSYIMS FEATURES TECHNICAL, AND FUNCTIONAL GEAR"
  },
  {
    name: "UMS",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    description: "URBAN MONKEY SKATEBOARDING REPRESENTS INDIA'S UNDERGROUND"
  }
];

const menuItems = [
  { name: "NEW ARRIVALS", href: "/new-arrivals" },
  { name: "HATS & CAPS", href: "/category/hats-caps", hasPlus: true },
  { name: "CLOTHING", href: "/category/clothing", hasPlus: true },
  { name: "EYEWEAR", href: "/category/eyewear", hasPlus: true },
  { name: "ACCESSORIES", href: "/category/accessories", hasPlus: true },
  { name: "SKATEGOODS", href: "/category/skategoods", hasPlus: true },
  { name: "COLLABS", href: "/category/collabs", hasPlus: true },
  { name: "NO RESTOCK", href: "/no-restock" },
  { name: "SHOP ALL", href: "/shop-all" }
];

const bottomMenuItems = [
  { name: "LOGIN", href: "/login", icon: User },
  { name: "TRACK", href: "/track", icon: Truck },
  { name: "RETURNS", href: "/returns", icon: Package },
  { name: "WISHLIST", href: "/wishlist", icon: Heart },
  { name: "SUPPORT", href: "/support", icon: Settings },
  { name: "ABOUT", href: "/about", icon: User },
  { name: "CONTACT", href: "/contact", icon: Phone },
  { name: "REWARDS", href: "/rewards", icon: Award },
  { name: "INSTAGRAM SHOP", href: "/instagram-shop", icon: ShoppingBag },
  { name: "STREETWEAR HUB", href: "/streetwear-hub", icon: Shirt }
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-black">THREADS</h2>
            <button
              onClick={onClose}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200 flex items-center justify-center"
            >
              <X size={20} className="text-gray-700" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-6 border-b border-gray-200">
            <div className="relative">
              <input
                type="text"
                placeholder="SEARCH FOR PRODUCTS"
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm uppercase tracking-wide"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded">
                <Search size={16} />
              </button>
            </div>
          </div>

          {/* Main Menu */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between py-3 text-black hover:text-gray-600 transition-colors uppercase tracking-wide font-medium"
                >
                  <span>{item.name}</span>
                  {item.hasPlus && <Plus size={16} />}
                </Link>
              ))}
            </div>

            {/* Sub-Brand Section */}
            <div className="px-6 pb-6">
              <h3 className="text-lg font-bold text-black mb-4 uppercase tracking-wide">
                EXPLORE OUR SUB-BRAND EDITIONS
              </h3>
              <div className="space-y-4">
                {subBrands.map((brand) => (
                  <div key={brand.name} className="relative group cursor-pointer">
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={brand.image}
                        alt={brand.name}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      <div className="absolute bottom-3 left-3">
                        <h4 className="text-white text-xl font-bold uppercase tracking-wider">
                          {brand.name}
                        </h4>
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Menu */}
          <div className="border-t border-gray-200 p-6">
            <div className="grid grid-cols-2 gap-4">
              {bottomMenuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors uppercase tracking-wide text-sm font-medium"
                  >
                    <IconComponent size={16} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
