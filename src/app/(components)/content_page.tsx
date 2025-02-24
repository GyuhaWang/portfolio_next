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
import Stacks from "./pages/stack";
import Vision from "./pages/vision";
import Work from "./pages/work";

export default function ContentPage({ index }: { index: number }) {
  const { setIndex, index: currentIndex } = useIndexStore();
  const handleVisible = () => {
    if (currentIndex !== index) {
      setIndex(index);
    }
  };
  const { targetRef } = useIntersectionObserver(handleVisible);

  const pageIndex = [
    <Introduction key={0} />,
    <Work key={1} />,
    <Education key={2} />,
    <Qualifications key={3} />,
    <Main key={4} />,
    <Stacks key={5} />,
    <PortfolioPage key={6} />,
    <Vision key={7} />,
    <Contact key={8} />,
  ];
  return (
    <div ref={targetRef} className="relative">
      <DesignSection>{pageIndex[index]}</DesignSection>
    </div>
  );
}
