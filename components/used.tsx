import type { NextPage } from "next";
import Image from "next/image";
import TaskModal from "./task-modal";

export type UsedType = {
  className?: string;
};

const Used: NextPage<UsedType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-0 px-20 pb-[150.2px] box-border max-w-full text-left text-base-7 text-color-tokens-content-dark-primary font-body-extra-large-semibold mq750:pl-10 mq750:pr-10 mq750:pb-[98px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-12 max-w-full lg:flex-wrap mq750:gap-6">
        <div className="h-[436px] flex-1 relative overflow-hidden min-w-[406px] max-w-full mq750:min-w-full">
          <TaskModal type="Task Details v2" />
          <input
            className="[border:none] [outline:none] bg-[transparent] absolute bottom-[-85.2px] left-[624px] [background:linear-gradient(180deg,_#f7f9fb,_rgba(247,_249,_251,_0))] w-[624px] h-[85px] [transform:_rotate(-180deg)] [transform-origin:0_0] z-[1]"
            type="text"
          />
        </div>
        <div className="w-[608px] flex flex-col items-start justify-start pt-[97px] px-0 pb-0 box-border max-w-full text-29xl lg:flex-1 mq1050:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-4">
            <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-[inherit] mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
              Enhanced Team Collaboration
            </h1>
            <div className="relative text-lg leading-[150%] text-color-tokens-content-dark-secondary">
              Foster teamwork and seamless collaboration with our CRM-integrated
              hub for task assignment.
            </div>
            <button className="cursor-pointer border-color-tokens-content-dark-primary border-[1px] border-solid py-2 px-[18px] bg-color-tokens-background-primary rounded-border-radius-4 flex flex-row items-center justify-center gap-2">
              <Image
                className="w-4 relative h-4 hidden"
                width={16}
                height={16}
                alt=""
                src="/iconfunnel4.svg"
              />
              <div className="relative text-base leading-[150%] font-medium font-body-extra-large-semibold text-color-tokens-content-dark-primary text-left">
                Learn More
              </div>
              <Image
                className="w-4 relative h-4 hidden"
                width={16}
                height={16}
                alt=""
                src="/iconfunnel5.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Used;
