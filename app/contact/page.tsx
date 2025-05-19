"use client";

import type React from "react";

import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
    alert("Message sent successfully!");
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen flex flex-col lg:flex-row">
      {/* Contact Form Section */}
      <div className="w-full lg:w-1/2 bg-[#f0f8f0] p-8 lg:p-16">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact with us
          </h1>
          <p className="text-gray-600 mb-8">
            We&apos;re here to help and answer any questions you might have
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
                className="min-h-[150px] bg-white"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>

      {/* Contact Information and Map Section */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16">
        <div className="max-w-full mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            Visit or Reach Out
          </h2>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Dhaka Office</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-green-600 mt-1 mr-3" />
                <div>
                  <p className="text-gray-700">123 Example Street</p>
                  <p className="text-gray-700">Dhaka 1000, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-600 mr-3" />
                <p className="text-gray-700">+880 1234-567890</p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 mr-3" />
                <p className="text-gray-700">dhaka@tekarsh.com</p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">USA Office</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 mr-3" />
                <p className="text-gray-700">usa@tekarsh.com</p>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 text-green-600 mr-3" />
                <p className="text-gray-700">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>

          {/* Google Maps Integration */}
          <div className="space-y-3 border-2 w-full border-red-400">
            <h3 className="text-lg font-medium">Our Locations</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm">Dhaka Main Office</span>
              </div>
            </div>
            <div className="h-[400px] w-full rounded-lg overflow-hidden border border-gray-200 shadow-md">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function GoogleMap() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8982321441673!2d90.39093502525673!3d23.783126888219395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzU1LjgiTiA5MMKwMjMnNDIuNCJF!5e0!3m2!1sen!2sus!4v1716143500000!5m2!1sen!2sus&markers=color:red%7Clabel:A%7C23.782176263262578,90.39511505285714&markers=color:green%7Clabel:B%7C23.784077573537783,90.39350384473394"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
