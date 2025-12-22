
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#002240] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">Cowlytics</span>
            </Link>
            <p className="mb-4 text-gray-300">
              Revolutionizing livestock management with smart technology and
              AI-powered insights.
            </p>
            
            <div className="flex space-x-4">
              <FaFacebook
                className="h-5 w-5 hover:text-blue-400 transition-colors cursor-pointer"
                onClick={() => alert("Our Facebook page is coming soon!")}
              />
              <FaXTwitter
                className="h-5 w-5 hover:text-blue-400 transition-colors cursor-pointer"
                onClick={() => alert("Our Twitter page is coming soon!")}
              />
              <FaLinkedin
                className="h-5 w-5 hover:text-blue-400 transition-colors cursor-pointer"
                onClick={() => alert("Our LinkedIn page is coming soon!")}
              />
              <FaInstagram
                className="h-5 w-5 hover:text-blue-400 transition-colors cursor-pointer"
                onClick={() => alert("Our Instagram page is coming soon!")}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/feature"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/smart-collar"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Smart Health Collar
                </Link>
              </li>
              <li>
                <Link
                  to="/products/smart-ear-tag"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Smart Ear Tag
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mobile App
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Analytics Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                <span className="block text-sm font-medium mb-1">Email:</span>
                <a
                  href="mailto:info@cowlytics.com"
                  className="hover:text-white transition-colors"
                >
                  info@cowlytics.com
                </a>
              </li>
              <li className="text-gray-300">
                <span className="block text-sm font-medium mb-1">Phone:</span>
                <a
                  href="tel:+16177854720"
                  className="hover:text-white transition-colors"
                >
                  +1 (617) 785-4720
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Cowlytics. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href=""
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href=""
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href=""
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



