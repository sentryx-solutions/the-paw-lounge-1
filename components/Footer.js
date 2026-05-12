import { useEffect, useRef, useState } from 'react';

const footerLinks = {
  Shop: [
    'Dog Food & Supplies',
    'Cat Food & Essentials',
    'Health & Supplements',
    'Grooming Products',
    'Toys & Accessories',
    'Best Sellers',
  ],
  'Pet Care': [
    'Pet Care Guides',
    'Nutrition & Feeding',
    'Health & Wellness',
    'Seasonal Care Tips',
    'New Pet Owner Advice',
  ],
  'Customer Support': [
    'Contact Us',
    'FAQ & Knowledgebase',
    'Shipping & Delivery',
    'Returns & Refunds',
    'Order Tracking',
  ],
  Services: [
    'Grooming Services',
    'Wellness Clinics',
    'Vet Consultation',
    'Book an Appointment',
  ],
  'Social Media': [
    'Instagram',
    'Facebook',
    'TikTok',
    'Pinterest',
    'LinkedIn',
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Join Community strip */}
      <section ref={sectionRef} className="bg-[#c8b6ff] py-14 px-6 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Dog paw */}
          <div className="text-7xl animate-float select-none flex-shrink-0">🐾</div>

          {/* Email signup */}
          <div className="fade-up max-w-sm">
            <h2 className="font-fredoka text-[1.65rem] text-navy mb-2">Join Our Community</h2>
            <p className="text-[0.9rem] text-[#312e81] font-semibold mb-5 leading-relaxed">
              Get exclusive offers, pet care tips and activity ideas, directly in your inbox every week.
            </p>
            <div className="flex rounded-full overflow-hidden border-2 border-navy bg-white shadow-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="flex-1 px-5 py-3 text-[0.9rem] font-semibold outline-none font-nunito bg-transparent"
              />
              <button className="bg-navy text-white px-5 py-3 font-extrabold text-[0.88rem] hover:bg-purple-dark transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Footer nav columns */}
          <div className="fade-up flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 min-w-0" style={{ transitionDelay: '120ms' }}>
            {Object.entries(footerLinks).map(([heading, links]) => (
              <div key={heading}>
                <h4 className="font-fredoka text-[0.97rem] text-navy mb-3">{heading}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[0.83rem] text-[#312e81] font-semibold hover:text-navy transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer bottom bar */}
      <footer className="bg-white border-t border-gray-100 px-6 md:px-16 pt-8 pb-5">
        <p className="text-[0.83rem] text-gray-500 font-semibold leading-relaxed max-w-3xl mb-6">
          We are dedicated to providing premium pet essentials and trusted care guidance for pet parents everywhere.
          Join us in creating a world where every pet is happy, healthy and cherished — through quality products and
          expert-backed advice.
        </p>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-4 border-t border-gray-100">
          <p className="text-[0.8rem] text-gray-400 font-semibold">
            © 2025 Pawvera. All Rights Reserved.
          </p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Cookie Policy', 'Terms & Conditions'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[0.8rem] text-gray-400 font-semibold hover:text-navy transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Giant watermark logo */}
      <div className="bg-white text-center pb-2 select-none pointer-events-none overflow-hidden">
        <span
          className="font-fredoka text-navy block leading-none"
          style={{ fontSize: 'clamp(3rem, 14vw, 9rem)', opacity: 0.06, letterSpacing: '-2px' }}
        >
          Pawvera
        </span>
      </div>
    </>
  );
}
