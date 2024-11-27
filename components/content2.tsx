import type { NextPage } from "next";
import Image from "next/image";
import Apps from "./apps";

export type Content2Type = {
  className?: string;
};

const Content2: NextPage<Content2Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-border-radius-8 bg-color-tokens-background-primary border-color-tokens-border-primary border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-[34px] px-0 pb-0 gap-6 max-w-full text-center text-13xl text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-9 box-border max-w-full">
        <div className="flex-1 rounded flex flex-col items-start justify-start gap-3 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
            Integrated with 60+ Apps
          </h1>
          <div className="relative text-lg leading-[150%] text-color-tokens-content-dark-secondary">
            Embark on a transformative journey with our venture. Over 60
            powerful tools to make your work more efficient and effective.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[198px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[99px] mq750:pr-[99px] mq750:box-border">
        <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-[9px] px-[18px] bg-color-tokens-content-dark-primary shadow-[0px_10px_12px_rgba(255,_255,_255,_0.26)_inset,_0px_0px_0px_1px_#000,_0px_0px_0px_4px_rgba(0,_0,_0,_0.04)] rounded-border-radius-4 overflow-hidden flex flex-row items-center justify-center gap-2">
          <Image
            className="w-4 relative h-4 hidden"
            width={16}
            height={16}
            alt=""
            src="/iconfunnel7.svg"
          />
          <div className="h-6 relative text-base leading-[150%] font-medium font-body-extra-large-semibold text-color-tokens-background-primary text-left inline-block">
            View All App Integration
          </div>
          <Image
            className="w-4 relative h-4 hidden"
            width={16}
            height={16}
            alt=""
            src="/iconfunnel7.svg"
          />
        </button>
      </div>
      <Apps />
    </div>
  );
};

export default Content2;
