import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent successfully!");

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="bg-[#002240] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl  font-bold mb-6">Contact Us</h1>
          <p className="max-w-3xl mx-auto">
            Ready to revolutionize your livestock management? Get in touch with
            our team and discover how Cowlytics can transform your farming
            operations.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
          <div className="bg-white shadow-md rounded-lg p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-1">Send us a Message</h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    value={formData.firstName}
                    name="firstName"
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    name="lastName"
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full border border-gray-300 rounded px-4 py-2"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  name="phone"
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Farm/Company Name
                </label>
                <input
                  type="text"
                  value={formData.company}
                  name="company"
                  onChange={handleChange}
                  placeholder="Your Farm Name"
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  name="message"
                  onChange={handleChange}
                  placeholder="Tell us about your livestock management needs..."
                  className="w-full border border-gray-300 rounded px-4 py-2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#002240] text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            {[
              {
                icon: <MapPin className="h-6 w-6 text-[#1C4F7B]" />,
                title: "Our Office",
                content: (
                  <>
                    Main Street
                    <br />
                    111B S GOVERNORS AVE STE 34788
                    <br />
                    United States
                  </>
                ),
              },
              {
                icon: <Phone className="h-6 w-6 text-[#1C4F7B]" />,
                title: "Phone Support",
                content: (
                  <>
                    Main: +1 (617) 785-4720
                    <br />
                    Support: +1 (617) 785-4720
                    <br />
                    Available 24/7
                  </>
                ),
              },
              {
                icon: <Mail className="h-6 w-6 text-[#1C4F7B]" />,
                title: "Email Us",
                content: <>General: info@cowlytics.com</>,
              },
              {
                icon: <Clock className="h-6 w-6 text-[#1C4F7B]" />,
                title: "Business Hours",
                content: (
                  <>
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed (Emergency support available)
                  </>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
