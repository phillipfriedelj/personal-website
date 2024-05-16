import { IconLanguage, IconWorld } from "@tabler/icons-react";
import line from "../assets/diag-line.png";

export default function TableCardTitle({ title, children }) {
  return (
    <div className="border-white w-full border-b flex justify-between px-2 py-1">
      <p className="text-white text-medium flex-grow">{title}</p>
      <div className="flex justify-end align-middle space-x-2">
        <svg className="h-3 w-3 self-center" viewBox="0 0 10 10">
          <path
            d="M 10 0 L 0 10"
            stroke="white"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
        {children}
      </div>
    </div>
  );
}
