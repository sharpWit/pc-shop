"use client";

// Cores //
import { SetStateAction, useState } from "react";

// Components //
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};
const starContainerStyle = {
  display: "flex",
};

type StarRating = {
  maxRating?: number;
  defaultValue?: number;
  color?: string;
  size?: number;
  messages?: [];
  className?: string;
  onSetRating: Dispatch<SetStateAction<string>>;
};
type Dispatch<A> = (value: A) => void;

function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className,
  messages = [],
  defaultValue = 0,
  onSetRating,
}: StarRating) {
  const [rating, setRating] = useState(defaultValue);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating: any) {
    setRating(rating);
    onSetRating(rating);
  }

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };
  return (
    <div style={containerStyle} className={className}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            onRate={() => handleRating(i + 1)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      <p style={textStyle}>
        {messages.length === maxRating
          ? messages[tempRating ? tempRating - 1 : rating - 1]
          : tempRating || rating || ""}
      </p>
    </div>
  );
}

export default StarRating;
