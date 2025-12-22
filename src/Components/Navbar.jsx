
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Cowlytics Logo" className="h-16 w-16" />
          </Link>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks
              productsOpen={productsOpen}
              setProductsOpen={setProductsOpen}
            />
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="flex flex-col space-y-2 py-4 md:hidden">
            <MobileNavLinks onClick={() => setMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ productsOpen, setProductsOpen }) => (
  <>
    <Link to="/" className="text-gray-700 hover:text-blue-600">
      Home
    </Link>

    {/* Products Dropdown */}
    <div
      className="relative"
      onMouseEnter={() => setProductsOpen(true)}
      onMouseLeave={() => setProductsOpen(false)}
    >
      <button className="flex items-center text-gray-700 hover:text-blue-600">
        Products
        <ChevronDown size={16} className="ml-1" />
      </button>

      {productsOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border z-50">
          <Link
            to="/products"
            className="block px-4 py-3 hover:bg-gray-50 border-b"
          >
            <div className="font-semibold text-gray-900">All Products</div>
            <div className="text-sm text-gray-500">View our full range</div>
          </Link>
          <Link
            to="/products/smart-collar"
            className="block px-4 py-3 hover:bg-gray-50 border-b"
          >
            <div className="font-semibold text-gray-900">
              Smart Health Collar
            </div>
            <div className="text-sm text-gray-500">GNSS + AI monitoring</div>
          </Link>
          <Link
            to="/products/smart-ear-tag"
            className="block px-4 py-3 hover:bg-gray-50"
          >
            <div className="font-semibold text-gray-900">Smart Ear Tag</div>
            <div className="text-sm text-gray-500">IoT sensor nodes</div>
          </Link>
        </div>
      )}
    </div>

    <Link to="/feature" className="text-gray-700 hover:text-blue-600">
      Features
    </Link>
    <Link to="/about" className="text-gray-700 hover:text-blue-600">
      About Us
    </Link>
    <Link to="/contact" className="text-gray-700 hover:text-blue-600">
      Contact Us
    </Link>
    <a
      href="https://cal.com/baudoin-bolingo-cpe66z"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#002240] hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md"
    >
      Get a Demo
    </a>
  </>
);

const MobileNavLinks = ({ onClick }) => {
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  return (
    <>
      <Link
        to="/"
        onClick={onClick}
        className="text-gray-700 hover:text-blue-600 px-4 py-2"
      >
        Home
      </Link>

      {/* Mobile Products Accordion */}
      <div>
        <button
          onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
          className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 px-4 py-2"
        >
          Products
          <ChevronDown
            size={16}
            className={`transition-transform ${
              mobileProductsOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {mobileProductsOpen && (
          <div className="pl-8 space-y-2">
            <Link
              to="/products"
              onClick={onClick}
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              All Products
            </Link>
            <Link
              to="/products/smart-collar"
              onClick={onClick}
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Smart Health Collar
            </Link>
            <Link
              to="/products/smart-ear-tag"
              onClick={onClick}
              className="block text-gray-600 hover:text-blue-600 py-2"
            >
              Smart Ear Tag
            </Link>
          </div>
        )}
      </div>

      <Link
        to="/features"
        onClick={onClick}
        className="text-gray-700 hover:text-blue-600 px-4 py-2"
      >
        Features
      </Link>
      <Link
        to="/about"
        onClick={onClick}
        className="text-gray-700 hover:text-blue-600 px-4 py-2"
      >
        About Us
      </Link>
      <Link
        to="/contact"
        onClick={onClick}
        className="text-gray-700 hover:text-blue-600 px-4 py-2"
      >
        Contact Us
      </Link>
      <a
        href="https://cal.com/baudoin-bolingo-cpe66z"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#002240] hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md mx-4 text-center block"
      >
        Get a Demo
      </a>
    </>
  );
};

export default Navbar;