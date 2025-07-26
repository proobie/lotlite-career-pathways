
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Trophy, Users } from 'lucide-react';

const AboutINTI = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About INTI International University</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A globally recognized institution leading education excellence in Asia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Global Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Ranked <span className="font-bold text-primary">516th worldwide</span> in QS World University Rankings 2024
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Trophy className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl">Asian Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Secured <span className="font-bold text-primary">222nd place</span> in QS Asia University Rankings 2024
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle className="text-xl">International Appeal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                <span className="font-bold text-primary">Top institution</span> for inbound mobility students in Asia
              </p>
            </CardContent>
          </Card>
        </div>

        {/* University Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/1111a073-5694-48e0-8d30-1f7750b260a7.png"
              alt="INTI University Campus"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <p className="text-white p-4 font-medium">Modern Campus Facilities</p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/84563fd7-705e-4a1f-bfbb-a92889a8de6c.png"
              alt="International Students in classroom"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <p className="text-white p-4 font-medium">Diverse Student Community</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutINTI;
