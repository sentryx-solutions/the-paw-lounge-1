import { useEffect, useRef } from 'react';

const products = [
  {
    image: '/products/premium-dry-dog-food.png',
    name: 'Premium Dry Dog Food',
    price: '₹1,299.00',
    badge: 'Save 15%',
  },
  {
    image: '/products/natural-cat-food.png',
    name: 'Natural Cat Food Formula',
    price: '₹2,499.00',
    badge: 'Top Rated',
  },
  {
    image: '/products/orthopedic-pet-bed.png',
    name: 'Orthopedic Pet Bed',
    price: '₹1,299.00',
    badge: 'Save 15%',
  },
  {
    image: '/products/dog-toy.png',
    name: 'Interactive Dog Toy',
    price: '₹2,499.00',
    badge: 'Save 10%',
  },
  {
    image: '/products/grooming-kit.png',
    name: 'Grooming & Hygiene Kit',
    price: '₹1,299.00',
    badge: 'Save 15%',
  },
  {
    image: '/products/dog-food.png',
    name: 'Daily Health Supplement',
    price: '₹1,299.00',
    badge: 'Top Rated',
  },
];

export default function TopRatedProducts() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    sectionRef.current
      ?.querySelectorAll('.fade-up')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FFDCC2] py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-12 fade-up">
          <h2 className="font-fredoka text-[2.2rem] text-[#40220f] leading-tight">
            Top Rated & Best <br />
            Selling Pet Products
          </h2>

          <p className="max-w-[280px] text-[#40220f] text-sm mt-4 md:mt-0">
            Shop our most popular picks — nutritious food,
            comfy beds, toys & daily essentials.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard
              key={i}
              product={product}
            />
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-10">
          <button className="bg-[#5B49F8] text-white px-8 py-3 rounded-full font-bold shadow-lg">
            Shop Best Sellers
          </button>
        </div> */}

      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="fade-up bg-[#fffdf9] rounded-[35px] p-6 relative shadow-sm border border-[#f0dbc8]">

      {/* Badge */}
      <div className="absolute top-4 left-4 border border-[#b98b65] text-[#6e4d31] text-xs px-3 py-1 rounded-full">
        {product.badge}
      </div>

      {/* Image */}
      <div className="flex justify-center mt-8 mb-5">
        <img
          src={product.image}
          alt={product.name}
          className="h-[160px] object-contain"
        />
      </div>

      {/* Text */}
      <div className="text-center">
        <h3 className="text-[#40220f] font-semibold text-[1rem]">
          {product.name}
        </h3>

        <p className="text-[#40220f] font-bold text-[1.5rem] mt-1">
          {product.price}
        </p>
      </div>

    </div>
  );
}