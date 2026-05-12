import { useEffect, useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (el) setTimeout(() => el.classList.add('visible'), 100);
  }, []);

  return (
    <section className="bg-[#c8b6ff] relative overflow-hidden min-h-[440px] flex items-end justify-between px-6 md:px-16 pt-16 md:pt-20">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at 80% 50%, rgba(255,255,255,.28) 0%, transparent 60%)' }} />

      {/* Text */}
      <div ref={ref} className="fade-up relative z-10 max-w-lg pb-14 md:pb-20">
        <h1 className="font-fredoka text-[clamp(2.8rem,6vw,4.8rem)] leading-[1.04] text-navy uppercase tracking-tight">
          Pet Care<br />
          <span className="text-[#312e81]">Done Right</span>
        </h1>
        <p className="mt-4 mb-7 text-[0.97rem] text-[#312e81] font-semibold leading-relaxed max-w-sm">
          Quality food, wellness products, expert guidance &amp; essential care solutions all in one place for your dog, cat or small pet.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-navy text-white px-7 py-3.5 rounded-full font-extrabold text-[0.95rem] shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
        >
          Shop Now &amp; Save ›
        </a>
      </div>

      {/* Dog illustration */}
      <div className="relative z-10 animate-float w-[clamp(220px,36vw,460px)] self-end">
        <DogIllustration />
      </div>
    </section>
  );
}

function DogIllustration() {
  return (
    <svg viewBox="0 0 420 390" xmlns="http://www.w3.org/2000/svg" className="w-full drop-shadow-2xl">
      {/* Tail */}
      <path d="M318 258 Q372 214 356 174 Q344 150 318 172"
        stroke="#e8b84b" strokeWidth="26" fill="none" strokeLinecap="round" />
      {/* Body */}
      <ellipse cx="210" cy="272" rx="122" ry="92" fill="#f5d987" />
      {/* Hind legs */}
      <ellipse cx="156" cy="348" rx="36" ry="23" fill="#f5d987" />
      <ellipse cx="266" cy="348" rx="36" ry="23" fill="#f5d987" />
      {/* Toe pads */}
      <ellipse cx="144" cy="354" rx="11" ry="7" fill="#e8b84b" />
      <ellipse cx="165" cy="358" rx="11" ry="7" fill="#e8b84b" />
      <ellipse cx="255" cy="358" rx="11" ry="7" fill="#e8b84b" />
      <ellipse cx="276" cy="354" rx="11" ry="7" fill="#e8b84b" />
      {/* Head */}
      <ellipse cx="210" cy="150" rx="92" ry="84" fill="#f5d987" />
      {/* Ears */}
      <ellipse cx="136" cy="112" rx="33" ry="48" fill="#e8b84b" transform="rotate(-18 136 112)" />
      <ellipse cx="284" cy="112" rx="33" ry="48" fill="#e8b84b" transform="rotate(18 284 112)" />
      <ellipse cx="136" cy="116" rx="19" ry="31" fill="#fde68a" transform="rotate(-18 136 116)" />
      <ellipse cx="284" cy="116" rx="19" ry="31" fill="#fde68a" transform="rotate(18 284 116)" />
      {/* Eyes whites */}
      <ellipse cx="181" cy="140" rx="15" ry="17" fill="#fff" />
      <ellipse cx="239" cy="140" rx="15" ry="17" fill="#fff" />
      {/* Pupils */}
      <circle cx="184" cy="142" r="10" fill="#2d1b00" />
      <circle cx="242" cy="142" r="10" fill="#2d1b00" />
      {/* Eye shine */}
      <circle cx="188" cy="138" r="3.5" fill="#fff" />
      <circle cx="246" cy="138" r="3.5" fill="#fff" />
      {/* Nose */}
      <ellipse cx="210" cy="172" rx="17" ry="11" fill="#2d1b00" />
      <ellipse cx="207" cy="169" rx="5.5" ry="3.5" fill="#5c3a1e" opacity="0.45" />
      {/* Mouth */}
      <path d="M196 181 Q210 194 224 181" stroke="#2d1b00" strokeWidth="2.8" fill="none" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="210" cy="195" rx="13" ry="11" fill="#f87171" />
      <line x1="210" y1="186" x2="210" y2="205" stroke="#dc2626" strokeWidth="1.8" />
      {/* Blush */}
      <ellipse cx="162" cy="164" rx="19" ry="13" fill="#fca5a5" opacity="0.5" />
      <ellipse cx="258" cy="164" rx="19" ry="13" fill="#fca5a5" opacity="0.5" />
      {/* Body spot */}
      <ellipse cx="242" cy="294" rx="24" ry="17" fill="#e8b84b" opacity="0.6" />
      {/* Collar */}
      <rect x="164" y="217" width="92" height="19" rx="9.5" fill="#7c3aed" />
      <circle cx="210" cy="226" r="7.5" fill="#fde68a" />
      <circle cx="210" cy="226" r="3.5" fill="#e8b84b" />
    </svg>
  );
}
