import type { NextPage } from "next";
import Image from "next/image";
import Dashboard from "./dashboard";

export type HeroType = {
  className?: string;

  /** Variant props */
  variant?: 01;
};

const Hero: NextPage<HeroType> = ({ className = "", variant = 1 }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_4px_200px_rgba(232,_249,_247,_0.2)] bg-color-tokens-background-primary overflow-hidden flex flex-row items-center justify-start py-0 pl-20 pr-0 relative gap-8 z-[1] text-left text-65xl text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
      data-variant={variant}
    >
      <Image
        className="w-[1440px] absolute !m-[0] top-[0px] left-[0px] h-[642px] z-[0]"
        width={1440}
        height={642}
        alt=""
        src="/pattern.svg"
      />
      <div className="w-[624px] flex flex-col items-start justify-start gap-9 z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start gap-4">
          <h1 className="m-0 self-stretch relative text-inherit leading-[100%] font-medium font-[inherit]">
            Revoluzioned Customer Relationship
          </h1>
          <div className="self-stretch relative text-xl leading-[120%] font-medium text-color-tokens-content-dark-secondary">
            Streamline Operations, Boost Efficiency, and Drive Growth
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-5 text-sm text-color-tokens-content-dark-secondary">
          <div className="flex flex-row items-start justify-center gap-4">
            <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-3 px-[18px] bg-color-tokens-content-dark-primary shadow-[0px_10px_12px_rgba(255,_255,_255,_0.26)_inset,_0px_0px_0px_1px_#000,_0px_0px_0px_4px_rgba(0,_0,_0,_0.04)] rounded-border-radius-4 overflow-hidden flex flex-row items-center justify-center gap-2">
              <Image
                className="w-[18px] relative h-[18px] hidden"
                width={18}
                height={18}
                alt=""
                src="/iconcheckcircle.svg"
              />
              <div className="w-[102px] relative text-lg leading-[150%] font-medium font-body-extra-large-semibold text-color-tokens-background-primary text-left inline-block h-6 shrink-0">
                Get Started
              </div>
              <Image
                className="w-[18px] relative h-[18px] hidden"
                width={18}
                height={18}
                alt=""
                src="/iconcheckcircle.svg"
              />
            </button>
            <button className="cursor-pointer border-color-tokens-content-dark-primary border-[1px] border-solid py-3 px-[18px] bg-color-tokens-background-primary rounded-border-radius-4 flex flex-row items-center justify-center gap-2">
              <Image
                className="w-[18px] relative h-[18px] hidden"
                width={18}
                height={18}
                alt=""
                src="/iconfunnel2.svg"
              />
              <div className="relative text-lg leading-[150%] font-medium font-body-extra-large-semibold text-color-tokens-content-dark-primary text-left">
                Learn More
              </div>
              <Image
                className="w-[18px] relative h-[18px] hidden"
                width={18}
                height={18}
                alt=""
                src="/iconfunnel3.svg"
              />
            </button>
          </div>
          <div className="rounded flex flex-row items-center justify-center py-0 px-3 gap-2">
            <Image
              className="w-4 relative h-4 hidden"
              width={16}
              height={16}
              alt=""
              src="/iconglobe.svg"
            />
            <div className="relative leading-[150%]">
              <span>Used and helping over more</span>
              <span className="text-color-tokens-content-dark-primary">
                <span className="font-medium font-body-extra-large-semibold">{` `}</span>
                <span className="font-semibold">200+ Companies</span>
              </span>
            </div>
            <Image
              className="w-4 relative h-4"
              width={16}
              height={16}
              alt=""
              src="/iconglobe1.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[704px] relative rounded-3xl h-[680px] z-[2] text-2xs text-dimgray-200 font-sf-pro-text">
        <Dashboard
          variant={1}
          coreSafariBigSurToolbar="/core--safari-big-sur--toolbar--toolbar-item.svg"
          coreSafariBigSurToolbar1="/core--safari-big-sur--toolbar--toolbar-item-1.svg"
          coreSafariBigSurToolbar2="/core--safari-big-sur--toolbar--toolbar-item-2.svg"
          coreSafariBigSurToolbar3="/core--safari-big-sur--toolbar--toolbar-item-3.svg"
          coreSafariBigSurToolbar4="/core--safari-big-sur--toolbar--toolbar-item-4.svg"
          coreSafariBigSurToolbar5="/core--safari-big-sur--toolbar--toolbar-item-5.svg"
          coreSafariBigSurToolbar6="/core--safari-big-sur--toolbar--toolbar-item1.svg"
          coreTrafficLightsBigSur="/core--traffic-lights-big-sur.svg"
          coreSafariBigSurToolbar7="/core--safari-big-sur--toolbar--toolbar-item-6.svg"
          lock="/lock.svg"
          lock1="/lock-1.svg"
          image194="/image-194@2x.png"
        />
      </div>
      <div className="w-[1440px] absolute !m-[0] right-[0px] bottom-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] h-[120px] z-[3]" />
      <div className="w-[1440px] absolute !m-[0] top-[120px] right-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] h-[120px] z-[4]" />
    </section>
  );
};

export default Hero;
