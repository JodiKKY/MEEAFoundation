import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import contactImage from "../assets/IMG_2368.JPG";
import backImage from "../assets/IMG_2367.JPG";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
  viewport: { once: true },
};

const Contact = () => {
  return (
    <div className="font-[Poppins,sans-serif] bg-pink-50 min-h-screen overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          className="relative z-10 text-white px-6"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Contact Us 💌
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-pink-100 leading-relaxed">
            Whether you want to volunteer, support, or partner — we’d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center gap-12">
        {/* Left Text & Form */}
        <motion.div
          {...fadeInUp}
          className="md:w-1/2 space-y-6"
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-pink-500 mb-2">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Have questions, want to partner, or join our mission? Fill out the
            form below and we’ll get back to you shortly.
          </p>

          <motion.form
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-pink-400 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:bg-pink-500 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={contactImage}
            alt="Contact Us"
            className="rounded-2xl shadow-2xl w-full max-w-md object-cover hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </section>

      {/* Support or Sponsor Section */}
      <motion.section
        className="py-24 px-6 md:px-20 text-center bg-pink-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold text-pink-500 mb-6">
          Support or Sponsor 💕
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-10 leading-relaxed">
          We welcome individuals, brands, and organizations who share our
          mission of giving hope and love to children in need. Your sponsorship
          helps us fund healthcare, education, and outreach programs that change lives.
        </p>

        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <motion.button
            className="bg-pink-400 text-white px-10 py-3 rounded-full font-semibold shadow-md hover:bg-pink-500 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => alert('Donation popup will open here 💖')}
          >
            Make a Donation
          </motion.button>

          <motion.a
            href="mailto:meeafoundation@gmail.com"
            className="bg-white text-pink-500 px-10 py-3 rounded-full font-semibold shadow-md hover:bg-pink-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Sponsor
          </motion.a>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact;
