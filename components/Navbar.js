import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-fredoka text-2xl text-navy tracking-wide select-none">
          Sentryx-Pet
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {['Home', 'Shop', 'Pet Care', 'Services', 'Subscriptions'].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className={`font-nunito font-bold text-[0.95rem] transition-colors duration-200 hover:text-purple-dark ${
                  item === 'Home' ? 'text-purple-dark' : 'text-navy'
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button className="p-1 hover:text-purple-dark transition-colors">
            <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.2">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          {/* Account */}
          <button className="p-1 hover:text-purple-dark transition-colors hidden sm:block">
            <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>

          {/* Cart */}
          <button className="p-1 hover:text-purple-dark transition-colors relative">
            <svg className="w-5 h-5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-purple-dark text-white text-[0.6rem] font-extrabold rounded-full w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="w-6 h-6 stroke-navy" viewBox="0 0 24 24" fill="none" strokeWidth="2.2">
              {mobileOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {['Home', 'Shop', 'Pet Care', 'Services', 'Subscriptions'].map((item) => (
              <li key={item}>
                <Link
                  href="#"
                  className="block font-bold text-navy py-1 hover:text-purple-dark transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
