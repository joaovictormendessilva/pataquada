import { IconProps } from "./CoinIcon.types";

export function CoinIcon({ size = 48 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="coinGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFE27A" />
          <stop offset="100%" stopColor="#FF9F1C" />
        </linearGradient>
      </defs>

      <circle cx="64" cy="64" r="48" fill="url(#coinGrad)" stroke="#6B3D12" strokeWidth="8" />

      <circle cx="64" cy="64" r="34" stroke="#FFD978" strokeWidth="6" opacity="0.8" />

      <path d="M64 42V86" stroke="#6B3D12" strokeWidth="8" strokeLinecap="round" />

      <path
        d="M80 50C80 44 74 40 64 40C54 40 48 45 48 52C48 60 55 63 64 64C73 65 80 68 80 76C80 83 73 88 64 88C55 88 48 84 48 78"
        stroke="#6B3D12"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
}
