"use client";

import { useState } from "react";
import {ArrowRightToSquare} from '@gravity-ui/icons';
import Link from "next/link";
import { Button, Dropdown } from "@heroui/react";
import {LucideUserPlus, Phone} from "lucide-react"
import { Droplet, ChevronDown, Xmark } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client"
import {ArrowRightFromSquare, Gear, Persons} from "@gravity-ui/icons";
import {Avatar, Label} from "@heroui/react";
import Image from "next/image";
import {CircleCheck} from "@gravity-ui/icons";
import {
  Grid2X2,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Mail,
} from "lucide-react";


const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Donate", href: "/donate" },
  { label: "Events", href: "/events" },
  { label: "Donation", href: "/donation" },
  { label: "Blog", href: "/blog" },
];

const resourceLinks = [
  { id: "process", label: "Blood Donation Process", href: "/resources/process" },
  { id: "faqs", label: "FAQs", href: "/resources/faqs" },
  { id: "blog", label: "Blog", href: "/resources/blog" },
  { id: "donor-guide", label: "Donor Guide", href: "/resources/donor-guide" },
];

export default function Navbar() {
  const { data: session } = authClient.useSession()
  const user = session?.user
  const handleSignOut = async()=>{
    await authClient.signOut();
  }
  console.log(user)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <header className=" sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2">
          <Droplet className="text-red-600" width={28} height={28} />
          <div className="leading-tight">
            <p className="text-lg font-bold text-gray-900">
              Blood<span className="text-red-600">Link</span>
            </p>
            <p className="text-[10px] font-semibold tracking-wide text-red-600">
              BLOOD DONATION
            </p>
          </div>
        </Link>

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
        <div className="flex gap-4">
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
        {
          user ? <div className="hidden lg:block">
      <Dropdown>
      <Dropdown.Trigger className="rounded-full">
        <Avatar>
          <Avatar.Image
            alt="Junior Garcia"
            src={user?.image}
            className="border-2 bg-white border-red-500 rounded-full p-0.5"
          />
          <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
        </Avatar>
      </Dropdown.Trigger>
      <Dropdown.Popover>
        <div className="px-3 pt-3 pb-1">
          <div className="flex items-center gap-2">
            <Avatar size="sm">
              <Avatar.Image
                alt="Jane"
                src={user?.image}
                className="border-2 bg-white border-red-500 rounded-full p-0.5"
              />
              <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col gap-0">
              <p className="text-sm leading-5 font-medium">{user?.name}</p>
              <p className="text-xs leading-none text-muted">{user?.email}</p>
            </div>
          </div>
        </div>
        <Dropdown.Menu>
         
          <Dropdown.Item id="dashboard" textValue="Dashboard">
             <Link href={`/${user.role}`}>
            <Label>Dashboard</Label>
            </Link>
          </Dropdown.Item>
         
          <Dropdown.Item id="profile" textValue="Profile">
            <Label>Profile</Label>
          </Dropdown.Item>
          <Dropdown.Item id="logout" textValue="Logout" variant="danger">
            <button onClick={handleSignOut} className="flex w-full items-center justify-between gap-2">
              <Label>Log Out</Label>
              <ArrowRightFromSquare className="size-3.5 text-danger" />
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown.Popover>
    </Dropdown></div> : <div className="flex items-center gap-3"> <Link href={"/signup"}>
       <Button
          variant="outline"
          radius="full"
          className="hidden font-semibold lg:flex"
        >
          <LucideUserPlus/>
          Signup 
        </Button>
        </Link>
        <Link href={"/signin"}>
        <Button
          variant="outline"
          radius="full"
          className="hidden font-semibold lg:flex border-red-500 text-red-500"
        >
          <ArrowRightToSquare/> 
          Signin 
        </Button>
        </Link></div>
        }
      
            </div>
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

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 lg:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {[...navLinks, { label: "Contact", href: "/contact" }].map(
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
          {
          user ? 
              <div className="w-full space-y-3">

      {/* Profile Card */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-red-50/70 p-5 shadow-sm">

        {/* Decorative Circle */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-100/60" />

        <div className="relative flex items-center gap-4">

          {/* Profile Image */}
          <div className="relative shrink-0">

            <div className="relative h-[76px] w-[76px] overflow-hidden rounded-full border-4 border-white shadow-md">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-red-500">
              <ShieldCheck
                size={15}
                strokeWidth={2.5}
                className="text-white"
              />
            </div>

          </div>

          {/* User Information */}
          <div className="min-w-0 flex-1">

            <h3 className="truncate text-[17px] font-bold tracking-tight text-gray-900">
              {user.name}
            </h3>

            <div className="mt-1 flex items-center gap-1.5">
              <Mail
                size={14}
                className="shrink-0 text-gray-400"
              />

              <p className="truncate text-[13px] text-gray-500">
                {user.email}
              </p>
            </div>
            <div className="mt-1 flex items-center gap-1.5">
              <Phone 
                size={14}
                className="shrink-0 text-gray-400"
              />

              <p className="truncate text-[13px] text-gray-500">
                {user.mobileNumber}
              </p>
            </div>

            {/* Blood Donor Badge */}
            <div className="mt-3 flex items-center gap-2">

              <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-600">
                <Droplet size={13} fill="currentColor" />
                {user.role}
              </span>

              <span className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-bold text-gray-700">
                {user.bloodGroup}
              </span>

            </div>

          </div>

        </div>
      </div>

      {/* Dashboard */}
      <button
        type="button"
        className="group flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-all duration-200 hover:border-red-200 hover:bg-red-50/40 active:scale-[0.99]"
      >

        <div className="flex items-center gap-4">
           
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 transition-colors group-hover:bg-red-100">
            <Grid2X2 size={21} />
          </div>

          <div className="text-left">
            <Link href={`/${user.role}`}>
            <p className="text-[15px] font-semibold text-gray-800">
              Dashboard
            </p>
            </Link>
            <p className="mt-0.5 text-xs text-gray-400">
              Manage your account
            </p>
            
          </div>

        </div>
            
        <ChevronRight
          size={20}
          className="text-gray-400 transition-transform group-hover:translate-x-1"
        />

      </button>

      {/* Logout */}
      <button
        onClick={handleSignOut}
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white py-2 text-[15px] font-semibold text-gray-600 shadow-sm transition-all duration-200 hover:border-red-200 hover:bg-red-50 hover:text-red-600 active:scale-[0.99]"
      >
        <LogOut size={19} />
        Log out
      </button>
    </div> :
      <div> <Link href={"/signup"}>
       <Button
          variant="outline"
          radius="full"
          className="w-full mb-3 font-semibold"
          onPress={() => setIsMenuOpen(false)}
        >
          <LucideUserPlus/>
          Signup 
        </Button>
        </Link>
        <Link href={"/signin"}>
        <Button
          variant="outline"
          radius="full"
          className="w-full font-semibold lg:flex border-red-500 text-red-500"
        >
          <ArrowRightToSquare/> 
          Signin 
        </Button>
        </Link></div>
        }
          
          <Link href="/donate">
          <Button
            variant="danger"
            radius="full"
            className="mt-3 w-full font-semibold"
            onPress={() => setIsMenuOpen(false)}
          >
            
            <Droplet width={16} height={16} />
            Donate Now
          </Button>
       </Link>

       
       
        </div>
      )}
    </header>
  );
}
