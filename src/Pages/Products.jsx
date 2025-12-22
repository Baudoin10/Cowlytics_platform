import { Link } from "react-router-dom";
import {
  MapPin,
  Activity,
  Bell,
  Thermometer,
  Heart,
  TrendingUp,
} from "lucide-react";

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#002240] text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl max-w-3xl">
            Cowlytics offers two core livestock health-monitoring devices,
            designed to give producers real-time visibility into animal health,
            behavior, and movement using AI and IoT technology.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Smart Collar Card */}
          <ProductCard
            number="1"
            title="Smart Livestock Health Collar"
            subtitle="GNSS + Accelerometer + AI"
            description="The Cowlytics Smart Health Collar is a lightweight, neck-worn device that uses GNSS (GPS), motion sensors, and AI to monitor the location, movement, and animal behavior in real time."
            features={[
              {
                icon: <MapPin className="text-blue-600" />,
                title: "GNSS / GPS Tracking",
                description:
                  "Real-time location monitoring across farms and open rangelands",
              },
              {
                icon: <Bell className="text-blue-600" />,
                title: "Geofencing",
                description:
                  "Virtual boundaries with alerts when animals move outside designated areas",
              },
              {
                icon: <Activity className="text-blue-600" />,
                title: "Activity Monitoring",
                description:
                  "Tracks walking, resting, and abnormal movement to flag potential health challenges",
              },
              {
                icon: <TrendingUp className="text-blue-600" />,
                title: "Rumination Monitoring",
                description:
                  "Uses motion data and AI to detect changes linked to illness or stress",
              },
            ]}
            whyItMatters="The Smart Health Collar gives producers early visibility into animal health and movement, reducing losses, improving productivity, and supporting better animal biosecurity using accurate data."
            link="/products/smart-collar"
          />

          {/* Smart Ear Tag Card */}
          <ProductCard
            number="2"
            title="AI-Powered Smart Ear Tag"
            subtitle="with IoT Sensor Nodes"
            description="The Cowlytics Smart Ear Tag is a rugged, AI-enabled livestock monitoring device built with IoT sensor nodes to continuously track body temperature, heart rate, activity, and behavioral patterns in real time."
            features={[
              {
                icon: <Thermometer className="text-blue-600" />,
                title: "Temperature Monitoring",
                description: "Early detection of fever and health challenges",
              },
              {
                icon: <Activity className="text-blue-600" />,
                title: "Activity Tracking",
                description:
                  "Identifies behavior changes linked to illness, stress, or estrus",
              },
              {
                icon: <Heart className="text-blue-600" />,
                title: "Heart Rate Monitoring",
                description:
                  "Tracks cardiovascular patterns to flag stress, illness, or abnormal exertion",
              },
              {
                icon: <Bell className="text-blue-600" />,
                title: "AI Health Alerts",
                description:
                  "Converts sensor data into clear, actionable insights",
              },
            ]}
            whyItMatters="The Smart Ear Tag turns every animal into a real-time health data source, enabling proactive health management, improved animal biosecurity, and more efficient livestock operations especially in challenging environments."
            link="/products/smart-ear-tag"
          />
        </div>
      </section>
    </div>
  );
};

const ProductCard = ({
  number,
  title,
  subtitle,
  description,
  features,
  whyItMatters,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Product Image Placeholder */}
   

      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-blue-600 font-semibold mb-4">{subtitle}</p>
        <p className="text-gray-700 mb-6">{description}</p>

        {/* Key Features */}
        <h4 className="text-lg font-semibold text-gray-900 mb-4">
          Key Features
        </h4>
        <div className="space-y-4 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="mt-1">{feature.icon}</div>
              <div>
                <h5 className="font-semibold text-gray-900">{feature.title}</h5>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why It Matters */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-gray-900 mb-2">Why It Matters</h4>
          <p className="text-gray-700 text-sm">{whyItMatters}</p>
        </div>

        {/* CTA Button */}
        <Link
          to={link}
          className="block w-full text-center bg-[#002240] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Products;
