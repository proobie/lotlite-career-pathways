
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Users, Star } from 'lucide-react';

const FarewellCelebration = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Farewell Celebration</h2>
          <p className="text-muted-foreground">
            End your journey with an unforgettable celebration marking your Malaysian adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Utensils className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <CardTitle>Gourmet Dinner</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Savor a multi-course Malaysian fusion dinner prepared by top chefs, celebrating the flavors of your journey.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>DJ Night</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Dance the night away to a mix of international and Malaysian hits, celebrating with your new friends.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Memorable Display</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Enjoy a spectacular display and ceremony marking the end of your transformative journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FarewellCelebration;
