
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, GraduationCap, Star, Heart, Clock, Home, Camera } from 'lucide-react';

const ProgrammeOverview = () => {
  return (
    <>
      {/* Programme Introduction */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Programme Introduction</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Our Student Mobility Programme is designed to challenge and inspire students through 
              creative, innovative, and exciting activities that broaden horizons and create lasting memories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Global Exploration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Explore society, learning, culture, and recreational activities in a global context
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <GraduationCap className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Educational Opportunity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Outstanding opportunity for students to broaden their horizons through international education
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Star className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Creative Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Learning designed into creative, exciting, and fun activities beyond traditional classroom methods
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-8 w-8 text-red-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Knowledge & Friendship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gain valuable knowledge while building lasting friendships and global connections
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programme Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Programme Overview</h2>
            <p className="text-muted-foreground">
              A comprehensive 3-week experience designed for maximum learning and cultural immersion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Immerse yourself in a <span className="font-bold text-primary">3-week adventure</span> at INTI International University
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Accommodation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Experience campus life in INTI's <span className="font-bold text-primary">comfortable and modern</span> university hostel
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <GraduationCap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Engage in <span className="font-bold text-primary">cutting-edge courses</span> while exploring Malaysian culture and traditions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Camera className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Exploration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Embark on exciting <span className="font-bold text-primary">weekend excursions</span> to iconic Malaysian landmarks
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgrammeOverview;
