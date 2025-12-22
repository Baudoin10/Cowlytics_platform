import { Link } from "react-router-dom";
import {
  MapPin,
  Activity,
  Bell,
  TrendingUp,
  Zap,
  Shield,
  Clock,
} from "lucide-react";

const SmartCollar = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#002240] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Livestock Health Collar
            </h1>
            <p className="text-xl mb-6">GNSS + Accelerometer + AI</p>
            <p className="text-lg mb-8">
              The Cowlytics Smart Health Collar is a lightweight, neck-worn
              device that uses GNSS (GPS), motion sensors, and AI to monitor the
              location, movement, and animal behavior in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            By continuously analyzing activity and rumination patterns, the
            collar helps producers detect health challenges early, manage
            grazing efficiently, and keep track of every animal without manual
            observation.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureCard
                icon={<MapPin className="text-blue-600" size={32} />}
                title="GNSS / GPS Tracking"
                description="Real-time location monitoring across farms and open rangelands. Know exactly where every animal is at any time, enabling better herd management and quick recovery of lost or strayed livestock."
              />

              <FeatureCard
                icon={<Bell className="text-blue-600" size={32} />}
                title="Geofencing"
                description="Virtual boundaries with alerts when animals move outside designated areas. Set up custom zones and receive instant notifications when animals breach the perimeter, protecting against theft and wandering."
              />

              <FeatureCard
                icon={<Activity className="text-blue-600" size={32} />}
                title="Activity Monitoring"
                description="Tracks walking, resting, and abnormal movement to flag potential health challenges. Identify behavioral changes that may indicate illness, injury, or stress before they become critical."
              />

              <FeatureCard
                icon={<TrendingUp className="text-blue-600" size={32} />}
                title="Rumination Monitoring"
                description="Uses motion data and AI to detect changes linked to illness or stress. Early detection of digestive issues helps prevent serious health problems and reduces treatment costs."
              />

              <FeatureCard
                icon={<Zap className="text-blue-600" size={32} />}
                title="AI-Driven Insights"
                description="Converts raw sensor data into simple, actionable health alerts. Our advanced AI algorithms process millions of data points to give you clear, easy-to-understand recommendations."
              />

              <FeatureCard
                icon={<Clock className="text-blue-600" size={32} />}
                title="24/7 Monitoring"
                description="Continuous surveillance means you never miss a critical event. The collar works around the clock, ensuring your livestock are protected even when you can't be there in person."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
            <div className="flex items-start space-x-4">
              <Shield className="text-blue-600 flex-shrink-0" size={48} />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why It Matters
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Smart Health Collar gives producers early visibility into
                  animal health and movement, reducing losses, improving
                  productivity, and supporting better animal biosecurity using
                  accurate data. With real-time monitoring and AI-powered
                  insights, you can make informed decisions that protect your
                  investment and improve animal welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:border-blue-300 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const SpecItem = ({ label, value }) => {
  return (
    <div className="border-b border-gray-200 pb-3">
      <div className="text-sm text-gray-600 font-semibold mb-1">{label}</div>
      <div className="text-gray-900">{value}</div>
    </div>
  );
};

export default SmartCollar;
