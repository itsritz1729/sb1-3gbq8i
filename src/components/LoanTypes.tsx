import React from 'react';
import { Briefcase, GraduationCap, Home, Car, Heart } from 'lucide-react';

const loanTypes = [
  {
    title: 'Personal Loans',
    description: 'Quick personal loans for any purpose with competitive interest rates',
    icon: Briefcase,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    title: 'Education Loans',
    description: 'Fund your education with flexible repayment options',
    icon: GraduationCap,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    title: 'Home Loans',
    description: 'Make your dream home a reality with affordable home loans',
    icon: Home,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    title: 'Car Loans',
    description: 'Get on the road with quick and easy car financing',
    icon: Car,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
  },
  {
    title: 'Medical Loans',
    description: 'Healthcare financing with minimal documentation',
    icon: Heart,
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
];

export default function LoanTypes() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Explore Our Loan Options
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Choose from our wide range of loan products tailored to meet your specific needs
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {loanTypes.map((loan) => (
              <div
                key={loan.title}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
              >
                <div>
                  <span className={`rounded-lg inline-flex p-3 ${loan.bgColor} ${loan.color}`}>
                    <loan.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {loan.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {loan.description}
                  </p>
                </div>
                <span
                  className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                  aria-hidden="true"
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}