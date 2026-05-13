'use client';

import { useEffect, useRef } from 'react';
import { Dog, Cat, PawPrint, ShieldPlus } from 'lucide-react';

const petTypes = [
  {
    icon: Dog,
    title: 'Dog Supplies &\nNutrition',
    bg: '#d9b9ef',
    iconColor: '#4c1d5c',
  },
  {
    icon: Cat,
    title: 'Cat Essentials &\nHealth',
    bg: '#f5d3ae',
    iconColor: '#6d3d12',
  },
  {
    icon: PawPrint,
    title: 'Puppy & Kitten\nCare',
    bg: '#9edff0',
    iconColor: '#0f5060',
  },
  {
    icon: ShieldPlus,
    title: 'Senior Pet\nSupport',
    bg: '#a7efab',
    iconColor: '#083b0f',
  },
];

export default function BrowseByPet() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.15 }
    );

    const items = sectionRef.current?.querySelectorAll('.fade-up');

    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full bg-[#f7f5f3] py-24 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20 fade-up">
            <h2 className="text-[58px] md:text-[68px] font-black text-[#2f042f] leading-none tracking-[-2px]">
              Browse by Pet Type
            </h2>

            <p className="mt-5 text-[20px] leading-[32px] text-[#22153a] font-medium max-w-[650px] mx-auto">
              Helpful care essentials and best-selling products
              <br />
              for every furry friend.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-14">
            {petTypes.map((pet, i) => {
              const Icon = pet.icon;

              return (
                <div
                  key={pet.title}
                  className="fade-up group relative flex items-center justify-center"
                  style={{
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  {/* Blob Shape */}
                  <div
                    className="relative w-[320px] h-[320px] transition-all duration-500 group-hover:scale-[1.04] cursor-pointer border border-black/20"
                    style={{
                      background: pet.bg,
                      borderRadius:
                        '55% 45% 60% 40% / 45% 60% 40% 55%',
                    }}
                  >
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                      <Icon
                        size={58}
                        strokeWidth={2.1}
                        color={pet.iconColor}
                        className="mb-7"
                      />

                      <h3
                        className="text-[26px] md:text-[28px] leading-[38px] font-medium whitespace-pre-line"
                        style={{
                          color: pet.iconColor,
                        }}
                      >
                        {pet.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        .fade-up {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .fade-up.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}