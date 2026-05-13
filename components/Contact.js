import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-[#f7f5f3] px-6 md:px-16 py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-[4rem] md:text-[5.5rem] font-black text-[#2c1145] leading-none tracking-[-3px]">
            Contact Us
          </h1>

          <p className="mt-6 text-[#3f3152] text-lg max-w-2xl mx-auto leading-relaxed">
            We’re here to help you give your pets the best care possible.
            Reach out anytime for support, guidance, or product help.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

          {/* Left Card */}
          <div className="bg-[#d9c2ef] rounded-[40px] p-10 relative overflow-hidden">

            <div className="space-y-6 relative z-10">

              {/* Location */}
              <a
                href="https://maps.google.com/?q=Hyderabad, Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 bg-white/40 hover:bg-white/70 p-5 rounded-3xl transition duration-300 hover:scale-[1.02]"
              >
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <MapPin size={28} className="text-[#4c1d5c]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#2c1145]">
                    Store Location
                  </h3>

                  <p className="mt-2 text-[#3b2d4d] leading-relaxed">
                    Sentryx-Pet Care <br />
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919346269204"
                className="flex items-start gap-5 bg-white/40 hover:bg-white/70 p-5 rounded-3xl transition duration-300 hover:scale-[1.02]"
              >
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <Phone size={28} className="text-[#4c1d5c]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#2c1145]">
                    Call Us
                  </h3>

                  <p className="mt-2 text-[#3b2d4d]">
                    +91 93462 69204
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:support@sentryxpet.com"
                className="flex items-start gap-5 bg-white/40 hover:bg-white/70 p-5 rounded-3xl transition duration-300 hover:scale-[1.02]"
              >
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <Mail size={28} className="text-[#4c1d5c]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#2c1145]">
                    Email Support
                  </h3>

                  <p className="mt-2 text-[#3b2d4d]">
                    support@sentryxpet.com
                  </p>
                </div>
              </a>

              {/* Working Hours */}
              <div className="flex items-start gap-5 bg-white/40 p-5 rounded-3xl">

                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <Clock size={28} className="text-[#4c1d5c]" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#2c1145]">
                    Working Hours
                  </h3>

                  <p className="mt-2 text-[#3b2d4d]">
                    Mon - Sat : 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Card */}
          <div className="bg-[#FFDCC2] rounded-[40px] p-10 flex flex-col justify-between">

            <div>
              <h2 className="text-[2.8rem] font-black text-[#40220f] leading-none">
                Visit Our
                <br />
                Pet Care Hub
              </h2>

              <p className="mt-6 text-[#5c4635] leading-relaxed text-lg">
                Whether you need premium pet food, grooming support,
                wellness products or expert guidance — our team is
                ready to help.
              </p>
            </div>

            {/* Google Map */}
            <div className="mt-10 rounded-[30px] overflow-hidden border border-black/10 shadow-md h-[320px]">

              <iframe
                src="https://www.google.com/maps?q=Hyderabad&output=embed"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}