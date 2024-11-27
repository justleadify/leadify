import type { NextPage } from "next";
import Contents from "./contents";

export type FooterType = {
  className?: string;

  /** Variant props */
  variant?: 02;
};

const Footer: NextPage<FooterType> = ({ className = "", variant = 1 }) => {
  return (
    <footer
      className={`self-stretch bg-color-tokens-background-primary overflow-hidden flex flex-col items-start justify-start py-16 px-[120px] gap-14 z-[14] text-left text-9xl-6 text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
      data-variant={variant}
    >
      <Contents />
      <div className="self-stretch relative text-sm leading-[150%] text-color-tokens-content-dark-tertiary text-center mix-blend-normal">
        ©2022. Venture Ltd. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
