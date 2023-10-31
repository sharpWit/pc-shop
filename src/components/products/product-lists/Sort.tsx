// Cores //
import { ChangeEvent } from "react";

// Icons //
import { ArrowDownWideNarrow } from "lucide-react";

// Constants //
import { radioBtnValue } from "@/constants/sortRadioInput";

interface Props {
  selectedBtn: string;
  onChangeSelectedBtn: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Sort: React.FC<Props> = ({
  selectedBtn: selectedRadioBtn,
  onChangeSelectedBtn,
}) => {
  const isRadioSelected = (value: string): boolean =>
    value === selectedRadioBtn ? true : false;

  return (
    <div className="w-full my-4 px-4 pb-2 flex flex-wrap border-b-2 border-border">
      <div className="flex items-center">
        <div className="flex items-center">
          <ArrowDownWideNarrow style={{ fontSize: "1.5em" }} />
        </div>
        <h5 className="font-titles mr-1">مرتب‌سازی:</h5>
      </div>

      <div className="flex flex-wrap items-center">
        {radioBtnValue.map((radioInput) => {
          return (
            <div key={radioInput} className="px-1 md:px-2 mx-2 my-1 sm:my-0">
              <label
                htmlFor={radioInput}
                className={`text-sm font-titles cursor-pointer ${
                  radioInput === selectedRadioBtn
                    ? "text-secondary-foreground font-semibold"
                    : "text-muted-foreground/70 hover:text-muted-foreground transition-colors"
                }`}
              >
                {[radioInput]}
              </label>
              <input
                type="radio"
                className="hidden"
                id={radioInput}
                value={selectedRadioBtn}
                name="sortProduct"
                checked={isRadioSelected(radioInput)}
                onChange={onChangeSelectedBtn}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sort;
