
import { Shield, Sparkles, Clock } from "lucide-react";

const services = [
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Premium Materials",
    description:
      "We use only the highest quality vinyl wraps from industry-leading manufacturers.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Paint Protection",
    description:
      "Preserve your vehicle's original paint while adding a stunning new look.",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Expert Installation",
    description:
      "Our certified technicians ensure perfect application and attention to detail.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/5 rounded-full text-sm text-primary mb-4">
            Services
          </span>
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional quality and service in every project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-pearl hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6 inline-block p-3 bg-primary/5 rounded-xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
