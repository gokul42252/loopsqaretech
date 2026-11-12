import { Link } from "react-router";

interface LogoProps {
  className?: string;
  variant?: "full" | "icon" | "image";
  showTagline?: boolean;
  theme?: "light" | "dark" | "auto";
}

export function Logo({
  className = "",
  variant = "full",
  showTagline = true,
  theme = "auto",
}: LogoProps) {
  // If variant is "image", display the high-res uploaded logo image
  if (variant === "image") {
    return (
      <div className={`flex items-center ${className}`}>
        <img
          src="/images/logo.jpg"
          alt="Loopsquare Tech - Ideas Into Intelligent Solutions"
          className="h-10 sm:h-12 w-auto object-contain rounded"
        />
      </div>
    );
  }

  // Vector Logo that adapts dynamically to dark/light backgrounds
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dynamic Ribbon Square Emblem */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
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
          </defs>

          {/* Rounded loop square path */}
          {/* Outer continuous curved ribbon */}
          <rect
            x="8"
            y="8"
            width="84"
            height="84"
            rx="24"
            stroke="url(#sqGrad1)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          {/* Inner cutout illusion */}
          <rect
            x="24"
            y="24"
            width="52"
            height="52"
            rx="12"
            fill="currentColor"
            className="text-white dark:text-gray-900"
          />
          {/* Fold / loop overlap accents */}
          <path
            d="M 8 36 C 8 20 20 8 36 8 L 64 8 C 76 8 86 16 90 26 C 82 22 72 24 64 24 L 32 24 C 28 24 24 28 24 32 L 24 64 C 24 72 22 82 26 90 C 16 86 8 76 8 64 Z"
            fill="url(#sqGrad2)"
            opacity="0.95"
          />
          <path
            d="M 92 64 C 92 80 80 92 64 92 L 36 92 C 24 92 14 84 10 74 C 18 78 28 76 36 76 L 68 76 C 72 76 76 72 76 68 L 76 36 C 76 28 78 18 74 10 C 84 14 92 24 92 36 Z"
            fill="url(#sqGrad3)"
            opacity="0.85"
          />
        </svg>
      </div>

      {variant !== "icon" && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1 leading-tight">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-gray-950 dark:text-white">
              Loopsquare
            </span>
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Tech
            </span>
          </div>

          {showTagline && (
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="h-[1px] w-2.5 bg-gradient-to-r from-transparent to-blue-500 hidden sm:inline-block"></span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-gray-500 dark:text-gray-400 uppercase italic">
                Ideas Into Intelligent Solutions
              </span>
              <span className="h-[1px] w-2.5 bg-gradient-to-l from-transparent to-purple-500 hidden sm:inline-block"></span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

