import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

const features = [
  {
    name: 'Trusted by Millions',
    description: 'Over 1 million customers trust us for their loan needs',
    icon: Users,
  },
  {
    name: 'Secure Process',
    description: 'Bank-grade security for all your transactions',
    icon: Shield,
  },
  {
    name: 'Best Rates',
    description: 'Competitive interest rates from multiple lenders',
    icon: Target,
  },
  {
    name: 'Expert Support',
    description: '24/7 support from our loan experts',
    icon: Award,
  },
];

export default function AboutUs() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About RnaStan
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Your trusted partner in finding the perfect loan solution
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative">
              <img
                className="w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team meeting"
              />
              <div className="absolute inset-0 bg-blue-600 mix-blend-multiply rounded-lg"></div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 mb-6">
                At RnaStan, we believe everyone deserves access to fair and transparent financial 
                solutions. Our mission is to simplify the loan process and connect borrowers with 
                the best lending options tailored to their needs.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                We envision a future where accessing financial services is seamless, transparent, 
                and stress-free. Through technology and expert guidance, we're making this vision 
                a reality.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <h4 className="mt-6 text-lg font-medium text-gray-900">
                      {feature.name}
                    </h4>
                    <p className="mt-2 text-base text-gray-500 text-center">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}