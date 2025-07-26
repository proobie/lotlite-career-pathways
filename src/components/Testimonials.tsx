
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nishat Khan",
      role: "Student",
      company: "BlockChain",
      image: "/placeholder.svg",
      rating: 5,
      content: "My current experience regarding blockchain course was very insightful. Sir guided us in every possible ways and explained each and every concept in deep manner."
    },
    {
      name: "Gayatri Mhetre",
      role: "Student",
      company: "BlockChain",
      image: "/placeholder.svg",
      rating: 5,
      content: "I appreciated the blockchain workshop's clear explanations of complex concepts. Thank you for teaching us"
    },
    {
      name: "Gitanjali yadav",
      role: "Student",
      company: "iOS Swift Development",
      image: "/placeholder.svg",
      rating: 5,
      content: "Enjoyed the sessions , learnt lots of things in Apple app development. Thank you Naga Sir, you did fantastic."
    },
    {
      name: "Jakir Hussain",
      role: "Student",
      company: "BlockChain",
      image: "/placeholder.svg",
      rating: 4,
      content: "We have had a very informative workshop on Blockchain at PVGCOET, Pune. We learnt the use of Blockchain, its Application in real life."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Success 
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {" "}Stories
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from our students who have completed their certifications with Lotlite Technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="relative bg-gradient-to-br from-background to-gray-50/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-r from-blue-600 to-green-600 text-white text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs font-medium bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
