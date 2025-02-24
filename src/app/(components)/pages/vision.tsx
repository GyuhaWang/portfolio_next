import FlipBox from "@/app/(ui)/flip_box";
import PageLayout from "@/app/(ui)/page_layout";

export default function Vision() {
  return (
    <PageLayout>
      <div className="z-30 h-full w-full flex flex-col items-center justify-center gap-2">
        <p className="font-black text-2xl">
          사람들이 즐겁게 살 수 있는 서비스를 추구합니다.
        </p>
        <FlipBox title={"domain"} contents={["금융", "여행", "생활"]} />
      </div>
    </PageLayout>
  );
}
