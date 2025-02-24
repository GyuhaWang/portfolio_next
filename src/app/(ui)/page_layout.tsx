import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" h-full w-full p-20">{children}</div>;
}
