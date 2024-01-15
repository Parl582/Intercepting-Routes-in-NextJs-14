import React from "react";

export default function page({ params }: { params: { id: string } }) {
  return <div className="p-4 border-2 bg-gray-700/30"> {params.id} </div>;
}
