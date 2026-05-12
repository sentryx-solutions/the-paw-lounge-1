import { useEffect, useRef } from 'react';

const services = [
  {
    icon: '✂️',
    title: 'Grooming Services',
    desc: 'Our certified grooming partners help your pets stay clean, comfortable, healthy and looking their absolute best every visit.',
    bg: 'bg-yellow-light border-yellow',
  },
  {
    icon: '🏥',
    title: 'Wellness & Vet Clinics',
    desc: 'Connect with trusted local vets and wellness clinics for checkups, vaccinations and preventive care bookings made easy.',
    bg: 'bg-purple-50 border-purple-200',
  },
  {
    icon: '🎾',
    title: 'Training & Behavior',
    desc: 'Work with certified trainers to build obedience, reduce anxiety and strengthen the bond between you and your pet.',
    bg: 'bg-blue-50 border-bluelight',
  },
];

export default function CareServices() {
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
          <h2 className="font-fredoka text-[2rem] text-navy">Book Trusted Care Services</h2>
          <p className="mt-2 text-[0.93rem] text-gray-500 font-semibold max-w-md mx-auto">
            Connect with local groomers, wellness coaches and professional support. Quick and easy online booking.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`fade-up card-hover rounded-2xl border-2 ${s.bg} p-7 cursor-pointer`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-[2.2rem] mb-4">{s.icon}</div>
              <h3 className="font-fredoka text-[1.1rem] text-navy mb-2">{s.title}</h3>
              <p className="text-[0.88rem] text-gray-600 font-semibold leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10 fade-up">
          <button className="bg-purple-dark text-white px-9 py-3.5 rounded-full font-extrabold text-[0.95rem] shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200">
            Book a Service
          </button>
        </div>
      </div>
    </section>
  );
}
