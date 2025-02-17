
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1493962853295-0fd70327578a"
      >
        <source src="/car-wrap.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 h-full flex items-center justify-center text-white container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm mb-6">
            Premium Car Wrapping Services
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transform Your Vehicle
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Professional vehicle wrapping services delivering stunning transformations and protection for your car
          </p>
          <button className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-pearl transition-colors duration-300">
            Explore Our Work
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
