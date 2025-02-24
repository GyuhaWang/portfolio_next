import { Stack } from "@/@types/stack";
import StackCard from "@/app/(ui)/stack_card";

export default function Stack() {
  const frontEnd: Stack[] = [
    { name: "Next.js(React)", color: "string" },
    { name: "Zustand", color: "rgba(255, 108, 55, 1)" },
    { name: "tailwind CSS", color: "rgba(6, 182, 212, 1)" },
  ];
  const language: Stack[] = [
    { name: "TypeScript", color: "rgba(1, 122, 203, 1)" },
    { name: "JavaScript", color: "rgba(247, 223, 30, 1)" },
    { name: "Dart", color: "rgba(66, 165, 245, 1)" },
    { name: "Python", color: "rgba(54, 105, 148, 1)" },
  ];
  const app: Stack[] = [
    { name: "Flutter", color: "rgba(13, 71, 161, 1)" },
    { name: "Riverpod", color: "rgba(66, 165, 245, 1)" },
    { name: "GetX", color: "rgba(66, 165, 245, 0.8)" },
    { name: "GoRouter", color: "string" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen   p-10">
      <h1 className="text-3xl font-extrabold mb-8">기술 스택</h1>
      <div className="relative w-full max-w-6xl grid grid-cols-3 gap-8">
        <StackCard title="language" stacks={language} />
        <StackCard title="frontEnd" stacks={frontEnd} />
        <StackCard title="app" stacks={app} />
      </div>
    </div>
  );
}
