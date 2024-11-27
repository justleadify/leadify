import type { NextPage } from "next";
import Image from "next/image";

export type DatePickerType = {
  className?: string;
  showLogo?: boolean;
  showIconLeft?: boolean;
  showMorePillars?: boolean;
  showIconRight?: boolean;
  editLable?: string;
  showValue?: boolean;
  editSubtitle?: string;
  showSubtitle?: boolean;
  editPlaceholder?: string;
  showPillars?: boolean;
  showFlag?: boolean;
  showLabel?: boolean;

  /** Variant props */
  lightMode?: boolean;
  property1?: string;
};

const DatePicker: NextPage<DatePickerType> = ({
  className = "",
  lightMode = true,
  property1 = "Default",
  showLogo = false,
  showIconLeft = true,
  showMorePillars = false,
  showIconRight = true,
  editLable = "Due Date",
  showValue = true,
  editSubtitle = "Organizations are the top level entities that are used to group your applications and manage organization specific resource (e.g., databases, cache, queues)",
  showSubtitle = false,
  editPlaceholder = "24 Jan 2023",
  showPillars = false,
  showFlag = false,
  showLabel = true,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start relative gap-[7px] text-left text-smi-2 text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
      data-lightMode={lightMode}
      data-property1={property1}
    >
      {showLabel && (
        <div className="self-stretch flex flex-col items-start justify-center z-[0]">
          <div className="relative leading-[150%] font-medium">{editLable}</div>
          {showSubtitle && (
            <div className="w-[392.4px] relative leading-[20.9px] text-text-dark-subtle">
              {editSubtitle}
            </div>
          )}
        </div>
      )}
      <div className="self-stretch rounded-9xs-5 bg-color-tokens-background-primary border-color-tokens-content-dark-tertiary border-[0.9px] border-solid flex flex-row items-center justify-start py-[8.7px] px-[10.5px] gap-[10.5px] z-[1] text-greyscale-300">
        {showFlag && (
          <Image
            className="w-[20.9px] relative h-[15.7px] object-cover"
            width={21}
            height={16}
            alt=""
            src="/country-flag@2x.png"
          />
        )}
        {showLogo && (
          <Image
            className="w-[20.9px] relative rounded-68xl-2 h-[20.9px] overflow-hidden shrink-0 object-cover"
            width={21}
            height={21}
            alt=""
            src="/avatar--logo@2x.png"
          />
        )}
        {showIconLeft && (
          <Image
            className="w-[17.4px] relative h-[17.4px]"
            width={17}
            height={17}
            alt=""
            src="/iconcalendarblank.svg"
          />
        )}
        {showValue && (
          <div className="w-[88px] relative leading-[150%] text-color-tokens-content-dark-primary inline-block shrink-0">
            {editPlaceholder}
          </div>
        )}
        {showPillars && (
          <div className="rounded-9xs-5 bg-theme-dark-lighter-background flex flex-row items-center justify-start py-0 pl-[7px] pr-[3.5px] gap-[3.5px]">
            <div className="h-[21px] w-14 relative leading-[20.9px] inline-block">
              Reliability
            </div>
            <Image
              className="w-3.5 relative h-3.5"
              width={14}
              height={14}
              alt=""
              src="/icon--cancel1.svg"
            />
          </div>
        )}
        {showIconRight && (
          <Image
            className="w-[17.4px] relative h-[17.4px]"
            width={17}
            height={17}
            alt=""
            src="/icon--arrow-down.svg"
          />
        )}
        {showMorePillars && (
          <div className="flex flex-row items-start justify-start gap-[7px]">
            <div className="rounded-9xs-5 bg-theme-dark-lighter-background flex flex-row items-center justify-start py-0 pl-[7px] pr-[3.5px] gap-[3.5px]">
              <div className="h-[21px] w-14 relative leading-[20.9px] inline-block">
                Reliability
              </div>
              <input className="m-0 h-3.5 w-3.5 relative" type="checkbox" />
            </div>
            <div className="rounded-9xs-5 bg-theme-dark-lighter-background flex flex-row items-center justify-start py-0 pl-[7px] pr-[3.5px] gap-[3.5px]">
              <div className="h-[21px] w-14 relative leading-[20.9px] inline-block">
                Reliability
              </div>
              <input className="m-0 h-3.5 w-3.5 relative" type="checkbox" />
            </div>
            <div className="rounded-9xs-5 bg-theme-dark-lighter-background flex flex-row items-center justify-start py-0 pl-[7px] pr-[3.5px] gap-[3.5px]">
              <div className="h-[21px] w-14 relative leading-[20.9px] inline-block">
                Reliability
              </div>
              <Image
                className="h-3.5 w-3.5 relative"
                width={14}
                height={14}
                alt=""
                src="/icon--cancel1.svg"
              />
            </div>
            <div className="h-[21px] w-3.5 relative leading-[20.9px] text-color-tokens-background-primary inline-block">
              ....
            </div>
            <div className="rounded-9xs-5 bg-theme-dark-lighter-background flex flex-row items-center justify-center py-0 pl-[7px] pr-[6.1px] gap-[3.5px]">
              <div className="h-[21px] w-2 relative leading-[20.9px] inline-block">
                3
              </div>
              <Image
                className="w-3.5 relative h-3.5 hidden"
                width={14}
                height={14}
                alt=""
                src="/icon--cancel1.svg"
              />
            </div>
          </div>
        )}
      </div>
      <div className="!m-[0] absolute top-[0px] right-[-0.2px] rounded-11xs-7 hidden flex-row items-center justify-end gap-[8.7px] z-[2] text-action-color-main">
        <Image
          className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
          width={14}
          height={14}
          alt=""
          src="/icon--checklist.svg"
        />
        <b className="h-[21px] w-[108px] relative leading-[20.9px] inline-block">
          Change Password
        </b>
        <Image
          className="w-3.5 relative h-3.5 overflow-hidden shrink-0 hidden"
          width={14}
          height={14}
          alt=""
          src="/icon--checklist1.svg"
        />
      </div>
      <div className="hidden flex-row items-center justify-start gap-[7px] z-[3] text-text-subtle">
        <input className="m-0 w-[17.4px]" type="checkbox" />
        <div className="h-[21px] w-[236px] relative leading-[20.9px] font-medium inline-block">
          I have read and accept the Terms of Use
        </div>
      </div>
    </div>
  );
};

export default DatePicker;
