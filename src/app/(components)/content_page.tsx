"use Client";

import useIntersectionObserver from "@/hook/useIntersectionObserver";
import useIndexStore from "@/store/design/router_store";

import DesignSection from "../(ui)/section";
import Contact from "./pages/contack";
import Education from "./pages/education";
import Introduction from "./pages/introduce";
import Main from "./pages/main";
import PortfolioPage from "./pages/portfolio";
import Qualifications from "./pages/qualifications";
import Stack from "./pages/stack";
import Vision from "./pages/vision";
import Work from "./pages/work";

export default function ContentPage({ index }: { index: number }) {
  const { setIndex, index: currentIndex } = useIndexStore();
  const handleVisible = () => {
    console.log("visible", index);
    if (currentIndex !== index) {
      setIndex(index);
    }
  };
  const { targetRef } = useIntersectionObserver(handleVisible);

  const pageIndex = [
    <Introduction />,
    <Work />,
    <Education />,
    <Qualifications />,
    <Main />,
    <Stack />,
    <PortfolioPage />,
    <Vision />,
    <Contact />,
  ];
  return (
    <div ref={targetRef} className="relative">
      <DesignSection>{pageIndex[index]}</DesignSection>
    </div>
  );
}
