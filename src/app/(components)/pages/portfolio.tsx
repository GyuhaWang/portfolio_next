import { PortfolioInterface } from "@/@types/portfolio";
import PageLayout from "@/app/(ui)/page_layout";
import Portfolio from "@/app/(ui)/portfolio";

export default function PortfolioPage() {
  const portfolioDatas: PortfolioInterface[] = [
    {
      title: "트래블 톡(채팅 앱)",
      team: true,
      startDate: "2024.12",
      endDate: "2025.02",
      description: "특정 구역 주변의 유저들과 채팅할 수 있는 서비스",
      role: "App 개발",
      contents: [
        "여행지에서 동행 구하기 어려움을 해소하고자 개발",
        "이전 채팅 휴대폰 저장하여 서버 부화 방지",
        "socket을 이용해 채팅 서비스 구현",
      ],
      importance: 4,
      stacks: [
        "Flutter",
        "Dart",
        "GoRouter",
        "Riverpod",
        "Google map api",
        "Oauth",
      ],
      webUrl: "https://github.com/Pproject1ml/app",
    },
    {
      title: "미팅학개론",
      team: true,
      startDate: "2022.01",
      endDate: "2022.09",
      description: "대학생 미팅 서비스",
      role: "FE 개발",
      contents: [
        "창업동아리 NO:ON 기획, 개발, 13,000+ 유저 확보및 수익 창출",
        "개발자 꿈을 시작하게 해준 프로젝트",
        "기획부터 시장조사, FE 개발 담당",
      ],
      stacks: ["React", "Oauth", "Redux", "Google analytics"],
      webUrl: "https://meetingo.me",
      importance: 5,
    },

    {
      title: "포트폴리오 메이커",
      team: false,
      startDate: "2024.10",
      endDate: "2024.11",
      description: "유저의 git hub repository를 빠르게 검색할 수 있는 사이트",
      role: "풀스택",
      contents: [
        "git hub를 바탕으로 포트폴리오를 보고 싶어 개발",
        "git hub api를 통해 유저 검색",
        "vercel storage, prisma 사용",
      ],
      stacks: [
        "Next.js",
        "Tailwind css",
        "Zustand",
        "Next auth",
        "Prisma",
        "Vercel storage",
      ],
      importance: 2,
      webUrl: "https://portfoliomaker-iota.vercel.app",
    },
    {
      title: "얼마야(가격 공유 게시판)",
      team: false,
      startDate: "2024.07",
      endDate: "2025.08",
      description: "해외에서 물가를 공유하는 서비스",
      role: "풀스택",
      contents: [
        "해외 시장에서 흥정을 하는데 적정 가격을 공유하고 싶어 개발",
        "SSR 학습을 위해 가격 페이지 SSR, cache 를 적용",
        "Next.js api 기능을 사용하여 DB 연결",
      ],
      stacks: [
        "Next.js",
        "Tailwind Css",
        "Mongo DB",
        "Vercel",
        "SSR",
        "Next.js api",
      ],
      importance: 3,
      webUrl: "https://market-price-ochre.vercel.app",
    },
  ];
  return (
    <PageLayout>
      <div className="h-full w-full grid grid-flow-2 grid-cols-2 gap-2 ">
        {portfolioDatas.map((data, index) => (
          <Portfolio key={index} data={data} />
        ))}
      </div>
    </PageLayout>
  );
}
