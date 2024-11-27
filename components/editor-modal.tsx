import type { NextPage } from "next";
import Image from "next/image";

export type EditorModalType = {
  className?: string;
};

const EditorModal: NextPage<EditorModalType> = ({ className = "" }) => {
  return (
    <div
      className={`!m-[0] absolute top-[60.1px] left-[8.8px] shadow-[0px_2.7px_2.3px_rgba(232,_236,_243,_0.25)] rounded-border-radius-4 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.5px] border-solid flex flex-row items-center justify-start py-[5.4px] px-[9px] gap-[9px] z-[3] text-left text-sm text-color-tokens-content-dark-secondary font-body-extra-large-semibold ${className}`}
    >
      <div className="h-[9px] w-[25.2px] flex flex-row items-center justify-start gap-[7.2px]">
        <Image
          className="h-[9px] w-[9px] relative"
          width={9}
          height={9}
          alt=""
          src="/iconarrowuupleft.svg"
        />
        <Image
          className="h-[9px] w-[9px] relative"
          width={9}
          height={9}
          alt=""
          src="/iconarrowuupright.svg"
        />
      </div>
      <Image
        className="h-[9px] w-[0.5px] relative"
        width={1}
        height={9}
        alt=""
        src="/separator.svg"
      />
      <div className="h-[9px] w-[65.2px] flex flex-row items-center justify-start gap-[7.2px]">
        <div className="h-[9px] w-[39.2px] flex flex-row items-center justify-start gap-[5.4px]">
          <Image
            className="h-[9px] w-[9px] relative"
            width={9}
            height={9}
            alt=""
            src="/icontextt.svg"
          />
          <div className="h-[9px] w-3.5 relative leading-[150%] font-medium inline-block">
            Inter
          </div>
          <Image
            className="h-[5.4px] w-[5.4px] relative"
            width={5}
            height={5}
            alt=""
            src="/iconcaretdown-1.svg"
          />
        </div>
        <div className="h-[9px] w-[18.8px] flex flex-row items-center justify-start gap-[5.4px]">
          <div className="h-[9px] w-2 relative leading-[150%] font-medium inline-block">
            24
          </div>
          <Image
            className="h-[5.4px] w-[5.4px] relative"
            width={5}
            height={5}
            alt=""
            src="/iconcaretdown-2.svg"
          />
        </div>
      </div>
      <Image
        className="h-[9px] w-[0.5px] relative"
        width={1}
        height={9}
        alt=""
        src="/separator-1.svg"
      />
      <div className="h-[9px] w-[41.4px] flex flex-row items-center justify-start gap-[7.2px]">
        <Image
          className="h-[9px] w-[9px] relative"
          width={9}
          height={9}
          alt=""
          src="/icontextbolder.svg"
        />
        <Image
          className="h-[9px] w-[9px] relative"
          width={9}
          height={9}
          alt=""
          src="/icontextitalic.svg"
        />
        <Image
          className="h-[9px] w-[9px] relative"
          width={9}
          height={9}
          alt=""
          src="/icontextunderline.svg"
        />
      </div>
      <Image
        className="h-[9px] w-[0.5px] relative"
        width={1}
        height={9}
        alt=""
        src="/separator-2.svg"
      />
      <div className="h-[9px] w-[48.6px] flex flex-row items-center justify-start py-0 px-0 box-border gap-[7.2px]">
        <Image
          className="h-[9px] w-[9px] relative"
          width={9}
          height={9}
          alt=""
          src="/iconsortdescending.svg"
        />
        <Image
          className="h-[9px] w-[9px] relative"
          width={9}
          height={9}
          alt=""
          src="/iconsortascending.svg"
        />
        <div className="h-[9px] w-[16.2px] flex flex-row items-center justify-start gap-[1.8px]">
          <Image
            className="h-[9px] w-[9px] relative"
            width={9}
            height={9}
            alt=""
            src="/icontextalignleft.svg"
          />
          <Image
            className="h-[5.4px] w-[5.4px] relative"
            width={5}
            height={5}
            alt=""
            src="/iconcaretdown-1.svg"
          />
        </div>
      </div>
      <Image
        className="h-[9px] w-[0.5px] relative"
        width={1}
        height={9}
        alt=""
        src="/separator-3.svg"
      />
      <div className="h-[9px] w-[16.2px] flex flex-row items-center justify-start gap-[1.8px]">
        <Image
          className="h-[9px] w-[9px] relative"
          width={9}
          height={9}
          alt=""
          src="/iconlistnumbers.svg"
        />
        <Image
          className="h-[5.4px] w-[5.4px] relative"
          width={5}
          height={5}
          alt=""
          src="/iconcaretdown-1.svg"
        />
      </div>
      <Image
        className="h-[9px] w-[0.5px] relative"
        width={1}
        height={9}
        alt=""
        src="/separator-4.svg"
      />
      <Image
        className="h-[9px] w-[9px] relative"
        width={9}
        height={9}
        alt=""
        src="/iconcaretdown-5.svg"
      />
    </div>
  );
};

export default EditorModal;
