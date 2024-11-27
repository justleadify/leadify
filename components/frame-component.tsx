import type { NextPage } from "next";
import Image from "next/image";
import CustomerManagementContainer from "./customer-management-container";
import Badge from "./badge";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={`w-[1398.2px] flex flex-row items-start justify-start pt-0 px-20 pb-[222.5px] box-border max-w-full text-left text-xs text-color-tokens-content-dark-primary font-body-extra-large-semibold lg:pl-10 lg:pr-10 lg:box-border mq750:pb-[145px] mq750:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-end justify-start gap-[67.2px] max-w-full lg:flex-wrap mq450:gap-[17px] mq750:gap-[34px]">
        <CustomerManagementContainer
          effortlessCustomerRelationship="Data-Driven Insights and Strategy Optimization"
          seamlesslyOrganizeTrackAnd="Unlock your data's full potential. Track, measure, and extract valuable CRM insights to optimize your business strategies."
          iconFunnel="/iconfunnel6.svg"
          iconFunnel1="/iconfunnel6.svg"
        />
        <div className="rounded-md bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid box-border flex flex-col items-start justify-start pt-[19px] pb-[13px] pl-5 pr-[18px] relative gap-[15px] min-w-[563px] max-w-full lg:flex-1 mq750:min-w-full">
          <div className="relative text-mini leading-[120%] font-medium">
            Sales Revenues
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-5 text-5xl-1 mq750:flex-wrap">
            <div className="flex flex-col items-start justify-center gap-1.5">
              <div className="flex flex-row items-center justify-start gap-[9px]">
                <div className="relative leading-[120%] font-medium mq450:text-lgi mq450:leading-[23px]">
                  $220,123k
                </div>
                <Badge
                  color="Green"
                  size="Small"
                  type="Outlined"
                  showIcon
                  showDots={false}
                  editValue="12%"
                  iconTrendUp="/icontrendup-2.svg"
                  iconTrendUpWidth="12px"
                  iconTrendUpHeight="12px"
                  badgeFontSize="9px"
                />
              </div>
              <div className="relative text-2xs-5 leading-[140%] font-medium text-color-tokens-content-dark-secondary inline-block min-w-[98px]">
                Average Open Rate
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-3 text-2xs-5">
              <div className="rounded-10xs bg-color-tokens-background-primary border-color-tokens-content-dark-primary border-[0.8px] border-solid flex flex-row items-center justify-center py-1.5 px-[9px] gap-1.5">
                <Image
                  className="w-3 relative h-3 hidden"
                  width={12}
                  height={12}
                  alt=""
                  src="/iconcaretdown2.svg"
                />
                <div className="h-4 relative leading-[150%] font-medium inline-block">
                  January, 2023 - December, 2023
                </div>
                <Image
                  className="h-3 w-3 relative"
                  width={12}
                  height={12}
                  alt=""
                  src="/iconcaretdown-8.svg"
                />
              </div>
              <div className="rounded-10xs bg-color-tokens-background-primary border-color-tokens-content-dark-primary border-[0.8px] border-solid flex flex-row items-center justify-center py-1.5 px-[9px] gap-1.5">
                <Image
                  className="w-3 relative h-3 hidden"
                  width={12}
                  height={12}
                  alt=""
                  src="/iconcaretdown2.svg"
                />
                <div className="relative leading-[150%] font-medium">
                  Monthly
                </div>
                <Image
                  className="h-3 w-3 relative"
                  width={12}
                  height={12}
                  alt=""
                  src="/iconcaretdown-8.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start relative gap-[42.1px] max-w-full text-right mq750:gap-[21px]">
            <div className="self-stretch flex flex-row items-center justify-start gap-[24.1px] max-w-full mq750:flex-wrap">
              <div className="relative leading-[140%] inline-block min-w-[31px]">
                300k
              </div>
              <div className="h-[0.8px] flex-1 relative border-color-tokens-content-dark-tertiary border-t-[0.8px] border-dashed box-border min-w-[305px] max-w-full" />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[24.1px] max-w-full mq750:flex-wrap">
              <div className="relative leading-[140%]">200k</div>
              <div className="h-[0.8px] flex-1 relative border-color-tokens-content-dark-tertiary border-t-[0.8px] border-dashed box-border min-w-[305px] max-w-full" />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[24.1px] max-w-full mq750:flex-wrap">
              <div className="relative leading-[140%] inline-block min-w-[29px]">
                100k
              </div>
              <div className="h-[0.8px] flex-1 relative border-color-tokens-content-dark-tertiary border-t-[0.8px] border-dashed box-border min-w-[306px] max-w-full" />
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[24.1px] max-w-full mq750:flex-wrap">
              <div className="w-[30.3px] relative leading-[140%] inline-block shrink-0">
                0k
              </div>
              <div className="h-[0.8px] flex-1 relative border-color-tokens-content-dark-tertiary border-t-[0.8px] border-dashed box-border min-w-[305px] max-w-full" />
            </div>
            <Image
              className="w-[475px] h-[115px] absolute !m-[0] top-[calc(50%_-_93.15px)] right-[0.1px] z-[1]"
              width={475}
              height={115}
              alt=""
              src="/content.svg"
            />
            <Image
              className="w-[475px] h-[calc(100%_-_4.9px)] absolute !m-[0] top-[4px] right-[0.1px] bottom-[0.9px] max-h-full z-[2]"
              width={475}
              height={189}
              alt=""
              src="/content-1.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-end justify-between pt-px pb-0 pl-[50px] pr-0 text-center mq450:pl-5 mq450:box-border mq750:flex-wrap">
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Jan
            </div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Feb
            </div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Mar
            </div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Apr
            </div>
            <div className="relative leading-[140%]">May</div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Jun
            </div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Jul
            </div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Aug
            </div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Sep
            </div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Oct
            </div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Nov
            </div>
            <div className="relative leading-[140%] inline-block min-w-[25.1px]">
              Dec
            </div>
          </div>
          <div className="w-[211.8px] !m-[0] absolute right-[-29.4px] bottom-[-30.7px] rounded-6xs-4 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.8px] border-solid box-border flex flex-col items-start justify-start pt-[18px] pb-[23px] pl-[19px] pr-[17px] gap-4 z-[1] text-base">
            <div className="self-stretch relative leading-[120%] font-medium">
              Top Companies
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[13.6px] text-xs-2">
              <div className="self-stretch flex flex-row items-center justify-start gap-[9.6px]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[6.4px]">
                  <div className="relative leading-[140%] inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[12.2px]">
                    1.
                  </div>
                  <Image
                    className="h-[19.3px] w-[19.3px] relative"
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/brand-logos.svg"
                  />
                  <div className="flex-1 relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
                    Product Hunt
                  </div>
                </div>
                <Badge
                  color="Green"
                  size="Small"
                  type="Outlined"
                  showIcon
                  showDots={false}
                  editValue="5"
                  iconTrendUp="/iconcaretup.svg"
                  iconTrendUpWidth="12.8px"
                  iconTrendUpHeight="12.8px"
                  badgeFontSize="9.6px"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[9.6px]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[6.4px]">
                  <div className="relative leading-[140%] inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[12.2px]">
                    2.
                  </div>
                  <Image
                    className="h-[19.3px] w-[19.3px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/brand-logos-1.svg"
                  />
                  <div className="flex-1 relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
                    Google
                  </div>
                </div>
                <Badge
                  color="Green"
                  size="Small"
                  type="Outlined"
                  showIcon
                  showDots={false}
                  editValue="2"
                  iconTrendUp="/iconcaretup.svg"
                  iconTrendUpWidth="12.8px"
                  iconTrendUpHeight="12.8px"
                  badgeFontSize="9.6px"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[9.6px]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[6.4px]">
                  <div className="relative leading-[140%] inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[12.2px]">
                    3.
                  </div>
                  <Image
                    className="h-[19.3px] w-[19.3px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/brand-logos-2.svg"
                  />
                  <div className="flex-1 relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
                    Wordpress
                  </div>
                </div>
                <Badge
                  color="Green"
                  size="Small"
                  type="Outlined"
                  showIcon
                  showDots={false}
                  editValue="1"
                  iconTrendUp="/iconcaretup.svg"
                  iconTrendUpWidth="12.8px"
                  iconTrendUpHeight="12.8px"
                  badgeFontSize="9.6px"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[9.6px]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[6.4px]">
                  <div className="relative leading-[140%] inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[12.2px]">
                    4.
                  </div>
                  <Image
                    className="h-[19.3px] w-[19.3px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/brand-logos-3.svg"
                  />
                  <div className="flex-1 relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
                    Tripadvisor
                  </div>
                </div>
                <Badge
                  color="Red"
                  size="Small"
                  type="Outlined"
                  showIcon
                  showDots={false}
                  editValue="3"
                  iconTrendUp="/iconcaretdown-10.svg"
                  iconTrendUpWidth="12.8px"
                  iconTrendUpHeight="12.8px"
                  badgeFontSize="9.6px"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[9.6px]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[6.4px]">
                  <div className="relative leading-[140%] inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[12.2px]">
                    5.
                  </div>
                  <Image
                    className="h-[19.3px] w-[19.3px] relative"
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/brand-logos-4.svg"
                  />
                  <div className="flex-1 relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
                    Slack
                  </div>
                </div>
                <Badge
                  color="Red"
                  size="Small"
                  type="Outlined"
                  showIcon
                  showDots={false}
                  editValue="2"
                  iconTrendUp="/iconcaretdown-10.svg"
                  iconTrendUpWidth="12.8px"
                  iconTrendUpHeight="12.8px"
                  badgeFontSize="9.6px"
                />
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[9.6px]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[6.4px]">
                  <div className="relative leading-[140%] inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[12.2px]">
                    6.
                  </div>
                  <Image
                    className="h-[19.3px] w-[19.3px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    width={19}
                    height={19}
                    alt=""
                    src="/brand-logos-5.svg"
                  />
                  <div className="flex-1 relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
                    Zendesk
                  </div>
                </div>
                <Badge
                  color="Red"
                  size="Small"
                  type="Outlined"
                  showIcon
                  showDots={false}
                  editValue="3"
                  iconTrendUp="/iconcaretdown-10.svg"
                  iconTrendUpWidth="12.8px"
                  iconTrendUpHeight="12.8px"
                  badgeFontSize="9.6px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
