import CircleIcon from "@/app/(ui)/circle_icon";
import Link from "next/link";
import avatarUrl from "../../../assets/avatar.png";
import IndexButton from "../index_button";

export default function Main() {
  return (
    <div className=" h-full w-full flex flex-col items-center justify-center">
      <p className="font-black text-4xl">어서오세요!</p>
      <div className="absolute z-10 h-60 w-60 bg-transparent ">
        <IndexButton />
      </div>
      <CircleIcon url={avatarUrl.src} size={200} />
    </div>
  );
}
