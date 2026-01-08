import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, TrendingUp, CheckCircle2, Sparkles } from 'lucide-react';
import { heroContent, services, products, testimonials } from '../mock';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with 3D Effects */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary animate-gradient" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div 
            className="absolute w-96 h-96 bg-white rounded-full blur-3xl animate-float"
            style={{ 
              top: '10%', 
              left: '10%',
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
            }}
          />
          <div 
            className="absolute w-96 h-96 bg-accent rounded-full blur-3xl animate-float"
            style={{ 
              bottom: '10%', 
              right: '10%',
              animationDelay: '1s',
              transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`
            }}
          />
        </div>
        
        {/* Grid Pattern with 3D effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
            transform: 'perspective(1000px) rotateX(60deg)',
            transformOrigin: 'center center'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content with Animations */}
            <div className="text-white space-y-6 lg:space-y-8">
              <div className="inline-flex items-center space-x-2 glass-effect rounded-full px-4 py-2 border border-white/20 animate-pulse-glow">
                <Sparkles size={16} className="text-accent animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-sm font-medium">Innovating Technology Solutions</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="inline-block animate-slide-up">{heroContent.title}</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
                {heroContent.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4 fade-in-stagger">
                <Link
                  to={heroContent.primaryCTALink}
                  className="magnetic-button inline-flex items-center justify-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
                >
                  {heroContent.primaryCTA}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  to={heroContent.secondaryCTALink}
                  className="inline-flex items-center justify-center px-8 py-4 glass-effect text-white rounded-lg font-semibold hover:bg-white/20 border border-white/30 transform hover:scale-105 transition-all duration-300"
                >
                  {heroContent.secondaryCTA}
                </Link>
              </div>

              {/* Animated Stats */}
              {heroContent.showStats && (
                <div className="grid grid-cols-3 gap-6 pt-8 fade-in-stagger">
                  {heroContent.stats.map((stat, index) => (
                    <div key={index} className="transform hover:scale-110 transition-transform duration-300">
                      <div className="text-3xl font-bold animate-scale-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                        {stat.number}
                      </div>
                      <div className="text-primary-foreground/60 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Hero Image with 3D Tilt Effect */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl tilt-effect">
                <img
                  src={heroContent.heroImage}
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                
                {/* Animated shimmer overlay */}
                <div className="absolute inset-0 animate-shimmer" />
              </div>
              
              {/* Floating Card with Glass Effect */}
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-xl shadow-2xl p-4 max-w-xs transform hover:scale-110 transition-all duration-300 animate-float border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center animate-pulse-glow">
                    <CheckCircle2 className="text-white" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Quality Assured</div>
                    <div className="text-sm text-white/80">100% Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview with 3D Card Effects */}
      <section className="py-16 lg:py-24 bg-slate-50" id="services" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 animate-slide-up">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon === 'GraduationCap' ? Users : 
                                   service.icon === 'Code2' ? Zap :
                                   service.icon === 'Server' ? TrendingUp : Users;
              
              return (
                <Link
                  key={service.id}
                  to="/services"
                  className="card-3d group bg-white rounded-xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200 relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3">
                      {service.description}
                    </p>
                    
                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span>Learn more</span>
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="magnetic-button inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            >
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview with Flip Cards */}
      <section className="py-16 lg:py-24 bg-white" id="products" data-animate>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 animate-slide-up">
              Our Products
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Innovative SaaS solutions designed to scale your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="card-3d group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-slate-200 transition-all duration-500"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-300 ${
                      product.status === 'Live' ? 'bg-accent text-white animate-pulse-glow' :
                      product.status === 'Beta' ? 'bg-primary text-white' :
                      'bg-secondary text-white'
                    }`}>
                      {product.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 relative">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 rounded-b-xl" />
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-semibold text-slate-900 mb-1 group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                      {product.description}
                    </p>
                    <Link
                      to="/products"
                      className="text-primary font-medium text-sm hover:text-primary/80 inline-flex items-center transform group-hover:translate-x-2 transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with 3D Cards */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white relative overflow-hidden" id="testimonials" data-animate>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 animate-slide-up">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="card-3d glass-effect rounded-xl p-6 hover:bg-slate-700/50 transition-all duration-500 border border-white/10 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Star Rating with animation */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 animate-scale-bounce"
                      style={{ animationDelay: `${i * 0.1}s` }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-400">{testimonial.role}</div>
                  <div className="text-sm text-primary mt-1">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient Animation */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary animate-gradient" />
        
        {/* Floating shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 animate-slide-up">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Let's discuss how we can help you build innovative solutions
          </p>
          <Link
            to="/contact"
            className="magnetic-button inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-slate-50 hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Get In Touch
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;