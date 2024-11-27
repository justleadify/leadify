import type { NextPage } from "next";
import Image from "next/image";
import TopNav from "../components/top-nav";
import Hero from "../components/hero";
import SocialProofContainer from "../components/social-proof-container";
import Workflow from "../components/workflow";
import Container from "../components/container";
import Badge from "../components/badge";
import Used from "../components/used";
import FrameComponent from "../components/frame-component";
import Advantages from "../components/advantages";
import Content2 from "../components/content2";
import Content3 from "../components/content3";
import Testimonial from "../components/testimonial";
import CTA from "../components/c-t-a";
import Footer from "../components/footer";

const HomepageV: NextPage = () => {
  return (
    <div className="w-full relative bg-color-tokens-background-secondary overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <TopNav />
      <Hero variant={1} />
      <SocialProofContainer />
      <section className="w-[1360px] flex flex-row items-start justify-end pt-0 px-0 pb-[237.7px] box-border relative max-w-full mq750:pb-[155px] mq750:box-border">
        <Workflow />
        <Container />
      </section>
      <section className="w-[1133.4px] flex flex-row items-start justify-start pt-0 px-20 pb-[138.9px] box-border max-w-full text-left text-29xl text-color-tokens-content-dark-primary font-body-extra-large-semibold lg:pl-10 lg:pr-10 lg:box-border mq450:pb-[90px] mq450:box-border">
        <div className="flex-1 flex flex-col items-start justify-start max-w-full">
          <h1 className="m-0 w-[609px] relative text-inherit leading-[120%] font-medium font-[inherit] inline-block max-w-full mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            <p className="m-0">{`Dynamic Email `}</p>
            <p className="m-0">Integration Excellence</p>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start gap-[78px] max-w-full text-lg text-color-tokens-content-dark-secondary mq750:gap-[19px] mq1050:gap-[39px] mq1050:flex-wrap">
            <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[395px] max-w-full mq750:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-4 shrink-0">
                <div className="relative leading-[150%] whitespace-pre-wrap">
                  Simplify your workflow with seamless email integration. Send,
                  track, schedule follow-ups and insightful interactions for
                  business expansion.
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
            <div className="w-[287.4px] shadow-[28.9px_13.5px_20px_rgba(194,_194,_194,_0.09)] rounded-[3.9px] bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.4px] border-solid box-border flex flex-col items-start justify-start pt-[13px] px-[17px] pb-3 gap-[16.5px] shrink-0 z-[2] text-right text-6xs-6 text-color-tokens-content-dark-primary mq1050:flex-1">
              <div className="self-stretch flex flex-col items-start justify-start gap-[7.8px] text-left text-[8.2px]">
                <div className="relative leading-[120%] font-medium inline-block min-w-[100px]">
                  Average Email Open Rate
                </div>
                <div className="self-stretch flex flex-row items-start justify-between gap-[19.26px] text-[13.2px]">
                  <div className="flex flex-col items-start justify-center pt-0 px-0 pb-[0.1px] gap-[3.3px]">
                    <div className="flex flex-row items-center justify-start gap-[4.9px]">
                      <div className="relative leading-[120%] font-medium">
                        64,23%
                      </div>
                      <Badge
                        color="Green"
                        size="Small"
                        type="Outlined"
                        showIcon
                        showDots={false}
                        editValue="12%"
                        iconTrendUp="/icontrendup-1.svg"
                        iconTrendUpWidth="6.6px"
                        iconTrendUpHeight="6.6px"
                        badgeFontSize="4.9px"
                      />
                    </div>
                    <div className="relative text-7xs-8 leading-[140%] font-medium text-color-tokens-content-dark-secondary">
                      Average Open Rate
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[6.6px] text-7xs-8">
                    <div className="rounded-11xs-6 bg-color-tokens-background-primary border-color-tokens-content-dark-primary border-[0.4px] border-solid flex flex-row items-center justify-center py-[3.3px] px-[4.9px] gap-[3.3px]">
                      <Image
                        className="w-[6.6px] relative h-[6.6px] hidden"
                        width={7}
                        height={7}
                        alt=""
                        src="/iconcaretdown1.svg"
                      />
                      <div className="h-[9px] w-[86px] relative leading-[150%] font-medium inline-block">
                        January, 2023 - October, 2023
                      </div>
                      <Image
                        className="h-[6.6px] w-[6.6px] relative"
                        width={7}
                        height={7}
                        alt=""
                        src="/iconcaretdown-6.svg"
                      />
                    </div>
                    <div className="rounded-border-radius-4 bg-color-tokens-background-primary border-color-tokens-content-dark-primary border-[0.4px] border-solid flex flex-row items-center justify-center py-[3.3px] px-[4.9px] gap-[3.3px]">
                      <Image
                        className="w-[6.6px] relative h-[6.6px] hidden"
                        width={7}
                        height={7}
                        alt=""
                        src="/iconcaretdown1.svg"
                      />
                      <div className="relative leading-[150%] font-medium">
                        Monthly
                      </div>
                      <Image
                        className="h-[6.6px] w-[6.6px] relative"
                        width={7}
                        height={7}
                        alt=""
                        src="/iconcaretdown-6.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16.4px] text-right text-6xs-6">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[13.1px]">
                    <div className="relative leading-[140%]">100%</div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <div className="self-stretch h-[0.4px] relative border-color-tokens-content-dark-tertiary border-t-[0.4px] border-dashed box-border" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[13.1px]">
                    <div className="relative leading-[140%] inline-block min-w-[15px]">
                      75%
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <div className="self-stretch h-[0.4px] relative border-color-tokens-content-dark-tertiary border-t-[0.4px] border-dashed box-border" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13.1px]">
                <div className="relative leading-[140%]">50%</div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                  <div className="self-stretch h-[0.4px] relative border-color-tokens-content-dark-tertiary border-t-[0.4px] border-dashed box-border" />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[7.8px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16.4px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[13.1px]">
                    <div className="relative leading-[140%] inline-block min-w-[15px]">
                      25%
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <div className="self-stretch h-[0.4px] relative border-color-tokens-content-dark-tertiary border-t-[0.4px] border-dashed box-border" />
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[13.1px]">
                    <div className="relative leading-[140%] inline-block min-w-[11px]">
                      0%
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0">
                      <div className="self-stretch h-[0.4px] relative border-color-tokens-content-dark-tertiary border-t-[0.4px] border-dashed box-border" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[0.8px] pb-[0.1px] pl-[27px] pr-0 relative gap-[10.4px] text-center">
                  <div className="h-[88.4px] w-[13.2px] absolute !m-[0] top-[-94.2px] left-[27.5px] rounded-sm bg-color-tokens-content-dark-disable" />
                  <div className="relative leading-[140%] inline-block min-w-[14.2px]">
                    Jan
                  </div>
                  <div className="h-[53.9px] w-[13.2px] absolute !m-[0] top-[-59.6px] left-[51.1px] rounded-sm bg-color-tokens-content-dark-disable" />
                  <div className="relative leading-[140%] inline-block min-w-[14.2px]">
                    Feb
                  </div>
                  <div className="h-[98.3px] w-[13.2px] absolute !m-[0] top-[-104px] left-[74.6px] rounded-sm bg-color-tokens-content-dark-disable" />
                  <div className="relative leading-[140%] inline-block min-w-[14.2px]">
                    Mar
                  </div>
                  <div className="h-[70.3px] w-[13.2px] absolute !m-[0] top-[-76.1px] left-[98.2px] rounded-sm bg-color-tokens-content-dark-disable" />
                  <div className="relative leading-[140%] inline-block min-w-[14.2px]">
                    Apr
                  </div>
                  <div className="h-[84.3px] w-[13.2px] absolute !m-[0] top-[-90px] right-[117.8px] rounded-sm bg-color-tokens-content-dark-disable" />
                  <div className="relative leading-[140%]">May</div>
                  <div className="h-[48.5px] w-[13.2px] absolute !m-[0] top-[-54.3px] right-[94.2px] rounded-sm bg-color-tokens-content-dark-disable" />
                  <div className="relative leading-[140%] inline-block min-w-[14.2px]">
                    Jun
                  </div>
                  <div className="h-[73.2px] w-[13.2px] absolute !m-[0] top-[-78.9px] right-[70.7px] rounded-sm bg-color-tokens-content-dark-primary" />
                  <div className="relative leading-[140%] inline-block min-w-[14.2px]">
                    Jul
                  </div>
                  <div className="h-[57.6px] w-[13.2px] absolute !m-[0] top-[-63.3px] right-[47.1px] rounded-sm bg-color-tokens-content-dark-disable" />
                  <div className="relative leading-[140%] inline-block min-w-[14.2px]">
                    Aug
                  </div>
                  <div className="h-[81px] w-[13.2px] absolute !m-[0] top-[-86.8px] right-[23.6px] rounded-sm bg-color-tokens-content-dark-disable" />
                  <div className="relative leading-[140%] inline-block min-w-[14.2px]">
                    Sep
                  </div>
                  <div className="h-[62.5px] w-[13.2px] absolute !m-[0] top-[-68.2px] right-[0px] rounded-sm bg-color-tokens-content-dark-disable" />
                  <div className="relative leading-[140%] inline-block min-w-[14.2px]">
                    Oct
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Used />
      <textarea
        className="[border:none] bg-[transparent] h-[124px] w-[598px] [outline:none] absolute !m-[0] top-[2678px] right-[93px] [background:linear-gradient(180deg,_rgba(247,_249,_251,_0),_#f7f9fb)] z-[1]"
        rows={6}
        cols={30}
      />
      <FrameComponent />
      <section className="w-full h-60 absolute !m-[0] top-[1143px] right-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] z-[2]" />
      <section className="w-full h-60 absolute !m-[0] top-[3286px] right-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0),_#fff)] z-[2]" />
      <Advantages />
      <section className="self-stretch bg-color-tokens-background-primary flex flex-row items-start justify-start py-12 px-20 box-border gap-12 max-w-full z-[4] lg:flex-wrap mq750:gap-6 mq750:py-[31px] mq750:px-10 mq750:box-border">
        <Content2 />
        <Content3 />
      </section>
      <Testimonial variant={3} />
      <CTA variant={3} />
      <Footer variant={2} />
    </div>
  );
};

export default HomepageV;
