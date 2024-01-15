import SinglePhoto from "@/components/SinglePhoto";
import React from "react";

const data = [
  {
    images: "heeheeheheh",
  },
  {
    images: "heeheeheheh",
  },
  {
    images: "heeheeheheh",
  },
  {
    images: "heeheeheheh",
  },
  {
    images: "heeheeheheh",
  },
  {
    images: "heeheeheheh",
  },
];

export default function page() {
  return (
    <div className="container flex items-center gap-2 flex-wrap">
      {data.map((elm, id) => (
        <SinglePhoto key={id} {...elm} id={id} />
      ))}
    </div>
  );
}
