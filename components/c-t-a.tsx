import type { NextPage } from "next";
import Image from "next/image";
import Content1 from "./content1";

export type CTAType = {
  className?: string;

  /** Variant props */
  variant?: 03;
};

const CTA: NextPage<CTAType> = ({ className = "", variant = 1 }) => {
  return (
    <section
      className={`self-stretch bg-color-tokens-content-dark-primary overflow-hidden flex flex-col items-center justify-center py-6 px-0 relative gap-12 z-[13] text-center text-29xl text-color-tokens-background-primary font-body-extra-large-semibold ${className}`}
      data-variant={variant}
    >
      <Image
        className="w-[2740px] h-[346px] absolute !m-[0] top-[calc(50%_-_173.5px)] left-[calc(50%_-_1370px)] overflow-hidden shrink-0 z-[0]"
        loading="lazy"
        width={2740}
        height={346}
        alt=""
        src="/layer-1.svg"
      />
      <Content1 />
    </section>
  );
};

export default CTA;
