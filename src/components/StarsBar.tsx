import { Star } from "lucide-react";
import React, { useState } from "react";

interface StarsBarProps {
  rating: number;
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

const RenderStars: React.FC<StarsBarProps> = ({ rating, interactive = false, onRate }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const displayRating = hovered !== null ? hovered : rating;

  return (
    <div className="flex space-x-1 group">
      {[1, 2, 3, 4, 5].map((star) => {
        const isActive = star <= displayRating;
        return (
          <Star
            key={star}
            className={`
              w-6 h-6 transition-all duration-150
              ${isActive ? "text-yellow-400 fill-yellow-400" : "text-white/30"}
              ${interactive ? "cursor-pointer group-hover:scale-110 hover:text-yellow-300" : ""}
              ${rating === 0 && hovered === null ? "animate-pop" : ""}
            `}
            onClick={() => interactive && onRate?.(star)}
            onMouseEnter={() => interactive && setHovered(star)}
            onMouseLeave={() => interactive && setHovered(null)}
          />
        );
      })}
    </div>
  );
};

export default RenderStars;
