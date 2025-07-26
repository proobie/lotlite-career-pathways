
import { Award, Users, Briefcase, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Award,
      title: "Expert Trainers",
      description: "Learn from industry professionals with real-world experience and deep expertise in cutting-edge technologies."
    },
    {
      icon: Users,
      title: "Industry-Recognized Certifications",
      description: "Earn credentials from Microsoft, Adobe, Apple, and Google that are valued by employers worldwide."
    },
    {
      icon: Briefcase,
      title: "Career Support",
      description: "Get comprehensive career guidance, job placement assistance, and ongoing professional development support."
    },
    {
      icon: Globe,
      title: "Global Opportunities",
      description: "Access international exchange programs and connect with a global network of professionals and institutions."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose 
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {" "}Lotlite Technology?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing world-class education that transforms careers and opens doors to global opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
