import type { NextPage } from "next";
import Content4 from "./content4";

export type TestimonialType = {
  className?: string;

  /** Variant props */
  variant?: 03;
};

const Testimonial: NextPage<TestimonialType> = ({
  className = "",
  variant = 1,
}) => {
  return (
    <section
      className={`self-stretch bg-color-tokens-background-primary flex flex-col items-center justify-center py-24 px-20 gap-12 z-[12] text-center text-29xl text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
      data-variant={variant}
    >
      <div className="self-stretch flex flex-col items-center justify-center gap-4">
        <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-[inherit]">
          Used by more than 10K+ Business
        </h1>
        <div className="self-stretch relative text-lg leading-[150%] text-color-tokens-content-dark-secondary">
          Hear what they say about Venture and why you should choose Venture
        </div>
      </div>
      <Content4 />
    </section>
  );
};

export default Testimonial;
