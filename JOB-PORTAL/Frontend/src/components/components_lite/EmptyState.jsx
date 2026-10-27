import React from "react";

/**
 * EmptyState — shown when a list has no items to display.
 *
 * Props:
 *   icon     — optional emoji or JSX icon (default: 📭)
 *   title    — main heading text
 *   message  — supporting description
 *   action   — optional { label: string, onClick: fn } for a CTA button
 */
const EmptyState = ({
  icon = "📭",
  title = "Nothing here yet",
  message = "There are no items to display right now.",
  action,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-6xl mb-4 select-none" aria-hidden="true">
        {icon}
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-500 max-w-sm mb-6">{message}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="px-5 py-2 bg-[#6B3AC2] text-white rounded-lg font-medium hover:bg-[#5a30a8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B3AC2] focus:ring-offset-2"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
