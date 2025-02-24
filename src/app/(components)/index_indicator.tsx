"use client";

import useControlledScroll from "@/hook/useScrollTo";

export default function IndexIndicator({
  index,
  icon,
  title,
  blur = false,
}: {
  index: number;
  icon: React.ReactNode;
  title: string;
  blur: boolean;
}) {
  const { scrollToIndex } = useControlledScroll();

  let position = "top-0 left-0";

  switch (index) {
    case 0:
      position = " top-0 left-0";
      break;
    case 1:
      position = " top-0";
      break;
    case 2:
      position = " top-0 right-0";
      break;
    case 3:
      position = " left-0";
      break;
    case 4:
      position = "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]";
      break;
    case 5:
      position = "right-0";
      break;
    case 6:
      position = "bottom-0 left-0";
      break;
    case 7:
      position = " bottom-0";
      break;
    case 8:
      position = "bottom-0 right-0";
      break;
  }

  return (
    <button
      onClick={() => scrollToIndex(index)}
      className={`absolute ${position} ${
        blur ? "opacity-50" : "opacity-100"
      } }`}
    >
      <div className="flex flex-col items-center justify-center ">
        {icon}
        <p className="text-[6px] font-black">{title}</p>
      </div>
    </button>
  );
}
