import useIndexStore from "@/store/design/router_store";
import { useCallback } from "react";
import ScrollSection from "./scroll_section";

export default function ScrollRouter() {
  const { index } = useIndexStore();

  const calculateAvaliableRouter = useCallback(() => {
    const patterns = [
      [false, false, false, false, false, true, false, true, true],
      [false, false, false, true, false, true, true, true, true],
      [false, false, false, true, false, false, true, true, false],
      [false, true, true, false, false, true, false, true, true],
      [true, true, true, true, false, true, true, true, true],
      [true, true, false, true, false, false, true, true, false],
      [false, true, true, false, false, true, false, false, false],
      [true, true, true, true, false, true, false, false, false],
      [true, true, false, true, false, false, false, false, false],
    ];

    return patterns[index];
  }, [index]);

  return (
    <div className="z-10 fixed h-screen w-screen grid grid-cols-3 grid-rows-3">
      {calculateAvaliableRouter().map((v, i) => (
        <div key={"scroll" + i}>
          <ScrollSection index={i} avaliable={v as boolean} />
        </div>
      ))}
    </div>
  );
}
