import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({
  children,
}: Props) {
  return (
    <div
    className="max-w-275 m-auto w-full px-4 "
    >
      {children}
    </div>
  );
}