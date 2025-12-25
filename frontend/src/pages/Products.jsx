import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';
import { products } from '../mock';

const Products = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our Products
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Innovative SaaS solutions designed to scale your business and streamline operations
          </p>
        </div>
      </section>

      {/* Products List */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 gap-0`}>
                    {/* Image */}
                    <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'} relative`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full min-h-[400px] object-cover"
                      />
                      <div className="absolute top-6 right-6">
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-lg ${
                          product.status === 'Live' ? 'bg-green-500 text-white' :
                          product.status === 'Beta' ? 'bg-blue-500 text-white' :
                          'bg-purple-500 text-white'
                        }`}>
                          {product.status}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'} p-8 lg:p-12 flex flex-col justify-center`}>
                      <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-1.5 mb-4 self-start">
                        <span className="text-sm font-semibold text-blue-600">{product.category}</span>
                      </div>

                      <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
                        {product.name}
                      </h2>
                      
                      <p className="text-lg text-blue-600 font-semibold mb-4">
                        {product.tagline}
                      </p>

                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <h3 className="font-semibold text-slate-900">Key Features:</h3>
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4">
                        {product.status === 'Live' && (
                          <a
                            href="#"
                            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
                          >
                            View Demo
                            <ExternalLink size={18} className="ml-2" />
                          </a>
                        )}
                        <Link
                          to="/contact"
                          className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                        >
                          Contact Sales
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Products */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Built with the latest technology and designed for scalability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Lightning Fast</h3>
              <p className="text-slate-600">Optimized for performance with sub-second response times</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Secure & Reliable</h3>
              <p className="text-slate-600">Enterprise-grade security with 99.9% uptime guarantee</p>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Scalable</h3>
              <p className="text-slate-600">Grows with your business from startup to enterprise</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Interested in Our Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get in touch to learn more or request a demo
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 hover:shadow-xl transition-all duration-300 group"
          >
            Contact Us
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;