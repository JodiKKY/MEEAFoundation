import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import heroImage from "../assets/meeabackground1.jpg";
import founderImage from "../assets/Founder.JPG";
import missionImage from "../assets/IMG_2353.JPG";
import visionImage from "../assets/IMG_2373.JPG";
import donationVideo from "../assets/donation.mp4"; // 🎥 Add your video file here

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: true },
};

const About = () => {
  return (
    <div className="font-[Poppins,sans-serif] bg-pink-50 min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[65vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 text-white p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About MEEA Foundation
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-pink-100 leading-relaxed">
            Driven by compassion and purpose — bringing light, hope, and joy to every child in need.
          </p>
        </motion.div>
      </section>

      {/* Founder’s Story */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-white">
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={founderImage}
            alt="Founder - Maame Ekua Esuon Acquah"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>

        <motion.div {...fadeInUp} className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">Our Founder’s Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The MEEA Foundation was inspired by the remarkable life and legacy of{" "}
            <span className="font-semibold text-pink-500">Maame Ekua Esuon Acquah</span>, 
            a compassionate young woman who lived with sickle cell but refused to be defined by it.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Despite her challenges, Maame was deeply devoted to helping others living with 
            sickle cell, HIV, and cancer. She donated frequently to the Cancer, AIDS, 
            and Sickle Cell Units at <span className="font-semibold">Korle Bu Teaching Hospital</span> 
            and continuously sought ways to uplift the less privileged.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Though she is no longer with us, her legacy of love, hope, and generosity continues 
            through the MEEA Foundation — a living tribute to her heart for humanity.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-pink-50">
        <motion.div {...fadeInUp} className="md:w-1/2">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our mission is to provide care, education, and empowerment for underprivileged children. 
            We believe that every child deserves love, hope, and the opportunity to build a brighter tomorrow.
          </p>
          <p className="text-gray-600">
            Since our founding, we’ve touched lives across Ghana — one child, one community, one dream at a time.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={missionImage}
            alt="Our Mission"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-12 bg-white">
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={visionImage}
            alt="Our Vision"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>

        <motion.div {...fadeInUp} className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our vision is to bring light to their world, hope to their struggles, and smiles to their faces. 
            We aim to be a beacon of compassion that transforms pain into possibility.
          </p>
          <p className="text-gray-600">
            Through collective kindness and unwavering care, MEEA Foundation strives to nurture a world 
            where every child can dream, thrive, and live with dignity.
          </p>
        </motion.div>
      </section>

      {/* Recent Donation Video Section */}
      <section className="py-20 px-6 md:px-20 bg-pink-50 text-center">
        <motion.h2
          className="text-4xl font-bold text-pink-500 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Our Recent Donation ❤️
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-pink-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <video
            controls
            className="w-full rounded-2xl"
            poster={heroImage}
          >
            <source src={donationVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <p className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto">
          Watch highlights from our most recent hospital donation — spreading love, care, and hope to children in need.  
          Every act of kindness moves us closer to Maame’s dream.
        </p>
      </section>

      {/* Footer Call to Action */}
      <section className="bg-pink-400 text-white py-16 px-6 md:px-20 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Be Part of Our Story 💕
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-6 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Whether through donations, volunteering, or spreading awareness — your support 
          keeps our mission alive and our founder’s dream shining.
        </motion.p>
        <motion.a
          href="/contact"
          className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-100 transition"
          whileHover={{ scale: 1.05 }}
        >
          Join Us
        </motion.a>
      </section>
    </div>
  );
};

export default About;
