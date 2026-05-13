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
      { threshold: 0.12 }
    );

    const items = sectionRef.current?.querySelectorAll('.fade-up');

    items?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="w-full bg-[#f7f5f3] py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="text-center mb-14 md:mb-20 fade-up">

            <h2
              className="
                text-[2.5rem]
                sm:text-[4rem]
                md:text-[68px]
                font-black
                text-[#2f042f]
                leading-[0.95]
                tracking-[-2px]
              "
            >
              Browse by Pet Type
            </h2>

            <p
              className="
                mt-5
                text-[15px]
                sm:text-[18px]
                md:text-[20px]
                leading-[28px]
                md:leading-[32px]
                text-[#22153a]
                font-medium
                max-w-[650px]
                mx-auto
                px-2
              "
            >
              Helpful care essentials and best-selling products
              <br className="hidden sm:block" />
              for every furry friend.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

            {petTypes.map((pet, i) => {
              const Icon = pet.icon;

              return (
                <div
                  key={pet.title}
                  className="
                    fade-up
                    group
                    relative
                    flex
                    items-center
                    justify-center
                  "
                  style={{
                    transitionDelay: `${i * 120}ms`,
                  }}
                >
                  {/* Blob Card */}
                  <div
                    className="
                      relative
                      w-full
                      max-w-[280px]
                      h-[260px]
                      sm:h-[280px]
                      md:h-[320px]
                      transition-all
                      duration-500
                      group-hover:scale-[1.04]
                      cursor-pointer
                      border
                      border-black/10
                      shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                    "
                    style={{
                      background: pet.bg,
                      borderRadius:
                        '55% 45% 60% 40% / 45% 60% 40% 55%',
                    }}
                  >
                    {/* Inner Content */}
                    <div
                      className="
                        absolute
                        inset-0
                        flex
                        flex-col
                        items-center
                        justify-center
                        text-center
                        px-6
                      "
                    >
                      <div
                        className="
                          bg-white/50
                          backdrop-blur-sm
                          p-4
                          rounded-full
                          mb-5
                          shadow-sm
                        "
                      >
                        <Icon
                          size={42}
                          strokeWidth={2.2}
                          color={pet.iconColor}
                        />
                      </div>

                      <h3
                        className="
                          text-[20px]
                          sm:text-[24px]
                          md:text-[28px]
                          leading-[30px]
                          md:leading-[38px]
                          font-bold
                          whitespace-pre-line
                        "
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

      {/* Animation */}
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