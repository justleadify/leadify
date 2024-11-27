import type { NextPage } from "next";
import Image from "next/image";

export type SocialProofContainerType = {
  className?: string;
};

const SocialProofContainer: NextPage<SocialProofContainerType> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[134px] box-border max-w-full text-left text-29xl text-color-tokens-content-dark-primary font-body-extra-large-semibold mq750:pb-[87px] mq750:box-border ${className}`}
    >
      <div className="flex-1 [backdrop-filter:blur(4px)] bg-color-tokens-background-primary overflow-hidden flex flex-row items-center justify-center py-24 px-20 box-border gap-10 max-w-full lg:flex-wrap mq450:pt-[62px] mq450:pb-[62px] mq450:box-border mq750:gap-5 mq750:pl-10 mq750:pr-10 mq750:box-border">
        <div className="w-[584px] flex flex-col items-start justify-start gap-4 max-w-full lg:flex-1 mq1050:min-w-full">
          <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            Trusted by Many Established Companies
          </h1>
          <div className="w-[406px] relative text-lg leading-[150%] text-color-tokens-content-dark-secondary inline-block max-w-full">
            20+ Businesses and Companies uses Converge for theirs CRM Platform
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-center py-0 pl-[149px] pr-0 box-border gap-8 min-w-[426px] max-w-full mq450:pl-5 mq450:box-border mq750:gap-4 mq750:pl-[74px] mq750:box-border mq750:min-w-full">
          <div className="self-stretch flex flex-row items-center justify-center gap-12 mq750:gap-6 mq750:flex-wrap">
            <Image
              className="h-12 w-[135px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={135}
              height={48}
              alt=""
              src="/company-logo.svg"
            />
            <Image
              className="h-12 w-[163px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={163}
              height={48}
              alt=""
              src="/company-logo-1.svg"
            />
            <Image
              className="h-12 w-[113px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={113}
              height={48}
              alt=""
              src="/company-logo-2.svg"
            />
          </div>
          <div className="w-[447px] flex flex-row items-center justify-between gap-5 max-w-full mq750:flex-wrap mq750:justify-center">
            <Image
              className="h-12 w-[121px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={121}
              height={48}
              alt=""
              src="/company-logo-3.svg"
            />
            <Image
              className="h-12 w-[132px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={132}
              height={48}
              alt=""
              src="/company-logo-4.svg"
            />
            <Image
              className="h-12 w-[98px] relative overflow-hidden shrink-0"
              loading="lazy"
              width={98}
              height={48}
              alt=""
              src="/company-logo-5.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofContainer;
