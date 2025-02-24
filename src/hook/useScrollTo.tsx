"use client";

import { useEffect } from "react";

const useControlledScroll = () => {
  useEffect(() => {
    const preventDefault = (e: Event) => e.preventDefault();

    // 스크롤 관련 이벤트 막기
    window.addEventListener("wheel", preventDefault, { passive: false });
    window.addEventListener("touchmove", preventDefault, { passive: false });
    window.addEventListener("keydown", (e) => {
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          "Home",
          "End",
          " ",
          "ArrowRight",
          "ArrowLeft",
        ].includes(e.key)
      ) {
        e.preventDefault();
      }
    });

    return () => {
      window.removeEventListener("wheel", preventDefault);
      window.removeEventListener("touchmove", preventDefault);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    switch (index) {
      case 0:
        scrollTo(0, 0);
        break;
      case 1:
        scrollTo(document.body.scrollWidth / 3, 0);
        break;
      case 2:
        scrollTo((document.body.scrollWidth / 3) * 2, 0);
        break;
      case 3:
        scrollTo(0, document.body.scrollHeight / 3);
        break;
      case 4:
        scrollToCenter();
        break;
      case 5:
        scrollTo(document.body.scrollWidth, document.body.scrollHeight / 3);
        break;
      case 6:
        scrollTo(0, document.body.scrollHeight);
        break;
      case 7:
        scrollTo(document.body.scrollWidth / 3, document.body.scrollHeight);
        break;
      case 8:
        scrollTo(document.body.scrollWidth, document.body.scrollHeight);
        break;
    }
  };

  const scrollTo = (
    x: number,
    y: number,
    behavior: ScrollBehavior = "smooth"
  ) => {
    window.scrollTo({ top: y, left: x, behavior });
  };

  const scrollToCenter = () => {
    const [centerX, centerY] = [
      (document.body.scrollWidth - window.innerWidth) / 2,
      (document.body.scrollHeight - window.innerHeight) / 2,
    ];
    scrollTo(centerX, centerY);
  };

  const scrollToTop = () => scrollTo(0, 0);

  const scrollToBottom = () => scrollTo(0, document.body.scrollHeight);

  const scrollToRight = () => {
    const [currentX, currentY, screenWidth, screenHeight] = [
      window.scrollX,
      window.scrollY,
      document.body.scrollWidth / 3,
      document.body.scrollHeight / 3,
    ];
    const [minX, minY, maxX, maxY] = [
      0,
      0,
      document.body.scrollWidth,
      document.body.scrollHeight,
    ];

    const moveX =
      currentX + screenWidth >= maxX ? maxX : currentX + screenWidth;

    scrollTo(moveX, currentY);
  };
  const scrollToLeft = () => {
    const [currentX, currentY, screenWidth, screenHeight] = [
      window.scrollX,
      window.scrollY,
      document.body.scrollWidth / 3,
      document.body.scrollHeight / 3,
    ];
    const [minX, minY, maxX, maxY] = [
      0,
      0,
      document.body.scrollWidth,
      document.body.scrollHeight,
    ];

    const moveX = currentX - screenWidth <= 0 ? 0 : currentX - screenWidth;

    scrollTo(moveX, currentY);
  };
  const scrollToUp = () => {
    const [currentX, currentY, screenWidth, screenHeight] = [
      window.scrollX,
      window.scrollY,
      document.body.scrollWidth / 3,
      document.body.scrollHeight / 3,
    ];
    const [minX, minY, maxX, maxY] = [
      0,
      0,
      document.body.scrollWidth,
      document.body.scrollHeight,
    ];

    const moveY = currentY - screenHeight <= 0 ? 0 : currentY - screenHeight;

    scrollTo(currentX, moveY);
  };
  const scrollToDown = () => {
    const [currentX, currentY, screenWidth, screenHeight] = [
      window.scrollX,
      window.scrollY,
      document.body.scrollWidth / 3,
      document.body.scrollHeight / 3,
    ];
    const [minX, minY, maxX, maxY] = [
      0,
      0,
      document.body.scrollWidth,
      document.body.scrollHeight,
    ];

    const moveY =
      currentY + screenHeight >= maxY ? maxY : currentY + screenHeight;

    scrollTo(currentX, moveY);
  };

  const scrollToUpRight = () => {
    const [currentX, currentY, screenWidth, screenHeight] = [
      window.scrollX,
      window.scrollY,
      document.body.scrollWidth / 3,
      document.body.scrollHeight / 3,
    ];
    const [minX, minY, maxX, maxY] = [
      0,
      0,
      document.body.scrollWidth,
      document.body.scrollHeight,
    ];

    const moveY = currentY - screenHeight <= 0 ? 0 : currentY - screenHeight;
    const moveX =
      currentX + screenWidth >= maxX ? maxX : currentX + screenWidth;

    scrollTo(moveX, moveY);
  };
  const scrollToUpLeft = () => {
    const [currentX, currentY, screenWidth, screenHeight] = [
      window.scrollX,
      window.scrollY,
      document.body.scrollWidth / 3,
      document.body.scrollHeight / 3,
    ];
    const [minX, minY, maxX, maxY] = [
      0,
      0,
      document.body.scrollWidth,
      document.body.scrollHeight,
    ];

    const moveY = currentY - screenHeight <= 0 ? 0 : currentY - screenHeight;
    const moveX = currentX - screenWidth <= 0 ? 0 : currentX - screenWidth;

    scrollTo(moveX, moveY);
  };
  const scrollToDownRight = () => {
    const [currentX, currentY, screenWidth, screenHeight] = [
      window.scrollX,
      window.scrollY,
      document.body.scrollWidth / 3,
      document.body.scrollHeight / 3,
    ];
    const [minX, minY, maxX, maxY] = [
      0,
      0,
      document.body.scrollWidth,
      document.body.scrollHeight,
    ];

    const moveY =
      currentY + screenHeight >= maxY ? maxY : currentY + screenHeight;
    const moveX =
      currentX + screenWidth >= minX ? maxX : currentX + screenWidth;

    scrollTo(moveX, moveY);
  };
  const scrollToDownLeft = () => {
    const [currentX, currentY, screenWidth, screenHeight] = [
      window.scrollX,
      window.scrollY,
      document.body.scrollWidth / 3,
      document.body.scrollHeight / 3,
    ];
    const [minX, minY, maxX, maxY] = [
      0,
      0,
      document.body.scrollWidth,
      document.body.scrollHeight,
    ];

    const moveY =
      currentY + screenHeight >= maxY ? maxY : currentY + screenHeight;
    const moveX = currentX - screenWidth <= 0 ? 0 : currentX - screenWidth;

    scrollTo(moveX, moveY);
  };

  const useScrollTo = () => {
    const scrollTo = (
      x: number,
      y: number,
      behavior: ScrollBehavior = "smooth"
    ) => {
      if (typeof window !== "undefined") {
        window.scrollTo({ left: x, top: y, behavior });
      }
    };

    return scrollTo;
  };

  return {
    scrollTo,
    scrollToCenter,
    scrollToTop,
    scrollToBottom,
    useScrollTo,
    scrollToIndex,
    scrollToRight,
    scrollToLeft,
    scrollToUp,
    scrollToDown,
    scrollToUpLeft,
    scrollToUpRight,
    scrollToDownLeft,
    scrollToDownRight,
  };
};

export default useControlledScroll;
