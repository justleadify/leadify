import type { NextPage } from "next";
import Image from "next/image";

export type ContentsType = {
  className?: string;
};

const Contents: NextPage<ContentsType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between text-left text-9xl-6 text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-6">
        <div className="flex flex-row items-center justify-start gap-[17.1px]">
          <Image
            className="h-[34.4px] w-10 relative"
            width={40}
            height={34}
            alt=""
            src="/logogram-1.svg"
          />
          <div className="relative leading-[140%] font-medium">Venture</div>
        </div>
        <div className="flex flex-row items-center justify-start gap-4">
          <Image
            className="h-10 w-10 relative"
            loading="lazy"
            width={40}
            height={40}
            alt=""
            src="/group-14319.svg"
          />
          <Image
            className="h-10 w-10 relative"
            loading="lazy"
            width={40}
            height={40}
            alt=""
            src="/group-14318.svg"
          />
          <Image
            className="h-10 w-10 relative"
            loading="lazy"
            width={40}
            height={40}
            alt=""
            src="/group-14320.svg"
          />
          <Image
            className="h-10 w-10 relative"
            loading="lazy"
            width={40}
            height={40}
            alt=""
            src="/group-14321.svg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start gap-4 text-lg">
        <div className="w-[200px] flex flex-col items-start justify-start gap-4">
          <div className="relative leading-[150%] font-semibold mix-blend-normal">
            Pages
          </div>
          <div className="flex flex-col items-start justify-start gap-4 text-base text-color-tokens-content-dark-secondary">
            <div className="relative leading-[150%] mix-blend-normal">
              About Us
            </div>
            <div className="relative leading-[150%] mix-blend-normal">
              Features
            </div>
            <div className="relative leading-[150%] mix-blend-normal">
              Product
            </div>
            <div className="relative leading-[150%] mix-blend-normal">
              Pricing
            </div>
          </div>
        </div>
        <div className="w-[200px] flex flex-col items-start justify-start gap-4">
          <div className="relative leading-[150%] font-semibold mix-blend-normal">
            Company
          </div>
          <div className="flex flex-col items-start justify-start gap-4 text-base text-color-tokens-content-dark-secondary">
            <div className="relative leading-[150%] mix-blend-normal">
              Careers
            </div>
            <div className="relative leading-[150%] mix-blend-normal">
              Guide
            </div>
            <div className="relative leading-[150%] mix-blend-normal">
              Startup Program
            </div>
          </div>
        </div>
        <div className="w-[200px] flex flex-col items-start justify-start gap-4">
          <div className="relative leading-[150%] font-semibold mix-blend-normal">
            Support
          </div>
          <div className="flex flex-col items-start justify-start gap-4 text-base text-color-tokens-content-dark-secondary">
            <div className="relative leading-[150%] mix-blend-normal">
              Help Center
            </div>
            <div className="relative leading-[150%] mix-blend-normal">
              Customer Support
            </div>
            <div className="relative leading-[150%] mix-blend-normal">
              API Docs
            </div>
            <div className="relative leading-[150%] mix-blend-normal">
              System Status
            </div>
          </div>
        </div>
        <div className="w-[200px] flex flex-col items-start justify-start gap-4">
          <div className="relative leading-[150%] font-semibold mix-blend-normal">
            Resources
          </div>
          <div className="flex flex-col items-start justify-start gap-4 text-base text-color-tokens-content-dark-secondary">
            <div className="relative leading-[150%] mix-blend-normal">FAQ</div>
            <div className="relative leading-[150%] mix-blend-normal">Blog</div>
            <div className="relative leading-[150%] mix-blend-normal">
              Privacy Policy
            </div>
            <div className="relative leading-[150%] mix-blend-normal">
              Terms of Service
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
