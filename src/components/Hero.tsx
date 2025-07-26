
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const [studentCount, setStudentCount] = useState(0);
  const [programCount, setProgramCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const [rating, setRating] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setIsVisible(true);

    const animateCount = (setter: (value: number) => void, target: number, duration: number = 2000) => {
      const startTime = Date.now();
      const startValue = 0;
      
      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const currentValue = Math.floor(startValue + (target - startValue) * progress);
        
        setter(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };
      
      requestAnimationFrame(updateCount);
    };

    // Start animations with slight delays for a staggered effect
    setTimeout(() => animateCount(setStudentCount, 1000, 2500), 300);
    setTimeout(() => animateCount(setProgramCount, 50, 2000), 600);
    setTimeout(() => animateCount(setSuccessRate, 95, 2200), 900);
    setTimeout(() => animateCount(setRating, 49, 2400), 1200); // 4.9 * 10 for decimal handling
  }, []);

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 pt-16 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-600 to-green-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-green-600 to-blue-600 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Empowering Your Future in
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent animate-pulse">
              {" "}IT Excellence
            </span>
          </h1>

          {/* Sub-headline */}
          <p className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Transform your career with industry-recognized certifications from Microsoft, Adobe, Apple, and Google. 
            Expert training, flexible learning, and global opportunities await.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-medium px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              onClick={() => navigate('/certifications')}
            >
              Explore Certifications
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg transform group"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto transition-all duration-1000 delay-700 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {studentCount.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground">Students Certified</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {programCount}+
              </div>
              <div className="text-sm text-muted-foreground">Certification Programs</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {successRate}%
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center group hover:scale-105 transition-transform duration-300">
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {(rating / 10).toFixed(1)}★
              </div>
              <div className="text-sm text-muted-foreground">Student Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 animate-bounce">
        <div className="w-4 h-4 bg-blue-500 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-bounce animation-delay-1000">
        <div className="w-3 h-3 bg-green-500 rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;
