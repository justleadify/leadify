import type { NextPage } from "next";
import Image from "next/image";

export type TagType = {
  className?: string;
  label?: boolean;
  icon?: boolean;
  editContent?: string;

  /** Variant props */
  states?: string;
  type?: string;
};

const Tag: NextPage<TagType> = ({
  className = "",
  states = "Default",
  type = "Removable Tag",
  label = false,
  icon = false,
  editContent = "Robert Fox",
}) => {
  return (
    <div
      className={`rounded-border-radius-100 bg-color-tokens-action-outline-disbaled flex flex-row items-center justify-start py-[1.8px] px-[3.6px] gap-[2.7px] text-left text-7xs-4 text-color-tokens-content-dark-secondary font-body-extra-large-semibold ${className}`}
      data-states={states}
      data-type={type}
    >
      {icon && (
        <Image
          className="w-[7.2px] relative h-[7.2px]"
          width={7}
          height={7}
          alt=""
          src="/iconusersthree.svg"
        />
      )}
      {label && (
        <Image
          className="w-[7.2px] relative h-[7.2px] overflow-hidden shrink-0"
          width={7}
          height={7}
          alt=""
          src="/label.svg"
        />
      )}
      <div className="h-2 w-[29px] relative leading-[140%] font-medium inline-block">
        {editContent}
      </div>
      <Image
        className="h-[5.4px] w-[5.4px] relative"
        width={5}
        height={5}
        alt=""
        src="/iconx.svg"
      />
    </div>
  );
};

export default Tag;
