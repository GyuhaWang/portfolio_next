"use client";

import IndexIndicator from "./index_indicator";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import FlagIcon from "@mui/icons-material/Flag";
import HomeIcon from "@mui/icons-material/Home";
import useIndexStore from "@/store/design/router_store";
type Index = {
  index: number;
  icon: React.ReactNode;
  title: string;
};

export default function MiniMap() {
  const { index: currentIndex } = useIndexStore();

  const indexInfo: Index[] = [
    { index: 0, icon: <ContactPageIcon />, title: "소개" },
    { index: 1, icon: <BadgeIcon />, title: "경력" },
    { index: 2, icon: <SchoolIcon />, title: "교육" },
    { index: 3, icon: <WorkspacePremiumIcon />, title: "자격증" },
    { index: 4, icon: <HomeIcon />, title: "홈" },
    { index: 5, icon: <CodeIcon />, title: "스택" },
    { index: 6, icon: <WebIcon />, title: "포트폴리오" },
    { index: 7, icon: <FlagIcon />, title: "비전" },
    { index: 8, icon: <GitHubIcon />, title: "깃 허브" },
  ];
  return (
    <div className="relative h-full w-full flex justify-center items-center ">
      {indexInfo.map((data, index) => (
        <IndexIndicator
          key={index}
          index={data.index}
          icon={data.icon}
          title={data.title}
          blur={index != currentIndex}
        />
      ))}
    </div>
  );
}
