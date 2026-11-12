import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Logo } from "~/components/Logo";
import { companyInfo } from "~/content/company";
import { servicesData } from "~/content/services";
import {
  Menu,
  X,
  ChevronDown,
  Cloud,
  Code2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  }, [location.pathname]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cloudServices = servicesData.filter((s) => s.category === "cloud");
  const webServices = servicesData.filter((s) => s.category === "web");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white text-xs sm:text-sm py-2 px-4 shadow-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="bg-white/20 text-white text-[11px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-300" />
              Special Offer
            </span>
            <span>
              Claim your <strong>Complimentary Cloud & Architecture Review</strong> with our senior engineers
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href="mailto:contact@loopsquaretech.com"
              className="hidden md:flex items-center gap-1.5 hover:text-cyan-200 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              {companyInfo.contact.email}
            </a>
            <a
              href="tel:+18005877727"
              className="flex items-center gap-1.5 hover:text-cyan-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {companyInfo.contact.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200/80 dark:border-slate-800/80 py-3"
            : "bg-white dark:bg-slate-900 border-b border-slate-200/60 dark:border-slate-800/60 py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <Logo />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                to="/"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === "/"
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                    : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                Home
              </Link>

              {/* Services Mega Dropdown Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                onMouseLeave={() => setIsServicesDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center gap-1.5 ${
                    location.pathname.startsWith("/services")
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                      : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`} />
                </Link>

                {/* Dropdown Menu */}
                {isServicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="grid grid-cols-2 gap-6">
                      {/* Cloud Solutions Column */}
                      <div>
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                          <Cloud className="w-4 h-4" />
                          Cloud & Infrastructure
                        </div>
                        <ul className="space-y-2">
                          {cloudServices.map((service) => (
                            <li key={service.id}>
                              <Link
                                to={`/services/${service.slug}`}
                                className="group block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                              >
                                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                  {service.title}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                                  {service.description}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Web Development Column */}
                      <div>
                        <div className="flex items-center gap-2 pb-2 mb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                          <Code2 className="w-4 h-4" />
                          Web & Software Engineering
                        </div>
                        <ul className="space-y-2">
                          {webServices.map((service) => (
                            <li key={service.id}>
                              <Link
                                to={`/services/${service.slug}`}
                                className="group block p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800/70 transition-all"
                              >
                                <div className="text-sm font-semibold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                                  {service.title}
                                </div>
                                <div className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                                  {service.description}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs bg-slate-50 dark:bg-slate-800/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
                      <span className="text-slate-500 dark:text-slate-400 font-medium">
                        Looking for a tailored hybrid solution?
                      </span>
                      <Link
                        to="/services"
                        className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1"
                      >
                        Explore All 8 Services
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === "/about"
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                    : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                About Us
              </Link>

              <Link
                to="/contact"
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  location.pathname === "/contact"
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                    : "text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60"
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Header Right Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold text-white rounded-xl group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-blue-500/25 transition-all duration-300"
              >
                <span className="px-5 py-2.5 transition-all ease-in duration-75 rounded-[10px] flex items-center gap-2">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center gap-2">
              <Link
                to="/contact"
                className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white"
              >
                Consult
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu accordion */}
          {isMobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 mt-3 animate-in slide-in-from-top duration-200">
              <nav className="flex flex-col space-y-2">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-lg text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="px-3 py-2 rounded-lg text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  All Services
                </Link>

                <div className="pl-4 py-1 space-y-1 border-l-2 border-blue-500/40 ml-3">
                  <div className="text-xs font-bold uppercase text-slate-400 py-1">Cloud Services</div>
                  {cloudServices.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="block py-1 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                  <div className="text-xs font-bold uppercase text-slate-400 py-1 pt-2">Web Development</div>
                  {webServices.map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      className="block py-1 text-sm text-slate-600 dark:text-slate-300 hover:text-purple-600"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="px-3 py-2 rounded-lg text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>

                <Link
                  to="/contact"
                  className="px-3 py-2 rounded-lg text-base font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>

                <div className="pt-3">
                  <Link
                    to="/contact"
                    className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Let's Build Your Digital Future</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
            {/* Brand column */}
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Logo />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
                Empowering businesses worldwide through innovative, secure, and cost-effective cloud solutions and modern web development.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Certified AWS, Azure & Google Cloud Architects</span>
              </div>
            </div>

            {/* Cloud Solutions */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Cloud className="w-4 h-4 text-blue-400" />
                Cloud Solutions
              </h3>
              <ul className="space-y-2.5 text-sm">
                {cloudServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Web Development */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-purple-400" />
                Web Development
              </h3>
              <ul className="space-y-2.5 text-sm">
                {webServices.map((service) => (
                  <li key={service.id}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links & Contact */}
            <div>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                Get In Touch
              </h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                  <span>
                    Austin, TX 78701<br />
                    United States
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:contact@loopsquaretech.com"
                    className="hover:text-white transition-colors"
                  >
                    contact@loopsquaretech.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                    href="tel:+18005877727"
                    className="hover:text-white transition-colors"
                  >
                    +1 (800) 587-7727
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.{" "}
              <span className="text-slate-400 font-medium">{companyInfo.tagline}</span>
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/about" className="hover:text-slate-300 transition-colors">
                About Us
              </Link>
              <Link to="/services" className="hover:text-slate-300 transition-colors">
                Services
              </Link>
              <Link to="/contact" className="hover:text-slate-300 transition-colors">
                Contact & Support
              </Link>
              <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
