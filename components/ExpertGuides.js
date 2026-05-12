import { useEffect, useRef } from 'react';

const guides = [
  {
    icon: '🥣',
    title: 'Feeding & Nutrition Tips',
    desc: 'Discover the right portion sizes, understand ingredients, and build a feeding schedule tailored to your pet\'s age, breed and lifestyle.',
    emoji: '🐾',
    bg: 'bg-[#c8b6ff]',
  },
  {
    icon: '💉',
    title: 'Common Pet Health Issues',
    desc: 'Learn about common symptoms, prevention tips, and when to seek professional veterinary care — written in simple, pet-parent-friendly language.',
    emoji: '🐕‍🦺',
    bg: 'bg-green-light',
  },
  {
    icon: '🎓',
    title: 'Behavior & Training Advice',
    desc: 'Practical training guides to improve obedience, reduce anxiety, and strengthen the bond between you and your pet with positive techniques.',
    emoji: '🦮',
    bg: 'bg-yellow',
  },
];

export default function ExpertGuides() {
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
    <section ref={sectionRef} className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <h2 className="font-fredoka text-[2rem] text-navy">Expert Pet Care Guides</h2>
          <p className="mt-2 text-[0.93rem] text-gray-500 font-semibold max-w-md mx-auto">
            Need trusted advice? Our vet-written nutrition guides and behavior articles help you care smarter.
          </p>
        </div>

        {/* Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <div
              key={guide.title}
              className={`fade-up card-hover ${guide.bg} rounded-3xl p-8 cursor-pointer flex flex-col`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{guide.icon}</div>
              <h3 className="font-fredoka text-[1.2rem] text-navy mb-3">{guide.title}</h3>
              <p className="text-[0.88rem] text-gray-600 font-semibold leading-relaxed flex-1">{guide.desc}</p>

              {/* Image placeholder */}
              <div className="w-full h-28 mt-5 rounded-xl bg-white/50 flex items-center justify-center text-4xl">
                {guide.emoji}
              </div>

              {/* Paw & Plate brand watermark */}
              <div className="mt-3 text-[0.72rem] font-extrabold text-navy/40 uppercase tracking-widest">
                Paw &amp; Plate
              </div>

              <button className="mt-5 self-start bg-navy text-white px-5 py-2 rounded-full font-extrabold text-[0.82rem] hover:-translate-y-1 hover:bg-purple-dark transition-all duration-200">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
