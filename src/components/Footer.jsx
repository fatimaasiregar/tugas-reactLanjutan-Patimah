import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white py-6">
      <div className="container mx-auto text-center">
        <h3 className="text-lg font-semibold">Makeup Shop</h3>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Makeup Shop. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="text-white hover:text-pink-300 transition-colors duration-200"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f">Facebook</i>
          </a>
          <a
            href="#"
            className="text-white hover:text-pink-300 transition-colors duration-200"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter">Twitter</i>
          </a>
          <a
            href="#"
            className="text-white hover:text-pink-300 transition-colors duration-200"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram">Instagram</i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
