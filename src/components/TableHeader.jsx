import React from "react";
import { BsClock } from "react-icons/bs";
export default function TableHeader() {
  return (
    <div className="grid grid-cols-12 mx-auto py-2 px-4 mb-2 border-b-[1px] border-border text-white">
      <span className="col-span-1">#</span>
      <span className="col-span-5">TITLE</span>
      <span className="col-span-5">ARTIST</span>
      <span className="col-span-1">
        <BsClock size="18px" />
      </span>
    </div>
  );
}
