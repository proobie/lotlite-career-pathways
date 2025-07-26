
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Users, FlaskConical } from 'lucide-react';

const UniversityPartnerProgram = () => {
  const [counters, setCounters] = useState({
    partners: 0,
    students: 0,
    countries: 0,
    programs: 0
  });

  const [isVisible, setIsVisible] = useState(false);

  const finalStats = [
    { key: 'partners', number: 50, label: 'Partner Universities', suffix: '+' },
    { key: 'students', number: 20000, label: 'Students Impacted', suffix: 'k+', displayDivisor: 1000 },
    { key: 'countries', number: 25, label: 'Countries', suffix: '+' },
    { key: 'programs', number: 100, label: 'Programs', suffix: '+' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    finalStats.forEach((stat) => {
      let current = 0;
      const increment = stat.number / steps;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          current = stat.number;
          clearInterval(timer);
        }
        
        setCounters(prev => ({
          ...prev,
          [stat.key]: Math.floor(current)
        }));
      }, stepDuration);
    });
  };

  const formatNumber = (num: number, stat: any) => {
    if (stat.displayDivisor) {
      return Math.floor(num / stat.displayDivisor);
    }
    return num;
  };

  const partners = [
    {
      name: 'INTI University',
      image: '/lovable-uploads/f2577d0f-f547-4068-9970-8e92d04d4736.png'
    },
    {
      name: 'Skyline University Sharjah',
      image: '/lovable-uploads/34231257-53ab-4a60-b86c-bbc8d1878a07.png'
    },
    {
      name: 'MIT World Peace University',
      image: '/lovable-uploads/3bc8b8b6-2ddd-40a6-b1f1-ceacff5f5fdd.png'
    },
    {
      name: 'MIT ADT University',
      image: '/lovable-uploads/eef371f9-1280-4854-ac78-969b75568100.png'
    },
    {
      name: 'Raffles University',
      image: '/lovable-uploads/ac91ef0f-b7aa-48fc-8128-5eaf4fe51892.png'
    },
    {
      name: 'PVG COET University',
      image: '/lovable-uploads/e87eabbc-7644-4af2-8e43-8e6f04b9618a.png'
    },
    {
      name: 'Uni KL/MIIT',
      image: '/lovable-uploads/f82ac8ad-0086-4b13-b9dd-fae6f2bdf924.png'
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Network Access',
      description: 'Connect with leading institutions worldwide and expand your global presence.'
    },
    {
      icon: Users,
      title: 'Student Exchange',
      description: 'Facilitate seamless student mobility and cultural exchange programs.'
    },
    {
      icon: FlaskConical,
      title: 'Research Collaboration',
      description: 'Foster joint research initiatives and academic partnerships.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/10 to-green-600/10 overflow-hidden">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-fade-in">
              Global Education Partnership Program
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in delay-200">
              Join our network of prestigious institutions and unlock global opportunities for your students through collaborative learning and cultural exchange.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white animate-fade-in delay-400 hover:scale-105 transition-all duration-300 hover:shadow-lg"
            >
              Become a Partner
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats-section" className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {finalStats.map((stat, index) => (
                <div 
                  key={stat.key} 
                  className="space-y-2 transform hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {formatNumber(counters[stat.key as keyof typeof counters], stat)}{stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Partners Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Featured Partners</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
                Collaborating with leading institutions worldwide to deliver excellence in education:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in hover:-translate-y-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={partner.image} 
                        alt={partner.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-center">{partner.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner With Us Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Why Partner With Us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
                Discover the advantages of joining our global education network:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index} 
                  className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <CardContent className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default UniversityPartnerProgram;
