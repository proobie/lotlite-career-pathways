import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeaturedCertifications = () => {
  const navigate = useNavigate();
  
  const certifications = [
    {
      title: "Microsoft Azure Administrator Associate",
      instructor: "Azure Expert Team",
      description: "Master cloud administration with hands-on Azure training. Learn to implement, manage, and monitor Azure infrastructure.",
      rating: 4.9,
      students: 1234,
      duration: "8 weeks",
      level: "Intermediate",
      provider: "Microsoft",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Adobe Creative Suite Master",
      instructor: "Creative Professionals",
      description: "Comprehensive training in Photoshop, Illustrator, and InDesign. Perfect for aspiring designers and creative professionals.",
      rating: 4.8,
      students: 987,
      duration: "12 weeks",
      level: "Beginner",
      provider: "Adobe",
      color: "from-red-600 to-pink-600"
    },
    {
      title: "Apple iOS Development",
      instructor: "iOS Development Team",
      description: "Build stunning iOS applications with Swift and Xcode. Learn the fundamentals of mobile app development for Apple devices.",
      rating: 4.9,
      students: 756,
      duration: "10 weeks",
      level: "Intermediate",
      provider: "Apple",
      color: "from-gray-700 to-gray-900"
    },
    {
      title: "Google Cloud Professional",
      instructor: "Cloud Architecture Team",
      description: "Become a Google Cloud expert with comprehensive training in GCP services, architecture, and best practices.",
      rating: 4.7,
      students: 1098,
      duration: "6 weeks",
      level: "Advanced",
      provider: "Google",
      color: "from-green-600 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured 
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {" "}Certifications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular certification programs designed to advance your career in technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-md animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {cert.provider}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={`bg-gradient-to-r ${cert.color} text-white border-0`}
                  >
                    {cert.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  by {cert.instructor}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {cert.description}
                </p>
                
                <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span>{cert.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{cert.students}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{cert.duration}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  onClick={() => navigate('/certifications')}
                >
                  View Details
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-3 transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/certifications')}
          >
            View All Certifications
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCertifications;
