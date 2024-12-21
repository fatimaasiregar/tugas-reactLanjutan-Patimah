import React from 'react';

const makeupProducts = [
  {
    id: 1,
    title: 'Foundation',
    image: 'public/foundation.jpg',
    genre: 'Base Makeup',
    description: 'Provides an even base for your makeup look.',
  },
  {
    id: 2,
    title: 'Lipstick',
    image: 'public/lipstik.jpg',
    genre: 'Lips',
    description: 'Adds color and definition to your lips.',
  },
  {
    id: 3,
    title: 'Eyeshadow Palette',
    image: 'public/Eyeshadow.jpg',
    genre: 'Eyes',
    description: 'Enhances your eye makeup with vibrant colors.',
  },
  {
    id: 4,
    title: 'Blush',
    image: 'public/Blush.jpg',
    genre: 'Cheeks',
    description: 'Gives a healthy glow to your cheeks.',
  },
  {
    id: 5,
    title: 'Highlighter',
    image: 'public/Highlighter.jpg',
    genre: 'Face',
    description: 'Adds a radiant glow to your face.',
  },
  {
    id: 6,
    title: 'Mascara',
    image: 'public/Mascara.jpg',
    genre: 'Eyes',
    description: 'Lengthens and defines your eyelashes.',
  },
  {
    id: 7,
    title: 'Eyeliner',
    image: 'public/Eyeliner.png',
    genre: 'Eyes',
    description: 'Defines the eyes with a precise line.',
  },
  {
    id: 8,
    title: 'Setting Spray',
    image: 'public/setting.jpg',
    genre: 'Face',
    description: 'Keeps makeup in place throughout the day.',
  },
  {
    id: 9,
    title: 'Bronzer',
    image: 'public/Bronzer.jpg',
    genre: 'Face',
    description: 'Adds warmth and dimension to the face.',
  },
  {
    id: 10,
    title: 'Concealer',
    image: 'public/Concealer.jpg',
    genre: 'Base Makeup',
    description: 'Covers imperfections and dark circles.',
  },
  {
    id: 11,
    title: 'Lip Gloss',
    image: 'public/Lip Gloss.jpg',
    genre: 'Lips',
    description: 'Adds shine and hydration to your lips.',
  },
  {
    id: 16,
    title: 'Eyebrow Pencil',
    image: 'public/Eyebrow Pencil.jpg',
    genre: 'Eyebrows',
    description: 'Defines and shapes your eyebrows with precision.',
  },
];

const MakeupList = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-pink-500 mb-4">Makeup List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {makeupProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-md overflow-hidden">
            <div className="w-full h-auto">
              <img
                src={product.image}
                alt={product.title}
                className="w-full object-contain"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold">{product.title}</h3>
              <p className="text-sm text-gray-600">{product.genre}</p>
              <p className="text-gray-700 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MakeupList;
