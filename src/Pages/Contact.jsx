import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import contactImage from "../assets/IMG_2368.JPG"; 
import backImage from "../assets/IMG_2367.JPG"
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: "easeOut" },
  viewport: { once: true },
};

const Contact = () => {
  return (
    <div className="font-[Poppins,sans-serif] bg-pink-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${backImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative z-10 text-white p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Contact Us 💌
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-pink-100">
            Whether you want to volunteer, support, or partner — we’d love to hear from you!
          </p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center gap-12">
        <motion.div {...fadeInUp} className="md:w-1/2">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Have questions or want to join our mission? Fill out the form below — our team will get back to you shortly.
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-400 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-500 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={contactImage}
            alt="Contact Us"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>
      </section>

      {/* Sponsor/Support Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-pink-100">
        <motion.h2
          className="text-4xl font-bold text-pink-500 mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Support or Sponsor 💕
        </motion.h2>
        <motion.p
          className="max-w-3xl mx-auto text-gray-700 text-lg mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We welcome individuals, brands, and organizations who share our vision of giving hope and love
          to children affected by illness or poverty.  
          Your sponsorship can help fund healthcare supplies, educational resources, and outreach programs.
        </motion.p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <motion.a
            href="/donate"
            className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-500 transition shadow"
            whileHover={{ scale: 1.05 }}
          >
            Make a Donation
          </motion.a>
          <motion.a
            href="mailto:meeafoundation@gmail.com"
            className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition shadow"
            whileHover={{ scale: 1.05 }}
          >
            Become a Sponsor
          </motion.a>
        </div>
      </section>

    </div>
  );
};

export default Contact;
