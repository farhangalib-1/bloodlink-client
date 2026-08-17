import Link from "next/link";
import { Droplet, Envelope, Handset, GeoPin } from '@gravity-ui/icons';

const Footer = () => {
  return (
    <div className="bg-[#111827] text-gray-300 px-3 md:px-20 pt-14 pb-6">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">

        <div>
          <div className="flex items-center gap-2 mb-3">
            <Droplet className="text-red-600" size={26} />
            <div>
              <p className="text-lg font-bold text-white">
                Blood<span className="text-red-600">Link</span>
              </p>
              <p className="text-[10px] font-semibold text-red-600">BLOOD DONATION</p>
            </div>
          </div>
          <p className="text-sm mb-4">We connect donors with those in need. Every drop counts.</p>
          <div className="flex gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-sm">f</div>
            <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-sm">ig</div>
            <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-sm">tw</div>
            <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-sm">yt</div>
          </div>
        </div>

        <div>
          <h1 className="text-white font-bold mb-3">Quick Links</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/donate">Donate</Link>
            <Link href="/events">Events</Link>
            <Link href="/eligibility">Eligibility</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h1 className="text-white font-bold mb-3">Resources</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/resources/process">Blood Donation Process</Link>
            <Link href="/resources/faqs">FAQs</Link>
            <Link href="/resources/blog">Blog</Link>
            <Link href="/resources/donor-guide">Donor Guide</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h1 className="text-white font-bold mb-3">Contact Us</h1>
          <div className="flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <GeoPin className="text-red-600" size={16} />
              <p>123 Health Street, Dhaka, Bangladesh</p>
            </div>
            <div className="flex items-center gap-2">
              <Handset className="text-red-600" size={16} />
              <p>+880 1234-567890</p>
            </div>
            <div className="flex items-center gap-2">
              <Envelope className="text-red-600" size={16} />
              <p>info@lifeline.org</p>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 pt-5 text-center text-xs text-gray-400">
        © 2024 LifeLine Blood Donation. All rights reserved.
      </div>

    </div>
  )
}

export default Footer