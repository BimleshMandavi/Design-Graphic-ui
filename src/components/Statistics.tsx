
"use client";

import { motion } from 'framer-motion';

export default function BenefitSection() {
  return (
    <div className="bg-blue-900 text-white py-16 px-4">
  
      {/* Benefit Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">How we will benefit you.</h2>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2">Hire Us or On-board Top 1% Creative Talent ✨</h3>
          <p className="text-sm mb-4">
            Collaborate with our expert team for tailored, high-quality designs aligned with your brand's goals.
          </p>
           <div className="text-center">
            <img
                src="/assets/cont.svg"
                alt="Arjun Mehta"
                className="w-50 h-50 rounded-full mb-2"
              />
              
            </div>
          <a href="#" className="text-blue-500 font-medium">Hire Designers →</a>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2">Creatives that Drives Revenue 💰</h3>
          <p className="text-sm mb-4">
            Strategically crafted concepts that captivate engagement and boost conversions to maximize profitability.
          </p>
          <a href="#" className="text-blue-500 font-medium">Know More →</a>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black p-6 rounded-lg shadow-lg"
        >
          <h3 className="text-xl font-bold mb-2">Top-notch quality, consistently delivered with excellence 🤩</h3>
          <p className="text-sm mb-4">
            Scale your content with precisely crafted visuals that ensure consistency and lasting impact.
          </p>
          <a href="#" className="text-blue-500 font-medium">Know More →</a>
        </motion.div>
      </div>
    </div>
  );
}

