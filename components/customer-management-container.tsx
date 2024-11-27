import type { NextPage } from "next";
import Image from "next/image";

export type CustomerManagementContainerType = {
  className?: string;
  effortlessCustomerRelationship?: string;
  seamlesslyOrganizeTrackAnd?: string;
  iconFunnel: string;
  iconFunnel1: string;
};

const CustomerManagementContainer: NextPage<
  CustomerManagementContainerType
> = ({
  className = "",
  effortlessCustomerRelationship,
  seamlesslyOrganizeTrackAnd,
  iconFunnel,
  iconFunnel1,
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[42px] box-border min-w-[395px] max-w-full text-left text-29xl text-color-tokens-content-dark-primary font-body-extra-large-semibold mq450:min-w-full ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-4">
        <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
          {effortlessCustomerRelationship}
        </h1>
        <div className="relative text-lg leading-[150%] text-color-tokens-content-dark-secondary">
          {seamlesslyOrganizeTrackAnd}
        </div>
        <button className="cursor-pointer border-color-tokens-content-dark-primary border-[1px] border-solid py-2 px-[18px] bg-color-tokens-background-primary rounded-border-radius-4 flex flex-row items-center justify-center gap-2">
          <Image
            className="w-4 relative h-4 hidden"
            width={16}
            height={16}
            alt=""
            src={iconFunnel}
          />
          <div className="relative text-base leading-[150%] font-medium font-body-extra-large-semibold text-color-tokens-content-dark-primary text-left">
            Learn More
          </div>
          <Image
            className="w-4 relative h-4 hidden"
            width={16}
            height={16}
            alt=""
            src={iconFunnel1}
          />
        </button>
      </div>
    </div>
  );
};

export default CustomerManagementContainer;
