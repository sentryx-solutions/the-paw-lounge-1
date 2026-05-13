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
          <path
            d="M-100 520C220 760 520 120 900 420C1220 670 1480 700 1750 500"
            stroke="#7b7cff"
            strokeWidth="28"
            fill="none"
            opacity="0.9"
            strokeLinecap="round"
          />

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

      {/* Main Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center w-full gap-10">
        
        {/* Left Content */}
        <div
          ref={ref}
          className="fade-up flex flex-col justify-center"
        >
          <h1 className="uppercase font-black text-[#2c1145] leading-[0.9] tracking-[-3px]
            text-[4.5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem]"
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

          <button className="mt-8 w-fit px-8 py-4 rounded-full border-2 border-[#6b63ff]
            text-[#ffffff] bg-[#5f5cf4] font-semibold text-lg
            shadow-lg hover:scale-105 transition-all duration-300"
          >
            Shop Best Sellers
          </button>
        </div>

        {/* Right Dog Illustration */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="w-[320px] sm:w-[420px] md:w-[520px] animate-float">
            <DogIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function DogIllustration() {
  return (
    <svg
      viewBox="0 0 520 450"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.15)]"
    >
      {/* White outline */}
      <g stroke="#ffffff" strokeWidth="16" strokeLinejoin="round">
        
        {/* Tail */}
        <path
          d="M390 180C430 120 445 70 425 35C410 10 380 18 370 48C362 72 365 105 380 145"
          fill="#f8f5ef"
          stroke="#ffffff"
        />

        {/* Body */}
        <ellipse cx="290" cy="265" rx="135" ry="92" fill="#f8f5ef" />

        {/* Back leg */}
        <ellipse cx="380" cy="315" rx="48" ry="70" fill="#f8f5ef" />

        {/* Front legs */}
        <ellipse cx="180" cy="340" rx="42" ry="32" fill="#f8f5ef" />
        <ellipse cx="305" cy="345" rx="42" ry="32" fill="#f8f5ef" />

        {/* Head */}
        <ellipse cx="180" cy="220" rx="105" ry="88" fill="#f8f5ef" />

        {/* Ear */}
        <path
          d="M125 165C110 115 90 92 58 95C36 98 24 120 40 145C56 168 78 185 112 198"
          fill="#ffd12f"
        />
      </g>

      {/* Main body lines */}
      <g stroke="#1e1b4b" strokeWidth="7" fill="none" strokeLinecap="round">

        {/* Tail line */}
        <path d="M390 180C430 120 445 70 425 35C410 10 380 18 370 48" />

        {/* Body outline */}
        <path
          d="M150 275C155 205 220 170 300 175C390 180 445 235 430 310C420 355 390 385 320 390"
          fill="#f8f5ef"
        />

        {/* Head outline */}
        <ellipse cx="180" cy="220" rx="105" ry="88" fill="#f8f5ef" />

        {/* Ear outline */}
        <path
          d="M125 165C110 115 90 92 58 95C36 98 24 120 40 145C56 168 78 185 112 198"
          fill="#ffd12f"
        />
      </g>

      {/* Yellow patches */}
      <path
        d="M290 175C350 185 385 220 395 285"
        stroke="#ffd12f"
        strokeWidth="16"
        strokeLinecap="round"
      />

      <path
        d="M140 150C125 135 108 126 92 126"
        stroke="#ffd12f"
        strokeWidth="14"
        strokeLinecap="round"
      />

      {/* Eyes */}
      <ellipse cx="145" cy="225" rx="10" ry="15" fill="#1e1b4b" />
      <ellipse cx="210" cy="225" rx="10" ry="15" fill="#1e1b4b" />

      {/* Nose */}
      <ellipse cx="112" cy="255" rx="18" ry="13" fill="#1e1b4b" />

      {/* Mouth */}
      <path
        d="M118 273C145 302 182 302 205 275"
        stroke="#1e1b4b"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Tongue */}
      <path
        d="M162 280C155 308 170 325 188 316C198 308 196 290 190 275"
        fill="#ff9e9e"
        stroke="#1e1b4b"
        strokeWidth="4"
      />

      {/* Cheek */}
      <circle cx="245" cy="250" r="10" fill="#ffb3b3" />

      {/* Paw clouds */}
      <g fill="#f8f5ef" stroke="#1e1b4b" strokeWidth="6">
        <path d="M300 390C310 365 335 360 350 375C365 355 390 360 398 385C415 375 435 390 425 405H310C292 405 290 398 300 390Z" />
      </g>
    </svg>
  );
}