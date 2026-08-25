import Image from "next/image";

import brac from "../assets/images/logos/brac.png";
import icddrb from "../assets/images/logos/icddrb.png";
import redCrescent from "../assets/images/logos/red-crescent.png";
import saveTheChildren from "../assets/images/logos/save-the-children.png";
import siut from "../assets/images/logos/siut.png";
import unicef from "../assets/images/logos/unicef.png";

const organizations = [
  {
    name: "BRAC",
    logo: brac,
  },
  {
    name: "icddr,b",
    logo: icddrb,
  },
  {
    name: "Bangladesh Red Crescent Society",
    logo: redCrescent,
  },
  {
    name: "SIUT",
    logo: siut,
  },
  {
    name: "UNICEF",
    logo: unicef,
  },
  {
    name: "Save the Children",
    logo: saveTheChildren,
  },
];

export default function Logos() {
  return (
    <section className="mx-auto w-[92%] max-w-[1150px] px-0 py-2.5 pb-5">

      {/* Heading */}
      <h2 className="mb-4 text-center text-base font-bold text-[#202936] sm:text-lg">
        Trusted by Leading Organizations

        <span className="mx-auto mt-1 block h-[3px] w-[38px] rounded-full bg-[#e30613]" />
      </h2>

      {/* Logos Container */}
      <div
        className="
          grid
          grid-cols-2
          overflow-hidden
          rounded-[10px]
          border
          border-[#eeeeee]
          bg-white
          px-2
          py-2
          shadow-[0_2px_8px_rgba(0,0,0,0.04)]

          sm:grid-cols-3
          sm:px-3

          lg:grid-cols-6
          lg:px-5
        "
      >
        {organizations.map((organization, index) => (
          <div
            key={organization.name}
            className={`
              flex
              h-[65px]
              items-center
              justify-center
              px-2
              sm:h-[70px]
              sm:px-3
              lg:h-[75px]
              lg:px-[15px]

              ${
                index % 2 !== 1
                  ? "border-r border-[#eeeeee] sm:border-r-0 lg:border-r"
                  : ""
              }

              ${
                index < 4
                  ? "border-b border-[#eeeeee] sm:border-b"
                  : "sm:border-b-0"
              }

              ${
                index === 1 || index === 4
                  ? "sm:border-r border-[#eeeeee]"
                  : ""
              }

              ${
                index === 2 || index === 5
                  ? "sm:border-r-0 lg:border-r"
                  : ""
              }

              lg:border-b-0
              lg:last:border-r-0
            `}
          >
            <Image
              src={organization.logo}
              alt={`${organization.name} logo`}
              className="
                h-auto
                max-h-[32px]
                w-auto
                max-w-[90px]
                object-contain

                sm:max-h-[38px]
                sm:max-w-[110px]

                lg:max-h-[45px]
                lg:max-w-[145px]
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}