import { useEffect, useRef } from 'react';

const petTypes = [
  {
    icon: '🐕',
    title: 'Dog Supplies & Nutrition',
    desc: 'Premium food, treats & accessories',
    bg: 'bg-yellow-light border-yellow',
  },
  {
    icon: '🐈',
    title: 'Cat Essentials & Health',
    desc: 'Everything your cat needs daily',
    bg: 'bg-blue-50 border-bluelight',
  },
  {
    icon: '🐾',
    title: 'Puppy & Kitten Care',
    desc: 'Start your new pet off right',
    bg: 'bg-purple-50 border-purple-200',
  },
  {
    icon: '🦴',
    title: 'Senior Pet Support',
    desc: 'Tailored care for older pets',
    bg: 'bg-green-50 border-green-light',
  },
];

export default function BrowseByPet() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-up">
          <h2 className="font-fredoka text-[2rem] text-navy">Browse by Pet Type</h2>
          <p className="mt-2 text-[0.93rem] text-gray-500 font-semibold max-w-md mx-auto">
            Helpful care essentials and best-selling products for every furry friend.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {petTypes.map((pet, i) => (
            <div
              key={pet.title}
              className={`fade-up card-hover rounded-3xl border-2 ${pet.bg} px-6 py-7 text-center cursor-pointer`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-4xl mb-3">{pet.icon}</div>
              <h3 className="font-fredoka text-[1.05rem] text-navy leading-snug">{pet.title}</h3>
              <p className="text-[0.8rem] text-gray-500 font-semibold mt-1">{pet.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
