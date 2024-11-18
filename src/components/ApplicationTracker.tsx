import React, { useState } from 'react';
import { ClipboardCheck, Search, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

interface Application {
  id: string;
  type: string;
  amount: number;
  status: 'pending' | 'processing' | 'approved' | 'disbursed';
  date: string;
  progress: number;
}

const mockApplications: Application[] = [
  {
    id: 'LA-2024-001',
    type: 'Home Loan',
    amount: 2500000,
    status: 'processing',
    date: '2024-03-15',
    progress: 60,
  },
  {
    id: 'LA-2024-002',
    type: 'Education Loan',
    amount: 800000,
    status: 'approved',
    date: '2024-03-10',
    progress: 90,
  },
  {
    id: 'LA-2024-003',
    type: 'Personal Loan',
    amount: 500000,
    status: 'pending',
    date: '2024-03-18',
    progress: 30,
  },
];

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  processing: 'bg-blue-100 text-blue-800',
  approved: 'bg-green-100 text-green-800',
  disbursed: 'bg-purple-100 text-purple-800',
};

const statusIcons = {
  pending: Clock,
  processing: AlertCircle,
  approved: CheckCircle2,
  disbursed: CheckCircle2,
};

export default function ApplicationTracker() {
  const [searchId, setSearchId] = useState('');
  const [applications, setApplications] = useState<Application[]>(mockApplications);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchId) {
      setApplications(mockApplications);
      return;
    }
    const filtered = mockApplications.filter(app => 
      app.id.toLowerCase().includes(searchId.toLowerCase())
    );
    setApplications(filtered);
  };

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <ClipboardCheck className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Track Your Application
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Monitor your loan application status in real-time
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <form onSubmit={handleSearch} className="flex gap-4 mb-8">
            <div className="flex-1">
              <label htmlFor="search" className="sr-only">
                Search by Application ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter Application ID"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
            >
              Search
            </button>
          </form>

          <div className="space-y-6">
            {applications.map((application) => {
              const StatusIcon = statusIcons[application.status];
              return (
                <div
                  key={application.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {application.type}
                        </h3>
                        <p className="text-sm text-gray-500">
                          ID: {application.id}
                        </p>
                      </div>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                          statusColors[application.status]
                        }`}
                      >
                        <StatusIcon className="h-4 w-4 mr-1" />
                        {application.status.charAt(0).toUpperCase() +
                          application.status.slice(1)}
                      </span>
                    </div>

                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{application.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 rounded-full h-2"
                          style={{ width: `${application.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="text-gray-500">Amount:</span>
                        <span className="ml-2 font-semibold">
                          ₹{application.amount.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500">Applied on:</span>
                        <span className="ml-2 font-semibold">
                          {new Date(application.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 px-6 py-4">
                    <div className="flex justify-between items-center">
                      <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                        View Details
                      </button>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                        Contact Support
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}