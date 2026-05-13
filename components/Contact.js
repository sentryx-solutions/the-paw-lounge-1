import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-[#f7f5f3] px-4 sm:px-6 md:px-16 py-16 md:py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="
            text-[2.8rem]
            sm:text-[4rem]
            md:text-[5.5rem]
            font-black
            text-[#2c1145]
            leading-none
            tracking-[-2px]
            md:tracking-[-3px]
          ">
            Contact Us
          </h1>

          <p className="
            mt-5
            text-[#3f3152]
            text-[15px]
            sm:text-lg
            max-w-2xl
            mx-auto
            leading-relaxed
            px-2
          ">
            We’re here to help you give your pets the best care possible.
            Reach out anytime for support, guidance, or product help.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mt-14 md:mt-20">

          {/* Left Card */}
          <div className="
            bg-[#d9c2ef]
            rounded-[28px]
            md:rounded-[40px]
            p-5
            sm:p-7
            md:p-10
            relative
            overflow-hidden
          ">

            <div className="space-y-5 md:space-y-6 relative z-10">

              {/* Location */}
              <a
                href="https://maps.google.com/?q=Hyderabad, Telangana"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-start gap-4
                  bg-white/40
                  hover:bg-white/70
                  p-4 md:p-5
                  rounded-2xl md:rounded-3xl
                  transition duration-300
                  hover:scale-[1.02]
                "
              >
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm shrink-0">
                  <MapPin size={24} className="text-[#4c1d5c]" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2c1145]">
                    Store Location
                  </h3>

                  <p className="mt-2 text-sm md:text-base text-[#3b2d4d] leading-relaxed">
                    Sentryx-Pet Care <br />
                    Hyderabad, Telangana, India
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919346269204"
                className="
                  flex items-start gap-4
                  bg-white/40
                  hover:bg-white/70
                  p-4 md:p-5
                  rounded-2xl md:rounded-3xl
                  transition duration-300
                  hover:scale-[1.02]
                "
              >
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm shrink-0">
                  <Phone size={24} className="text-[#4c1d5c]" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2c1145]">
                    Call Us
                  </h3>

                  <p className="mt-2 text-sm md:text-base text-[#3b2d4d]">
                    +91 93462 69204
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:support@sentryxpet.com"
                className="
                  flex items-start gap-4
                  bg-white/40
                  hover:bg-white/70
                  p-4 md:p-5
                  rounded-2xl md:rounded-3xl
                  transition duration-300
                  hover:scale-[1.02]
                "
              >
                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm shrink-0">
                  <Mail size={24} className="text-[#4c1d5c]" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2c1145]">
                    Email Support
                  </h3>

                  <p className="mt-2 text-sm md:text-base text-[#3b2d4d] break-all">
                    support@sentryxpet.com
                  </p>
                </div>
              </a>

              {/* Working Hours */}
              <div className="
                flex items-start gap-4
                bg-white/40
                p-4 md:p-5
                rounded-2xl md:rounded-3xl
              ">

                <div className="bg-white p-3 md:p-4 rounded-2xl shadow-sm shrink-0">
                  <Clock size={24} className="text-[#4c1d5c]" />
                </div>

                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#2c1145]">
                    Working Hours
                  </h3>

                  <p className="mt-2 text-sm md:text-base text-[#3b2d4d]">
                    Mon - Sat : 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Card */}
          <div className="
            bg-[#FFDCC2]
            rounded-[28px]
            md:rounded-[40px]
            p-5
            sm:p-7
            md:p-10
            flex flex-col justify-between
          ">

            <div>
              <h2 className="
                text-[2.1rem]
                sm:text-[2.5rem]
                md:text-[2.8rem]
                font-black
                text-[#40220f]
                leading-none
              ">
                Visit Our
                <br />
                Pet Care Hub
              </h2>

              <p className="
                mt-5
                text-[#5c4635]
                leading-relaxed
                text-[15px]
                sm:text-lg
              ">
                Whether you need premium pet food, grooming support,
                wellness products or expert guidance — our team is
                ready to help.
              </p>
            </div>

            {/* Map */}
            <div className="
              mt-8 md:mt-10
              rounded-[24px] md:rounded-[30px]
              overflow-hidden
              border border-black/10
              shadow-md
              h-[250px]
              sm:h-[300px]
              md:h-[320px]
            ">

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