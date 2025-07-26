import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { id } = useParams();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Blog posts data (in a real app, this would come from an API)
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Microsoft Azure Certifications",
      excerpt: "Learn how to kickstart your cloud career with Azure certifications and the key benefits they offer for IT professionals.",
      author: "Sarah Chen",
      date: "March 15, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Microsoft",
      content: `
        <h2>Introduction to Microsoft Azure Certifications</h2>
        <p>Microsoft Azure has become one of the leading cloud platforms in the world, and with its rapid growth, the demand for skilled Azure professionals has skyrocketed. Azure certifications are designed to validate your skills and knowledge in various Azure services and solutions.</p>
        
        <h3>Why Choose Azure Certifications?</h3>
        <p>Azure certifications offer numerous benefits for IT professionals:</p>
        <ul>
          <li><strong>Career Advancement:</strong> Azure-certified professionals often see faster career progression and higher salaries.</li>
          <li><strong>Industry Recognition:</strong> Microsoft certifications are globally recognized and respected in the industry.</li>
          <li><strong>Practical Skills:</strong> The certification process ensures you gain hands-on experience with real-world scenarios.</li>
          <li><strong>Stay Current:</strong> Regular recertification keeps you updated with the latest Azure features and best practices.</li>
        </ul>
        
        <h3>Popular Azure Certification Paths</h3>
        <h4>1. Azure Fundamentals (AZ-900)</h4>
        <p>Perfect for beginners, this certification covers basic cloud concepts and Azure services. It's an excellent starting point for anyone new to cloud computing.</p>
        
        <h4>2. Azure Administrator Associate (AZ-104)</h4>
        <p>This certification validates skills in implementing, managing, and monitoring Azure environments. It's ideal for system administrators looking to specialize in cloud infrastructure.</p>
        
        <h4>3. Azure Solutions Architect Expert (AZ-305)</h4>
        <p>An advanced certification that demonstrates expertise in designing and implementing Azure solutions. This is perfect for senior professionals and architects.</p>
        
        <h3>How to Get Started</h3>
        <p>Beginning your Azure certification journey is straightforward:</p>
        <ol>
          <li><strong>Assess Your Current Skills:</strong> Determine your existing knowledge of cloud computing and Azure services.</li>
          <li><strong>Choose Your Path:</strong> Select the certification that aligns with your career goals and current role.</li>
          <li><strong>Study and Practice:</strong> Use Microsoft Learn, practice labs, and hands-on experience to prepare.</li>
          <li><strong>Schedule Your Exam:</strong> Book your certification exam through Microsoft's official testing centers.</li>
        </ol>
        
        <h3>Tips for Success</h3>
        <p>To maximize your chances of success:</p>
        <ul>
          <li>Get hands-on experience with Azure services through free trial accounts</li>
          <li>Join Azure communities and forums for support and networking</li>
          <li>Practice with sample questions and mock exams</li>
          <li>Consider taking instructor-led training courses</li>
        </ul>
        
        <h3>Conclusion</h3>
        <p>Azure certifications are an excellent investment in your IT career. They not only validate your skills but also open doors to new opportunities in the rapidly growing cloud computing industry. Start your journey today and take the first step towards becoming a certified Azure professional.</p>
      `
    },
    {
      id: 2,
      title: "Adobe Creative Suite: Which Certification is Right for You?",
      excerpt: "Explore the different Adobe certification paths and discover which one aligns best with your creative career goals.",
      author: "Marcus Rodriguez",
      date: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Adobe",
      content: `
        <h2>Understanding Adobe Certifications</h2>
        <p>Adobe Creative Suite certifications are designed for creative professionals who want to demonstrate their expertise in Adobe's industry-leading design and multimedia applications.</p>
        
        <h3>Available Adobe Certifications</h3>
        <p>Adobe offers several certification tracks to match different creative roles and skill levels.</p>
        
        <h4>Adobe Certified Associate (ACA)</h4>
        <p>Entry-level certifications that validate foundational skills in Adobe applications. Perfect for students and early-career professionals.</p>
        
        <h4>Adobe Certified Expert (ACE)</h4>
        <p>Advanced certifications that demonstrate deep expertise in specific Adobe products. Ideal for experienced professionals.</p>
        
        <h3>Popular Adobe Applications</h3>
        <ul>
          <li><strong>Photoshop:</strong> Image editing and photo manipulation</li>
          <li><strong>Illustrator:</strong> Vector graphics and illustration</li>
          <li><strong>InDesign:</strong> Layout design and desktop publishing</li>
          <li><strong>Premiere Pro:</strong> Video editing and production</li>
          <li><strong>After Effects:</strong> Motion graphics and visual effects</li>
        </ul>
        
        <h3>Career Benefits</h3>
        <p>Adobe certifications can significantly boost your creative career by:</p>
        <ul>
          <li>Validating your technical skills to employers</li>
          <li>Increasing your earning potential</li>
          <li>Enhancing your professional credibility</li>
          <li>Opening doors to new job opportunities</li>
        </ul>
      `
    },
    {
      id: 3,
      title: "The Future of iOS Development: Apple's Latest Updates",
      excerpt: "Stay ahead of the curve with insights into Apple's latest iOS development frameworks and certification requirements.",
      author: "Priya Patel",
      date: "March 10, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "Apple",
      content: `
        <h2>Apple's Latest iOS Development Updates</h2>
        <p>Apple continues to innovate and evolve its iOS platform, introducing new frameworks, tools, and capabilities that developers need to master to stay competitive.</p>
        
        <h3>SwiftUI Evolution</h3>
        <p>SwiftUI has become the cornerstone of modern iOS development, offering declarative syntax and powerful features for building user interfaces.</p>
        
        <h3>New Framework Introductions</h3>
        <p>Recent iOS updates have introduced several new frameworks that developers should familiarize themselves with:</p>
        <ul>
          <li><strong>WidgetKit:</strong> For creating home screen widgets</li>
          <li><strong>App Clips:</strong> Lightweight app experiences</li>
          <li><strong>Core ML:</strong> Machine learning integration</li>
        </ul>
        
        <h3>Certification Paths</h3>
        <p>Apple offers various certification programs for iOS developers, including the App Development with Swift certification track.</p>
        
        <h3>Future Trends</h3>
        <p>Keep an eye on emerging trends in iOS development:</p>
        <ul>
          <li>Augmented Reality (ARKit)</li>
          <li>Machine Learning integration</li>
          <li>Privacy-focused development</li>
          <li>Cross-platform compatibility</li>
        </ul>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <article className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>

            {/* Article Header */}
            <header className="mb-8">
              <div className="mb-4">
                <span className="inline-block text-xs px-3 py-1 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-full">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Article Content */}
            <Card>
              <CardContent className="p-8">
                <div 
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </CardContent>
            </Card>

            {/* Author Bio */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">About {post.author}</h3>
                    <p className="text-muted-foreground">
                      A seasoned technology professional with expertise in cloud computing and digital transformation. 
                      Passionate about helping others advance their careers through technology certifications.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
