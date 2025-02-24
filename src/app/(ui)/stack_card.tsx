import { Stack } from "@/@types/stack";

export default function StackCard({
  title,
  stacks,
}: {
  title: string;
  stacks: Stack[];
}) {
  return (
    <div className="z-20 group  relative h-48 ">
      <div className="z-0 group-hover:-translate-y-2 transform duration-500  absolute top-2  w-full rounded-t-xl  bg-black flex items-center justify-center">
        <h2 className="text-lg font-black  text-white uppercase mb-4 ">
          {title}
        </h2>
      </div>
      <div className="z-10  absolute w-full bottom-0 bg-gray-50 h-40 shadow-lg rounded-xl flex flex-col items-center justify-center p-2 ">
        <ul className=" space-y-2 text-center">
          {stacks.map((value, index) => {
            return (
              <li
                key={index}
                className="font-bold"
                style={{ color: value.color }}
              >
                {value.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
