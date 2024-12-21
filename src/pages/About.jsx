import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer'; // Pastikan import Footer

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Konten Halaman */}
      <motion.div
        className="flex-grow relative w-full bg-white text-gray-800 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animasi Judul Halaman */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center py-12 text-pink-500"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: 'spring', stiffness: 50 }}
        >
          Tentang Kami
        </motion.h2>

        {/* Konten Paragraf */}
        <motion.div
          className="text-lg md:text-xl text-center px-6 md:px-12 leading-relaxed max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <p className="mb-6">
            Kami adalah tim pecinta makeup yang berdedikasi untuk membantu Anda menemukan produk kecantikan terbaik
            dan memberikan tips bermanfaat.
          </p>
          <p className="mb-6">
            Dari tutorial langkah demi langkah hingga ulasan mendalam tentang produk terbaru, kami hadir untuk
            memberikan panduan yang informatif dan menyenangkan.
          </p>
        </motion.div>

        {/* Fitur Highlight */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12 py-12 max-w-6xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
          }}
        >
          <motion.div className="bg-pink-100 p-6 rounded-lg shadow-md text-center" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">Tutorial Makeup</h3>
            <p>Belajar teknik-teknik terbaru dengan panduan kami.</p>
          </motion.div>
          <motion.div className="bg-pink-100 p-6 rounded-lg shadow-md text-center" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">Review Produk</h3>
            <p>Ulasan produk terbaru untuk membantu Anda.</p>
          </motion.div>
          <motion.div className="bg-pink-100 p-6 rounded-lg shadow-md text-center" whileHover={{ scale: 1.05 }}>
            <h3 className="text-2xl font-bold text-pink-500 mb-4">Inspirasi Tampilan</h3>
            <p>Ide tampilan untuk berbagai acara.</p>
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
};

export default About;
