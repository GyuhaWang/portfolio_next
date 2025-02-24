"use client";

import { useEffect } from "react";
import useControlledScroll from "@/hook/useScrollTo";
import ScrollRouter from "./(components)/scroll_router";
import ContentPage from "./(components)/content_page";
import MiniMap from "./(components)/mini_map";

export default function Page() {
  const { scrollToCenter } = useControlledScroll();

  useEffect(() => {
    scrollToCenter();
  }, []);

  return (
    <div className="w-[300vw] h-[300vh] grid grid-cols-3 grid-rows-3">
      <div className="z-20 fixed bottom-10 right-10 h-[100px] w-[100px]">
        <MiniMap />
      </div>
      <ScrollRouter />
      {Array.from({ length: 9 }, (_, i) => (
        <ContentPage key={i} index={i} />
      ))}
    </div>
  );
}
