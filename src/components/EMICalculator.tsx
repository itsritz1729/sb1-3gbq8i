import React, { useState, useEffect } from 'react';
import { Calculator, PieChart, DollarSign, Clock } from 'lucide-react';

export default function EMICalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [interest, setInterest] = useState(8.5);
  const [tenure, setTenure] = useState(20);
  const [emi, setEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateLoan = () => {
      const monthlyRate = interest / (12 * 100);
      const months = tenure * 12;
      const monthlyEMI = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                        (Math.pow(1 + monthlyRate, months) - 1);
      
      const totalPayment = monthlyEMI * months;
      const interestPaid = totalPayment - principal;

      setEMI(Math.round(monthlyEMI));
      setTotalInterest(Math.round(interestPaid));
      setTotalAmount(Math.round(totalPayment));
    };

    calculateLoan();
  }, [principal, interest, tenure]);

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Calculator className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            EMI Calculator
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Calculate your monthly EMI and total interest payable
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="space-y-6">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                  Loan Amount (₹)
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="mt-2 text-sm text-gray-600">
                  ₹{principal.toLocaleString()}
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <PieChart className="h-5 w-5 mr-2 text-blue-600" />
                  Interest Rate (%)
                </label>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.25"
                  value={interest}
                  onChange={(e) => setInterest(Number(e.target.value))}
                  className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="mt-2 text-sm text-gray-600">
                  {interest}%
                </div>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Loan Tenure (Years)
                </label>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="mt-1 w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="mt-2 text-sm text-gray-600">
                  {tenure} years
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-medium text-gray-900">Loan Summary</h3>
            <div className="mt-6 space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Monthly EMI</div>
                <div className="mt-1 text-2xl font-semibold text-blue-600">
                  ₹{emi.toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Principal Amount</div>
                  <div className="mt-1 text-lg font-semibold text-gray-900">
                    ₹{principal.toLocaleString()}
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-600">Total Interest</div>
                  <div className="mt-1 text-lg font-semibold text-gray-900">
                    ₹{totalInterest.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">Total Amount Payable</div>
                <div className="mt-1 text-lg font-semibold text-gray-900">
                  ₹{totalAmount.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}