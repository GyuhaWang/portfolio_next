import PageLayout from "@/app/(ui)/page_layout";

export default function Introduction() {
  return (
    <PageLayout>
      <section className="flex flex-col gap-6">
        <h1 className="text-5xl font-black">개발자 왕규하</h1>
        <section className="flex-col gap-2">
          <div className=" relative ">
            <div className="absolute opacity-80 p-2 rounded-full text-3xl font-black">
              Q
            </div>
            <div className="flex flex-col items-start justify-start pt-8 pl-6 pr-6">
              <div className="rounded-md bg-gray-50 pt-2 pl-2 pr-4 pb-2">
                <p className="font-black">당신은 어떤 개발자 인가요?</p>
              </div>
            </div>
          </div>
          <div className=" relative ">
            <div className="absolute right-0 top-0 opacity-80 p-2 rounded-full text-3xl font-black">
              A
            </div>
            <div className="flex flex-col items-end justify-start pt-8 pl-8 pr-6">
              <div className="rounded-md bg-gray-50 pt-2 pl-4 pr-2 pb-2">
                <p className="font-black text-lg text-blue-500">
                  서비스를 생각하는 개발자입니다.
                </p>
                <span className="font-black">
                  대학생 미팅 서비스를 개발하여{" "}
                  <span className="underline underline-offset-4">13,000+</span>{" "}
                  명의 이용자를 모았습니다.
                  <br />
                  서비스 기획부터 시작해 개발, 사용자의 경험을 바탕으로 더 나은
                  서비스를 만들기 위해 끊임 없이 고민합니다.
                </span>
              </div>
            </div>
          </div>
        </section>
      </section>
    </PageLayout>
  );
}
