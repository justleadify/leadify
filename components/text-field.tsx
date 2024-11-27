import type { NextPage } from "next";
import Image from "next/image";

export type TextFieldType = {
  className?: string;
  showSuffix?: boolean;
  showCaption?: boolean;
  showIconRight?: boolean;
  editSuffix?: string;
  showValue?: boolean;
  editPlaceholder?: string;
  showRightIcon?: boolean;
  editCaption?: string;
  editLable?: string;
  editSubtitle?: string;
  showSubtitle?: boolean;
  showLabel?: boolean;
  showPillars?: boolean;
  showLeftIcon?: boolean;
  showPrefix?: boolean;
  iconArrowDown: string;
  iconMagnifyingGlass1: string;
  iconSearch: string;

  /** Variant props */
  property1?: string;
};

const TextField: NextPage<TextFieldType> = ({
  className = "",
  property1 = "Default",
  showSuffix = false,
  showCaption = false,
  showIconRight = false,
  editSuffix = "0/50",
  showValue = true,
  editPlaceholder = "Daily Sprint",
  showRightIcon = false,
  editCaption = "We will notify the customer and issue a full refund",
  editLable = "Task Checklist",
  editSubtitle = "Organizations are the top level entities that are used to group your applications and manage organization specific resource (e.g., databases, cache, queues)",
  showSubtitle = false,
  showLabel = true,
  showPillars = false,
  showLeftIcon = false,
  showPrefix = false,
  iconArrowDown,
  iconMagnifyingGlass1,
  iconSearch,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start relative gap-[7px] text-left text-smi-2 text-color-tokens-content-dark-tertiary font-body-extra-large-semibold ${className}`}
      data-property1={property1}
    >
      {showLabel && (
        <div className="self-stretch flex flex-col items-start justify-center z-[0] text-color-tokens-content-dark-primary">
          <div className="relative leading-[150%] font-medium">{editLable}</div>
          {showSubtitle && (
            <div className="w-[392.4px] relative leading-[20.9px] text-text-dark-subtle">
              {editSubtitle}
            </div>
          )}
        </div>
      )}
      <div className="w-[392.4px] rounded-border-radius-4 bg-color-tokens-background-primary border-color-tokens-content-dark-tertiary border-[0.9px] border-solid box-border hidden flex-row items-center justify-start py-[8.7px] px-[10.5px] gap-[10.5px] z-[1]">
        {showPrefix && (
          <div className="h-[17.4px] flex flex-row items-center justify-start gap-3.5">
            <div className="flex flex-row items-center justify-start">
              <div className="h-[18px] w-[27.9px] relative leading-[150%] inline-block shrink-0">
                +1
              </div>
              <Image
                className="h-[17.4px] w-[17.4px] relative"
                width={17}
                height={17}
                alt=""
                src={iconArrowDown}
              />
            </div>
            <div className="w-[0.9px] relative bg-color-tokens-border-primary h-[29.6px]" />
          </div>
        )}
        {showLeftIcon && (
          <Image
            className="w-[17.4px] relative h-[17.4px]"
            width={17}
            height={17}
            alt=""
            src="/iconmagnifyingglass.svg"
          />
        )}
        {showValue && (
          <div className="h-[18px] w-[371px] relative leading-[150%] inline-block shrink-0">
            {editPlaceholder}
          </div>
        )}
        {showPillars && (
          <div className="rounded-9xs-5 bg-theme-dark-lighter-background flex flex-row items-center justify-start py-0 pl-[7px] pr-[3.5px] gap-[3.5px] text-greyscale-300">
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
        )}
        {showSuffix && (
          <div className="w-[131.2px] relative text-2xs-5 leading-[140%] text-right">
            {editSuffix}
          </div>
        )}
        {showRightIcon && (
          <Image
            className="w-[17.4px] relative h-[17.4px]"
            width={17}
            height={17}
            alt=""
            src={iconMagnifyingGlass1}
          />
        )}
        {showIconRight && (
          <Image
            className="w-[17.4px] relative h-[17.4px]"
            width={17}
            height={17}
            alt=""
            src={iconSearch}
          />
        )}
      </div>
      <div className="!m-[0] absolute top-[0px] right-[-0.6px] rounded-11xs-7 hidden flex-row items-center justify-end gap-[8.7px] z-[2] text-action-color-main">
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
      {showCaption && (
        <div className="relative text-2xs-5 leading-[140%] z-[3]">
          {editCaption}
        </div>
      )}
      <div className="hidden flex-row items-center justify-start gap-[7px] z-[4] text-text-subtle">
        <input className="m-0 w-[17.4px]" type="checkbox" />
        <div className="h-[21px] w-[236px] relative leading-[20.9px] font-medium inline-block">
          I have read and accept the Terms of Use
        </div>
      </div>
    </div>
  );
};

export default TextField;
