"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  LucideMail,
  LucideMapPin,
  LucidePhone,
  LucideSend,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { TPackageDetails } from "@/types/types";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  destination: z.string().min(1, "Please select a destination"),
  groupSize: z.string().min(1, "Please select a group size"),
  startDate: z.string("Please choose your desired date for the activity."),
  experienceLevel: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = ({ packages }: { packages: TPackageDetails[] }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form_Component packages={packages} />
    </Suspense>
  );
};

export default ContactForm;

export function Form_Component({ packages }: { packages: TPackageDetails[] }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const searchParams = useSearchParams();
  const destinationParam = searchParams?.get("destination") ?? "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      destination: destinationParam || "",
      groupSize: "",
      startDate: "",
      experienceLevel: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    if (destinationParam) form.setValue("destination", destinationParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinationParam]);

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_FRONTEND_BASE_URL}/api/send`, {
        method: "POST",
        body: JSON.stringify({ data }),
        cache: "no-store",
      });
      setSubmitSuccess(true);
      form.reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="relative py-42 text-white bg-orange-500 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto relative z-10 text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Plan Your Adventure
          </h1>
          <p className="text-xl leading-relaxed">
            Ready to explore? Let us help you plan your perfect trekking and
            travel experience!
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 mb-5 bg-white rounded-xl shadow-lg">
              <div className="bg-white text-center py-6 rounded-t-xl">
                <h2 className="text-2xl font-bold text-dark-blue-900 mb-2">
                  Start Your Journey
                </h2>
                <p className="text-gray-600 text-lg mb-0">
                  Tell us about your dream adventure and we'll create the
                  perfect trekking experience for you.
                </p>
              </div>
              <div className="p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Full Name */}
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Destination */}
                    <FormField
                      control={form.control}
                      name="destination"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Desired Destination *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select Destinations" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="z-[999]">
                              {packages.map((pkg) => (
                                <SelectItem key={pkg.slug} value={pkg.slug}>
                                  {pkg.title.split(":")[0]}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Group Size */}
                    <FormField
                      control={form.control}
                      name="groupSize"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Group Size *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select group size" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="1">Solo (1 person)</SelectItem>
                              <SelectItem value="2">
                                Couple (2 people)
                              </SelectItem>
                              <SelectItem value="3-5">
                                Small group (3-5 people)
                              </SelectItem>
                              <SelectItem value="6-10">
                                Medium group (6-10 people)
                              </SelectItem>
                              <SelectItem value="10+">
                                Large group (10+ people)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="startDate"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Start Date *</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    {/* Experience Level */}
                    <FormField
                      control={form.control}
                      name="experienceLevel"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Experience Level</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select experience level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="w-full">
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">
                                Intermediate
                              </SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                              <SelectItem value="expert">Expert</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Enter your phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Message */}
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Additional Details *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more about your ideal trekking or travel experience, preferred dates, special requirements, etc."
                              rows={6}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="w-full">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 bg-green-600 text-white hover:bg-green-700"
                      >
                        <LucideSend className="w-5 h-5" />
                        {isSubmitting ? "Sending..." : "Send Inquiry"}
                      </Button>
                    </div>

                    {/* Success Message */}
                    {submitSuccess && (
                      <p className="text-green-600 text-center font-medium">
                        Form submitted successfully! We'll be in touch soon.
                      </p>
                    )}
                  </form>
                </Form>
              </div>
            </div>

            {/* Right Column - Contact Info Cards */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-1 gap-4">
                {/* <div className="bg-green-600 text-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/25 flex items-center justify-center mb-4">
                    <LucidePhone color="white" className="w-8 h-8" />
                  </div>
                  <h5 className="font-bold text-xl mb-3">ADVENTURE PLANNING</h5>
                  <a
                    href="tel:+9779856035091"
                    className="text-white text-xl font-bold block mb-2 hover:underline"
                  >
                    +977 985-6035091
                  </a>
                  <small className="opacity-75 text-lg font-bold italic">
                    We are open 7 Days a Week <br /> 07.30am - 09.30pm
                  </small>
                </div> */}

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h5 className="font-bold text-xl mb-4">
                    Reach Us
                  </h5>

                  {/* Phone Section */}
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <LucidePhone color="green" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Call us</p>
                      <p className="text-gray-600 text-sm mb-0">
                        +977 9856035091
                      </p>
                    </div>
                  </div>
                  {/* Email Section */}
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <LucideMail color="green" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Email</p>
                      <p className="text-gray-600 text-sm mb-0">
                        info@hinepaltreks.com
                      </p>
                    </div>
                  </div>

                  {/* Address Section */}
                  <div className="flex items-center">
                    <div className="bg-green-100 p-2 rounded-full mr-3">
                      <LucideMapPin color="green" className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">
                        Address
                      </p>
                      <p className="text-gray-600 text-sm mb-0">
                        Street No. 13,Lakeside, Pokhara
                        <br />
                        Nepal
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Response Card */}
                <div className="bg-green-100 rounded-xl shadow-sm p-6">
                  <h5 className="font-bold text-green-600 text-xl mb-3">
                    Quick Response
                  </h5>
                  <p className="text-green-600 text-sm mb-0">
                    We typically respond to all inquiries within 24 hours during
                    business days to help you plan your trip.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
