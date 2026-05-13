import { useEffect, useRef } from 'react';

export default function Subscription() {
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
      className="relative bg-[#B8F3BB] py-24 px-6 md:px-16 overflow-hidden"
    >

      {/* Top cloud edge */}
      <div className="absolute top-0 left-0 w-full h-6 bg-white rounded-b-[40px] z-20"></div>

      {/* Bottom cloud edge */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-white rounded-t-[40px] z-20"></div>

      {/* Blue curve line */}
      <svg
        className="absolute inset-0 w-full h-full z-0"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
      >
        <path
          d="M0,300 
             C200,100 400,20 520,140
             C650,280 850,420 1200,350"
          fill="none"
          stroke="#7A72FF"
          strokeWidth="12"
        />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">

        {/* Dog image */}
        <div className="fade-up flex-shrink-0">
          <img
            src="/subscription/dog.png"
            alt="Dog"
            className="w-[420px] object-contain"
          />
        </div>

        {/* Right content */}
        <div className="fade-up max-w-xl">

          <h2 className="font-fredoka text-[2.5rem] leading-tight text-[#133B16] mb-5">
            Never Run Out of Pet Essentials
          </h2>

          <p className="text-[#254028] text-[1rem] leading-relaxed mb-8">
            Enjoy automatic delivery on your pet’s favorite food and
            supplies—flexible, affordable, and cancel anytime.
          </p>

          {/* Features */}
          <div className="space-y-4 mb-8">
            {[
              'Save on repeat orders',
              'Free delivery options',
              'Easy schedule changes',
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 font-bold text-[#133B16] text-[1rem]"
              >
                <span className="text-xl">✓</span>
                {item}
              </div>
            ))}
          </div>

          {/* Button */}
          {/* <button className="bg-[#6557FF] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
            Start Subscription
          </button> */}

        </div>
      </div>
    </section>
  );
}