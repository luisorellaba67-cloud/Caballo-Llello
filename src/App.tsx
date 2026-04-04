import { 
  Ship, 
  Plane, 
  Box, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Star, 
  Send, 
  Menu, 
  X,
  ChevronRight,
  Truck,
  Anchor,
  Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Horarios', href: '#hours' },
    { name: 'Ubicación', href: '#location' },
    { name: 'Reseñas', href: '#reviews' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2"
            >
              <div className="bg-primary p-2 rounded-lg">
                <Ship className="text-white w-6 h-6" />
              </div>
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`}>
                CABALLO <span className="text-accent">LLELLO</span>
              </span>
            </motion.div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors hover:text-accent ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              className="bg-accent hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
            >
              Cotizar Ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-primary' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-md font-bold mt-4"
              >
                Cotizar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2070" 
          alt="Shipping Logistics" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-bold mb-6 border border-accent/30">
              Logística de Confianza
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Envíos Seguros y Rápidos a <span className="text-secondary">Nicaragua</span> y Centroamérica
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Conectamos tus paquetes con sus destinos. Especialistas en carga marítima y aérea desde Nueva York con la seguridad que tu familia merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
              >
                Enviar Ahora <ChevronRight size={20} />
              </a>
              <a 
                href="#services" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Nuestros Servicios
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-10 left-0 right-0 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {[
              { icon: <Box className="text-secondary" />, label: 'Paquetes Entregados', value: '10k+' },
              { icon: <Globe className="text-secondary" />, label: 'Destinos en C.A.', value: '15+' },
              { icon: <ShieldCheck className="text-secondary" />, label: 'Seguridad Garantizada', value: '100%' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 flex items-center gap-4"
              >
                <div className="bg-white/10 p-3 rounded-xl">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Carga Marítima',
      description: 'Envíos de cajas y contenedores por vía marítima. Ideal para artículos grandes y mudanzas.',
      icon: <Anchor className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1494412574743-01947f155f31?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Carga Aérea',
      description: 'Servicio express para paquetes urgentes. Llega a su destino en tiempo récord.',
      icon: <Plane className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Envíos Internacionales',
      description: 'Cobertura total en Nicaragua y países de Centroamérica con entrega puerta a puerta.',
      icon: <Globe className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Seguro de Carga',
      description: 'Protegemos tu inversión. Tus paquetes viajan 100% asegurados contra cualquier imprevisto.',
      icon: <ShieldCheck className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1454165833767-027ff33027ef?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-primary mb-4"
          >
            Nuestros Servicios Profesionales
          </motion.h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones logísticas integrales adaptadas a tus necesidades de envío.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: 'Trae tu Paquete', desc: 'Visítanos en nuestra oficina en NY o solicita recolección.', icon: <Box /> },
    { title: 'Embalaje Seguro', desc: 'Aseguramos tu mercancía con materiales de alta calidad.', icon: <ShieldCheck /> },
    { title: 'Transporte', desc: 'Tu envío viaja por la ruta más eficiente (Mar o Aire).', icon: <Truck /> },
    { title: 'Entrega Final', desc: 'Llevamos tu paquete hasta la puerta de su destino.', icon: <MapPin /> },
  ];

  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Proceso de Envío Simple</h2>
          <p className="text-blue-200">Transparencia y eficiencia en cada paso del camino.</p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-blue-800 -translate-y-1/2 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 text-center"
              >
                <div className="bg-accent w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl border-4 border-primary">
                  <div className="text-white w-10 h-10">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-blue-200 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const BusinessHours = () => {
  const hours = [
    { day: 'Domingo', time: '9:00 a.m. - 6:00 p.m.' },
    { day: 'Lunes', time: '9:00 a.m. - 6:00 p.m.' },
    { day: 'Martes', time: '9:00 a.m. - 6:00 p.m.' },
    { day: 'Miércoles', time: '9:00 a.m. - 6:00 p.m.' },
    { day: 'Jueves', time: '9:00 a.m. - 6:00 p.m.' },
    { day: 'Viernes', time: '9:00 a.m. - 6:00 p.m.' },
    { day: 'Sábado', time: '9:00 a.m. - 6:00 p.m.' },
  ];

  return (
    <section id="hours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-accent font-bold mb-4">
                <Clock size={20} />
                <span>Horarios de Atención</span>
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">Estamos Listos para Atenderte</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Visítanos en nuestras oficinas en Nueva York. Contamos con un equipo profesional disponible los 7 días de la semana para procesar tus envíos con la mayor rapidez.
              </p>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold animate-pulse">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Abierto Ahora
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-xl"
            >
              <div className="space-y-4">
                {hours.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                    <span className="font-bold text-primary">{item.day}</span>
                    <span className="text-gray-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Nuestra Ubicación</h2>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <MapPin className="text-accent" /> 13-02 Central Ave, New York, NY 11691, United States
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px] border-8 border-white">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.601552526233!2d-73.75437812342898!3d40.60504787140882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c266907406859b%3A0x6739097894318683!2s13-02%20Central%20Ave%2C%20Far%20Rockaway%2C%20NY%2011691%2C%20USA!5e0!3m2!1sen!2s!4v1712204300000!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: 'Juan Pérez', text: 'Servicio rápido y confiable. Mis paquetes llegaron a Nicaragua sin problemas.', rating: 5 },
    { name: 'María Rodríguez', text: 'Mis cajas llegaron en perfectas condiciones. Muy profesionales.', rating: 5 },
    { name: 'Carlos Mendoza', text: 'La mejor opción para enviar a Centroamérica desde NY. Recomendados!', rating: 5 },
    { name: 'Elena Gómez', text: 'Excelente atención al cliente y precios justos.', rating: 5 },
  ];

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Lo que dicen nuestros clientes</h2>
          <div className="flex justify-center gap-1 text-secondary">
            {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={24} />)}
          </div>
          <p className="text-gray-600 mt-2">Calificación promedio: 5.0 basada en más de 200 reseñas</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm relative"
            >
              <div className="flex gap-1 text-secondary mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
              </div>
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div className="font-bold text-primary">— {review.name}</div>
              <div className="absolute -top-4 -right-4 text-gray-200 opacity-50">
                <MessageCircle size={60} />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-900 transition-all">
            Dejar un Comentario
          </button>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 bg-primary p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">Contáctanos Hoy</h2>
              <p className="text-blue-200 mb-10 leading-relaxed">
                ¿Tienes preguntas sobre tu envío? ¿Necesitas una cotización personalizada? Nuestro equipo está listo para ayudarte.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl"><Phone className="text-accent" /></div>
                  <div>
                    <div className="text-sm text-blue-200">Llámanos</div>
                    <div className="text-xl font-bold">+1 (929) 204-1255</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl"><MessageCircle className="text-accent" /></div>
                  <div>
                    <div className="text-sm text-blue-200">WhatsApp</div>
                    <div className="text-xl font-bold">+1 (929) 204-1255</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-xl"><MapPin className="text-accent" /></div>
                  <div>
                    <div className="text-sm text-blue-200">Dirección</div>
                    <div className="text-lg font-bold">13-02 Central Ave, NY 11691</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <div className="text-accent font-bold mb-2">¡Envía tu paquete hoy mismo!</div>
              <p className="text-sm text-blue-200">Garantizamos la mejor tarifa del mercado.</p>
            </div>
          </div>

          <div className="lg:w-1/2 p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+1 (000) 000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Asunto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                  <option>Cotización de Envío</option>
                  <option>Rastreo de Paquete</option>
                  <option>Información de Servicios</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="¿En qué podemos ayudarte?"></textarea>
              </div>
              <button className="w-full bg-accent hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/20">
                Enviar Mensaje <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Ship className="text-secondary w-8 h-8" />
              <span className="text-3xl font-bold tracking-tighter">
                CABALLO <span className="text-accent">LLELLO</span>
              </span>
            </div>
            <p className="text-blue-200 max-w-md leading-relaxed">
              Empresa líder en logística internacional especializada en envíos desde Nueva York a Nicaragua y toda Centroamérica. Seguridad, rapidez y confianza en cada entrega.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4 text-blue-200">
              <li><a href="#home" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Servicios</a></li>
              <li><a href="#hours" className="hover:text-accent transition-colors">Horarios</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-blue-200">
              <li className="flex items-center gap-2"><MapPin size={18} className="text-accent" /> 13-02 Central Ave, NY</li>
              <li className="flex items-center gap-2"><Phone size={18} className="text-accent" /> +1 (929) 204-1255</li>
              <li className="flex items-center gap-2"><MessageCircle size={18} className="text-accent" /> WhatsApp Disponible</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/10 text-center text-blue-300 text-sm">
          <p>© {new Date().getFullYear()} CABALLO LLELLO. Todos los derechos reservados. Diseñado para tu confianza.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/19292041255"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
    >
      <MessageCircle size={32} fill="currentColor" />
      <span className="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-lg font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        ¡Chatea con nosotros!
      </span>
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <BusinessHours />
      <Location />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
