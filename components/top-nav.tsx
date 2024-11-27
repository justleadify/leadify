import type { NextPage } from "next";
import Image from "next/image";
import Buttons from "./buttons";

export type TopNavType = {
  className?: string;
};

const TopNav: NextPage<TopNavType> = ({ className = "" }) => {
  return (
    <header
      className={`self-stretch bg-color-tokens-background-primary flex flex-row items-center justify-between py-6 px-20 z-[0] text-left text-xl text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
    >
      <div className="flex flex-row items-center justify-start gap-3">
        <Image
          className="h-[24.1px] w-7 relative"
          loading="lazy"
          width={28}
          height={24}
          alt=""
          src="/logogram.svg"
        />
        <h3 className="m-0 relative text-inherit leading-[140%] font-medium font-[inherit]">
          Venture
        </h3>
      </div>
      <nav className="m-0 overflow-hidden flex flex-row items-center justify-start gap-10 text-left text-sm text-color-tokens-content-dark-primary font-body-extra-large-semibold">
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%]">About</div>
        </div>
        <div className="relative leading-[150%]">Features</div>
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%]">Pricing</div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <div className="relative leading-[150%]">Blog</div>
        </div>
      </nav>
      <div className="flex flex-row items-center justify-end gap-4">
        <Buttons
          hierarchy="Link"
          iconOnly={false}
          showBackground
          size="Medium"
          state="Default"
          stylizedButton={false}
          showText
          text="Log in"
        />
        <button className="cursor-pointer border-gray-200 border-[1px] border-solid py-2 px-3 bg-color-tokens-content-dark-primary shadow-[0px_10px_12px_rgba(255,_255,_255,_0.26)_inset,_0px_0px_0px_1px_#000,_0px_0px_0px_4px_rgba(0,_0,_0,_0.04)] rounded-border-radius-4 overflow-hidden flex flex-row items-center justify-center gap-2">
          <Image
            className="w-4 relative h-4 hidden"
            width={16}
            height={16}
            alt=""
            src="/iconfunnel.svg"
          />
          <div className="relative text-sm leading-[150%] font-medium font-body-extra-large-semibold text-color-tokens-background-primary text-left">
            Get Started
          </div>
          <Image
            className="w-4 relative h-4 hidden"
            width={16}
            height={16}
            alt=""
            src="/iconfunnel1.svg"
          />
        </button>
      </div>
    </header>
  );
};

export default TopNav;
