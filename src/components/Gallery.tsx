
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Matte Black Wrap",
    category: "Full Wrap",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
  {
    id: 2,
    title: "Chrome Delete",
    category: "Partial Wrap",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
  },
  {
    id: 3,
    title: "Color Change",
    category: "Full Wrap",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
  },
];

const categories = ["All", "Full Wrap", "Partial Wrap", "Paint Protection"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <section className="py-24 bg-pearl" id="gallery">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/5 rounded-full text-sm text-primary mb-4">
            Our Work
          </span>
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of premium car wraps and transformations
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-white hover:bg-primary/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm">{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
