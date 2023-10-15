interface Props {
  className?: string;
  style?: any;
  onClick?: () => void;
  to: string;
}
export const PrevArrow: React.FC<Props> = ({
  className,
  style,
  onClick,
  to,
}) => {
  return (
    <div
      className={`${className} slick-arrow slick-prev z-10 w-12 md:w-16 lg:w-28 h-full pt-10 !flex items-center justify-center right-0 left-auto before:text-[20px] lg:before:text-[30px] before:content-[''] hover:bg-border/20 transition-colors drop-shadow-lg`}
      style={{ ...style }}
      onClick={onClick}
      aria-label={to}
    />
  );
};

export const NextArrow: React.FC<Props> = ({
  className,
  style,
  onClick,
  to,
}) => {
  return (
    <div
      className={`${className} slick-arrow slick-next z-10 w-12 md:w-16 lg:w-28 h-full pt-10 !flex items-center justify-center right-auto left-0 hover:bg-border/20 transition-colors drop-shadow-lg before:content-['']`}
      style={{ ...style }}
      onClick={onClick}
      aria-label={to}
    />
  );
};
