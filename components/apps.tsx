import type { NextPage } from "next";
import Image from "next/image";

export type AppsType = {
  className?: string;
};

const Apps: NextPage<AppsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[293px] relative bg-color-tokens-background-primary overflow-hidden shrink-0 max-w-full mq750:h-auto mq750:min-h-[293] ${className}`}
    >
      <div className="absolute top-[calc(50%_-_123.5px)] left-[calc(50%_-_296px)] w-[593px] flex flex-col items-center justify-end py-0 px-0 box-border gap-[19.1px] max-w-full">
        <div className="flex flex-row items-end justify-center gap-[19.1px] mq750:flex-wrap">
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative"
              loading="lazy"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-6.svg"
            />
          </div>
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-7.svg"
            />
          </div>
          <div className="h-[69.7px] w-[69.7px] rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border" />
          <div className="h-[69.7px] w-[69.7px] rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border" />
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative overflow-hidden shrink-0"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-8.svg"
            />
          </div>
          <div className="h-[69.7px] w-[69.7px] rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border" />
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative overflow-hidden shrink-0 object-cover"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-9@2x.png"
            />
          </div>
        </div>
        <div className="w-[691.1px] flex flex-row items-end justify-center gap-[19.1px] max-w-[117%] mq750:flex-wrap">
          <div className="h-[69.7px] flex-1 rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border" />
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-10.svg"
            />
          </div>
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-11.svg"
            />
          </div>
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-12.svg"
            />
          </div>
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative overflow-hidden shrink-0"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-13.svg"
            />
          </div>
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative overflow-hidden shrink-0"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-14.svg"
            />
          </div>
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-15.svg"
            />
          </div>
          <div className="h-[69.7px] flex-1 rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border" />
        </div>
        <div className="self-stretch flex flex-row items-end justify-center gap-[19.1px] mq750:flex-wrap">
          <div className="h-[69.7px] flex-1 rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border min-w-[45px]" />
          <div className="h-[69.7px] flex-1 rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border min-w-[45px]" />
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-16.svg"
            />
          </div>
          <div className="shadow-[0px_8.6px_12.8px_rgba(0,_0,_0,_0.05)] rounded-3xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid flex flex-col items-center justify-center py-2 px-[9px]">
            <Image
              className="w-[50.7px] h-[50.7px] relative"
              width={51}
              height={51}
              alt=""
              src="/brand-logos-17.svg"
            />
          </div>
          <div className="h-[69.7px] flex-1 rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border min-w-[45px]" />
          <div className="h-[69.7px] flex-1 rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border min-w-[45px]" />
          <div className="h-[69.7px] flex-1 rounded-3xs-5 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.8px] border-solid box-border min-w-[45px]" />
        </div>
      </div>
      <div className="absolute top-[0px] left-[0px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0)_57.85%,_rgba(255,_255,_255,_0.78))] w-full h-full z-[1]" />
    </div>
  );
};

export default Apps;
