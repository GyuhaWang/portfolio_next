import { PortfolioInterface } from "@/@types/portfolio";
import Link from "next/link";
import StarRating from "../(components)/start_rating";

export default function Portfolio({ data }: { data: PortfolioInterface }) {
  return (
    <div className="z-20 h-fit relative  border-l-2 border-black border-solid ">
      <div className="flex flex-col gap-2 p-2">
        <div className="flex flex-col  gap-1">
          <div className="flex flex-row items-center gap-2">
            <div className="pl-2 pr-2 pt-1 pb-1 bg-black h-fit w-fit rounded-xl">
              <p className="text-white font-black">{data.title}</p>
            </div>
            <StarRating cout={data.importance} />
          </div>
          <div>
            <span className="text-gray-500 text-sm font-medium">
              {data.startDate} - {data.endDate} (
              <span className="text-gray-500 text-xs font-medium">
                {data.team ? " 팀 프로젝트 " : " 개인 프로젝트 "}){" "}
              </span>
            </span>
          </div>
        </div>
        <div className=" w-full h-[1px] bg-gray-400" />
        <div>
          <p className="text-lg font-black">{data.description}</p>
        </div>
        <ul className="list-disc list-inside">
          {data.contents.map((content, index) => (
            <li key={index}>
              <span className="font-medium text-sm">{content}</span>
            </li>
          ))}
        </ul>
        {data.webUrl != undefined && (
          <div className="flex gap-4">
            <div className="w-1 bg-blue-400" />
            <Link className="underline text-blue-400" href={data.webUrl}>
              {data.webUrl}
            </Link>
          </div>
        )}
        <span className=" flex pl-2 pr-2 pt-1 pb-1 rounded-xl bg-yellow-100 w-fit gap-1 border-yellow-200 border-solid border-2">
          {data.stacks.map((stack, index) => (
            <span className="text-sm font-black" key={index}>
              {stack}
              {index < stack.length && ","}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
