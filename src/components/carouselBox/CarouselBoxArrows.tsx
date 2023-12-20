type Props = {
  className?: string;
  style?: any;
  onClick?: () => void;
  to: string;
};
export const NextArrow = ({ className, style, onClick, to }: Props) => {
  return (
    <div
      className={`${className} z-10 w-14 h-full !flex items-center justify-center right-auto -left-2 before:text-[20px] lg:before:text-[40px] before:content-[''] hover:bg-palette-card/20 drop-shadow-xl`}
      style={{ ...style }}
      onClick={onClick}
      aria-label={to}
    />
  );
};
export const PrevArrow = ({ className, style, onClick, to }: Props) => {
  return (
    <div
      className={`${className} z-10 w-14 h-full !flex items-center justify-center -right-5 left-auto before:text-[20px] lg:before:text-[40px] before:content-[''] hover:bg-palette-card/20 drop-shadow-lg`}
      style={{ ...style }}
      onClick={onClick}
      aria-label={to}
    />
  );
};
