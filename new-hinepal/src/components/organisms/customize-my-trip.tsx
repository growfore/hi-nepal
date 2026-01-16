"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function CustomizeTrip({
  packageName,
}: Readonly<{
  packageName: string;
}>) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    contactNumber: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    const messageWordCount = formData.message
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;
    if (messageWordCount === 0) {
      newErrors.message = "Message is required";
    } else if (messageWordCount < 50) {
      newErrors.message = `Message must be at least 50 words (current: ${messageWordCount}).`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  async function handleForm(data: any) {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        toast.success(
          "Your inquiry has been sent successfully! We will get back to you soon."
        );
        resetForm();
        setIsOpen(false);
      } else {
        toast.error(
          result.error || "Failed to send your inquiry. Please try again."
        );
      }
    } catch (error: any) {
      throw new Error(
        "Network erro. Please check your connection and try again.",
        error
      );
    }
  }

  const handleButtonClick = () => {
    if (validateForm()) {
      handleForm(formData);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
      contactNumber: "",
    });
    setErrors({});
  };

  return (
    <div className="p-4 bg-green-200 rounded-sm mt-8">
      <p>
        Didn’t find what you’re looking for? We can customize your {packageName}{" "}
        itinerary to fit your travel style, timeframe, and special requirements.
      </p>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            size={"lg"}
            variant={"default"}
            className="bg-green-700 hover:bg-orange-600 mt-2"
          >
            Customize my Trip
          </Button>
        </DialogTrigger>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>Send a message</DialogTitle>
            <DialogDescription>
              Describe your itinerary and we will get back to you with the
              possibilities and suggestions.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="contact-number">Contact Number</Label>
              <Input
                id="contact-number"
                name="contact-number"
                value={formData.contactNumber}
                onChange={(e) =>
                  handleInputChange("contactNumber", e.target.value)
                }
                placeholder="Your phone number"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Tell us about your ideal trip, preferred dates, group size, special requirements, etc."
              />
              {errors.message && (
                <span className="text-red-500 text-sm">{errors.message}</span>
              )}
            </div>
          </div>

          <DialogFooter className="mt-6">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button
              type="button"
              className="bg-green-700 hover:bg-orange-600"
              onClick={handleButtonClick}
            >
              Send Inquiry
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
