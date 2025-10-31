import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import heroImage from "../assets/meeabackground1.jpg";
import aboutImage from "../assets/IMG_9285.JPG"; // Replace with your image file
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="font-[Poppins,sans-serif] bg-pink-50 min-h-screen">
      
      <Navbar />

      
      <section
        className="h-[90vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* <div className="absolute inset-0 bg-white bg-opacity-40"></div> */}

       
        <motion.div
          className="relative z-10 bg-transparent  p-8  shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-4 drop-shadow-md">
            MEEA Foundation ❤️
          </h1>
          <p className="text-white max-w-xl mb-6 text-lg leading-relaxed">
            Spreading love, care, and smiles to children in need.  
            Together, we can make their world a little brighter.
          </p>
          <Link
            to="/donate"
            className="bg-pink-400 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-pink-500 transition"
          >
            Donate Now
          </Link>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Text */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-pink-500 mb-6">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            At <span className="font-semibold text-pink-400">MEEA Foundation</span>, we believe
            every child deserves love, education, and hope.  
            Our programs aim to provide healthcare, learning opportunities, and joy to
            children across communities in Ghana and beyond.
          </p>
          <Link
            to="/about"
            className="bg-pink-400 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition shadow"
          >
            Learn More
          </Link>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="MEEA Foundation"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </motion.div>
      </section>

      {/* Donate Banner */}
      <section className="bg-pink-400 text-white py-16 px-6 md:px-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Mission 💕</h2>
        <p className="max-w-2xl mx-auto mb-6 text-lg leading-relaxed">
          Your donation brings hope and happiness to children in need.  
          Every little act of kindness makes a huge difference.
        </p>
        <Link
          to="/donate"
          className="bg-white text-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-100 transition"
        >
          Donate Today
        </Link>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 md:px-20 text-center bg-pink-50">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6 text-lg">
          Want to volunteer, collaborate, or learn more?  
          We’d love to connect with you — reach out and be part of the MEEA family.
        </p>
        <Link
          to="/contact"
          className="bg-pink-400 text-white px-6 py-3 rounded-full hover:bg-pink-500 transition shadow"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default Homepage;
