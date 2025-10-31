import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import heroImage from "../assets/meeabackground1.jpg";
import missionImage from "../assets/IMG_9285.JPG";
import visionImage from "../assets/IMG_9285.JPG";
import team1 from "../assets/meeabackground1.jpg";
import team2 from "../assets/Copy of MEEA FOUNDATION.png";
import team3 from "../assets/IMG_9285.JPG";

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
        className="h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center relative"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

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

      {/* Mission Section */}
      <section className="py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-12 bg-white">
        <motion.div {...fadeInUp} className="md:w-1/2">
          <h2 className="text-4xl font-bold text-pink-500 mb-6">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our mission is to provide care, education, and empowerment for underprivileged children. 
            We believe every child deserves love, hope, and the chance to create a brighter tomorrow.
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
      <section className="py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-12 bg-pink-100">
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
            We envision a world where every child, regardless of their background, has access to love,
            health, and education — a world where compassion drives opportunity.
          </p>
          <p className="text-gray-600">
            MEEA Foundation aims to nurture resilience, inspire kindness, and empower the next generation
            to change their world.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-20 text-center bg-white">
        <motion.h2
          className="text-4xl font-bold text-pink-500 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[{img: team1, name: "Yirenkyi Jodi", role: "Donation Coordinator"},
            {img: team2, name: "Paul Nti", role: "Community Outreach"},
            {img: team3, name: "Kelvin Yeboah", role: "IT & Operations"}].map((member, i) => (
            <motion.div
              key={i}
              className="bg-pink-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">{member.name}</h3>
              <p className="text-pink-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
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
          Whether through donations, volunteering, or spreading awareness — your support keeps our mission alive.
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
