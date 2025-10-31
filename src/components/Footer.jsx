import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = () => {
  return (
    <AnimatePresence>
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full bg-gradient-to-br from-pink-50 via-white to-pink-100 border-t border-pink-200 text-gray-700"
      >
        {/* Footer Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 py-10 px-6">
          {/* About */}
          <div>
            <h3 className="text-pink-600 font-bold mb-3 text-lg">
              MEEA Foundation ❤️
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Dedicated to spreading love, care, and hope to children in need.
              Your support helps us make their world a little brighter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-pink-600 font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-pink-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-pink-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/donate" className="hover:text-pink-500 transition">
                  Donate
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-pink-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-pink-600 font-semibold mb-3">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="hover:text-pink-500 transition"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://m.facebook.com/p/Conceptmabelles-100079546176783/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-500 transition">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-pink-600 font-semibold mb-3">Get in Touch</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Have questions or want to volunteer? <br />
              Email us at:{" "}
              <a
                href="mailto:info@meeafoundation.org"
                className="text-pink-500 hover:underline"
              >
                info@meeafoundation.org
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-pink-200 text-center py-5 text-gray-600 text-sm"
        >
          © {new Date().getFullYear()} MEEA Foundation. All Rights Reserved. 💖
        </motion.div>
      </motion.footer>
    </AnimatePresence>
  );
};

export default Footer;
