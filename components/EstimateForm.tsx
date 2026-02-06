'use client';

import { useState } from 'react';
import { Home, UserPlus, CheckCircle, Loader2 } from 'lucide-react';

type FormData = {
  propertyRole: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
};

const initialFormData: FormData = {
  propertyRole: '',
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
};

export default function EstimateForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 10);
    if (digits.length >= 6) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length >= 3) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    }
    return digits;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'phone') {
      formattedValue = formatPhone(value);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleRoleSelect = (role: string) => {
    setFormData(prev => ({ ...prev, propertyRole: role }));
    if (errors.propertyRole) {
      setErrors(prev => ({ ...prev, propertyRole: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.propertyRole) newErrors.propertyRole = 'Please select an option';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="estimate-form" className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-10 text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">You&apos;re All Set!</h2>
              <p className="text-orange-100">
                Your results are being prepared. We&apos;ll be in touch shortly.
              </p>
            </div>
            <div className="p-10">
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="font-semibold text-gray-900 mb-4">Here&apos;s What Happens Next:</p>
                <ul className="space-y-3">
                  {[
                    'We\'ll review your home\'s solar potential',
                    'You\'ll receive your custom savings projection',
                    'A solar expert will reach out to answer any questions',
                    'No pressure — the decision is always yours',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className="text-orange-500 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData(initialFormData);
                }}
                className="mt-6 w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-semibold transition-colors"
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate-form" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-10 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Get My Free Quote</h2>
            <p className="text-orange-100">Answer a few quick questions. Get your custom savings report within 24 hours.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-10 space-y-8">
            {/* Step 1: Property Role */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                1. Are you a homeowner or authorized decision maker? <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => handleRoleSelect('homeowner')}
                  className={`p-5 border-2 rounded-xl text-center transition-all duration-300 ${
                    formData.propertyRole === 'homeowner'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all ${
                    formData.propertyRole === 'homeowner' ? 'bg-orange-500' : 'bg-gray-100'
                  }`}>
                    <Home className={`w-6 h-6 ${formData.propertyRole === 'homeowner' ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <span className="block font-semibold text-gray-900">Homeowner</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleRoleSelect('authorized')}
                  className={`p-5 border-2 rounded-xl text-center transition-all duration-300 ${
                    formData.propertyRole === 'authorized'
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 transition-all ${
                    formData.propertyRole === 'authorized' ? 'bg-orange-500' : 'bg-gray-100'
                  }`}>
                    <UserPlus className={`w-6 h-6 ${formData.propertyRole === 'authorized' ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <span className="block font-semibold text-gray-900">Authorized Decision Maker</span>
                </button>
              </div>
              {errors.propertyRole && (
                <p className="text-red-500 text-sm mt-2">{errors.propertyRole}</p>
              )}
            </div>

            {/* Step 2: Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                2. First and Last Name <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className={`w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors ${
                      errors.firstName ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                    }`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className={`w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors ${
                      errors.lastName ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                    }`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>
              </div>
            </div>

            {/* Step 3: Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                3. Home Address or GPS Coordinates <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main Street, Davenport, FL 33837 or GPS coordinates"
                className={`w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors ${
                  errors.address ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                }`}
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            {/* Step 4: Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                4. Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Step 5: Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">
                5. Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
                className={`w-full px-4 py-3 border-2 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 transition-colors ${
                  errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-orange-500'
                }`}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Checking...
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5" />
                  Get My Free Quote
                </>
              )}
            </button>
            <p className="text-center text-gray-400 text-sm mt-3">No pressure. No obligation. You can say no.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
