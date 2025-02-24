import React from "react";

export default function FlipBox({
  title,
  contents,
}: {
  title: String;
  contents: string[];
}) {
  return (
    <div className="fliPBox">
      <div className="flipFront">
        <div id="front_box">
          <p className="text-white font-black text-xl uppercase">{title}</p>
        </div>
      </div>
      <div className="flipBack">
        <div id="back_box">
          <ul className="list-inside list-disc text-lg font-black">
            {contents.map((v, index) => (
              <li key={index}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
