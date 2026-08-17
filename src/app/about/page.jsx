

import {
  HeartPulse,
  Users,
  Droplets,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">
            About BloodLink
          </p>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Connecting{" "}
            <span className="text-red-600">Donors</span> With Those in Need
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 sm:text-lg">
            BloodLink is a blood donation platform designed to make it easier
            for donors and patients to connect. We believe that a simple
            donation can become someone's second chance at life.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Every Drop Can Make a Difference
            </h3>

            <p className="mt-5 leading-7 text-gray-600">
              Finding the right blood donor at the right time can be
              challenging. BloodLink brings donors, patients, hospitals, and
              volunteers together through one simple platform.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our goal is to create a reliable and accessible blood donation
              community where people can quickly find compatible donors and
              help save lives when it matters most.
            </p>
          </div>

    
          <div className="grid gap-5 sm:grid-cols-2">

 
            <div
              className="rounded-xl border border-gray-200
              bg-gray-50 p-6 shadow-sm transition duration-300
              hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center
                rounded-lg bg-red-50"
              >
                <HeartPulse className="text-red-600" size={26} />
              </div>

              <h4 className="text-lg font-semibold">
                Save Lives
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Help patients receive the blood they need during emergencies
                and critical situations.
              </p>
            </div>

            {/* Build Community */}
            <div
              className="rounded-xl border border-gray-200
              bg-gray-50 p-6 shadow-sm transition duration-300
              hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center
                rounded-lg bg-red-50"
              >
                <Users className="text-red-600" size={26} />
              </div>

              <h4 className="text-lg font-semibold">
                Build Community
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Bring compassionate donors and people in need together through
                a trusted community.
              </p>
            </div>

  
            <div
              className="rounded-xl border border-gray-200
              bg-gray-50 p-6 shadow-sm transition duration-300
              hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center
                rounded-lg bg-red-50"
              >
                <Droplets className="text-red-600" size={26} />
              </div>

              <h4 className="text-lg font-semibold">
                Easy Donation
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Make the process of finding and donating blood easier, faster,
                and more accessible.
              </p>
            </div>

      
            <div
              className="rounded-xl border border-gray-200
              bg-gray-50 p-6 shadow-sm transition duration-300
              hover:-translate-y-1 hover:border-red-200 hover:shadow-md"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center
                rounded-lg bg-red-50"
              >
                <ShieldCheck className="text-red-600" size={26} />
              </div>

              <h4 className="text-lg font-semibold">
                Trusted Platform
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We aim to provide a safe and organized platform for connecting
                blood donors with those who need help.
              </p>
            </div>

          </div>
        </div>

 
        <div
          className="mt-16 rounded-2xl border border-red-100
          bg-red-50 px-6 py-8 text-center sm:px-12"
        >
          <h3 className="text-2xl font-bold text-gray-900">
            Our Mission
          </h3>

          <p className="mx-auto mt-3 max-w-3xl leading-7 text-gray-600">
            To build a connected community where finding a blood donor is
            simple, fast, and accessible — because when someone needs blood,
            every second matters.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;