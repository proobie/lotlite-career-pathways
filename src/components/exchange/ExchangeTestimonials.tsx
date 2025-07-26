
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ExchangeTestimonials = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground">
            Hear from students who have experienced this life-changing journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b332c8a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg">Sarah Chen</CardTitle>
                  <p className="text-sm text-muted-foreground">Engineering Student</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                "The exchange program exceeded all my expectations. I gained invaluable skills and made lifelong friendships."
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg">Ahmed Hassan</CardTitle>
                  <p className="text-sm text-muted-foreground">Business Student</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                "Cultural immersion at its finest! Every day brought new discoveries and amazing experiences."
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
                  alt="Student testimonial"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <CardTitle className="text-lg">Maria Rodriguez</CardTitle>
                  <p className="text-sm text-muted-foreground">Arts Student</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground italic">
                "The perfect blend of academic learning and cultural exploration. Highly recommend to everyone!"
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExchangeTestimonials;
