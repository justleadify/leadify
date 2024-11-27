import type { NextPage } from "next";
import Image from "next/image";

export type TextAreaType = {
  className?: string;
  showSubtitle?: boolean;
  editCaption?: string;
  editSuffix?: string;
  showValue?: boolean;
  showSuffix?: boolean;
  editPlaceholder?: string;
  editLable?: string;
  editSubtitle?: string;
  showCaption?: boolean;
  showLabel?: boolean;

  /** Variant props */
  property1?: string;
};

const TextArea: NextPage<TextAreaType> = ({
  className = "",
  property1 = "Default",
  showSubtitle = false,
  editCaption = "We will notify the customer and issue a full refund",
  editSuffix = "0/50",
  showValue = true,
  showSuffix = false,
  editPlaceholder = "Monthly Product Discussion by Design and Marketing Teams with CEO to Plan our future products sales and reports",
  editLable = "Description",
  editSubtitle = "Organizations are the top level entities that are used to group your applications and manage organization specific resource (e.g., databases, cache, queues)",
  showCaption = false,
  showLabel = true,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start relative gap-[7px] text-left text-smi-2 text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
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
      <div className="self-stretch rounded-border-radius-4 flex flex-row items-start justify-start relative gap-[10.5px] z-[1] text-color-tokens-content-dark-secondary">
        {showValue && (
          <div className="flex-1 relative leading-[150%] z-[0]">
            {editPlaceholder}
          </div>
        )}
        {showSuffix && (
          <div className="w-[184px] absolute !m-[0] right-[7px] bottom-[5.4px] text-2xs-5 leading-[140%] text-color-tokens-content-dark-tertiary text-right z-[1]">
            {editSuffix}
          </div>
        )}
      </div>
      <div className="!m-[0] absolute top-[0px] right-[0.1px] rounded-11xs-7 hidden flex-row items-center justify-end gap-[8.7px] z-[2] text-action-color-main">
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
        <div className="relative text-2xs-5 leading-[140%] text-color-tokens-content-dark-tertiary z-[3]">
          {editCaption}
        </div>
      )}
      <div className="hidden flex-row items-center justify-start gap-[7px] z-[4] text-text-subtle">
        <div className="flex flex-row items-start justify-start py-[1.7px] px-0">
          <div className="w-[17.4px] relative rounded-11xs-7 bg-color-tokens-background-primary border-input-default border-[0.9px] border-solid box-border h-[17.4px] overflow-hidden shrink-0" />
        </div>
        <div className="h-[21px] w-[236px] relative leading-[20.9px] font-medium inline-block">
          I have read and accept the Terms of Use
        </div>
      </div>
    </div>
  );
};

export default TextArea;
