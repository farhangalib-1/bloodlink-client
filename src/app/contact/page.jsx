import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  HeartPulse,
} from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-red-50 py-20">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-red-600">
            Get In Touch
          </p>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Contact <span className="text-red-600">BloodLink</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, need assistance, or want to learn more about
            BloodLink? We are here to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                Contact Information
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900">
                We would love to hear from you
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Whether you have questions about blood donation, need help
                using our platform, or want to work with us, feel free to
                reach out to our team.
              </p>

              <div className="mt-8 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <MapPin className="text-red-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Our Address
                  </h3>
                  <p className="mt-1 text-gray-600">
                    123 Health Street,
                    <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <Phone className="text-red-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="mt-1 text-gray-600">
                    +880 1234-567890
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <Mail className="text-red-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">
                    info@lifeline.org
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red-50">
                  <Clock className="text-red-600" size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900">
                    Working Hours
                  </h3>
                  <p className="mt-1 text-gray-600">
                    Saturday - Thursday
                    <br />
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-7 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50">
                    <HeartPulse className="text-red-600" size={23} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Send Us a Message
                    </h2>
                    <p className="text-sm text-gray-500">
                      We will get back to you as soon as possible.
                    </p>
                  </div>
                </div>

                <form className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-700"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+880 1XXXXXXXXX"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What is your message about?"
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Write your message here..."
                      className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3.5 font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Send Message
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50 py-14">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-red-50">
            <HeartPulse className="text-red-600" size={28} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900 sm:text-3xl">
            Every Drop Counts
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-600">
            Your blood donation can give someone another chance at life.
            Become a donor and be a part of the BloodLink community.
          </p>
            <Link href={"/signup"}>
          <button
            className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Become a Donor
          </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;