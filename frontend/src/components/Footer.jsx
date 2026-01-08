import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { companyInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' }
  ];

  const services = [
    'EdTech Solutions',
    'Custom Software Development',
    'API & Backend Services',
    'SaaS Product Development'
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">GY</span>
              </div>
              <span className="font-bold text-lg">{companyInfo.name}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Building innovative EdTech solutions, custom software, and scalable SaaS products that transform businesses and education.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300 inline-block hover:translate-x-1 transform"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  {(companyInfo.phones || [companyInfo.phone]).map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block text-slate-400 hover:text-white text-sm transition-colors duration-300"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm">{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;