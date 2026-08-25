import Image from "next/image";

import brac from "../assets/images/logos/brac.png";
import icddrb from "../assets/images/logos/icddrb.png";
import redCrescent from "../assets/images/logos/red-crescent.png";
import saveTheChildren from "../assets/images/logos/save-the-children.png";
import siut from "../assets/images/logos/siut.png";
import unicef from "../assets/images/logos/unicef.png";

import "./logos.css";

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
    <section className="trusted-organizations">
      <h2 className="trusted-title">
        Trusted by Leading Organizations
      </h2>

      <div className="trusted-logos">
        {organizations.map((organization) => (
          <div className="trusted-logo" key={organization.name}>
            <Image
              src={organization.logo}
              alt={`${organization.name} logo`}
              className="organization-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}