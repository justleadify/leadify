import type { NextPage } from "next";
import Image from "next/image";
import Buttons from "./buttons";

export type Content1Type = {
  className?: string;
};

const Content1: NextPage<Content1Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded flex flex-col items-center justify-start py-14 px-0 gap-10 z-[1] text-center text-29xl text-color-tokens-background-primary font-body-extra-large-semibold ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-start gap-4">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-[inherit]">
          Take Your Business to the Next Level
        </h1>
        <div className="self-stretch relative text-base leading-[150%]">
          Dive into the advantages of our CRM platform and witness the impact on
          your business.
        </div>
      </div>
      <div className="flex flex-row items-start justify-center gap-3">
        <button className="cursor-pointer [border:none] py-3 px-[18px] bg-color-tokens-background-primary rounded-border-radius-4 flex flex-row items-center justify-center gap-2">
          <Image
            className="w-[18px] relative h-[18px] hidden"
            width={18}
            height={18}
            alt=""
            src="/iconfunnel8.svg"
          />
          <div className="w-[102px] relative text-lg leading-[150%] font-medium font-body-extra-large-semibold text-color-tokens-content-dark-primary text-left inline-block h-6 shrink-0">
            Get Started
          </div>
          <Image
            className="w-[18px] relative h-[18px] hidden"
            width={18}
            height={18}
            alt=""
            src="/iconfunnel9.svg"
          />
        </button>
        <Buttons
          hierarchy="Link"
          iconOnly={false}
          showBackground
          size="Extra Large"
          state="Default"
          stylizedButton={false}
          showText
          text="Request a Demo"
        />
      </div>
    </div>
  );
};

export default Content1;
