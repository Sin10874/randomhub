'use client';

import { useState } from 'react';
import Image from 'next/image';
import { animals, categories } from '../data/animals';

export default function TestAnimalImages() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [imageStatus, setImageStatus] = useState<{ [key: number]: 'loading' | 'loaded' | 'error' }>({});

  // Filter animals by category
  const filteredAnimals = animals.filter(
    animal => selectedCategory === 'all' || animal.category === selectedCategory
  );

  // Count animals by status
  const loadedCount = Object.values(imageStatus).filter(s => s === 'loaded').length;
  const errorCount = Object.values(imageStatus).filter(s => s === 'error').length;

  // Helper function to convert animal name to image path
  const getImagePath = (name: string, category: string) => {
    const fileName = name
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/,/g, '');
    return `/images/animals/${category}/${fileName}.jpg`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Animal Images Test Page
          </h1>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-gray-600">Total Animals</div>
              <div className="text-2xl font-bold text-blue-600">{animals.length}</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-sm text-gray-600">Images Loaded</div>
              <div className="text-2xl font-bold text-green-600">{loadedCount}</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-sm text-gray-600">Images Missing</div>
              <div className="text-2xl font-bold text-red-600">{errorCount}</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-sm text-gray-600">Coverage</div>
              <div className="text-2xl font-bold text-purple-600">
                {animals.length > 0 ? Math.round((loadedCount / animals.length) * 100) : 0}%
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === cat.value
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.label}
                {cat.value !== 'all' && (
                  <span className="ml-2 text-sm opacity-75">
                    ({animals.filter(a => a.category === cat.value).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredAnimals.map((animal) => {
            const imagePath = getImagePath(animal.name, animal.category);
            const status = imageStatus[animal.id] || 'loading';

            return (
              <div
                key={animal.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={imagePath}
                    alt={animal.name}
                    fill
                    className="object-cover"
                    onLoad={() => {
                      setImageStatus(prev => ({ ...prev, [animal.id]: 'loaded' }));
                    }}
                    onError={() => {
                      setImageStatus(prev => ({ ...prev, [animal.id]: 'error' }));
                    }}
                  />
                  {status === 'error' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-red-50">
                      <div className="text-center p-4">
                        <div className="text-3xl mb-2">❌</div>
                        <div className="text-xs text-red-600">Missing</div>
                      </div>
                    </div>
                  )}
                  {status === 'loading' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <div className="text-2xl animate-pulse">⏳</div>
                    </div>
                  )}
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-gray-800 text-sm mb-1">
                    {animal.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 capitalize">
                      {animal.category}
                    </span>
                    <span className={`text-xs px-2 py-1 rounded ${
                      status === 'loaded' ? 'bg-green-100 text-green-700' :
                      status === 'error' ? 'bg-red-100 text-red-700' :
                      'bg-gray-100 text-gray-500'
                    }`}>
                      {status === 'loaded' ? '✓' : status === 'error' ? '✗' : '...'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1 font-mono truncate">
                    {imagePath}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Category Summary */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Category Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.slice(1).map((cat) => {
              const categoryAnimals = animals.filter(a => a.category === cat.value);
              const categoryLoaded = categoryAnimals.filter(
                a => imageStatus[a.id] === 'loaded'
              ).length;
              const categoryTotal = categoryAnimals.length;
              const percentage = categoryTotal > 0
                ? Math.round((categoryLoaded / categoryTotal) * 100)
                : 0;

              return (
                <div key={cat.value} className="border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-700 mb-2">{cat.label}</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total:</span>
                      <span className="font-medium">{categoryTotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Loaded:</span>
                      <span className="font-medium text-green-600">{categoryLoaded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Missing:</span>
                      <span className="font-medium text-red-600">
                        {categoryTotal - categoryLoaded}
                      </span>
                    </div>
                    <div className="mt-2 pt-2 border-t">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Coverage:</span>
                        <span className={`font-bold ${
                          percentage === 100 ? 'text-green-600' :
                          percentage >= 75 ? 'text-blue-600' :
                          percentage >= 50 ? 'text-yellow-600' :
                          'text-red-600'
                        }`}>
                          {percentage}%
                        </span>
                      </div>
                      <div className="mt-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            percentage === 100 ? 'bg-green-500' :
                            percentage >= 75 ? 'bg-blue-500' :
                            percentage >= 50 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
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
