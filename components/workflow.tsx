import type { NextPage } from "next";
import Image from "next/image";
import Badge from "./badge";
import Indicator from "./indicator";
import CustomerManagementContainer from "./customer-management-container";

export type WorkflowType = {
  className?: string;
};

const Workflow: NextPage<WorkflowType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1300px] flex flex-row items-end justify-start py-0 pl-5 pr-0 box-border gap-[71.8px] max-w-full text-left text-3xs-7 text-color-tokens-content-dark-secondary font-body-extra-large-semibold mq450:gap-[18px] mq750:gap-9 mq1050:flex-wrap ${className}`}
    >
      <div className="flex-1 flex flex-col items-end justify-start min-w-[390px] max-w-full mq450:min-w-full">
        <div className="w-[533.2px] flex flex-row items-start justify-end py-0 pl-[173px] pr-[174px] box-border relative max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border mq750:pl-[86px] mq750:pr-[87px] mq750:box-border">
          <div className="self-stretch flex-1 shadow-[-10px_14px_15.3px_rgba(194,_194,_194,_0.12)] rounded-10xs-8 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.7px] border-solid flex flex-col items-start justify-center py-[15px] px-4 gap-[8.3px] shrink-0 z-[1]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 gap-5">
              <div className="bg-color-tokens-action-outline-disbaled flex flex-row items-center justify-start py-[2.8px] px-0.5">
                <Image
                  className="h-[16.6px] w-[16.6px] relative"
                  loading="lazy"
                  width={17}
                  height={17}
                  alt=""
                  src="/iconbriefcase.svg"
                />
              </div>
              <Image
                className="h-[8.3px] w-[8.3px] relative"
                width={8}
                height={8}
                alt=""
                src="/iconcaretright.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-[2.8px]">
              <div className="relative leading-[140%] font-medium">
                Active Company
              </div>
              <div className="flex flex-row items-center justify-start text-lgi-4 text-color-tokens-content-dark-primary">
                <div className="relative leading-[120%] font-medium">
                  3 Company
                </div>
              </div>
            </div>
          </div>
          <div className="h-[calc(100%_+_0.7px)] w-[185.7px] !m-[0] absolute top-[0px] right-[-27.5px] bottom-[-0.7px] shadow-[-10px_14px_15.3px_rgba(194,_194,_194,_0.12)] rounded-10xs-8 bg-color-tokens-background-primary border-color-tokens-border-informative border-[0.7px] border-solid box-border flex flex-col items-start justify-center py-[15px] px-4 gap-[8.3px] z-[1]">
            <div className="self-stretch flex flex-row items-center justify-between py-0 px-0 gap-5">
              <div className="bg-color-tokens-action-outline-disbaled flex flex-row items-center justify-start py-[2.8px] px-0.5">
                <Image
                  className="h-[16.6px] w-[16.6px] relative"
                  loading="lazy"
                  width={17}
                  height={17}
                  alt=""
                  src="/iconclipboardtext.svg"
                />
              </div>
              <Image
                className="h-[8.3px] w-[8.3px] relative"
                width={8}
                height={8}
                alt=""
                src="/iconcaretright.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-center gap-[2.8px]">
              <div className="relative leading-[140%] font-medium inline-block min-w-[65px]">
                Ongoing Task
              </div>
              <div className="flex flex-row items-center justify-start text-lgi-4 text-color-tokens-content-dark-primary">
                <div className="relative leading-[120%] font-medium">
                  5 Task
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[13px_12.1px_17.7px_rgba(194,_194,_194,_0.07)] rounded-7xs-7 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.7px] border-solid box-border flex flex-col items-start justify-start py-4 pl-[17px] pr-4 gap-[14.3px] shrink-0 max-w-full mt-[-65.5px] text-xs-4 text-color-tokens-content-dark-primary">
          <div className="relative text-mini-3 leading-[120%] font-medium">
            Active Projects
          </div>
          <div className="self-stretch flex flex-row items-start justify-start text-3xl-9">
            <div className="flex flex-col items-start justify-center py-0 pl-0 pr-5 gap-[5.7px]">
              <div className="flex flex-row items-center justify-start gap-[8.6px]">
                <div className="relative leading-[120%] font-medium mq450:text-lg mq450:leading-[22px]">
                  68 Projects
                </div>
                <Badge
                  color="Green"
                  size="Small"
                  type="Outlined"
                  showIcon
                  showDots={false}
                  editValue="12%"
                  iconTrendUp="/icontrendup.svg"
                />
              </div>
              <div className="relative text-3xs leading-[140%] font-medium text-color-tokens-content-dark-secondary">
                This Month
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border relative gap-10 max-w-full text-right mq750:gap-5">
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border gap-[22.9px] max-w-full mq750:flex-wrap">
              <div className="relative leading-[140%] inline-block min-w-[28.9px]">
                100
              </div>
              <div className="h-[0.7px] flex-1 relative border-color-tokens-content-dark-tertiary border-t-[0.7px] border-dashed box-border min-w-[335px] max-w-full" />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border gap-[22.9px] max-w-full mq750:flex-wrap">
              <div className="w-[28.9px] relative leading-[140%] inline-block shrink-0">
                50
              </div>
              <div className="h-[0.7px] flex-1 relative border-color-tokens-content-dark-tertiary border-t-[0.7px] border-dashed box-border min-w-[335px] max-w-full" />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border gap-[22.9px] max-w-full mq750:flex-wrap">
              <div className="w-[28.9px] relative leading-[140%] inline-block shrink-0">
                25
              </div>
              <div className="h-[0.7px] flex-1 relative border-color-tokens-content-dark-tertiary border-t-[0.7px] border-dashed box-border min-w-[335px] max-w-full" />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start py-0 px-0 box-border gap-[22.9px] max-w-full mq750:flex-wrap">
              <div className="w-[28.9px] relative leading-[140%] inline-block shrink-0">
                0
              </div>
              <div className="h-[0.7px] flex-1 relative border-color-tokens-content-dark-tertiary border-t-[0.7px] border-dashed box-border min-w-[335px] max-w-full" />
            </div>
            <Image
              className="w-[523.7px] h-[calc(100%_-_3.8px)] absolute !m-[0] top-[2.6px] right-[-2.1px] bottom-[1.2px] max-h-full object-contain z-[1]"
              width={524}
              height={180}
              alt=""
              src="/vector-367.svg"
            />
            <Image
              className="w-[523.7px] h-[82.2px] absolute !m-[0] top-[calc(50%_-_89.4px)] right-[-2.1px] object-contain z-[2]"
              width={524}
              height={82}
              alt=""
              src="/vector-365.svg"
            />
            <Indicator />
          </div>
          <div className="self-stretch flex flex-row items-end justify-between pt-[1.1px] pb-0 pl-[47px] pr-0 gap-5 text-center mq450:pl-5 mq450:box-border mq750:flex-wrap">
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Jan
            </div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Feb
            </div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Mar
            </div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Apr
            </div>
            <div className="relative leading-[140%]">May</div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Jun
            </div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Jul
            </div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Aug
            </div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Sep
            </div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Oct
            </div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Nov
            </div>
            <div className="relative leading-[140%] inline-block min-w-[23.9px]">
              Dec
            </div>
          </div>
        </div>
      </div>
      <CustomerManagementContainer
        effortlessCustomerRelationship="Effortless Customer Relationship Management"
        seamlesslyOrganizeTrackAnd="Seamlessly organize, track, and access all customer information, interactions, and relationships in one user-friendly platform."
        iconFunnel="/iconfunnel4.svg"
        iconFunnel1="/iconfunnel5.svg"
      />
    </div>
  );
};

export default Workflow;
