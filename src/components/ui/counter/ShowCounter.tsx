// Components //
import DateTimeDisplay from "./DateTimeDisplay";

interface Props {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
const ShowCounter: React.FC<Props> = ({ days, hours, minutes, seconds }) => {
  return (
    <div className=" flex flex-row-reverse items-center absolute top-[60%] lg:top-[70%] xl:top-3/4">
      <DateTimeDisplay value={days} type={"روز"} isDanger={days <= 3} />
      <p className="font-bold font-main text-lg text-input">:</p>
      <DateTimeDisplay value={hours} type={"ساعت"} isDanger={false} />
      <p className="font-bold font-main text-lg text-input">:</p>
      <DateTimeDisplay value={minutes} type={"دقیقه"} isDanger={false} />
      <p className="font-bold font-main text-lg text-input">:</p>
      <DateTimeDisplay value={seconds} type={"ثانیه"} isDanger={false} />
    </div>
  );
};

export default ShowCounter;
