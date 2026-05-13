import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (el) {
      setTimeout(() => {
        el.classList.add('visible');
      }, 100);
    }
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#d9c2ef] min-h-screen flex items-center px-6 md:px-20 py-10">

      {/* Background Curves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          {/* Top curve */}
          <path
            d="M-100 520C220 760 520 120 900 420C1220 670 1480 700 1750 500"
            stroke="#7b7cff"
            strokeWidth="28"
            fill="none"
            opacity="0.9"
            strokeLinecap="round"
          />

          {/* Bottom curve */}
          <path
            d="M1400 700C1180 540 980 820 700 700C420 580 260 760 -80 680"
            stroke="#7b7cff"
            strokeWidth="24"
            fill="none"
            opacity="0.9"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-10">

        {/* Left side */}
        <div
          ref={ref}
          className="fade-up flex flex-col justify-center"
        >

          <h1
            className="
            uppercase 
            font-black 
            text-[#2c1145] 
            leading-[0.9] 
            tracking-[-3px]
            text-[4.5rem] 
            sm:text-[6rem] 
            md:text-[7rem] 
            lg:text-[8rem]
          "
          >
            Pet Care
            <br />
            Done Right
          </h1>

          <p className="mt-10 text-[#2c1145] text-lg leading-relaxed max-w-md font-medium">
            Quality food, wellness products, expert guidance &
            essential care solutions all in one place for your
            dog, cat or small pet.
          </p>
        </div>

        {/* Right Dog Image */}
        <div className="relative flex justify-center lg:justify-end">

          <img
            src="/hero/dog.png"
            alt="Dog"
            className="
              w-[820px] 
              sm:w-[1040px] 
              md:w-[1220px]
              lg:w-[1380px]
              animate-float
              object-contain
              drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)]
              scale-[1.15]
              origin-bottom
            "
          />

        </div>
      </div>

      {/* Bottom Cloud Border */}
      <div className="absolute bottom-0 left-0 w-full h-5 bg-white rounded-t-[40px]"></div>

    </section>
  );
}