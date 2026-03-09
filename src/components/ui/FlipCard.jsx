import { useState } from 'react';

export default function FlipCard({ children, front, back, isDarkMode = false }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-96 cursor-pointer perspective group"
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        perspective: '1000px',
      }}
    >
      <div
        className="relative w-full h-full transition-transform duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front of card */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
          }}
        >
          {front ? (
            front
          ) : (
            children && Array.isArray(children) ? children[0] : children
          )}
          
          {/* Flip Indicator */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`flex items-center gap-2 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium ${
              isDarkMode 
                ? 'bg-slate-900/70 text-indigo-300' 
                : 'bg-white/80 text-blue-600'
            }`}>
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Flip
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute w-full h-full rounded-2xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {back ? (
            back
          ) : (
            children && Array.isArray(children) ? children[1] : null
          )}
          
          {/* Flip Indicator - Back Side */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className={`flex items-center gap-2 backdrop-blur-sm px-3 py-2 rounded-lg text-sm font-medium ${
              isDarkMode 
                ? 'bg-slate-900/70 text-indigo-300' 
                : 'bg-white/80 text-blue-600'
            }`} style={{ transform: 'scaleX(-1)' }}>
              <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8v12m0 0l4-4m-4 4l-4-4" />
              </svg>
              Flip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
