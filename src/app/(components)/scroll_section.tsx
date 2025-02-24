"use client";
import useControlledScroll from "@/hook/useScrollTo";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import throttle from "lodash.throttle";

export default function ScrollSection({
  index,
  avaliable,
}: {
  index: number;
  avaliable: boolean;
}) {
  const {
    scrollToRight,
    scrollToLeft,
    scrollToUp,
    scrollToDown,
    scrollToUpLeft,
    scrollToUpRight,
    scrollToDownLeft,
    scrollToDownRight,
  } = useControlledScroll();
  let rotateClass = `rotate-0`;

  switch (index) {
    case 0:
      rotateClass = "-rotate-45 top-0 left-0";
      break;
    case 1:
      rotateClass = "rotate-0 top-0";
      break;
    case 2:
      rotateClass = "rotate-45 top-0 right-0";
      break;
    case 3:
      rotateClass = "-rotate-90 left-0";
      break;
    case 5:
      rotateClass = "rotate-90 right-0";
      break;
    case 6:
      rotateClass = "-rotate-[135deg] bottom-0 left-0";
      break;
    case 7:
      rotateClass = "rotate-180 bottom-0";
      break;
    case 8:
      rotateClass = "rotate-[135deg] bottom-0 right-0";
      break;
  }

  const handleClick = throttle((clickedIndex: number) => {
    switch (clickedIndex) {
      case 0:
        scrollToUpLeft();
        break;
      case 1:
        scrollToUp();
        break;
      case 2:
        scrollToUpRight();
        break;
      case 3:
        scrollToLeft();
        break;
      case 5:
        scrollToRight();
        break;
      case 6:
        scrollToDownLeft();
        break;
      case 7:
        scrollToDown();
        break;
      case 8:
        scrollToDownRight();
        break;
    }
  }, 1000);

  return (
    <div className=" h-full w-full p-8">
      {index != 4 && avaliable && (
        <button
          onClick={() => handleClick(index)}
          className="relative h-full w-full flex items-center justify-center  
 opacity-20 transition duration-1000 hover:opacity-100
                  group-hover:animate-scale-on-hover group"
        >
          <div className={`absolute ${rotateClass}`}>
            <KeyboardDoubleArrowUpIcon color="action" />
            <p className="invisible group-hover:visible text-xs text-gray-300">
              click
            </p>
          </div>
        </button>
      )}
    </div>
  );
}
