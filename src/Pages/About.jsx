import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import heroImage from "../assets/meeabackground1.jpg";
import founderImage from "../assets/Founder.JPG";
import missionImage from "../assets/IMG_2353.JPG";
import visionImage from "../assets/IMG_2373.JPG";
import donationVideo from "../assets/donate.mp4";

const fadeIn = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 1, ease: "easeOut" },
  viewport: { once: true },
};

const About = () => {
  return (
    <div className="font-[Poppins,sans-serif] bg-pink-50 min-h-screen text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section
        className="h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 text-white px-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            About MEEA Foundation
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-pink-100">
            A movement of love and purpose ,dedicated to bringing light, hope,
            and joy to children and families in need.
          </p>
        </motion.div>
      </section>

      {/* Founder’s Story */}
      <section className="py-20 px-6 md:px-20 bg-white flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={founderImage}
            alt="Founder - Maame Ekua Esuon Acquah"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>

        <motion.div {...fadeIn} className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">
            Our Founder’s Story
          </h2>
          <p className="text-lg leading-relaxed mb-5">
            The MEEA Foundation was born out of the life and legacy of{" "}
            <span className="font-semibold text-pink-500">
              Maame Ekua Esuon Acquah
            </span>
            ,a young woman who lived with sickle cell but chose compassion,
            faith, and service as her identity.
          </p>
          <p className="text-lg leading-relaxed mb-5">
            Throughout her life, Maame passionately supported the{" "}
            <span className="font-semibold">Sickle Cell, Cancer, and HIV Units</span> 
            at Korle Bu Teaching Hospital — donating gifts, supplies, and love to those 
            who needed it most.
          </p>
          <p className="text-lg leading-relaxed">
            Though she is no longer with us, her heart continues to beat through
            the Foundation that bears her name ,spreading kindness and hope to
            children across Ghana and beyond.
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-20 bg-pink-50 flex flex-col md:flex-row items-center gap-12">
        <motion.div {...fadeIn} className="md:w-1/2">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed mb-5">
            To extend love, care, and educational opportunities to
            underprivileged children, while empowering families and
            communities with hope for a better tomorrow.
          </p>
          <p className="text-gray-600">
            Through outreach, healthcare support, and education, we are
            rewriting stories — one smile at a time.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={missionImage}
            alt="Mission"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="py-20 px-6 md:px-20 bg-white flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={visionImage}
            alt="Vision"
            className="rounded-2xl shadow-xl w-full max-w-md object-cover"
          />
        </motion.div>

        <motion.div {...fadeIn} className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">Our Vision</h2>
          <p className="text-lg leading-relaxed mb-5">
            To be a beacon of compassion ,bringing light to dark places,
            hope to broken hearts, and joy to children facing life's toughest
            challenges.
          </p>
          <p className="text-gray-600">
            We envision a world where every child is cared for, valued, and
            given the chance to live freely, fearlessly, and fully.
          </p>
        </motion.div>
      </section>

      {/* Recent Donation Video */}
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
          className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-pink-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <video
            controls
            className="w-full h-[450px] object-cover rounded-2xl"
            poster={heroImage}
          >
            <source src={donationVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <p className="mt-6 text-gray-700 text-lg max-w-2xl mx-auto">
          A glimpse of love in motion of our recent hospital donation, spreading
          warmth and joy to children in need. Together, we keep Maame’s vision
          alive.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-400 text-white py-16 px-6 md:px-20 text-center">
        <motion.h2
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Be Part of the Change 💕
        </motion.h2>
        <motion.p
          className="max-w-2xl mx-auto mb-6 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Whether through donations, volunteering, or partnership ,your support
          keeps our mission alive and gives hope to many.
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
