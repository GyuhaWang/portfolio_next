import React from "react";
import StarIcon from "@mui/icons-material/Star";

export default function StarRating({ cout }: { cout: number }) {
  return (
    <div className="flex flex-row ">
      {Array.from({ length: cout }).map((_, index) => (
        <StarIcon key={index} sx={{ color: "orange" }} />
      ))}
    </div>
  );
}
