import DialogComponent from "@/components/Dialog";
import React from "react";

export default function page({ params: { id } }: { params: { id: string } }) {
  return (
    <>
      <DialogComponent> {id} </DialogComponent>
    </>
  );
}
