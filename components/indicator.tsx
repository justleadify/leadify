import type { NextPage } from "next";
import Image from "next/image";

export type IndicatorType = {
  className?: string;
};

const Indicator: NextPage<IndicatorType> = ({ className = "" }) => {
  return (
    <div
      className={`h-44 !m-[0] absolute bottom-[8.4px] left-[calc(50%_-_17.05px)] flex flex-col items-center justify-end gap-[8.6px] z-[6] text-left text-sm text-color-tokens-content-dark-secondary font-body-extra-large-semibold ${className}`}
    >
      <div className="shadow-[0px_14.3px_28.6px_rgba(194,_194,_194,_0.5)] flex flex-col items-start justify-start">
        <div className="rounded-7xs-7 bg-color-tokens-background-primary flex flex-col items-start justify-start p-[11.4px] relative gap-[7.1px]">
          <div className="flex flex-col items-start justify-start gap-[5.7px] z-[0]">
            <div className="self-stretch flex flex-row items-start justify-start gap-[5.7px]">
              <div className="rounded-mid-1 bg-color-tokens-content-dark-primary flex flex-row items-center justify-start p-[2.9px]">
                <Image
                  className="h-[8.6px] w-[8.6px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/iconbriefcase-1.svg"
                />
              </div>
              <div className="h-[15px] w-12 relative leading-[150%] font-medium inline-block">
                May 2023
              </div>
            </div>
            <div className="self-stretch rounded-10xs-9 bg-color-tokens-background-secondary border-color-tokens-border-primary border-[0.7px] border-solid box-border h-[27.2px] flex flex-row items-center justify-start py-[5.7px] px-[8.6px] gap-[5.7px] text-center">
              <div className="h-[15px] w-[72px] relative leading-[150%] font-medium inline-block">
                Active Projects
              </div>
              <div className="h-[17px] w-[13px] relative text-base leading-[150%] font-medium text-color-tokens-content-dark-primary text-left inline-block">
                51
              </div>
            </div>
          </div>
          <Image
            className="w-[11.4px] h-[5.7px] absolute !m-[0] top-[68.6px] left-[calc(50%_-_5.65px)] rounded-12xs-7 z-[1]"
            width={11}
            height={6}
            alt=""
            src="/polygon-3.svg"
          />
        </div>
      </div>
      <Image
        className="w-[11.4px] h-[11.4px] relative"
        width={11}
        height={11}
        alt=""
        src="/indicator.svg"
      />
      <div className="self-stretch flex-1 relative border-color-tokens-content-dark-primary border-r-[0.7px] border-dashed" />
    </div>
  );
};

export default Indicator;
