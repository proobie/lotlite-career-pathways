
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Eye, Users, Award, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const directors = [
    {
      name: "Mr. Dilip Pungalia",
      role: "Business leader, blockchain advisor",
      image: "/lovable-uploads/6e4749a5-71d6-449a-9663-9bbc6f2ef82f.png",
      bio: "Is a business leader, Artificial Intelligence consultant, blockchain advisor, metaverse solution expert, data leader, technologist, and business, process, & technology architect. As a board member and significant shareholder of Ztudium.",
      achievements: ["Strategic Leadership at Ztudium", "Pioneering in Emerging Technologies", "Holistic Business & Technology Architect"]
    },
    {
      name: "Mr. Dinis Guarda",
      role: "Founder, CEO of Ztudium Group",
      image: "/lovable-uploads/3624bc74-e42e-41b7-a903-900a2b0167d5.png",
      bio: "Founder, CEO of Ztudium Group, Author of 4IR AI Blockchain Fintech IoT. Dinis is a World Class Leader in multiple fields and has a passsion to push ideas, action and technology together to create better solutions, narratives and paths.",
      achievements: ["Founded and leads Ztudium Group", "Authored influential books on 4IR technologies", "Recognized as a World Class Leader in multiple fields"]
    }
  ];

  const additionalDirectors = [
    {
      name: "Prof. B.K. Alok",
      role: "Founder & Director",
      image: "/lovable-uploads/c9f7d211-8696-4bd1-aba6-d6f2eff99b86.png",
      bio: "Founder & Director at Lotlite Technology and Lotlite Real Estate Pvt Ltd",
      achievements: ["Led 50+ Digital Transformation Projects", "Expert in Emerging Technology Integration", "Award-winning Innovation Strategist"]
    },
    {
      name: "Mr. Saiyam Kumar",
      role: "Founder & Director",
      image: "/lovable-uploads/967342bb-63b5-4784-9e89-aa614c650356.png",
      bio: "Strategic partnerships expert with extensive experience in building global alliances and fostering international business relationships. He has successfully established partnerships across Europe, Asia, and the Americas.",
      achievements: ["Established 100+ Strategic Partnerships", "Global Business Development Expert", "International Market Expansion Specialist"]
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Ankur Kumar",
      role: "Chief Technology Officer",
      image: "/lovable-uploads/73970ed5-939b-4637-9230-e85768555932.png",
      bio: "CTO at Lotlite Technology and Director at RichNusGeeks, IIT Bombay graduate, expert in Cloud Computing",
      expertise: ["Azure", "Cloud Architecture", "DevOps"]
    },
    {
      name: "Dr. Sachin R. Sakhare",
      role: "Professor and Head of Computer Engineering",
      image: "/lovable-uploads/e7ea1dea-5b10-44b9-ba2e-bc82862dbb6e.png",
      bio: "Professor and Head of the Computer Engineering Department at Vishwakarma Institute of Information Technology, Pune, India. He has 29 Years of experience.",
      expertise: ["Leadership", "Engineering", "Research"]
    },
    {
      name: "Mr. Mohd Shafi Pathan",
      role: "Professor and Cyber Security Specialist",
      image: "/lovable-uploads/ef627548-1eba-48c7-b38b-3a413f23b698.png",
      bio: "Professor and Cyber Security & Forensics Specialist at MIT ADT University, Pune, with 24 years of experience.",
      expertise: ["Cybersecurity", "Forensics", "Professorship"]
    },
    {
      name: "Mr. Gurunath Waghale",
      role: "Assistant Professor",
      image: "/lovable-uploads/803f19b7-777a-43bc-b758-c23947a544f4.png",
      bio: "Assistant Professor at MIT ADT University with 8+ years of experience, gold medalist in Economics, and multiple advanced degrees.",
      expertise: ["Research ", "Academia ", "Economics"]
    },
    {
      name: "Suresh Kapare",
      role: "Associate Professor",
      image: "/lovable-uploads/9c61fe33-c158-483f-9c97-d08b4fa79c47.png",
      bio: "Associate Professor at MIT ADT University with 12 years of experience in Agile Software Development, Scrum, and project management",
      expertise: ["Agile Development", "Scrum", "Project Management"]
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from curriculum design to student support."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and teaching methods to provide cutting-edge learning experiences."
    },
    {
      icon: Users,
      title: "Student Success",
      description: "Our students' achievements and career growth are at the heart of our mission."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical practices in all our interactions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50 pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About 
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {" "}Lotlite Technology
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Empowering careers through industry-recognized certifications and innovative learning experiences since 2018.
              </p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Lotlite Technology Team"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Lotlite Technology is a pioneering force in global education technology, dedicated to transforming lives through innovative learning solutions. Founded with a vision to bridge the gap between education and industry, we've grown into a trusted partner for students and professionals worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  To be the leading technology education provider in Asia-Pacific, empowering individuals and organizations to thrive in the digital economy through world-class training and certification programs.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground text-center leading-relaxed">
                  To deliver exceptional technology education through industry-recognized certifications, expert instruction, and innovative learning experiences that transform careers and drive organizational success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Directors Section - moved above UK Business Partner */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Directors
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in technology, innovation, and strategic partnerships to drive our mission forward.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {additionalDirectors.map((director, index) => (
              <Card 
                key={director.name}
                className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{director.name}</h3>
                  <p className="text-primary font-medium text-lg">{director.role}</p>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {director.bio}
                </p>
                <div className="space-y-2">
                  {director.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* UK Business Partner Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our UK Business Partner
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our UK Business Partner provides strategic support and leverages extensive experience to drive business growth and foster strong relationships in the UK market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {directors.map((director, index) => (
              <Card 
                key={director.name}
                className="p-8 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                    <img 
                      src={director.image}
                      alt={director.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{director.name}</h3>
                  <p className="text-primary font-medium text-lg">{director.role}</p>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {director.bio}
                </p>
                <div className="space-y-2">
                  {director.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-green-600 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Expert Advisory Panel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Composed of leading specialists, our Expert Advisory Panel offers independent, strategic guidance and in-depth insights to inform and shape critical decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card 
                key={member.name}
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide everything we do at Lotlite Technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
