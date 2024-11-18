import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

interface LoanOffer {
  bank: string;
  interestRate: number;
  maxAmount: number;
  processingFee: number;
  tenure: number;
  logo: string;
}

const loanOffers: LoanOffer[] = [
  {
    bank: 'RnaBank',
    interestRate: 8.5,
    maxAmount: 5000000,
    processingFee: 0.5,
    tenure: 20,
    logo: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    bank: 'StanFinance',
    interestRate: 8.75,
    maxAmount: 7500000,
    processingFee: 0.75,
    tenure: 25,
    logo: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
  {
    bank: 'LoanPro',
    interestRate: 9.0,
    maxAmount: 10000000,
    processingFee: 1,
    tenure: 30,
    logo: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80',
  },
];

export default function LoanComparison() {
  const [loanAmount, setLoanAmount] = useState(1000000);
  const [loanTenure, setLoanTenure] = useState(10);

  const calculateEMI = (principal: number, rate: number, tenure: number) => {
    const monthlyRate = rate / (12 * 100);
    const months = tenure * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(emi);
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Calculator className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Compare Loan Offers
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Find the best loan offers tailored to your needs
          </p>
        </div>

        <div className="mt-10 max-w-xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Loan Amount (₹)
              </label>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="mt-2 text-sm text-gray-600">
                ₹{loanAmount.toLocaleString()}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Loan Tenure (Years)
              </label>
              <input
                type="range"
                min="1"
                max="30"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="mt-2 text-sm text-gray-600">
                {loanTenure} years
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {loanOffers.map((offer) => {
            const emi = calculateEMI(loanAmount, offer.interestRate, loanTenure);
            const processingFeeAmount = (loanAmount * offer.processingFee) / 100;

            return (
              <div
                key={offer.bank}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={offer.logo}
                    alt={offer.bank}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {offer.bank}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Up to ₹{offer.maxAmount.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Interest Rate</span>
                    <span className="font-semibold">{offer.interestRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Processing Fee</span>
                    <span className="font-semibold">
                      ₹{processingFeeAmount.toLocaleString()} ({offer.processingFee}%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly EMI</span>
                    <span className="font-semibold text-blue-600">
                      ₹{emi.toLocaleString()}
                    </span>
                  </div>
                </div>

                <button className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}