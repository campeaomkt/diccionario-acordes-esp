/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Music, 
  BookOpen, 
  Printer, 
  CheckCircle2, 
  ChevronDown, 
  Star, 
  ShieldCheck, 
  Keyboard, 
  Layers, 
  Download,
  Calendar,
  ArrowRight,
  Menu,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// --- Types & Constants ---

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

const chordVariations = [
  "Mayores", "Menores", "7mas (Dominantes)", "Maj7", "m7", "m7(b5)", "dim7", 
  "sus4", "7sus4", "6tas", "m6", "9nas", "add9", "m9", "Maj9", "11nas", "m11", 
  "13nas", "7(b9)", "7(#9)", "7(b5)", "7(#5)", "Maj7(#11)", "m(Maj7)", "dim", "aug"
];

const features: Feature[] = [
  {
    icon: <Layers className="w-6 h-6 text-emerald-600" />,
    title: "312 Diagramas Detallados",
    description: "Visualización clara de cada posición en el teclado para un aprendizaje inmediato."
  },
  {
    icon: <Music className="w-6 h-6 text-emerald-600" />,
    title: "26 Variaciones por Tono",
    description: "Desde tríadas básicas hasta las extensiones más complejas (9nas, 11nas, 13nas)."
  },
  {
    icon: <Printer className="w-6 h-6 text-emerald-600" />,
    title: "Formato A4 Listo para Imprimir",
    description: "Diseñado específicamente para que lo tengas en tu atril físico sin complicaciones."
  },
  {
    icon: <Keyboard className="w-6 h-6 text-emerald-600" />,
    title: "Visualización de Teclado Virtual",
    description: "Gráficos intuitivos que imitan la vista real de un piano o teclado."
  }
];

