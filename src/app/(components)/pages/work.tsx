import PageLayout from "@/app/(ui)/page_layout";
import Image from "next/image";

import companyImg1 from "../../../assets/company_logo_1.svg";
export default function Work() {
  return (
    <PageLayout>
      <div className=" h-full w-full flex flex-col items-center justify-start gap-8">
        <section className="flex flex-row h-full w-full">
          <section className="flex flex-col flex-1 gap-8">
            <h2 className="text-5xl font-black uppercase">career</h2>
            <section className=" flex flex-row  gap-4">
              <div className="">
                <div className="relative rounded-full h-[3rem] w-[3rem] border-gray-300 border-solid border-[1px] p-4">
                  <Image alt="companyImg1" fill={true} src={companyImg1.src} />
                </div>
              </div>
              <div className="h-full w-[1px] bg-gray-300" />
              <div className="flex flex-col gap-3">
                <p className="text-2xl font-black">(주) 메디아크 </p>
                <p className="text-sm font-medium text-gray-500">
                  2022.09 ~ 2024.05 (1년 9개월)
                </p>
                <p className="text-base font-medium">
                  의료.IT 효율화 서비스 플랫폼
                </p>
                <div className="flex flex-row gap-2">
                  <div className="bg-gray-800 rounded-lg pl-2 pr-2 pt-1 ">
                    <p className="text-white text-sm font-black">
                      Next.js 개발
                    </p>
                  </div>
                  <div className="bg-gray-800 rounded-lg pl-2 pr-2 pt-1 pb-1">
                    <p className="text-white text-sm font-black">
                      Flutter 개발
                    </p>
                  </div>
                </div>
                <div />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2">
                    <div className=" w-[3px] bg-black" />
                    <p className="font-black text-base">
                      환자 생활관리 서비스 개발 (Flutter)
                    </p>
                  </div>

                  <p className="text-sm font-medium text-gray-500">
                    2022년 하반기 - 2023년 중반기
                  </p>
                  <p className="text-sm font-medium">
                    데이터 입력, 커뮤니티 페이지등 App 개발 전반 담당 개발
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2">
                    <div className=" w-[3px] bg-black" />
                    <p className="font-black text-base">
                      환자 생활관리 서비스 리뉴얼(Flutter)
                    </p>
                  </div>

                  <p className="text-sm font-medium text-gray-500">
                    2023년 중반기 - 2023년 하반기
                  </p>
                  <p className="text-sm font-medium">
                    시스템 아키텍처 변경 및 Riverpod로 상태관리 도구 변경
                  </p>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2">
                    <div className=" w-[3px] bg-black" />
                    <p className="font-black text-base">
                      병원 사전진료 시스템 개발 리드 (Next.js)
                    </p>
                  </div>

                  <p className="text-sm font-medium text-gray-500">
                    2024년 하반기 - 2025년 상반기
                  </p>
                  <p className="text-sm font-medium">
                    Frontend 개발 리드 담당, SSR 적용을 통한 검색 페이지 캐싱
                    적용{" "}
                  </p>
                </div>
              </div>
            </section>
          </section>
          <section className="flex flex-col flex-1 gap-8">
            <h2 className="text-5xl font-black uppercase">동아리</h2>
            <section className=" flex flex-row  gap-4">
              <div className="">
                <div className="relative rounded-full h-[3rem] w-[3rem] border-gray-300 border-solid border-[1px] p-4"></div>
              </div>
              <div className="h-full w-[1px] bg-gray-300" />
              <div className="flex flex-col gap-3">
                <p className="text-2xl font-black">NO:ON </p>
                <p className="text-sm font-medium text-gray-500">
                  2022.01 ~ 2022.09{" "}
                </p>
                <p className="text-base font-medium">대학생 미팅 서비스</p>
                <div className="flex flex-row gap-2">
                  <div className="bg-gray-800 rounded-lg pl-2 pr-2 pt-1 pb-1">
                    <p className="text-white text-sm font-black">React 개발</p>
                  </div>
                </div>
                <div />
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2">
                    <div className=" w-[3px] bg-black" />
                    <p className="font-black text-base">
                      미팅학개론 Frontend 개발
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-row gap-2">
                    <div className=" w-[3px] bg-black" />
                    <p className="font-black text-base">
                      13,000+ 명 이용자 확보
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </div>
    </PageLayout>
  );
}
