import type { NextPage } from "next";
import Image from "next/image";
import Content from "./content";

export type AdvantagesType = {
  className?: string;
};

const Advantages: NextPage<AdvantagesType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-color-tokens-background-primary overflow-hidden flex flex-col items-start justify-start py-24 px-20 box-border gap-12 max-w-full z-[3] text-left text-29xl text-color-tokens-content-dark-primary font-body-extra-large-semibold mq450:pt-10 mq450:pb-10 mq450:box-border mq750:gap-6 mq750:pl-10 mq750:pr-10 mq750:box-border mq1050:pt-[62px] mq1050:pb-[62px] mq1050:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="w-[733px] flex flex-col items-start justify-start gap-4 max-w-full">
          <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            Advantage of Venture as Your CRM Platform
          </h1>
          <div className="self-stretch relative text-lg leading-[150%] text-color-tokens-content-dark-secondary">
            Here are some reasons about why you should choose Venture as your
            CRM.
          </div>
        </div>
        <div className="flex flex-row items-end justify-start gap-4">
          <div className="rounded-border-radius-100 border-color-tokens-action-outline-disbaled border-[1px] border-solid flex flex-row items-center justify-center p-2.5">
            <Image
              className="w-5 relative h-5"
              width={20}
              height={20}
              alt=""
              src="/iconcaretleft.svg"
            />
          </div>
          <div className="rounded-border-radius-100 border-color-tokens-content-dark-primary border-[1px] border-solid flex flex-row items-center justify-center p-2.5">
            <Image
              className="h-5 w-5 relative"
              width={20}
              height={20}
              alt=""
              src="/iconcaretright-2.svg"
            />
          </div>
        </div>
      </div>
      <div className="overflow-x-auto flex flex-row items-start justify-start gap-5 max-w-full text-center text-xl">
        <Content
          effortlessDataManagement="Effortless Data Management:"
          simplifyCentralizingCustomer="Simplify centralizing customer data for easy access, updates, and analysis, providing a comprehensive clientele overview."
        />
        <Content
          illustrationOverflowY="auto"
          illustrationOverflow="unset"
          effortlessDataManagement="Contact Management"
          effortlessDataManagementWidth="209px"
          simplifyCentralizingCustomer="Easily organize and track all contacts in one place, with categorized and updated details for top-notch customer service."
        />
        <Content
          illustrationOverflowY="unset"
          illustrationOverflow="hidden"
          effortlessDataManagement="Enhanced Customer Insights:"
          effortlessDataManagementWidth="282px"
          simplifyCentralizingCustomer="Enhance customer understanding with advanced CRM analytics, delving deeper into preferences and behaviors."
        />
      </div>
    </section>
  );
};

export default Advantages;
