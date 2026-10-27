import React from "react";

/**
 * LoadingSpinner — a simple accessible loading indicator.
 *
 * Props:
 *   size    — "sm" | "md" | "lg"  (default: "md")
 *   label   — screen-reader text   (default: "Loading…")
 *   color   — any Tailwind text-color class (default: "text-[#6B3AC2]")
 */
const sizeMap = {
  sm: "h-5 w-5 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-4",
};

const LoadingSpinner = ({
  size = "md",
  label = "Loading…",
  color = "text-[#6B3AC2]",
}) => {
  const dims = sizeMap[size] || sizeMap.md;

  return (
    <div
      className="flex items-center justify-center py-10"
      role="status"
      aria-label={label}
    >
      <div
        className={`${dims} ${color} animate-spin rounded-full border-current border-t-transparent`}
      />
      <span className="sr-only">{label}</span>
    </div>
  );
};

export default LoadingSpinner;
