import { useEffect, useRef } from 'react';

const guides = [
  {
    image: '/guides/nutri-tips.png',
    title: 'Feeding & Nutrition Tips',
    desc: 'Learn how to choose the right food, understand ingredients, and build a balanced diet tailored to your pet’s age, breed, and lifestyle.',
    bg: '#d7b8ff',
  },
  {
    image: '/guides/common-health-issues.png',
    title: 'Common Pet Health Issues',
    desc: 'Understand early symptoms, prevention tips, and when to seek professional care explained in simple, pet-parent-friendly language.',
    bg: '#FFD7B3',
  },
  {
    image: '/guides/behaviour.png',
    title: 'Behavior & Training Advice',
    desc: 'Practical training guides to improve behavior, reduce anxiety, and strengthen the bond between you and your pet.',
    bg: '#BFEFFF',
  },
];

export default function ExpertGuides() {
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

        {/* Heading */}
        <div className="text-center mb-12 fade-up">
          <h2 className="font-fredoka text-[2rem] text-[#4a2f17]">
            Expert Pet Care Guides
          </h2>

          <p className="mt-2 text-sm text-[#5c4635] max-w-md mx-auto">
            Need trusted advice? Our vet-reviewed tips, nutrition guides
            and behavior articles help you care smarter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, i) => (
            <div
              key={i}
              className="fade-up rounded-[25px] p-6 min-h-[500px] flex flex-col"
              style={{
                backgroundColor: guide.bg,
              }}
            >

              {/* Title */}
              <h3 className="font-fredoka text-[1.5rem] text-[#3c2a1c] leading-tight">
                {guide.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm text-[#4e4035] leading-relaxed flex-1">
                {guide.desc}
              </p>

              {/* Image */}
              <div className="mt-8 flex justify-center">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="h-[160px] object-contain"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}