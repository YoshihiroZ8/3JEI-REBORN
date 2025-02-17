
const Contact = () => {
  return (
    <section className="py-24 bg-primary text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl font-bold mb-4">Start Your Transformation</h2>
          <p className="text-white/80 mb-8">
            Contact us to discuss your project or schedule a consultation
          </p>

          <form className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none placeholder:text-white/60"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none placeholder:text-white/60"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white/40 focus:outline-none placeholder:text-white/60"
            />
            <button
              type="submit"
              className="w-full md:w-auto px-8 py-3 bg-white text-primary rounded-full font-medium hover:bg-pearl transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
