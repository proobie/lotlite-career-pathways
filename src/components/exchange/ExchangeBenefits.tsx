
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Trophy, Star, ArrowRight } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const ExchangeBenefits = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#exchange-benefits');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleStartApplication = () => {
    if (location.pathname === '/') {
      const contactSection = document.querySelector('#contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { replace: true });
      setTimeout(() => {
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <section id="exchange-benefits" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold mb-4">Your Malaysian Adventure Awaits!</h2>
          <p className="text-muted-foreground">
            Transform your future with this life-changing international experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className={`text-center hover:shadow-lg transition-all duration-500 hover:scale-105 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-200`}>
            <CardHeader>
              <Heart className="h-12 w-12 text-red-600 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
              <CardTitle>Life-Changing Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Gain invaluable global perspective and create lifelong memories that will shape your future.
              </p>
            </CardContent>
          </Card>

          <Card className={`text-center hover:shadow-lg transition-all duration-500 hover:scale-105 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-400`}>
            <CardHeader>
              <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
              <CardTitle>Career Boost</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enhance your resume with international experience and cultural competence valued by employers.
              </p>
            </CardContent>
          </Card>

          <Card className={`text-center hover:shadow-lg transition-all duration-500 hover:scale-105 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          } delay-600`}>
            <CardHeader>
              <Star className="h-12 w-12 text-green-600 mx-auto mb-4 transition-transform duration-300 hover:scale-110" />
              <CardTitle>Personal Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Develop independence, adaptability, and cross-cultural communication skills for life.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className={`text-center transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        } delay-800`}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium px-12 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform group"
            onClick={handleStartApplication}
          >
            Start Your Application
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExchangeBenefits;
