/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, ArrowRight, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { products, Product } from './data/products';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force scrolled state on non-home pages for visibility
  const navbarScrolled = isScrolled || !isHomePage;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Materiality', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        navbarScrolled ? 'bg-white/95 backdrop-blur-sm py-4 border-b border-black/5' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center">
          <span className={`text-3xl font-bold tracking-[0.1em] font-forum leading-none transition-colors duration-500 ${navbarScrolled ? 'text-black' : 'text-white'}`}>W7</span>
          <span className={`text-[9px] tracking-[0.4em] font-bold uppercase mt-1 transition-colors duration-500 ${navbarScrolled ? 'text-black' : 'text-white'}`}>Design Floor</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-500 ${
                navbarScrolled ? 'text-black hover:text-black/40' : 'text-white hover:text-white/60'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className={`px-6 py-3 text-[10px] tracking-[0.2em] font-bold uppercase transition-all duration-500 ${
            navbarScrolled 
              ? 'bg-black text-white hover:bg-black/80' 
              : 'bg-white text-black hover:bg-white/90'
          }`}>
            Book an Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors duration-500 ${navbarScrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-black/5 lg:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs font-medium tracking-widest uppercase text-black"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button className="bg-black text-white px-6 py-4 text-[10px] tracking-[0.2em] font-bold uppercase w-full">
                Book an Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const FadeInWhenVisible = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.45, 0.32, 0.9], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const SectionHeading = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h2 className={`text-3xl md:text-4xl lg:text-5xl font-forum text-black mb-6 leading-tight ${className}`}>
    {children}
  </h2>
);

