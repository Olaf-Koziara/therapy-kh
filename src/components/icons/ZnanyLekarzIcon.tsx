import React from 'react';

interface ZnanyLekarzIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ZnanyLekarzIcon: React.FC<ZnanyLekarzIconProps> = ({ size = 20, className = '', ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect width="24" height="24" rx="6" fill="#00B39B" />
      <path
        d="M6.5 12.5L10 16L17.5 8.5"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 8.5L10 12"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ZnanyLekarzIcon;
