import { Star } from "lucide-react";

export default function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-primary text-primary"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
