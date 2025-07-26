import React, { useState, useMemo, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Search, Clock, Users, BookOpen, Filter, Star, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import useEmblaCarousel from 'embla-carousel-react';

interface Certification {
  id: string;
  title: string;
  description: string;
  targetAudience: string;
  learningOutcomes: string[];
  prerequisites: string[];
  duration: string;
  format: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  vendor: 'Microsoft' | 'Adobe' | 'Apple' | 'Google' | 'AWS' | 'Azure';
  category: string;
  rating: number;
  students: number;
}

const Certifications = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVendor, setSelectedVendor] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    containScroll: 'trimSnaps'
  });

  // Auto-scroll effect
  useEffect(() => {
    if (!emblaApi) return;

    const autoScroll = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(autoScroll);
  }, [emblaApi]);

  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Microsoft Certified: Azure Administrator Associate',
      description: 'Master cloud administration with hands-on Azure training. Learn to implement, manage, and monitor Azure infrastructure.',
      targetAudience: 'IT professionals, system administrators, cloud engineers',
      learningOutcomes: [
        'Manage Azure subscriptions and resources',
        'Implement and manage storage',
        'Deploy and manage Azure compute resources',
        'Configure and manage virtual networking'
      ],
      prerequisites: ['Basic understanding of Azure services', '6+ months of hands-on experience'],
      duration: '8 weeks',
      format: 'Online',
      difficulty: 'Intermediate',
      vendor: 'Microsoft',
      category: 'Cloud Computing',
      rating: 4.9,
      students: 1234
    },
    {
      id: '2',
      title: 'Adobe Creative Suite Master',
      description: 'Comprehensive training in Photoshop, Illustrator, and InDesign. Perfect for aspiring designers and creative professionals.',
      targetAudience: 'Graphic designers, marketing professionals, creative enthusiasts',
      learningOutcomes: [
        'Master Photoshop for image editing',
        'Create vector graphics in Illustrator',
        'Design layouts in InDesign',
        'Develop a professional portfolio'
      ],
      prerequisites: ['Basic computer skills', 'Creative mindset'],
      duration: '12 weeks',
      format: 'Blended',
      difficulty: 'Beginner',
      vendor: 'Adobe',
      category: 'Creative Design',
      rating: 4.8,
      students: 987
    },
    {
      id: '3',
      title: 'Apple iOS Development',
      description: 'Build stunning iOS applications with Swift and Xcode. Learn the fundamentals of mobile app development for Apple devices.',
      targetAudience: 'Software developers, mobile app enthusiasts, tech entrepreneurs',
      learningOutcomes: [
        'Master Swift programming language',
        'Build native iOS applications',
        'Understand iOS design patterns',
        'Deploy apps to the App Store'
      ],
      prerequisites: ['Programming experience', 'Basic understanding of OOP'],
      duration: '10 weeks',
      format: 'Classroom',
      difficulty: 'Intermediate',
      vendor: 'Apple',
      category: 'Mobile Development',
      rating: 4.9,
      students: 756
    },
    {
      id: '4',
      title: 'Google Cloud Professional Cloud Architect',
      description: 'Become a Google Cloud expert with comprehensive training in GCP services, architecture, and best practices.',
      targetAudience: 'Cloud architects, DevOps engineers, solutions architects',
      learningOutcomes: [
        'Design and plan cloud solution architecture',
        'Manage and provision cloud infrastructure',
        'Ensure solution and operations reliability',
        'Optimize performance and costs'
      ],
      prerequisites: ['3+ years of industry experience', 'Basic GCP knowledge'],
      duration: '6 weeks',
      format: 'Online',
      difficulty: 'Advanced',
      vendor: 'Google',
      category: 'Cloud Computing',
      rating: 4.7,
      students: 1098
    },
    {
      id: '5',
      title: 'Microsoft Power Platform Developer',
      description: 'Learn to build business applications using Power Apps, Power Automate, and Power BI.',
      targetAudience: 'Business analysts, citizen developers, IT professionals',
      learningOutcomes: [
        'Create custom business applications',
        'Automate business processes',
        'Build interactive dashboards',
        'Integrate with Microsoft 365'
      ],
      prerequisites: ['Basic understanding of business processes'],
      duration: '4 weeks',
      format: 'Online',
      difficulty: 'Beginner',
      vendor: 'Microsoft',
      category: 'Business Applications',
      rating: 4.6,
      students: 892
    },
    {
      id: '6',
      title: 'Adobe Experience Manager Sites',
      description: 'Master Adobe Experience Manager for enterprise content management and digital experience delivery.',
      targetAudience: 'Web developers, content managers, digital marketers',
      learningOutcomes: [
        'Build and manage enterprise websites',
        'Create personalized digital experiences',
        'Implement content workflows',
        'Optimize site performance'
      ],
      prerequisites: ['Web development experience', 'HTML/CSS/JavaScript knowledge'],
      duration: '8 weeks',
      format: 'Blended',
      difficulty: 'Advanced',
      vendor: 'Adobe',
      category: 'Web Development',
      rating: 4.5,
      students: 543
    },
    {
      id: '7',
      title: 'AWS Solutions Architect Associate',
      description: 'Master Amazon Web Services with comprehensive training in AWS cloud architecture, services, and best practices.',
      targetAudience: 'Cloud architects, DevOps engineers, solutions architects',
      learningOutcomes: [
        'Design resilient AWS architectures',
        'Implement cost-effective solutions',
        'Optimize for performance and security',
        'Master AWS core services'
      ],
      prerequisites: ['Basic cloud knowledge', '1+ year of hands-on AWS experience'],
      duration: '10 weeks',
      format: 'Online',
      difficulty: 'Intermediate',
      vendor: 'AWS',
      category: 'Cloud Computing',
      rating: 4.8,
      students: 1456
    }
  ];

  const vendors = [
    { 
      name: 'Microsoft', 
      logo: '/lovable-uploads/9b69d4a8-7866-4eef-b785-5abaa7e05cd4.png',
      color: 'from-blue-600 to-blue-700' 
    },
    { 
      name: 'Adobe', 
      logo: '/lovable-uploads/8ade1ce7-051e-4691-bbbe-2eeee7f0ce5d.png',
      color: 'from-red-600 to-pink-600' 
    },
    { 
      name: 'Apple', 
      logo: '/lovable-uploads/b194d9bb-e169-48b8-ba2a-371ffc2ebb05.png',
      color: 'from-gray-700 to-gray-900' 
    },
    { 
      name: 'Google', 
      logo: '/lovable-uploads/8fe2ef1e-b528-4588-a1f9-753528ab644d.png',
      color: 'from-green-600 to-blue-600' 
    },
    { 
      name: 'AWS', 
      logo: '/lovable-uploads/f76eba84-12f9-4fa3-a7bc-ae577b1e9418.png',
      color: 'from-orange-500 to-orange-600' 
    },
    { 
      name: 'Azure', 
      logo: '/lovable-uploads/75729ba2-4fd2-4cfa-a909-2f76858f3b3e.png',
      color: 'from-blue-500 to-blue-700' 
    }
  ];

  const filteredCertifications = useMemo(() => {
    return certifications.filter(cert => {
      const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           cert.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesVendor = selectedVendor === 'all' || cert.vendor === selectedVendor;
      const matchesDifficulty = selectedDifficulty === 'all' || cert.difficulty === selectedDifficulty;
      const matchesFormat = selectedFormat === 'all' || cert.format === selectedFormat;
      
      return matchesSearch && matchesVendor && matchesDifficulty && matchesFormat;
    });
  }, [searchTerm, selectedVendor, selectedDifficulty, selectedFormat, certifications]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-blue-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our 
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                {" "}Certifications
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Transform your career with industry-recognized certifications from leading technology partners. 
              Choose from a wide range of professional development programs designed to advance your skills.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certification Partners - Constantly Moving Slider */}
      <section className="py-16 bg-background overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Our Certification Partners</h2>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {/* Duplicate vendors for seamless loop */}
              {[...vendors, ...vendors].map((vendor, index) => (
                <div 
                  key={`${vendor.name}-${index}`}
                  className="flex-[0_0_250px] mx-4"
                >
                  <div 
                    className={`p-6 rounded-lg bg-gradient-to-r ${vendor.color} text-white text-center hover:scale-105 transition-transform cursor-pointer min-h-[120px] flex flex-col items-center justify-center`}
                    onClick={() => setSelectedVendor(vendor.name)}
                  >
                    <div className="mb-3 w-16 h-16 flex items-center justify-center">
                      <img 
                        src={vendor.logo} 
                        alt={`${vendor.name} logo`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert"
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <span className="hidden font-bold text-lg">{vendor.name}</span>
                    </div>
                    <h3 className="font-semibold text-lg">{vendor.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">Filter by:</span>
            </div>
            
            <Select value={selectedVendor} onValueChange={setSelectedVendor}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Vendors" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Vendors</SelectItem>
                {vendors.map((vendor) => (
                  <SelectItem key={vendor.name} value={vendor.name}>
                    {vendor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Levels" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedFormat} onValueChange={setSelectedFormat}>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="All Formats" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Formats</SelectItem>
                <SelectItem value="Online">Online</SelectItem>
                <SelectItem value="Classroom">Classroom</SelectItem>
                <SelectItem value="Blended">Blended</SelectItem>
              </SelectContent>
            </Select>

            {(selectedVendor !== 'all' || selectedDifficulty !== 'all' || selectedFormat !== 'all') && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => {
                  setSelectedVendor('all');
                  setSelectedDifficulty('all');
                  setSelectedFormat('all');
                }}
              >
                Clear Filters
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Certification Listings */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Available Certifications</h2>
            <p className="text-muted-foreground">
              {filteredCertifications.length} certification{filteredCertifications.length !== 1 ? 's' : ''} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertifications.map((cert, index) => (
              <Card 
                key={cert.id}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{cert.vendor}</Badge>
                    <Badge 
                      variant="outline" 
                      className={`bg-gradient-to-r ${vendors.find(v => v.name === cert.vendor)?.color} text-white border-0`}
                    >
                      {cert.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {cert.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
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

                  <div>
                    <h4 className="font-medium text-sm mb-2">Target Audience:</h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">{cert.targetAudience}</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-2">Key Learning Outcomes:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {cert.learningOutcomes.slice(0, 2).map((outcome, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-primary mt-1">•</span>
                          <span className="line-clamp-1">{outcome}</span>
                        </li>
                      ))}
                      {cert.learningOutcomes.length > 2 && (
                        <li className="text-xs text-muted-foreground/70">
                          +{cert.learningOutcomes.length - 2} more...
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs">
                      <BookOpen className="h-3 w-3" />
                      <span>{cert.format}</span>
                    </div>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="group-hover:bg-primary group-hover:text-white transition-all"
                    >
                      View Details
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCertifications.length === 0 && (
            <div className="text-center py-12">
              <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No certifications found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedVendor('all');
                  setSelectedDifficulty('all');
                  setSelectedFormat('all');
                }}
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Don't See What You're Looking For */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See What You're Looking For?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We offer custom training programs and can help you prepare for specific certifications. 
            Contact us to discuss your unique learning needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              Request Custom Training
            </Button>
            <Button size="lg" variant="outline" className="px-8">
              Contact Our Experts
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certifications;
