import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const StepTwoFooter = () => {
  return (
    <div className="flex flex-col gap-1 w-[60%] mx-auto">
      <span className="text-sm text-blue-500">DOCUMENTS</span>
      <div className="flex flex-col gap-2 mb-3">
        <p className="text-sm text-gray-600">
          Once the following documents are signed, you'll be ready to get
          started
        </p>
        <div className="flex gap-2 mb-3">
          <div className="flex flex-1 items-center justify-between border border-gray-400 rounded-md px-4">
            <p className="flex-2 text-sm text-gray-600">Electronically sign the agreement(s)</p>
            <TiTick className="text-green-500" />
          </div>
          <button className="bg-primary text-white text-sm px-3 py-3 rounded-md shadow-md">
            <IoIosArrowForward />
          </button>
        </div>
        <div className="flex gap-2">
          <div className="flex flex-1 items-center justify-between border border-gray-400 rounded-md px-4">
            <p className="text-sm text-gray-600">Non adult beverage Kroger market supplier waiver and release</p>
            <RxCross2 className="text-sm text-red-500" />
          </div>
          <button className="bg-primary text-white text-sm px-3 py-3 rounded-md shadow-md">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <span className="text-sm text-blue-500">COI PDF UPLOAD</span>
      <div className="flex flex-col gap-2 mb-3">
        <p className="text-sm text-gray-600">
          Once the following documents are signed, you'll be ready to get
          started
        </p>
        <div className="flex gap-2 mb-3">
          <div className="flex flex-1 items-center justify-between border border-gray-400 rounded-md px-4">
            <p className="flex-2 text-sm text-gray-600">Electronically sign the agreement(s)</p>
            <TiTick className="text-green-500" />
          </div>
          <button className="bg-primary text-white text-sm px-3 py-3 rounded-md shadow-md">
            <IoIosArrowForward />
          </button>
        </div>
      </div>

    </div>
  );
};

export default StepTwoFooter;
