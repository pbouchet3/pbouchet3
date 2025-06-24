import React from 'react';

export default function BackgroundEffects() {
  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-400/20 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
      
      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
    </>
  );
}