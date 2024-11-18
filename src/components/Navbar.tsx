import React from 'react';
import { Menu, X, Wallet } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Wallet className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">RnaStan</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/loans" className="text-gray-700 hover:text-blue-600">Loans</a>
            <a href="/compare" className="text-gray-700 hover:text-blue-600">Compare</a>
            <a href="/calculator" className="text-gray-700 hover:text-blue-600">Calculator</a>
            <a href="/track" className="text-gray-700 hover:text-blue-600">Track Application</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Home</a>
            <a href="/loans" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Loans</a>
            <a href="/compare" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Compare</a>
            <a href="/calculator" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Calculator</a>
            <a href="/track" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Track Application</a>
            <button className="w-full mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Apply Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}