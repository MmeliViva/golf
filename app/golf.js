import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="font-sans">
      {/* Hero Section with Background Video */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/khayalethu-bg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-40">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold"
          >
            Khayalethu Estate Golf Reserve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-6 text-xl max-w-xl text-center"
          >
            A luxury escape where modern living meets rural serenity.
          </motion.p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
        >
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">Golf Estate Living</h3>
            <p>
              Experience the tranquility of nature with top-tier golfing and
              secure estate living.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">Modern Holiday Homes</h3>
            <p>
              Designed for families, investors, and city escapees looking for
              peace, views, and fresh air.
            </p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">Natural Surroundings</h3>
            <p>
              Surrounded by mountain views, open space, and grazing cattle — a
              unique African estate lifestyle.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-100 px-6" id="contact">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 border rounded"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded hover:bg-green-700"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-primary text-white">
        <p>&copy; {new Date().getFullYear()} Khayalethu Estate Golf Reserve. All rights reserved.</p>
      </footer>
    </main>
  );
}

