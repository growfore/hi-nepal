"use client";

import { LucideMail, LucideMapPin, LucidePhone, LucideSend } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mandyjwv");

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative py-42 text-white bg-orange-500 bg-gradient-to-r from-orange-500 to-orange-600">
          <div className="absolute inset-0 bg-black/25"></div>
          <div className="container mx-auto relative z-10 text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">Plan Your Adventure</h1>
            <p className="text-xl leading-relaxed">
              Ready to explore? Let us help you plan your perfect trekking and travel experience!
            </p>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column - Form */}
              <div className="lg:col-span-8 mb-5">
                <div className="bg-white rounded-xl shadow-lg">
                  <div className="bg-white text-center py-6 rounded-t-xl">
                    <h2 className="text-2xl font-bold text-dark-blue-900 mb-2">Start Your Journey</h2>
                    <p className="text-gray-600 text-lg mb-0">
                      Tell us about your dream adventure and we'll create the perfect trekking experience for you.
                    </p>
                  </div>
                  <div className="p-8">
                    <form onSubmit={handleSubmit}>
                      {/* Full Name */}
                      <div className="mb-4">
                        <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                        <ValidationError prefix="Full Name" field="fullName" errors={state.errors} />
                      </div>

                      {/* Destination */}
                      <div className="mb-4">
                        <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-1">
                          Desired Destination *
                        </label>
                        <input
                          type="text"
                          id="destination"
                          name="destination"
                          placeholder="e.g., Everest Base Camp, Annapurna Circuit"
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                        <ValidationError prefix="Destination" field="destination" errors={state.errors} />
                      </div>

                      {/* Group Size & Experience Level */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                          <label htmlFor="groupSize" className="block text-sm font-semibold text-gray-700 mb-1">
                            Group Size *
                          </label>
                          <select
                            id="groupSize"
                            name="groupSize"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            required
                          >
                            <option value="">Select group size</option>
                            <option value="1">Solo (1 person)</option>
                            <option value="2">Couple (2 people)</option>
                            <option value="3-5">Small group (3-5 people)</option>
                            <option value="6-10">Medium group (6-10 people)</option>
                            <option value="10+">Large group (10+ people)</option>
                          </select>
                          <ValidationError prefix="Group Size" field="groupSize" errors={state.errors} />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="experienceLevel" className="block text-sm font-semibold text-gray-700 mb-1">
                            Experience Level
                          </label>
                          <select
                            id="experienceLevel"
                            name="experienceLevel"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          >
                            <option value="">Select experience level</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                            <option value="expert">Expert</option>
                          </select>
                          <ValidationError prefix="Experience Level" field="experienceLevel" errors={state.errors} />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-4">
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                            required
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
                          />
                          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">
                          Additional Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 resize-y"
                          placeholder="Tell us more about your ideal trekking or travel experience, preferred dates, special requirements, etc."
                          required
                        ></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </div>

                      {/* Submit Button */}
                      <div className="w-full">
                        <button
                          type="submit"
                          disabled={state.submitting}
                          className="w-full flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 text-lg font-semibold rounded-md shadow-md hover:bg-green-700 transition-colors"
                        >
                          <LucideSend className="w-5 h-5" />
                          {state.submitting ? "Sending..." : "Send Inquiry"}
                        </button>
                      </div>

                      {/* Success / Error */}
                      {state.succeeded && <p className="text-green-600 mt-3">Form submitted successfully!</p>}
                      {/* @ts-ignore */}
                      {state.errors?.length > 0 && <p className="text-red-600 mt-3">Please fix the errors above.</p>}
                    </form>
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Info Cards */}
              <div className="lg:col-span-4">
                <div className="grid grid-cols-1 gap-4">
                  {/* Card 1: Adventure Planning */}
                  <div className="bg-green-600 text-white rounded-xl shadow-lg">
                    <div className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-white/25 flex items-center justify-center mb-4">
                        <LucidePhone color="white" className="w-8 h-8" />
                      </div>
                      <h5 className="font-bold text-xl mb-3">ADVENTURE PLANNING</h5>
                      <a href="tel:061-457510" className="text-white text-xl font-bold block hover:underline">
                        061-457510
                      </a>
                      <a href="tel:+9779856035091" className="text-white text-xl font-bold block mb-2 hover:underline">
                        +977 985-6035091
                      </a>
                      <small className="opacity-75 text-lg font-bold italic">
                        We are open 7 Days a Week <br /> 07.30am - 09.30pm
                      </small>
                    </div>
                  </div>

                  {/* Card 2: Other Ways to Reach Us */}
                  <div className="bg-white rounded-xl shadow-lg">
                    <div className="p-6">
                      <h5 className="font-bold text-xl mb-4">Other Ways to Reach Us</h5>
                      <div className="flex items-center mb-4">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <LucideMail color="green" className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Email</p>
                          <p className="text-gray-600 text-sm mb-0">hinepaltreks@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <LucideMapPin color="green" className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-700 mb-1">Address</p>
                          <p className="text-gray-600 text-sm mb-0">
                            Street No. 13,Lakeside, Pokhara
                            <br />
                            Nepal
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Quick Response */}
                  <div className="bg-green-100 rounded-xl shadow-sm">
                    <div className="p-6">
                      <h5 className="font-bold text-green-600 text-xl mb-3">Quick Response</h5>
                      <p className="text-green-600 text-sm mb-0">
                        We typically respond to all inquiries within 24 hours during business days to help you plan your
                        trip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactForm;
