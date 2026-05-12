import { useEffect, useRef } from 'react';

export default function Subscription() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-green-light py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Dog emoji */}
        <div className="text-[8rem] animate-float select-none flex-shrink-0">🐶</div>

        {/* Content */}
        <div className="fade-up max-w-xl">
          <h2 className="font-fredoka text-[2.4rem] text-navy leading-tight mb-4">
            Never Run Out of Pet Essentials
          </h2>
          <p className="text-[0.97rem] text-gray-600 font-semibold leading-relaxed mb-6">
            Enjoy automatic delivery on your pet's favorite food and supplies. Flexible, affordable and cancel anytime.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'Save on repeat orders',
              'Free delivery options',
              'Easy schedule changes',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 font-bold text-navy text-[0.95rem]">
                <span className="w-5 h-5 rounded-full bg-navy text-white flex items-center justify-center text-[0.65rem] font-black flex-shrink-0">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>

          <button className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-full font-extrabold text-[0.95rem] shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            Start Subscription
          </button>
        </div>
      </div>
    </section>
  );
}
