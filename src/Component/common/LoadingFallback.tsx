import React from 'react';

const LoadingFallback: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-[#0f0715] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Animated loading spinner */}
        <div className="w-12 h-12 border-4 border-[#8750f7] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400 text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingFallback;
