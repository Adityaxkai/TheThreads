'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "CROSSBODY SLING BAG",
    price: 2000,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&h=400&fit=crop",
    category: "accessories"
  },
  {
    id: 2,
    name: "CONVERTIBLE JACKET",
    price: 4500,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=400&fit=crop",
    category: "jackets"
  },
  {
    id: 3,
    name: "NIGHT CITY",
    price: 1850,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=400&fit=crop",
    category: "tshirts"
  },
  {
    id: 4,
    name: "GHOST",
    price: 1400,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=300&h=400&fit=crop",
    category: "hats"
  },
  {
    id: 5,
    name: "URBAN STYLE",
    price: 2200,
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=300&h=400&fit=crop",
    category: "tshirts"
  },
  {
    id: 6,
    name: "CLASSIC CAP",
    price: 1200,
    image: "https://images.unsplash.com/photo-1556306535-38febf6782e7?w=300&h=400&fit=crop",
    category: "hats"
  },
  {
    id: 7,
    name: "DENIM JACKET",
    price: 3800,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=300&h=400&fit=crop",
    category: "jackets"
  },
  {
    id: 8,
    name: "STREET HOODIE",
    price: 2800,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=400&fit=crop",
    category: "hoodies"
  }
];

export default function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<number[]>([]);

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(mockProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const toggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg p-4 animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg mb-3"></div>
                <div className="bg-gray-200 h-4 rounded mb-2"></div>
                <div className="bg-gray-200 h-4 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-colors duration-300 ${
                    wishlist.includes(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart size={16} fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900 mb-2 uppercase tracking-wide">
                  {product.name}
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  RS.{product.price.toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
