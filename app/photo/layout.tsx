import React, { ReactNode } from "react";

export default function layout({
  children,
  model,
}: {
  children: ReactNode;
  model: ReactNode;
}) {
  return (
    <>
      {children}
      {model}
    </>
  );
}