const SectionParagraph = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-sm md:text-base text-black/60 leading-relaxed font-light ${className}`}>
    {children}
  </p>
);

const PrimaryButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <button className={`bg-black text-white px-8 py-4 text-[11px] tracking-[0.2em] font-bold uppercase transition-all hover:bg-black/80 hover:shadow-xl active:scale-95 ${className}`}>
    {children}
  </button>
);

const SecondaryButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <button className={`border border-black text-black px-8 py-4 text-[11px] tracking-[0.2em] font-bold uppercase transition-all hover:bg-black hover:text-white active:scale-95 ${className}`}>
    {children}
  </button>
);

const Footer = () => (
  <footer className="bg-black text-white py-24">
    <div className="max-w-[1200px] mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Side */}
        <div className="space-y-12">
          <div className="flex flex-col items-start bg-white p-4 inline-block">
            <span className="text-2xl font-bold tracking-[0.2em] font-forum text-black leading-none">W7</span>
            <span className="text-[10px] tracking-[0.3em] text-black/60 font-medium uppercase mt-1">Design Floor</span>
          </div>
          <p className="text-xs tracking-[0.2em] text-white/40 uppercase font-bold">W7 Design Flooring | Pure Oak. Pure Design</p>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin size={18} className="text-white/40 mt-1" />
              <div className="text-sm text-white/60 font-light leading-relaxed">
                Melbourne Showroom<br />
                49-51 Keysborough Ave, Keysborough, VIC 3173
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={18} className="text-white/40" />
              <div className="text-sm text-white/60 font-light">P: 03 8753 5522</div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail size={18} className="text-white/40" />
              <div className="text-sm text-white/60 font-light">E: sales@w7designflooring.com.au</div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/40">Company</h4>
            <ul className="space-y-4">
              {['Products', 'About', 'Samples', 'Privacy Policy', 'Term & Conditions'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] font-bold uppercase text-white/40">Resources</h4>
            <ul className="space-y-4">
              {['Herringbone', 'Chevron', 'Product Folio'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/60 hover:text-white transition-colors font-light">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] tracking-widest text-white/20 uppercase">© 2026 W7 Design Flooring. All Rights Reserved.</p>
        <div className="flex space-x-8">
          <a href="#" className="text-white/20 hover:text-white transition-colors"><Instagram size={18} /></a>
        </div>
      </div>
    </div>
  </footer>
);

const HomePage = () => {
  return (
    <>
      {/* 2. Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src="https://static.wixstatic.com/media/eb4477_7417e1db629748af8f9e07319d999a70~mv2.png/v1/fill/w_1581,h_736,al_c,q_90,enc_auto/eb4477_7417e1db629748af8f9e07319d999a70~mv2.png"
          alt="Premium Interior with Timber Flooring"
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/40 via-transparent to-transparent" />
        <div className="relative h-full max-w-[1200px] mx-auto px-6 flex items-end justify-end pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-right max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-forum text-white leading-[1.2]">
              Premium Engineered <br />
              Timber Flooring
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* 3. Split Section: Supplying Premium Timber Flooring */}
        <section className="py-24 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 items-center">
            <div className="hidden lg:block" />
            <FadeInWhenVisible className="flex justify-center lg:justify-end">
              <div className="max-w-md text-center lg:text-right">
                <SectionHeading>Supplying Premium Timber Flooring</SectionHeading>
                <SectionParagraph>
                  W7 DESIGN FLOORING is dedicated to providing architectural-grade engineered timber for both high-end residential and sophisticated commercial projects. Based on a philosophy of minimalist design and enduring quality, we curate a selection of premium oaks that serve as the silent foundation for Australia's most inspired spaces.
                </SectionParagraph>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2}>
              <div className="relative aspect-[3/4] overflow-hidden shadow-none">
                <img
                  src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
                  alt="Premium Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </section>

        {/* 4. Split Section: Showroom Appointment */}
        <section className="py-24 lg:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-12 items-center">
            <FadeInWhenVisible>
              <div className="relative aspect-[3/4] overflow-hidden shadow-none">
                <img
                  src="https://static.wixstatic.com/media/eb4477_720624fdc3074537b399b62a6892d3a6~mv2.png/v1/fill/w_593,h_786,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/eb4477_720624fdc3074537b399b62a6892d3a6~mv2.png"
                  alt="Showroom Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} className="flex justify-center lg:justify-start">
              <div className="max-w-md text-center lg:text-left">
                <SectionHeading>Showroom Appointment</SectionHeading>
                <SectionParagraph className="mb-10">
                  Experience our collections firsthand. Our showroom is a collaborative space where vision takes shape. From homeowners to architects, our specialists provide tailored consultations to ensure your timber selection perfectly harmonizes with your interior.
                </SectionParagraph>
                <PrimaryButton>Book an Appointment</PrimaryButton>
              </div>
            </FadeInWhenVisible>
            <div className="hidden lg:block" />
          </div>
        </section>

        {/* 5. Three Feature Cards Section */}
        <section className="py-24 lg:py-40 border-t border-black/5">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-4xl font-forum text-center mb-16">Supplying Premium Timber Flooring</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "VIEW OUR RANGE",
                img: "https://static.wixstatic.com/media/eb4477_2f3fb0a334424920898e641a69b51528~mv2.png/v1/fill/w_527,h_647,al_c,lg_1,q_85,enc_auto/eb4477_2f3fb0a334424920898e641a69b51528~mv2.png",
                link: "/products"
              },
              {
                title: "PROJECTS",
                img: "https://static.wixstatic.com/media/eb4477_7539607a9db74be1b94dbd0579bdc52c~mv2.png/v1/fill/w_527,h_647,al_c,lg_1,q_85,enc_auto/eb4477_7539607a9db74be1b94dbd0579bdc52c~mv2.png",
                link: "#"
              },
              {
                title: "VISIT OUR SHOWROOM",
                img: "https://static.wixstatic.com/media/eb4477_27a9bd000b4a419d95de9cf4bbf11a84~mv2.png/v1/fill/w_527,h_647,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eb4477_27a9bd000b4a419d95de9cf4bbf11a84~mv2.png",
                link: "#"
              },
            ].map((card, idx) => (
              <Link to={card.link} key={idx}>
                <FadeInWhenVisible delay={idx * 0.1}>
                  <div className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden mb-6 shadow-none transition-all duration-500">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h3 className="text-[11px] tracking-[0.25em] font-bold uppercase text-center group-hover:text-black/60 transition-colors">
                      {card.title}
                    </h3>
                  </div>
                </FadeInWhenVisible>
              </Link>
            ))}
          </div>
        </section>

        {/* 6. Split Section: Beyond Just a Flooring Company */}
        <section className="py-24 lg:py-48 border-t border-black/5">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              <FadeInWhenVisible className="lg:col-span-5">
                <div className="max-w-sm">
                  <SectionHeading className="!text-4xl lg:!text-5xl mb-8">Beyond Just a Flooring Company</SectionHeading>
                  <SectionParagraph className="mb-10 !text-sm !leading-relaxed">
                    W7 DESIGN FLOORING is built on a foundation of technical expertise and architectural vision. We don't just supply products; we provide a holistic approach to timber selection, ensuring every plank aligns with your design aesthetic and functional requirements. From the initial consultation to the final installation, our knowledge in craftsmanship and coatings ensures your space is built to last.
                  </SectionParagraph>
                  <PrimaryButton>Book an Appointment</PrimaryButton>
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2} className="lg:col-span-7">
                <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden shadow-none">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
                    alt="Architectural Dining Area"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>

        {/* 7. Split Section: Products for every project */}
        <section className="py-24 lg:py-48 border-t border-black/5">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
              <FadeInWhenVisible className="lg:col-span-7 order-2 lg:order-1">
                <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden shadow-none">
                  <img
                    src="https://static.wixstatic.com/media/eb4477_5524dba72f084c388ae1e901b00bba7e~mv2.png/v1/fill/w_669,h_945,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/eb4477_5524dba72f084c388ae1e901b00bba7e~mv2.png"
                    alt="Architectural Living Room"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </FadeInWhenVisible>
              <FadeInWhenVisible delay={0.2} className="lg:col-span-5 order-1 lg:order-2">
                <div className="max-w-sm lg:ml-auto">
                  <SectionHeading className="!text-4xl lg:!text-5xl mb-8">Products for every project</SectionHeading>
                  <SectionParagraph className="mb-10 !text-sm !leading-relaxed">
                    W7 Design Flooring understands that a visionary project begins with a deliberate foundation. We prioritise the harmony of structural integrity and aesthetic purity in our premium engineered oak, designed to integrate seamlessly into the most discerning architectural spaces.
                    <br /><br />
                    Our collections are born from the finest European timber and governed by rigorous craftsmanship standards. This precision makes W7 the preferred choice for both sophisticated commercial developments and bespoke residential interiors—where natural tactility and enduring quality remain timeless for decades.
                  </SectionParagraph>
                  <Link to="/products">
                    <SecondaryButton>Browse Our Range</SecondaryButton>
                  </Link>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </section>
      </div>

      {/* 8. Dark Feature Band */}
      <section className="bg-black text-white py-24 lg:py-40">
        <div className="max-w-[1200px] mx-auto px-6">
          <FadeInWhenVisible>
            <h2 className="text-4xl md:text-6xl font-forum text-center mb-20">W7 Design Flooring</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                title: "Design Philosophy",
                desc: "We understand that a floor is the canvas of your home. W7 selectively sources materials that celebrate raw, organic textures and timeless timber grains. By harmonizing natural beauty with modern design, our flooring creates an effortless flow of light and warmth, turning every room into a sanctuary of understated luxury.",
              },
              {
                title: "Masterful Craftsmanship",
                desc: "Quality is found in the details that often go unseen. Every W7 product is the result of rigorous engineering and artisanal finishing. From the selection of premium raw materials to our advanced manufacturing processes, we ensure a seamless fit and a tactile experience that speaks of genuine European-standard excellence and architectural integrity.",
              },
              {
                title: "Enduring Performance",
                desc: "True luxury should be lived in, not just looked at. W7 Design Flooring is engineered to withstand the demands of a busy Australian lifestyle without compromising on elegance. Featuring superior wear resistance, structural stability, and ease of maintenance, our floors are designed to remain as stunning in a decade as they are on the day of installation.",
              },
            ].map((feature, idx) => (
              <div key={idx}>
                <FadeInWhenVisible delay={idx * 0.2}>
                  <div className="space-y-6">
                    <h3 className="text-xs tracking-[0.3em] font-bold uppercase">{feature.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed font-light">{feature.desc}</p>
                  </div>
                </FadeInWhenVisible>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Instagram Image Strip */}
      <section className="py-24 overflow-hidden">
        <div className="flex flex-nowrap overflow-x-auto lg:grid lg:grid-cols-6 gap-4 px-4 no-scrollbar">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="min-w-[250px] lg:min-w-0 aspect-square overflow-hidden bg-black/5">
              <img
                src={`https://picsum.photos/seed/timber${i}/800/800`}
                alt={`Instagram ${i}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <button className="flex items-center space-x-3 text-black/60 hover:text-black transition-colors group">
            <Instagram size={20} />
            <span className="text-[11px] tracking-[0.2em] font-bold uppercase">Follow on Instagram</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* 10. Final CTA Section */}
      <section className="py-24 lg:py-40 bg-[#F5F5F3]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <FadeInWhenVisible className="flex-1">
              <div className="relative aspect-video w-full max-w-md overflow-hidden shadow-none">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop"
                  alt="Luxury Interior"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.2} className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-forum text-black mb-8 leading-tight">
                Your journey to premium <br className="hidden lg:block" /> flooring starts here
              </h2>
              <Link to="/contact">
                <PrimaryButton>Contact Us</PrimaryButton>
              </Link>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>
    </>
  );
};

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-black/40 mb-12">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={12} />
          <span className="text-black">All Products</span>
        </div>

        {/* Banner */}
        <div className="relative w-full h-[200px] lg:h-[300px] overflow-hidden mb-16">
          <img
            src="https://static.wixstatic.com/media/eb4477_7417e1db629748af8f9e07319d999a70~mv2.png/v1/fill/w_1581,h_736,al_c,q_90,enc_auto/eb4477_7417e1db629748af8f9e07319d999a70~mv2.png"
            alt="Products Banner"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <SectionHeading className="mb-16">All Products</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, idx) => (
            <Link to={`/products/${product.id}`} key={product.id}>
              <FadeInWhenVisible delay={idx * 0.1}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-square overflow-hidden mb-6 shadow-none transition-all duration-500">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-lg font-forum text-black group-hover:text-black/60 transition-colors">
                    {product.name}
                  </h3>
                </div>
              </FadeInWhenVisible>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-0">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <SectionHeading className="mb-4">Contact Us</SectionHeading>
          <p className="max-w-2xl mx-auto text-sm text-black/60 leading-relaxed font-light">
            Our space is designed to inspire. Reach out to schedule a private viewing at our showroom, where you can experience the tactile beauty of our timber firsthand and consult with our specialists
          </p>
        </div>
      </div>

      {/* Main Content - Full Width */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 mb-32">
        <FadeInWhenVisible className="h-full">
          <div className="relative h-full min-h-[500px] lg:min-h-[700px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop"
              alt="Showroom Interior"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2} className="flex items-center justify-center bg-white py-20 px-8 lg:px-24">
          <div className="w-full max-w-xl space-y-12">
            <div className="text-sm text-black/80 font-light leading-relaxed space-y-1">
              <p>49-51 Keysborough Ave,Keysborough, VIC 3173</p>
              <p>E: sales@w7designflooring.com.au</p>
              <p>P: 03 8753 5522</p>
            </div>

            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-black/40 font-bold">First Name</label>
                  <input type="text" className="w-full border-b border-black/10 py-2 focus:border-black outline-none transition-colors bg-transparent" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest uppercase text-black/40 font-bold">Last Name</label>
                  <input type="text" className="w-full border-b border-black/10 py-2 focus:border-black outline-none transition-colors bg-transparent" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-black/40 font-bold">Email *</label>
                <input type="email" required className="w-full border-b border-black/10 py-2 focus:border-black outline-none transition-colors bg-transparent" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest uppercase text-black/40 font-bold">Message</label>
                <textarea rows={1} className="w-full border-b border-black/10 py-2 focus:border-black outline-none transition-colors bg-transparent resize-none" />
              </div>
              <button className="bg-[#404040] text-white px-12 py-3 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-black transition-colors">
                Send
              </button>
            </form>
          </div>
        </FadeInWhenVisible>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Opening Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">
          <SectionHeading className="lg:text-4xl">Opening Hours</SectionHeading>
          <div className="space-y-6">
            {[
              { day: "Mon - Fri", time: "9:00 am – 5:00 pm" },
              { day: "Saturday", time: "9:00 am – 5:00 pm" },
              { day: "Sunday", time: "10:00 am – 3:00 pm" },
            ].map((item, idx) => (
              <div key={idx} className="flex justify-between text-sm font-light">
                <span className="text-black/60">{item.day}</span>
                <span className="text-black">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map - Monochrome */}
      <div className="w-full h-[600px] bg-gray-100 relative overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.467277029789!2d145.1480411120607!3d-37.98955987181494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad613384343e17d%3A0xa23b3c5585db3b9a!2s49-51%20Keysborough%20Ave%2C%20Keysborough%20VIC%203173%2C%20Australia!5e0!3m2!1sen!2s!4v1772441107803!5m2!1sen!2s"
          width="100%"
          height="60%"
          style={{ border: 0, filter: 'grayscale(100%) contrast(1.2) opacity(0.9)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale"
        ></iframe>
      </div>
    </div>
  );
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h2 className="text-2xl font-forum">Product not found</h2>
        <button onClick={() => navigate('/products')} className="mt-8 text-xs tracking-widest uppercase underline">Back to products</button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-black/40 mb-12">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/products" className="hover:text-black transition-colors">All Products</Link>
          <ChevronRight size={12} />
          <span className="text-black">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <FadeInWhenVisible>
            <div className="relative aspect-square overflow-hidden shadow-none">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <div className="space-y-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-forum text-black leading-tight">
                {product.name}
              </h1>
              
              <button className="w-full bg-black text-white py-5 text-[11px] tracking-[0.3em] font-bold uppercase transition-all hover:bg-black/90 active:scale-[0.98]">
                Buy Now
              </button>

              <div className="space-y-6">
                <p className="text-base text-black/80 leading-relaxed font-light">
                  {product.details}
                </p>
                <button className="text-[11px] tracking-[0.2em] font-bold uppercase border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-all">
                  Read more
                </button>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FDFDFD] font-sans text-black selection:bg-black selection:text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
