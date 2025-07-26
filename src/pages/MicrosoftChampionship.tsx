
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Globe, Award, Star, Users, Target } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const MicrosoftChampionship = () => {
  const [visibleElements, setVisibleElements] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleElements(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const eligibilityExams = [
    { name: 'Microsoft Office Word', icon: '📝' },
    { name: 'Microsoft Office Excel', icon: '📊' },
    { name: 'Microsoft Office PowerPoint', icon: '📋' }
  ];

  const competitionLevels = [
    {
      level: 'Regional Level',
      description: 'Held in one of the major cities in your zone (North, East, South, or West India).',
      icon: <Target className="h-8 w-8 text-blue-600" />
    },
    {
      level: 'National Level',
      description: 'Takes place in Bangalore in May 2026.',
      icon: <Users className="h-8 w-8 text-green-600" />
    },
    {
      level: 'World Level',
      description: 'Held in the USA in July-August 2026.',
      icon: <Globe className="h-8 w-8 text-blue-600" />
    }
  ];

  const indiaPrizes = [
    'Fully Sponsored Trip to the USA for India Champions*',
    'Trophies, Medals, Certificates, and Gifts for India Champions, Runner Ups, India Finalists, and Zonal Finalists',
    'Participation Certificate for All'
  ];

  const worldPrizes = [
    { place: '1st Place', prize: '$USD 8,000, Trophy, Medal of Achievement, Winner\'s Certificate' },
    { place: '2nd Place', prize: '$USD 4,000, Medal of Achievement, Winner\'s Certificate' },
    { place: '3rd Place', prize: '$USD 2,000, Medal of Achievement, Winner\'s Certificate' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-on-scroll" data-index="0">
              <h1 className={`text-4xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-1000 ${
                visibleElements.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                2026 Sankalp MOS Championships
              </h1>
            </div>
            <div className="animate-on-scroll" data-index="1">
              <p className={`text-xl md:text-2xl text-muted-foreground mb-8 transition-all duration-1000 delay-300 ${
                visibleElements.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                Your Chance to Be in the India Team & Represent India at the World Championship in USA!
              </p>
            </div>
            <div className="animate-on-scroll" data-index="2">
              <Button 
                size="lg" 
                className={`bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-4 text-lg transition-all duration-1000 delay-500 hover:scale-105 ${
                  visibleElements.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <Trophy className="mr-2 h-5 w-5" />
                Participate Now!
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll" data-index="3">
            <Card className={`max-w-4xl mx-auto transition-all duration-1000 ${
              visibleElements.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-3">
                  <Award className="h-8 w-8 text-blue-600" />
                  About the Microsoft Office Specialist World Championship
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-muted-foreground space-y-4">
                <p>
                  The Microsoft Office Specialist World Championship is a global competition that tests students' skills on Microsoft Office 365 (Word, Excel, PowerPoint). Top students from around the world will be invited to represent their country and compete in the final round of the Championship in the USA.
                </p>
                <p>
                  This is the 25th Year of the World Championship, with over 103+ countries participating in the USA. You could be sent as the "India Team" for the World Championship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll" data-index="4">
            <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 ${
              visibleElements.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Eligibility
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="animate-on-scroll" data-index="5">
              <Card className={`mb-8 transition-all duration-1000 delay-200 ${
                visibleElements.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <CardContent className="p-6">
                  <p className="text-lg mb-6">
                    To participate, a student (age 13+ Years) must pass one of the following exams:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    {eligibilityExams.map((exam, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                        <span className="text-2xl">{exam.icon}</span>
                        <span className="font-medium">{exam.name}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground mt-6">
                    To compete in the final round of the Competition, students must be enrolled in an approved, accredited learning institution and be between the ages of 13 and 22 (as of June 15, 2026).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Levels */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll" data-index="6">
            <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 ${
              visibleElements.has(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Levels of Competition
            </h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            {competitionLevels.map((level, index) => (
              <div key={index} className="animate-on-scroll" data-index={7 + index}>
                <Card className={`h-full hover:shadow-lg transition-all duration-1000 delay-${index * 200} ${
                  visibleElements.has(7 + index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      {level.icon}
                    </div>
                    <CardTitle className="text-xl">{level.level}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{level.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll" data-index="10">
            <Card className={`max-w-4xl mx-auto transition-all duration-1000 ${
              visibleElements.has(10) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center flex items-center justify-center gap-3">
                  <Star className="h-8 w-8 text-yellow-500" />
                  Globally Recognized Certification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center">
                  Participating in the Microsoft Office Specialist World Championship gives you the opportunity to earn a globally recognized certification from Microsoft.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="animate-on-scroll" data-index="11">
            <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-1000 ${
              visibleElements.has(11) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Prizes
            </h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* India Prizes */}
            <div className="animate-on-scroll" data-index="12">
              <Card className={`h-full transition-all duration-1000 delay-200 ${
                visibleElements.has(12) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-blue-600">India Prizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {indiaPrizes.map((prize, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Trophy className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                        <span>{prize}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    *Additional Qualifying Criteria may apply. Final selection will be solely at the discretion of championship judges.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* World Championship Prizes */}
            <div className="animate-on-scroll" data-index="13">
              <Card className={`h-full transition-all duration-1000 delay-400 ${
                visibleElements.has(13) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}>
                <CardHeader>
                  <CardTitle className="text-2xl text-center text-green-600">World Championship Prizes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {worldPrizes.map((prize, index) => (
                      <div key={index} className="p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <Award className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-green-600">{prize.place}</span>
                        </div>
                        <p className="text-sm">{prize.prize}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-on-scroll" data-index="14">
            <h2 className={`text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-1000 ${
              visibleElements.has(14) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Participate Now!
            </h2>
          </div>
          <div className="animate-on-scroll" data-index="15">
            <p className={`text-xl text-white/90 mb-8 transition-all duration-1000 delay-300 ${
              visibleElements.has(15) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              Don't miss your chance to represent India on the world stage!
            </p>
          </div>
          <div className="animate-on-scroll" data-index="16">
            <Button 
              size="lg" 
              variant="secondary"
              className={`px-8 py-4 text-lg transition-all duration-1000 delay-500 hover:scale-105 ${
                visibleElements.has(16) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Trophy className="mr-2 h-5 w-5" />
              Register Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MicrosoftChampionship;
