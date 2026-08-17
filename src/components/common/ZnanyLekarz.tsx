import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ZnanyLekarzIcon } from '@/components/icons/ZnanyLekarzIcon';
import { cn } from '@/lib/utils';

export interface ZnanyLekarzProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text?: React.ReactNode;
  iconSize?: number;
  showExternalIcon?: boolean;
  externalIconSize?: number;
  iconClassName?: string;
  variant?: 'default' | 'pill' | 'outline' | 'button' | 'subtle' | 'card';
}

const ZNANY_LEKARZ_URL = 'https://www.znanylekarz.pl/kamila-helta/psychoterapeuta/chojnice';

export const ZnanyLekarz: React.FC<ZnanyLekarzProps> = ({
  text = 'ZnanyLekarz',
  href = ZNANY_LEKARZ_URL,
  iconSize = 18,
  showExternalIcon = false,
  externalIconSize = 13,
  iconClassName = '',
  variant = 'default',
  className = '',
  title = 'Zobacz profil na ZnanyLekarz.pl',
  target = '_blank',
  rel = 'noopener noreferrer',
  children,
  ...props
}) => {
  const content = text ?? children;

  const variantStyles = {
    default:
      'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-50 hover:bg-teal-100 border border-teal-200/80 text-teal-800 text-xs font-semibold transition-all hover:shadow-xs group',
    pill:
      'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 hover:bg-teal-100 border border-teal-200 text-teal-800 text-sm font-semibold transition-all shadow-xs hover:shadow group',
    outline:
      'inline-flex items-center justify-center gap-2 border border-teal-200 bg-teal-50/60 hover:bg-teal-100/80 text-teal-800 font-semibold py-2.5 px-4 rounded-xl text-sm transition-colors group',
    button:
      'inline-flex items-center justify-center gap-2.5 bg-[#00B39B] hover:bg-[#009B86] text-white font-bold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 group',
    subtle:
      'inline-flex items-center gap-1.5 text-teal-700 hover:text-teal-900 transition-colors font-medium text-sm group',
    card:
      'flex items-center justify-between p-4 rounded-2xl border border-teal-200/80 bg-teal-50/50 hover:bg-teal-50 transition-all group hover:border-teal-300 hover:shadow-sm',
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      title={title}
      className={cn(variant ? variantStyles[variant] : '', className)}
      {...props}
    >
      <ZnanyLekarzIcon
        size={iconSize}
        className={cn('shrink-0 transition-transform group-hover:scale-105', iconClassName)}
      />
      {content && <span>{content}</span>}
      {showExternalIcon && (
        <ExternalLink
          size={externalIconSize}
          className="text-teal-600 opacity-75 group-hover:opacity-100 transition-opacity shrink-0 ml-0.5"
        />
      )}
    </a>
  );
};

export const ZnanyLekarzButton = ZnanyLekarz;
export default ZnanyLekarz;
