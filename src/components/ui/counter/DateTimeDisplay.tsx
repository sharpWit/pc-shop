type Props = {
  value: number;
  type: string;
  isDanger: boolean;
};
const DateTimeDisplay: React.FC<Props> = ({ value, type, isDanger }) => {
  const dateTime = new Intl.NumberFormat("fa-IR").format(value);
  return (
    <div
      className={`flex flex-col items-center mx-1 sm:mx-2 py-2 text-xs sm:text-sm md:text-base font-main w-12 sm:w-20 backdrop-filter backdrop-blur-[8px] bg-popover/40 dark:bg-white/40 text-popover dark:text-white shadow-lg rounded-lg ${
        isDanger ? "text-rose-600" : ""
      }`}
    >
      <p>{dateTime}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
