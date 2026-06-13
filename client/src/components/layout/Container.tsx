import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({
  children,
}: Props) {
  return (
    <div className="max-w-[1100px] mx-auto border-4 border-red-500">
      {children}
    </div>
  );
}