
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Camera, Users, MapPin, Heart } from 'lucide-react';

const ExchangeGallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/1f2a8863-9dc4-4809-a549-81c817318d51.png",
      alt: "Students at Straits of Melaka",
      caption: "Exploring Malaysian Heritage - Straits of Melaka"
    },
    {
      src: "/lovable-uploads/5621fd6b-7043-4985-b3f4-b90cfe28343d.png",
      alt: "Traditional Chinese temple",
      caption: "Cultural Exchange Activities - Chinese Temple Visit"
    },
    {
      src: "/lovable-uploads/bee20c18-c90e-437a-8042-fe942fa16c87.png",
      alt: "Melaka historical square",
      caption: "Historical Landmarks Exploration - Melaka Heritage"
    },
    {
      src: "/lovable-uploads/7fbe8f0c-a32d-4065-b7c1-4e0477b0eb94.png",
      alt: "Kuala Lumpur skyline with Petronas Towers",
      caption: "Weekend Adventure Trips - KL City Tour"
    },
    {
      src: "/lovable-uploads/38d2a58e-11d8-4105-99c3-bf54b64b7f44.png",
      alt: "INTI university cafeteria",
      caption: "Interactive Learning Sessions - University Facilities"
    },
    {
      src: "/lovable-uploads/221f92ad-ca97-4d14-b45c-8bc209f84d4d.png",
      alt: "University hostel room",
      caption: "Comfortable Accommodation - Hostel Living"
    },
    {
      src: "/lovable-uploads/2c3b1068-f94c-47d7-a99c-33ae2dcc4258.png",
      alt: "Students with INTI banner",
      caption: "International Student Community"
    },
    {
      src: "/lovable-uploads/1111a073-5694-48e0-8d30-1f7750b260a7.png",
      alt: "INTI University campus aerial view",
      caption: "INTI University Campus Life"
    }
  ];

  return (
    <section className="py-16 bg-muted/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Previous Student Trips Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the incredible experiences and memories created by our previous exchange students
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white font-medium text-sm">{image.caption}</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Gallery Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <Camera className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <CardTitle className="text-2xl font-bold">500+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Photos Captured</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <CardTitle className="text-2xl font-bold">200+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Happy Students</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <MapPin className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <CardTitle className="text-2xl font-bold">15+</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Destinations Visited</p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
              <CardTitle className="text-2xl font-bold">100%</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExchangeGallery;
