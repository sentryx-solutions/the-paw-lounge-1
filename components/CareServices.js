import { useEffect, useRef } from 'react';
import {
  Scissors,
  ShieldPlus,
  Syringe
} from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Grooming Services',
    desc: 'Professional grooming and bathing services keep pets clean, comfortable, healthy, and happy.',
    bg: '#BFEFFF',
  },
  {
    icon: ShieldPlus,
    title: 'Wellness & Vet Care',
    desc: 'Connect with local wellness experts, vaccinations, checkups, and professional care.',
    bg: '#DCC3FF',
  },
  {
    icon: Syringe,
    title: 'Vaccination Support',
    desc: 'Book preventive care, vaccinations, and health consultations for your pets.',
    bg: '#FFD9B3',
  },
];

export default function CareServices() {
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
      className="bg-white py-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14 fade-up">
          <h2 className="font-fredoka text-[2rem] text-[#3D2458]">
            Book Trusted Care Services
          </h2>

          <p className="mt-2 text-[#5a4b6b] max-w-md mx-auto text-sm">
            Connect with local groomers, wellness checks and
            professional support.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="fade-up rounded-[28px] p-8 min-h-[280px] flex flex-col"
                style={{
                  backgroundColor: service.bg,
                }}
              >

                {/* Icon */}
                <Icon
                  size={42}
                  strokeWidth={1.8}
                  className="text-[#4a2f17] mb-8"
                />

                {/* Title */}
                <h3 className="font-fredoka text-[1.4rem] text-[#3c2a1c]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm text-[#4e4035] leading-relaxed">
                  {service.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* Button */}
        {/* <div className="text-center mt-12">
          <button className="bg-[#6557FF] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Book a Service
          </button>
        </div> */}

      </div>
    </section>
  );
}