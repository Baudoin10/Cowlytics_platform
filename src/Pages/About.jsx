
import React from "react";
import { Users, Target, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-[#002240] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl  font-bold mb-6">About Cowlytics</h1>
          <p className="max-w-3xl mx-auto">
            We proudly developed a monitoring system that provides livestock
            producers worldwide with accessible, affordable, and cutting-edge
            technology. This technology improves food animal productivity and
            enhances the forecasting of animal biosecurity challenges.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 ">
              At Cowlytics, we are dedicated to revolutionizing livestock
              management through innovative technology that enhances animal
              biosecurity, increases farm productivity, and promotes sustainable
              agriculture practices.
            </p>
            <p className="text-gray-600 ">
              We believe that by providing producers with real-time insights and
              predictive analytics, we can help create a more efficient, humane,
              and profitable agricultural ecosystem.
            </p>
          </div>

          {/* Two stats cards */}
          {/* <div className="grid grid-cols-2 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-[#1C4F7B]" />
              </div>
              <h3 className="font-semibold text-lg">2,000+</h3>
              <p className="text-gray-600">Active Users</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-[#1C4F7B]" />
              </div>
              <h3 className="font-semibold text-lg">5+</h3>
              <p className="text-gray-600">Countries</p>
            </div>
          </div> */}
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Our core Values</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-16">
            These core principles guide everything we do at Cowlytics
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-[#1C4F7B]" />
              </div>
              <h3 className="font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We constantly push the boundaries of technology to create
                solutions that transform commercial livestock producer
                practices.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#1C4F7B]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every product we create and every
                service we provide to our customers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#1C4F7B]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to promoting sustainable agriculture that
                benefits both producers and consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Our Story</h2>
          <div className="max-w-4xl mx-auto text-left">
            <p className="text-gray-600 mb-6">
              Founded in 2025 by a team of agricultural scientists, animal and
              dairy scientists, and technology experts, Cowlytics emerged from a
              simple observation: livestock operations and businesses were not
              keeping pace with modern management tools.
            </p>
            <p className=" text-gray-600 mb-6">
              Cowlytic founders understood the challenges faced by livestock
              producers. They envisioned a world where technology could provide
              producers with the insights needed to make better decisions about
              their livestock health, reproduction, and production.
            </p>
            <p className="text-gray-600">
              Today, Cowlytics goal is to serve thousands of producers across
              the globe, helping them improve their operations while ensuring
              the highest standards of animal biosecurity. Our journey continues
              as we develop new technologies and expand our reach to support
              producers worldwide.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
