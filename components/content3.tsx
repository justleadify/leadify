import type { NextPage } from "next";
import Image from "next/image";

export type Content3Type = {
  className?: string;
};

const Content3: NextPage<Content3Type> = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 rounded-border-radius-8 bg-color-tokens-background-primary border-color-tokens-border-primary border-[1px] border-solid box-border overflow-hidden flex flex-col items-start justify-start pt-[34px] px-0 pb-0 gap-6 max-w-full text-center text-13xl text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-9 box-border max-w-full">
        <div className="flex-1 rounded flex flex-col items-start justify-start gap-3 max-w-full">
          <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-lgi mq450:leading-[23px] mq1050:text-7xl mq1050:leading-[31px]">
            We’re Aware with Security
          </h1>
          <div className="relative text-lg leading-[150%] text-color-tokens-content-dark-secondary">
            Venture is audited and certified by few industry that have been
            leading in Security Third Party standards.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-[234px] mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[117px] mq750:pr-[117px] mq750:box-border">
        <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-[9px] px-[18px] bg-color-tokens-content-dark-primary shadow-[0px_10px_12px_rgba(255,_255,_255,_0.26)_inset,_0px_0px_0px_1px_#000,_0px_0px_0px_4px_rgba(0,_0,_0,_0.04)] rounded-border-radius-4 overflow-hidden flex flex-row items-center justify-center gap-2">
          <Image
            className="w-4 relative h-4 hidden"
            width={16}
            height={16}
            alt=""
            src="/iconfunnel7.svg"
          />
          <div className="h-6 relative text-base leading-[150%] font-medium font-body-extra-large-semibold text-color-tokens-background-primary text-left inline-block">
            Discover More
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
      <div className="self-stretch [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0)_57.85%,_rgba(255,_255,_255,_0.78))] overflow-hidden flex flex-row items-start justify-center pt-3 px-5 pb-[37px] box-border max-w-full">
        <div className="h-[293px] w-[622px] relative [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0)_57.85%,_rgba(255,_255,_255,_0.78))] hidden max-w-full" />
        <div className="flex flex-col items-start justify-start gap-4 max-w-full z-[1]">
          <div className="self-stretch flex flex-row items-start justify-start gap-4 mq450:flex-wrap">
            <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-border-radius-8 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center p-[15px] mq450:flex-1">
              <Image
                className="w-[81px] h-[81px] relative object-cover mq450:self-stretch mq450:w-auto"
                loading="lazy"
                width={81}
                height={81}
                alt=""
                src="/image-193@2x.png"
              />
            </div>
            <div className="flex-1 shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-border-radius-8 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid box-border flex flex-col items-center justify-center p-[15px] min-w-[145px]">
              <Image
                className="self-stretch h-[82px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                width={191}
                height={82}
                alt=""
                src="/image-191@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-4 mq450:flex-wrap">
            <div className="flex-1 shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-border-radius-8 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid box-border flex flex-col items-center justify-center p-[15px] min-w-[152px]">
              <Image
                className="self-stretch h-[82px] relative max-w-full overflow-hidden shrink-0 object-cover"
                loading="lazy"
                width={202}
                height={82}
                alt=""
                src="/image-190@2x.png"
              />
            </div>
            <div className="h-[114px] shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-border-radius-8 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid box-border flex flex-col items-center justify-center p-[15px] mq450:flex-1">
              <Image
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover mq450:self-stretch mq450:w-auto"
                loading="lazy"
                width={70}
                height={82}
                alt=""
                src="/image-192@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content3;
