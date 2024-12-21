import React from 'react';

const Contact = () => {
  return (
    <div className="text-center p-8">
      {/* Menambahkan Foto Profil yang Tidak Gepeng */}
      <div className="flex justify-center mb-6">
        <img
          src="public/WhatsApp Image 2024-02-17 at 15.01.38_6787801a.jpg" // Ganti dengan path gambar yang sesuai
          alt="Jane Doe"
          className="w-80 h-80 rounded-full border-8 border-pink-500 object-cover"
        />
      </div>

      <h2 className="text-3xl font-bold text-pink-500">Contact Us</h2>
      <p className="mt-4 text-gray-700">Name: Patimah Sari Siregar</p>
      <p className="text-gray-700">Phone: 081265242934</p> {/* Menambahkan nomor telepon */}
      <p className="text-gray-700">TTL: 05-Desember-2004</p> {/* Menambahkan nomor telepon */}
      <p className="text-gray-700">Jurusan: Manajemen Informatika</p> {/* Menambahkan nomor telepon */}
      <p className="text-gray-700">Fakultas: Ilmu Komputer</p> {/* Menambahkan nomor telepon */}
      <p className="text-gray-700">Email: patimahsarisrg@gmail.com</p>
      <p className="text-gray-700">Hobby: Exploring new makeup products</p>
    </div>
  );
};

export default Contact;
