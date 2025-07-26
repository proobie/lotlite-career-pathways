import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  number: z.string().min(1, 'Number is required'),
  email: z.string().email('Invalid email address'),
  gender: z.enum(['male', 'female']),
  collegeName: z.string().min(1, 'College name is required'),
  courseName: z.string().min(1, 'Course name is required'),
  year: z.enum(['first', 'second', 'third', 'fourth', 'fifth']),
  passportNumber: z.string().optional(),
});

const ExchangeProgramForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      number: '',
      email: '',
      collegeName: '',
      courseName: '',
      passportNumber: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxl5LzOVSbe03UoK4Pr2oWofSWLkc8gc566G0u72r_TTLEPq22-rPPDqRl1Y1Yty3dhXA/exec';
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key as keyof typeof values]);
    }

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const jsonResponse = await response.json();
        if (jsonResponse.result === 'success') {
          setIsSubmitted(true);
        } else {
          // This will catch errors reported by the Google Script
          console.error('Google Script Error:', jsonResponse.error);
          alert('There was an error submitting your application. Please check the console for details.');
        }
      } else {
        // This will catch network errors
        alert('There was a network error submitting your application. Please try again.');
      }
    } catch (error) {
      console.error('Error!', error.message);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <section id="apply-form" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 p-8">
              <CardTitle className="text-4xl font-bold text-center text-white tracking-wider">
                Thank You!
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 md:p-12 text-center">
               <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                Your application has been submitted successfully.
              </p>
              <p className="text-muted-foreground">
                We will review your application and get back to you shortly.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  form.reset();
                }}
                className="mt-8 w-full max-w-xs mx-auto bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Submit Another Application
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="apply-form" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto shadow-2xl rounded-2xl overflow-hidden border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 p-8">
            <CardTitle className="text-4xl font-bold text-center text-white tracking-wider">
              Apply for Exchange Program
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. John Doe"
                            {...field}
                            className="bg-white/50 dark:bg-gray-700/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. +1 234 567 890"
                            {...field}
                            className="bg-white/50 dark:bg-gray-700/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. john.doe@example.com"
                            {...field}
                            className="bg-white/50 dark:bg-gray-700/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white/50 dark:bg-gray-700/50">
                              <SelectValue placeholder="Select your gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="collegeName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>College Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. University of Example"
                            {...field}
                            className="bg-white/50 dark:bg-gray-700/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="courseName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. Computer Science"
                            {...field}
                            className="bg-white/50 dark:bg-gray-700/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="bg-white/50 dark:bg-gray-700/50">
                              <SelectValue placeholder="Select your year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="first">First Year</SelectItem>
                            <SelectItem value="second">Second Year</SelectItem>
                            <SelectItem value="third">Third Year</SelectItem>
                            <SelectItem value="fourth">Fourth Year</SelectItem>
                            <SelectItem value="fifth">Fifth Year</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="passportNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Passport Number (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="e.g. A12345678"
                            {...field}
                            className="bg-white/50 dark:bg-gray-700/50"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ExchangeProgramForm; 