"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Dropdown } from "@heroui/react";
import { Droplet, ChevronDown, Xmark } from "@gravity-ui/icons";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Donate", href: "/donate" },
  { label: "Events", href: "/events" },
  { label: "Eligibility", href: "/eligibility" },
];

const resourceLinks = [
  { id: "process", label: "Blood Donation Process", href: "/resources/process" },
  { id: "faqs", label: "FAQs", href: "/resources/faqs" },
  { id: "blog", label: "Blog", href: "/resources/blog" },
  { id: "donor-guide", label: "Donor Guide", href: "/resources/donor-guide" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className="mb-5 sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <Droplet className="text-red-600" width={28} height={28} />
          <div className="leading-tight">
            <p className="text-lg font-bold text-gray-900">
              Life<span className="text-red-600">Line</span>
            </p>
            <p className="text-[10px] font-semibold tracking-wide text-red-600">
              BLOOD DONATION
            </p>
          </div>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              <Link
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`relative pb-1 text-sm font-medium transition-colors ${
                  activeLink === link.label
                    ? "text-red-600"
                    : "text-gray-700 hover:text-red-600"
                }`}
              >
                {link.label}
                {activeLink === link.label && (
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded bg-red-600" />
                )}
              </Link>
            </li>
          ))}

          {/* Resources dropdown */}
          <li>
            <Dropdown>
              <Button variant="ghost" className="flex items-center gap-1 text-sm font-medium text-gray-700">
                Resources
                <ChevronDown width={16} height={16} />
              </Button>
              <Dropdown.Popover>
                <Dropdown.Menu>
                  {resourceLinks.map((item) => (
                    <Dropdown.Item key={item.id} id={item.id} textValue={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          </li>

          <li>
            <Link
              href="/contact"
              onClick={() => setActiveLink("Contact")}
              className={`text-sm font-medium transition-colors ${
                activeLink === "Contact"
                  ? "text-red-600"
                  : "text-gray-700 hover:text-red-600"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        
        <Link href="/donate"> 
        <Button
          variant="danger"
          radius="full"
          className="hidden font-semibold lg:flex"
        >
          <Droplet width={16} height={16} />
          Donate Now
        </Button>
        </Link>
       <Link href={"/signup"}>
       <Button
          variant="outline"
          radius="full"
          className="hidden font-semibold lg:flex"
        >
          Signup 
        </Button>
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="text-gray-700 lg:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <Xmark width={24} height={24} />
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-6 bg-gray-700" />
              <span className="block h-0.5 w-6 bg-gray-700" />
              <span className="block h-0.5 w-6 bg-gray-700" />
            </div>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {[...navLinks, { label: "Resources", href: "/resources" }, { label: "Contact", href: "/contact" }].map(
              (link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.label);
                      setIsMenuOpen(false);
                    }}
                    className={`block rounded-md px-3 py-2 text-sm font-medium ${
                      activeLink === link.label
                        ? "bg-red-50 text-red-600"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
          <Button
            as={Link}
            href="/donate"
            variant="danger"
            radius="full"
            className="mt-3 w-full font-semibold"
            onPress={() => setIsMenuOpen(false)}
          >
            <Droplet width={16} height={16} />
            Donate Now
          </Button>
        </div>
      )}
    </header>
  );
}
