import { useEffect, useRef } from 'react';

const products = [
  { emoji: '🐾', brand: 'Paw & Plate', name: 'Premium Dry Dog Food', price: '$29.99', oldPrice: '$35.99', badge: 'Save 17%', badgeColor: 'bg-red-500' },
  { emoji: '🥩', brand: 'Paw & Plate', name: 'Natural Cat Food Formula', price: '$24.99', oldPrice: null, badge: 'Top Rated', badgeColor: 'bg-amber-500' },
  { emoji: '🛏️', brand: 'Paw & Plate', name: 'Orthopedic Pet Bed', price: '$43.99', oldPrice: '$56.00', badge: 'Save 22%', badgeColor: 'bg-red-500' },
  { emoji: '🐶', brand: 'Paw & Plate', name: 'Premium Dog Food', price: '$29.99', oldPrice: null, badge: 'New 15%', badgeColor: 'bg-navy' },
  { emoji: '🍗', brand: 'Paw & Plate', name: 'Premium Dry Dog Food', price: '$29.99', oldPrice: null, badge: 'New 15%', badgeColor: 'bg-navy' },
  { emoji: '💊', brand: 'Paw & Plate', name: 'Vitamin & Supplement Mix', price: '$29.99', oldPrice: null, badge: 'Top Rated', badgeColor: 'bg-amber-500' },
];

export default function TopRatedProducts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-orange-light py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 fade-up">
          <div>
            <h2 className="font-fredoka text-[2rem] text-navy leading-tight">
              Top Rated &amp; Best<br />Selling Pet Products
            </h2>
          </div>
          <p className="text-[0.9rem] text-[#312e81] font-semibold leading-relaxed max-w-[260px] text-right">
            Shop our most popular picks — nutritious food, comfy beds, toys &amp; daily essentials.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p, i) => (
            <ProductCard key={i} product={p} delay={i * 80} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 fade-up">
          <button className="bg-purple-dark text-white px-9 py-3.5 rounded-full font-extrabold text-[0.95rem] shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            Shop More Items
          </button>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product, delay }) {
  return (
    <div
      className="fade-up card-hover bg-[#fffdf7] rounded-2xl p-5 cursor-pointer relative"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Badge */}
      <span className={`absolute top-4 left-4 ${product.badgeColor} text-white text-[0.68rem] font-extrabold px-3 py-1 rounded-full`}>
        {product.badge}
      </span>

      {/* Image placeholder */}
      <div className="w-full h-40 bg-[#f4efe6] rounded-xl flex items-center justify-center text-5xl mb-4">
        {product.emoji}
      </div>

      {/* Info */}
      <p className="text-[0.7rem] font-extrabold text-gray-400 uppercase tracking-widest">{product.brand}</p>
      <h3 className="font-extrabold text-[0.95rem] text-navy mt-1 mb-2">{product.name}</h3>

      {/* Price row */}
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-fredoka text-[1.2rem] text-purple-dark">{product.price}</span>
          {product.oldPrice && (
            <span className="text-[0.82rem] text-gray-400 line-through">{product.oldPrice}</span>
          )}
        </div>
        <button className="w-8 h-8 rounded-full bg-navy text-white flex items-center justify-center hover:bg-purple-dark transition-colors text-lg font-bold">
          +
        </button>
      </div>
    </div>
  );
}
