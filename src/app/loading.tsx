"use client"
import React from 'react'

const loading = () => {
  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-gray-100">
    <div className="relative">
      {/* Main spinner */}
      <div className="w-16 h-16 border-4 border-[#9599ff] border-t-transparent rounded-full animate-spin"></div>
      
      {/* Pulsing circle */}
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-[#9599ff] rounded-full animate-pulse opacity-30"></div>
      
      {/* Inner rotating dots */}
      <div className="absolute top-0 left-0 w-16 h-16 animate-reverse-spin">
        <div className="w-3 h-3 bg-[#9599ff] rounded-full absolute top-1.5 left-1.5"></div>
        <div className="w-3 h-3 bg-[#9599ff] rounded-full absolute bottom-1.5 right-1.5"></div>
      </div>
      
      {/* Center dot */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#9599ff] rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
    </div>
    
    <style jsx>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes reverse-spin {
        0% { transform: rotate(360deg); }
        100% { transform: rotate(0deg); }
      }
      .animate-spin {
        animation: spin 2s linear infinite;
      }
      .animate-reverse-spin {
        animation: reverse-spin 3s linear infinite;
      }
      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.8; }
      }
    `}</style>
  </div>
  )
}

export default loading
