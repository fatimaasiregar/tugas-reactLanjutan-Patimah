import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Background Video */}
      <div className="relative w-full h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/public/istockphoto-906626750-640_adpp_is (1).mp4" // Ganti dengan path video latar belakang Anda
          type="video/mp4"
          autoPlay
          loop
          muted
        />
        {/* Content Section */}
        <div className="relative z-10 text-center p-8">
          <h2 className="text-5xl font-bold text-pink-500 mb-8">
            Welcome to the Makeup World
          </h2>
        </div>
      </div>

      {/* Makeup Products Section (Located Below the Video) */}
      <div className="bg-white py-12">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-pink-500 mb-6">
            Our Featured Makeup Products
          </h3>

          {/* Grid for Products */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Product 1: Foundation */}
            <div className="flex flex-col items-center">
              <img
                src="/public/foundation.jpg" // Path gambar foundation
                alt="Foundation"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="font-semibold">Foundation</p>
            </div>

            {/* Product 2: Lipstick */}
            <div className="flex flex-col items-center">
              <img
                src="/public/lipstik.jpg" // Path gambar lipstick
                alt="Lipstick"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="font-semibold">Lipstick</p>
            </div>

            {/* Product 3: Eyeshadow */}
            <div className="flex flex-col items-center">
              <img
                src="public/Eyeshadow.jpg" // Path gambar eyeshadow
                alt="Eyeshadow"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="font-semibold">Eyeshadow</p>
            </div>

            {/* Product 4: Blush */}
            <div className="flex flex-col items-center">
              <img
                src="/public/Blush.jpg" // Path gambar blush
                alt="Blush"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="font-semibold">Blush</p>
            </div>

            {/* Product 5: Mascara */}
            <div className="flex flex-col items-center">
              <img
                src="/public/mascara.jpg" // Path gambar mascara
                alt="Mascara"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="font-semibold">Mascara</p>
            </div>

            {/* Product 6: Eyeliner */}
            <div className="flex flex-col items-center">
              <img
                src="public/Eyeliner.png" // Path gambar eyeliner
                alt="Eyeliner"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="font-semibold">Eyeliner</p>
            </div>

            {/* Product 7: Primer */}
            <div className="flex flex-col items-center">
              <img
                src="public/primer.jpg" // Path gambar primer
                alt="Primer"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="font-semibold">Primer</p>
            </div>

            {/* Product 8: Setting Spray */}
            <div className="flex flex-col items-center">
              <img
                src="public/setting.jpg" // Path gambar setting spray
                alt="Setting Spray"
                className="w-32 h-32 object-contain mb-4"
              />
              <p className="font-semibold">Setting Spray</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
