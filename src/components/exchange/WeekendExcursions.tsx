
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Building, Utensils } from 'lucide-react';

const WeekendExcursions = () => {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Weekend Excursions & Fun Activities</h2>
          <p className="text-muted-foreground">
            Explore Malaysia's diverse cultural heritage and natural beauty through exciting monthly excursions
          </p>
        </div>

        <Tabs defaultValue="destinations" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="destinations">Iconic Destinations</TabsTrigger>
            <TabsTrigger value="cultural">Cultural Immersion</TabsTrigger>
          </TabsList>
          
          <TabsContent value="destinations" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/lovable-uploads/7fbe8f0c-a32d-4065-b7c1-4e0477b0eb94.png"
                    alt="Petronas Twin Towers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Petronas Twin Towers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Iconic skyscrapers symbolizing Malaysia's modern architecture and economic prowess.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/lovable-uploads/7fbe8f0c-a32d-4065-b7c1-4e0477b0eb94.png"
                    alt="Kuala Lumpur City"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>KL City</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A vibrant metropolis with diverse cultural experiences, bustling markets, and delicious local cuisine.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/lovable-uploads/bee20c18-c90e-437a-8042-fe942fa16c87.png"
                    alt="Melaka Historical Site"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Melaka</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A UNESCO World Heritage Site with charming historical buildings and a glimpse into Malaysia's colonial past.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src="/lovable-uploads/5621fd6b-7043-4985-b3f4-b90cfe28343d.png"
                    alt="Cultural Temple"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>Cultural Heritage Sites</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Explore traditional temples and cultural landmarks that showcase Malaysia's diverse heritage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="cultural" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Local Markets</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experience authentic Malaysian culture through vibrant local markets and traditional shopping experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Museums & Heritage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Discover Malaysia's rich history through visits to museums and cultural heritage sites.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Utensils className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Culinary Adventures</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Savor the delicious flavors of local cuisine and experience the warmth of Malaysian hospitality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default WeekendExcursions;
