import { useEffect, useRef, useState } from 'react';

const testimonials = [
  {
    quote: "Everything my pet needs in one place. From nutrition to daily essentials, everything arrives perfectly packaged. I trust Pawvera for amazing deals and friendly subscriptions.",
    author: "Jake M.",
    location: "New York",
    stars: 5,
  },
  {
    quote: "Pawvera has completely changed how I care for my two dogs. The subscription saves me money every month and the quality of products is just outstanding. Highly recommend!",
    author: "Sarah L.",
    location: "Los Angeles",
    stars: 5,
  },
  {
    quote: "Fast shipping, great prices and an incredible selection. My cat has never been happier. The expert guides are a bonus — really helpful for first-time pet owners.",
    author: "Marcus T.",
    location: "Chicago",
    stars: 5,
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const t = testimonials[active];

  return (
    <section ref={sectionRef} className="bg-yellow py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left */}
        <div className="fade-up max-w-xs flex-shrink-0">
          <h2 className="font-fredoka text-[2rem] text-navy mb-4 leading-tight">
            Pet Parents Love and Trust Us
          </h2>
          <p className="text-[0.93rem] text-gray-600 font-semibold leading-relaxed">
            Pet parents across the US choose us for our quality, care and consistency.
            Hear what our community is saying about the best.
          </p>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  i === active ? 'bg-navy scale-125' : 'bg-navy/25 hover:bg-navy/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right — Testimonial Card */}
        <div className="fade-up flex-1 min-w-[280px]" style={{ transitionDelay: '150ms' }}>
          <div
            key={active}
            className="bg-navy rounded-3xl p-9 text-white"
            style={{ animation: 'fadeSlideIn 0.35s ease' }}
          >
            <div className="text-yellow text-xl mb-4">
              {'★'.repeat(t.stars)}
            </div>
            <p className="text-[1.02rem] font-semibold leading-relaxed mb-6 opacity-90">
              "{t.quote}"
            </p>
            <div className="font-fredoka text-[1.1rem]">{t.author}</div>
            <div className="text-[0.85rem] opacity-50 mt-1">{t.location}</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
