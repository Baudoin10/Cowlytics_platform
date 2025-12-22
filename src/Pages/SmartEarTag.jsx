import { Link } from "react-router-dom";
import {
  Thermometer,
  Activity,
  Heart,
  Bell,
  Brain,
  TrendingUp,
  Shield,
} from "lucide-react";

const SmartEarTag = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#002240] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AI-Powered Smart Ear Tag
            </h1>
            <p className="text-xl mb-6">with IoT Sensor Nodes</p>
            <p className="text-lg mb-8">
              The Cowlytics Smart Ear Tag is a rugged, AI-enabled livestock
              monitoring device built with IoT sensor nodes to continuously
              track body temperature, heart rate, activity, and behavioral
              patterns in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Powered by advanced AI analytics, the ear tag detects early signs of
            disorders, stress, and estrus abnormality enabling timely
            intervention, improved breeding decisions, and secure livestock.
            Turn every animal into a real-time health data source for proactive
            management.
          </p>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Key Capabilities
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureCard
                icon={<Thermometer className="text-blue-600" size={32} />}
                title="Temperature Monitoring"
                description="Early detection of fever and health challenges through continuous body temperature tracking. Identify infections, inflammation, and heat stress before they escalate, enabling quick veterinary intervention and reducing mortality rates."
              />

              <FeatureCard
                icon={<Activity className="text-blue-600" size={32} />}
                title="Activity Tracking"
                description="Identifies behavior changes linked to illness, stress, or estrus. Monitor movement patterns, feeding behaviors, and resting times to detect abnormalities that signal health or reproductive issues."
              />

              <FeatureCard
                icon={<Heart className="text-blue-600" size={32} />}
                title="Heart Rate Monitoring"
                description="Tracks cardiovascular patterns to flag stress, illness, or abnormal exertion. Continuous heart rate analysis helps identify cardiac issues, heat stress, and pain indicators in real-time."
              />

              <FeatureCard
                icon={<TrendingUp className="text-blue-600" size={32} />}
                title="Heat (Estrus) Detection"
                description="AI-driven identification of reproductive readiness with high accuracy. Optimize breeding schedules, reduce missed heat cycles, and improve conception rates with precise estrus detection."
              />

              <FeatureCard
                icon={<Bell className="text-blue-600" size={32} />}
                title="AI Health Alerts"
                description="Converts sensor data into clear, actionable insights delivered instantly to your device. Receive smart notifications prioritized by urgency, helping you focus on animals that need immediate attention."
              />

              <FeatureCard
                icon={<Brain className="text-blue-600" size={32} />}
                title="Behavioral Analytics"
                description="Pattern recognition for early disease detection using advanced machine learning. Our AI learns normal patterns for each animal and alerts you to deviations that may indicate emerging health issues."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-green-50 rounded-lg p-8 border-l-4 border-green-600">
            <div className="flex items-start space-x-4">
              <Shield className="text-green-600 flex-shrink-0" size={48} />
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why It Matters
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  The Smart Ear Tag turns every animal into a real-time health
                  data source, enabling proactive health management, improved
                  animal biosecurity, and more efficient livestock operations
                  especially in challenging environments.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With comprehensive monitoring capabilities and AI-powered
                  insights, you can reduce veterinary costs, improve breeding
                  efficiency, enhance animal welfare, and maximize the
                  productivity of your herd.
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

const UseCaseCard = ({ title, description }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
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

export default SmartEarTag;