const faqs: FAQItem[] = [
  {
    question: "¿Cómo recibo el material?",
    answer: "Inmediatamente después de tu compra, recibirás un correo electrónico con el enlace de descarga directa del PDF. Podrás guardarlo en cualquier dispositivo."
  },
  {
    question: "¿Es adecuado para principiantes?",
    answer: "¡Absolutamente! El diccionario incluye desde los acordes más básicos hasta los más avanzados, permitiéndote crecer a tu propio ritmo."
  },
  {
    question: "¿Puedo imprimirlo?",
    answer: "Sí, el archivo está optimizado en formato A4 de alta resolución para que la impresión sea nítida y profesional."
  },
  {
    question: "¿Qué pasa si tengo dudas con los acordes?",
    answer: "El guía es puramente visual y autoexplicativo, diseñado para ser una referencia rápida mientras practicas o compones."
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-stone-900">Eliab Campos <span className="text-emerald-600">Teclas</span></span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Características</a>
            <a href="#chords" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Acordes</a>
            <a href="#author" className="text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">Autor</a>
            <a href="#pricing" className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-emerald-700 transition-all shadow-md shadow-emerald-200">
              Obtener Ahora
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-stone-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-stone-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <a href="#features" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-600">Características</a>
              <a href="#chords" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-600">Acordes</a>
              <a href="#author" onClick={() => setIsOpen(false)} className="block text-lg font-medium text-stone-600">Autor</a>
              <a href="#pricing" onClick={() => setIsOpen(false)} className="block w-full text-center bg-emerald-600 text-white py-3 rounded-xl font-bold">Obtener Ahora</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Star className="w-3 h-3 fill-current" />
              Guía Visual Definitiva
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 leading-[1.1] mb-6">
              Domina el Teclado con el Guía Más <span className="text-emerald-600">Completo y Visual</span> de Acordes
            </h1>
            <p className="text-lg text-stone-600 mb-8 max-w-xl leading-relaxed">
              Olvida las búsquedas interminables en internet. Ten a mano 312 diagramas profesionales listos para imprimir y elevar tu nivel musical hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#pricing" 
                className="animate-pulse-custom bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-emerald-200"
              >
                Descargar Diccionario <ArrowRight className="w-5 h-5" />
              </a>
              <div className="flex items-center gap-3 px-4 py-2">
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/${i+10}/100/100`} 
                      className="w-8 h-8 rounded-full border-2 border-white object-cover"
                      alt="User"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-stone-500">+500 músicos ya lo usan</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-[2rem] shadow-2xl border border-stone-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-square bg-stone-100 rounded-[1.5rem] overflow-hidden relative group">
                <img 
                  src="https://eliabcamposteclas.com/wp-content/uploads/2026/02/ChatGPT-Image-24-de-fev.-de-2026-15_13_25.jpg" 
                  alt="Diccionario de Acordes - Eliab Campos" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full blur-3xl opacity-30 -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-400 rounded-full blur-3xl opacity-20 -z-0"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const images = [
    "https://eliabcamposteclas.com/wp-content/uploads/2026/05/depo-1-dic-acordes-esp.jpg",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/05/depo-2-dic-acordes-esp.jpg",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/05/depo-3-dic-acordes-esp.jpg",
    "https://eliabcamposteclas.com/wp-content/uploads/2026/05/depo-4-dic-acordes-esp.jpg"
  ];

  // Repeat the images several times to create an infinite track
  const listImages = [...images, ...images, ...images, ...images, ...images];
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    // Position scroll pool in the middle for balanced left/right scrolling
    const startScroll = el.scrollWidth / 3.5;
    el.scrollLeft = startScroll;
    scrollPosRef.current = startScroll;
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let id: number;
    const tick = () => {
      if (!isDown && !isHovered && el) {
        // 0.35 is ultra-slow and exceptionally smooth
        scrollPosRef.current += 0.35; 
        el.scrollLeft = scrollPosRef.current;
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [isDown, isHovered]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    // Boundary resetting to create an illusion of infinite looping
    if (el.scrollLeft >= el.scrollWidth - el.clientWidth * 1.5) {
      el.scrollLeft = el.scrollWidth / 3.5;
      scrollPosRef.current = el.scrollLeft;
    } else if (el.scrollLeft <= el.clientWidth * 0.2) {
      el.scrollLeft = el.scrollWidth / 2.5;
      scrollPosRef.current = el.scrollLeft;
    } else {
      // Sync our float reference with actual scrollLeft if user manually scrolled or dragged (difference > 1)
      if (Math.abs(scrollPosRef.current - el.scrollLeft) > 1.1) {
        scrollPosRef.current = el.scrollLeft;
      }
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDown(true);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!isDown || !el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5; // custom drag sensitivity
    el.scrollLeft = scrollLeft - walk;
  };

  const handlePrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      left: el.scrollLeft - 320,
      behavior: "smooth"
    });
  };

  const handleNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({
      left: el.scrollLeft + 320,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 bg-stone-50 overflow-hidden relative border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
            Testimonios Reales
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight mb-4">
            Músicos reales, resultados garantizados
          </h2>
          <p className="text-stone-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Explora las experiencias de nuestros estudiantes. Desliza con el dedo, haz clic y arrastra con el ratón o usa las flechas para explorar todos los comentarios.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-stone-100 rounded-full text-stone-500 text-xs font-semibold tracking-wider uppercase select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Arrastra para ver más</span>
        </div>
      </div>

      <div 
        className="relative max-w-full mx-auto group/carousel"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsDown(false);
        }}
      >
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
          className={`flex gap-6 overflow-x-auto select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${
            isDown ? "cursor-grabbing" : "cursor-grab"
          } px-8 md:px-16 py-4`}
        >
          {listImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[240px] md:w-[280px] aspect-[9/16] bg-white rounded-2xl shadow-lg shadow-stone-200/60 border border-stone-100 overflow-hidden select-none pointer-events-none transform transition-transform duration-300 hover:scale-[1.03]"
            >
              <img
                src={src}
                alt={`Testimonio de alumno ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Floating manual control arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-stone-200 flex items-center justify-center text-stone-700 shadow-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Testimonio Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-10 opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white/90 backdrop-blur border border-stone-200 flex items-center justify-center text-stone-700 shadow-xl hover:bg-emerald-600 hover:text-white hover:border-emerald-600 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Siguiente Testimonio"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            ¿Cansado de perder el ritmo buscando acordes?
          </h2>
          <p className="text-lg text-stone-600">
            Muchos músicos se frustran al olvidar una posición compleja o al no encontrar diagramas claros en internet. Pierden tiempo valioso que deberían dedicar a tocar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-stone-50 border border-stone-100"
          >
            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
              <X className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">El Problema Común</h3>
            <ul className="space-y-3 text-stone-600">
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                Búsquedas lentas en Google que cortan tu inspiración.
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                Diagramas confusos o incorrectos.
              </li>
              <li className="flex gap-3">
                <span className="text-red-500 font-bold">•</span>
                Falta de organización por tonos y variaciones.
              </li>
            </ul>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100"
          >
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle2 className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Nuestra Solución</h3>
            <ul className="space-y-3 text-stone-600">
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                Acceso instantáneo a 312 acordes organizados.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                Diseño visual optimizado para el aprendizaje rápido.
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 font-bold">•</span>
                Material físico: Imprime y coloca en tu atril.
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900">¿Qué hay dentro del Diccionario?</h2>
          <p className="text-stone-600 mt-4">Todo lo que necesitas para dominar la armonía en un solo lugar.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-lg font-bold text-stone-900 mb-3">{feature.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ChordList = () => {
  return (
    <section id="chords" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-[3rem] p-8 md:p-16 text-white overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Variaciones Incluidas en los 12 Tonos</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {chordVariations.map((chord, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-sm font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                  {chord}
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-stone-400 text-sm">Y muchas más combinaciones esenciales para el músico moderno.</p>
            </div>
          </div>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

const Author = () => {
  return (
    <section id="author" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-stone-900 mb-6">Sobre el Autor</h2>
            <h3 className="text-2xl font-bold text-emerald-600 mb-4">Eliab Campos Teclas</h3>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Músico y educador con años de experiencia transformando la manera en que los tecladistas entienden la armonía. Su enfoque visual ha ayudado a cientos de estudiantes a superar la barrera de la teoría compleja.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-yellow-500">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="text-stone-500 font-medium">Autoridad en Educación Musical</span>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://eliabcamposteclas.com/wp-content/uploads/2025/01/PERFIL-2-ELIAB.jpg" 
                alt="Eliab Campos Teclas" 
                className="rounded-[3rem] shadow-2xl w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-emerald-600 text-white p-8 rounded-3xl shadow-xl hidden lg:block">
                <p className="text-4xl font-black mb-1">10+</p>
                <p className="text-xs font-bold uppercase tracking-widest">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Bonuses = () => {
  const bonuses = [
    {
      title: "GUÍA DE INVERSIONES MAESTRAS",
      description: "Aprende el secreto de los profesionales para conectar acordes sin mover toda la mano. Logra transiciones fluidas y elegantes en cualquier canción.",
      value: "$17",
      icon: <Layers className="w-8 h-8 text-emerald-600" />,
      tag: "BONUS #1"
    },
    {
      title: "RETO DE MEMORIZACIÓN 30 DÍAS",
      description: "Un plan paso a paso para que domines los 312 acordes en tiempo récord. Sin frustraciones, solo progreso real con 15 minutos al día.",
      value: "$12",
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      tag: "BONUS #2"
    },
    {
      title: "BIBLIOTECA DE PROGRESIONES ÉPICAS",
      description: "Recibe una selección de las progresiones más usadas en la música actual (Worship, Balada, Pop) para que apliques tus nuevos acordes de inmediato.",
      value: "$15",
      icon: <Music className="w-8 h-8 text-emerald-600" />,
      tag: "BONUS #3"
    }
  ];

  return (
    <section id="bonuses" className="py-24 bg-stone-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold tracking-wider mb-4"
          >
            SÓLO POR TIEMPO LIMITADO
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Llévate también estos 3 <span className="text-emerald-500">Regalos Exclusivos</span></h2>
          <p className="text-stone-400 max-w-2xl mx-auto text-lg">
            Si ordenas hoy, te llevas estos complementos diseñados para acelerar tu aprendizaje y darte ese sonido profesional que buscas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {bonuses.map((bonus, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group bg-stone-800/50 border border-stone-700 p-8 rounded-3xl hover:bg-stone-800 transition-all duration-300"
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-emerald-500 text-stone-950 text-xs font-black px-4 py-1 rounded-full shadow-xl">
                {bonus.tag}
              </div>
              
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                {bonus.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 leading-tight">{bonus.title}</h3>
              <p className="text-stone-400 mb-6 text-sm leading-relaxed">
                {bonus.description}
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-stone-700">
                <span className="text-stone-500 text-xs uppercase font-bold tracking-widest">Valor Real</span>
                <span className="text-emerald-500 font-bold line-through">{bonus.value}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
          <p className="text-white font-medium flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Recibe más de <span className="text-emerald-400">$40 en bonos</span> totalmente GRATIS con tu compra
          </p>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">Invierte en tu Talento Musical</h2>
          <p className="text-stone-600">Acceso inmediato y de por vida al material completo.</p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-[3rem] shadow-2xl border-2 border-emerald-600 overflow-hidden relative"
          >
            <div className="bg-emerald-600 py-4 text-center text-white text-sm font-bold uppercase tracking-widest">
              Oferta de Lanzamiento
            </div>
            <div className="p-10 md:p-12">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Diccionario de Acordes</h3>
                <p className="text-stone-500 text-sm">Guía Visual Completa en PDF</p>
              </div>

              <div className="flex items-baseline gap-3 mb-8">
                <span className="text-4xl md:text-5xl font-black text-stone-900">$3.90</span>
                <span className="text-xl text-stone-400 line-through">$27.00</span>
                <span className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-lg text-xs font-bold">85% OFF</span>
              </div>

              <ul className="space-y-4 mb-10">
                {[
                  "312 Diagramas en alta resolución",
                  "26 Variaciones en todos los tonos",
                  "Formato A4 listo para imprimir",
                  "Acceso de por vida",
                  "Actualizaciones gratuitas",
                  "3 Bonos exclusivos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://pay.hotmart.com/B104619618S?checkoutMode=10&hideBillet=1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center justify-center gap-3 mb-6"
              >
                Comprar Ahora <Download className="w-6 h-6" />
              </a>

              <div className="flex items-center justify-center gap-6 text-stone-400">
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck className="w-6 h-6" />
                  <span className="text-[10px] font-bold uppercase">Pago Seguro</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Star className="w-6 h-6" />
                  <span className="text-[10px] font-bold uppercase">Garantía 7 días</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-stone-900 mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-stone-100 rounded-2xl overflow-hidden"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-stone-50 transition-colors"
              >
                <span className="font-bold text-stone-900">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-stone-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-stone-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="bg-emerald-600 p-1.5 rounded-lg">
              <Music className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Eliab Campos <span className="text-emerald-600">Teclas</span></span>
          </div>
          <div className="text-stone-400 text-sm">
            © {new Date().getFullYear()} Eliab Campos Teclas. Todos los derechos reservados.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-white transition-colors">Términos</a>
            <a href="#" className="text-stone-400 hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Testimonials />
        <ProblemSolution />
        <FeaturesGrid />
        <ChordList />
        <Bonuses />
        <Author />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
