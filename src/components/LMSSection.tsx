
import { Monitor, Clock, Users, BookOpen, MessageCircle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LMSSection = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Access to Course Materials",
      description: "Study at your own pace, anytime, anywhere with our flexible learning platform."
    },
    {
      icon: BookOpen,
      title: "Interactive Learning Modules",
      description: "Engage with rich multimedia content, quizzes, and practical exercises designed for maximum retention."
    },
    {
      icon: TrendingUp,
      title: "Progress Tracking",
      description: "Monitor your achievements and identify areas for improvement with detailed analytics."
    },
    {
      icon: Users,
      title: "Direct Instructor Support",
      description: "Easily connect with our expert trainers for personalized guidance and mentorship."
    },
    {
      icon: MessageCircle,
      title: "Collaborative Forums",
      description: "Interact with peers, share insights, and build a strong learning community."
    },
    {
      icon: Monitor,
      title: "Seamless Experience",
      description: "Access all your courses, assignments, and resources from one centralized platform."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - LMS Dashboard Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/lovable-uploads/9670c416-5d59-42ec-befd-53f2753be922.png" 
                alt="Lotlite LMS Dashboard" 
                className="w-full h-auto rounded-lg shadow-2xl float animate-[float_4s_ease-in-out_infinite]"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
                loading="lazy"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-r from-blue-600 to-green-600 rounded-lg opacity-20 z-0"></div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Advanced 
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {" "}Learning Management System
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Lotlite Technology, we are committed to providing a seamless and enriching learning experience. 
                That's why we've developed our own state-of-the-art Learning Management System (LMS), designed to 
                offer unparalleled flexibility and support to our students.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg mb-3 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom content */}
            <div className="space-y-4">
              <p className="text-base text-muted-foreground">
                Our LMS is the central hub for your certification journey, ensuring that you have all the 
                resources and support needed to achieve 
                <span className="font-semibold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {" "}IT excellence
                </span>.
              </p>
              
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LMSSection;
