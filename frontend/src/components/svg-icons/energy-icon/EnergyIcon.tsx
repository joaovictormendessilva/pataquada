import { IconProps } from "./EnergyIcon.types";

export function EnergyIcon({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="energyGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE27A" />
          <stop offset="100%" stopColor="#FF9F1C" />
        </linearGradient>
      </defs>

      <path
        d="M70 10L26 72H54L42 118L102 46H72L70 10Z"
        fill="url(#energyGrad)"
        stroke="#6B3D12"
        strokeWidth="8"
        strokeLinejoin="round"
      />
    </svg>
  );
}
