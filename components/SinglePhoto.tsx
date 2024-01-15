import React from "react";
import DialogComponent from "./Dialog";
import Link from "next/link";

type props = {
  images: string;
  id: number;
};

export default function SinglePhoto({ images, id }: props) {
  return (
    <Link href={`/photo/${id}`} className="w-[20%] h-[300px] border">
      {/* <DialogComponent></DialogComponent> */}
      <p> Paragraph {id} </p>
    </Link>
  );
}
