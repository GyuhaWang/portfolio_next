import PageLayout from "@/app/(ui)/page_layout";

export default function Main() {
  return (
    <PageLayout>
      <div className=" h-full w-full flex  items-start justify-start  gap-8">
        <section className=" flex flex-col gap-4 items-start">
          <ul className="flex flex-col gap-2 justify-start">
            <li className="flex items-end justify-start gap-2">
              <p className="text-2xl font-black">한국외국어대학교</p>
              <p className="text-xs font-normal">2018 - 2024 (졸업)</p>
            </li>
            <li>
              <ul className="flex flex-col justify-start items-start">
                <li>
                  <div className="flex flex-row gap-2">
                    <div className=" w-[3px] bg-black" />
                    <p className="text-base font-semibold">
                      GlobalBusiness&Technology 학부
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-row gap-2">
                    <div className=" w-[3px] bg-black" />
                    <span className="text-base font-semibold">
                      컴퓨터.전자 시스템 공학부{" "}
                      <span className="text-xs">(이중전공)</span>
                    </span>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
          <div />
          <h2 className="font-black text-2xl"> 수상경력</h2>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2">
              <div className=" w-[3px] bg-black" />
              <p className="font-black text-base">
                미래내일 일경험 프로젝트형 IT직무{" "}
              </p>
            </div>

            <p className="text-sm font-medium text-gray-500">2025.2</p>
            <p className="text-sm font-medium">
              위치기반 채팅 어플리케이션 개발
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2">
              <div className=" w-[3px] bg-black" />
              <p className="font-black text-base">
                2023년 도시형소공인 직접지구 캡스톤 경진대회{" "}
              </p>
            </div>

            <p className="text-sm font-medium text-gray-500">2023.12</p>
            <p className="text-sm font-medium">
              딥러닝을 이용한 반려견 행동 분석 어플리케이션
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2">
              <div className=" w-[3px] bg-black" />
              <p className="font-black text-base">
                2022 한국외국어대학교 경상대학 학술제
              </p>
            </div>

            <p className="text-sm font-medium text-gray-500">2022.10</p>
            <p className="text-sm font-medium">
              카카오모빌리티의 택시 서비스 개선을 위한 택시 합승서비스 기획
            </p>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}
