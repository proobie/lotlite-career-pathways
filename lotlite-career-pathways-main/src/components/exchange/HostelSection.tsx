
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home, Wifi, Shield, Utensils } from 'lucide-react';

const HostelSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Comfortable Living: University Hostel</h2>
          <p className="text-muted-foreground">
            Modern, secure, and comfortable accommodation designed for international students
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Home className="h-8 w-8 text-blue-600 mb-2" />
                  <CardTitle className="text-lg">Room Options</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Choose from cozy singles, spacious doubles, and affordable triples. All well-maintained and comfortable.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wifi className="h-8 w-8 text-green-600 mb-2" />
                  <CardTitle className="text-lg">Modern Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    High-speed internet, laundry facilities, and all conveniences for comfortable living.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-8 w-8 text-purple-600 mb-2" />
                  <CardTitle className="text-lg">24-Hour Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Enjoy peace of mind with round-the-clock security keeping you safe and secure.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Utensils className="h-8 w-8 text-red-600 mb-2" />
                  <CardTitle className="text-lg">Dining & Recreation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    On-campus cafeterias with diverse cuisine and common areas for socializing and studying.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/221f92ad-ca97-4d14-b45c-8bc209f84d4d.png"
                alt="University Hostel Room"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white p-4 font-medium">Modern Hostel Rooms</p>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/lovable-uploads/de39c1f9-aa39-40b6-a725-8aec43c1a459.png"
                alt="Common Areas"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <p className="text-white p-4 font-medium">Common Study Areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostelSection;
