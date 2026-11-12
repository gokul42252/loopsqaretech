import { Link } from "react-router";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "image";
  showTagline?: boolean;
}

export function Logo({
  className = "",
  variant = "full",
  showTagline = true,
}: LogoProps) {
  // If variant is "image", display the high-res uploaded logo image inside a clean badge
  if (variant === "image") {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/images/logo.jpg"
          alt="Loopsquare Tech - Ideas Into Intelligent Solutions"
          className="h-9 sm:h-11 w-auto object-contain rounded-md"
        />
      </div>
    );
  }

  // Vector Logo that adapts dynamically to dark/light backgrounds
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      {/* Dynamic Ribbon Square Loop Emblem */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sqGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
            <linearGradient id="sqGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#c026d3" />
              <stop offset="60%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="sqGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#00d2ff" />
            </linearGradient>

            {/* Mask to create true transparent hollow center */}
            <mask id="loopHole">
              <rect width="100" height="100" fill="white" />
              <rect x="30" y="30" width="40" height="40" rx="10" fill="black" />
            </mask>
          </defs>

          {/* Group masked with hollow center */}
          <g mask="url(#loopHole)">
            {/* Outer continuous curved ribbon */}
            <rect
              x="10"
              y="10"
              width="80"
              height="80"
              rx="22"
              fill="url(#sqGrad1)"
            />
            {/* Upper-left loop accent */}
            <path
              d="M 10 36 C 10 22 22 10 36 10 L 64 10 C 74 10 82 16 86 24 C 78 20 68 22 62 22 L 32 22 C 26 22 22 26 22 32 L 22 62 C 22 68 20 78 24 86 C 16 82 10 74 10 64 Z"
              fill="url(#sqGrad2)"
              opacity="0.95"
            />
            {/* Bottom-right loop fold */}
            <path
              d="M 90 64 C 90 78 78 90 64 90 L 36 90 C 26 90 18 84 14 76 C 22 80 32 78 38 78 L 68 78 C 74 78 78 74 78 68 L 78 38 C 78 32 80 22 76 14 C 84 18 90 26 90 36 Z"
              fill="url(#sqGrad3)"
              opacity="0.9"
            />
          </g>
        </svg>
      </div>

      {variant !== "icon" && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 leading-none">
            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
              Loopsquare
            </span>
            <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Tech
            </span>
          </div>

          {showTagline && (
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-[1px] w-2 bg-gradient-to-r from-transparent to-blue-500 hidden sm:inline-block"></span>
              <span className="text-[9.5px] sm:text-[10.5px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase italic">
                Ideas Into Intelligent Solutions
              </span>
              <span className="h-[1px] w-2 bg-gradient-to-l from-transparent to-purple-500 hidden sm:inline-block"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
