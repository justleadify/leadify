import type { NextPage } from "next";
import Image from "next/image";
import Tag from "./tag";
import EditorModal from "./editor-modal";

export type ContainerType = {
  className?: string;
};

const Container: NextPage<ContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[444.9px] !m-[0] absolute right-[30px] bottom-[-295.1px] shadow-[13px_12.1px_17.7px_rgba(194,_194,_194,_0.07)] rounded-9xs-5 bg-color-tokens-background-primary border-color-tokens-border-primary border-[0.5px] border-solid box-border flex flex-col items-start justify-start pt-0 px-0 pb-[15px] max-w-full text-left text-6xs-3 text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
    >
      <div className="self-stretch border-color-tokens-border-primary border-b-[0.5px] border-solid flex flex-row items-center justify-between flex-wrap content-center pt-[10.8px] px-3.5 pb-2.5 gap-5 text-color-tokens-content-dark-secondary">
        <div className="flex flex-row items-center justify-start py-0 px-0 gap-[9px]">
          <Image
            className="h-[10.8px] w-[10.8px] relative"
            width={11}
            height={11}
            alt=""
            src="/iconarrowleft.svg"
          />
          <Image
            className="h-[10.8px] w-[10.8px] relative"
            width={11}
            height={11}
            alt=""
            src="/iconarchive.svg"
          />
          <Image
            className="h-[10.8px] w-[10.8px] relative"
            width={11}
            height={11}
            alt=""
            src="/iconwarningoctagon.svg"
          />
          <Image
            className="h-[10.8px] w-[10.8px] relative"
            width={11}
            height={11}
            alt=""
            src="/icontrash.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-start gap-[9px]">
          <div className="relative leading-[140%] font-medium inline-block min-w-[43px]">
            1-50 from 115
          </div>
          <div className="flex flex-row items-center justify-start gap-[1.8px]">
            <Image
              className="h-[10.8px] w-[10.8px] relative overflow-hidden shrink-0 object-contain"
              width={11}
              height={11}
              alt=""
              src="/caret-down@2x.png"
            />
            <Image
              className="h-[10.8px] w-[10.8px] relative overflow-hidden shrink-0 object-contain"
              width={11}
              height={11}
              alt=""
              src="/caret-down-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between flex-wrap content-center py-[7.2px] px-3.5 gap-5 text-5xs-2">
        <div className="flex flex-row items-center justify-start gap-[5.4px]">
          <Image
            className="h-[18px] w-[18px] relative rounded-9xl-8 object-cover"
            width={18}
            height={18}
            alt=""
            src="/avatar@2x.png"
          />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[140%] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[50px]">
              Dianne Russel
            </div>
            <div className="relative text-6xs-3 leading-[140%] text-color-tokens-content-dark-secondary overflow-hidden text-ellipsis whitespace-nowrap">
              diannerussel@email.com
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start py-0 px-0 gap-[10.8px] text-right text-6xs-3 text-color-tokens-content-dark-secondary">
          <div className="flex-1 relative leading-[140%] overflow-hidden text-ellipsis whitespace-nowrap">
            Feb 2, 2019 19:28
          </div>
          <Image
            className="h-[9px] w-[9px] relative"
            width={9}
            height={9}
            alt=""
            src="/iconstar.svg"
          />
          <Image
            className="h-[9px] w-[9px] relative"
            width={9}
            height={9}
            alt=""
            src="/iconarrowbendupleft.svg"
          />
          <Image
            className="h-[9px] w-[9px] relative"
            width={9}
            height={9}
            alt=""
            src="/iconprinter.svg"
          />
          <Image
            className="h-[9px] w-[9px] relative"
            width={9}
            height={9}
            alt=""
            src="/icondotsthreevertical.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-[3.6px] pb-0 pl-3.5 pr-7 z-[1] text-2xs-8">
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[16.2px] gap-[9px] shrink-0">
          <div className="self-stretch relative leading-[120%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
            Why choose a theme that looks good with WooCommerce
          </div>
          <div className="relative text-6xs-3 leading-[140%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:11] [-webkit-box-orient:vertical]">
            <p className="m-0">
              Interaction Design can greatly alleviate the quality of any UI/UX
              Project. A thorough survey of an existing product will also reveal
              spaces where interaction design principles can be utilized to
              greatly enhance user experience.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              However, for a lot of UI/UX Designers, Figma is the tool of choice
              and it is a hassle to do the tiniest bit of motion prototyping in
              AE or Principal, or for that matter, use Lottie Plugin which
              sometimes gives pixelated visual.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Here I list four interactions that can be implemented across
              multitude of project and they are very easy to implement in Figma.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              Simply following the motion of a ball which first readies itself
              to move then stops as if stuck to a wall.The curves we’ve used are
              On Click and then After Delay (delay of 1s).
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start py-[7.2px] px-3.5 gap-[10.8px] text-color-tokens-content-dark-tertiary">
        <div className="self-stretch shadow-[0px_3.6px_3.6px_rgba(232,_236,_243,_0.2)] rounded-9xs-6 bg-color-tokens-background-primary border-color-tokens-content-dark-tertiary border-[0.5px] border-solid overflow-hidden flex flex-col items-start justify-start relative">
          <div className="self-stretch flex flex-row items-center justify-between py-[5.4px] px-[7px] gap-5 mq450:flex-wrap">
            <div className="flex flex-row items-center justify-start py-0 pl-0 pr-[43px] gap-[7.2px]">
              <div className="flex flex-row items-center justify-start gap-[3.6px]">
                <Image
                  className="h-[9px] w-[9px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/iconarrowbendupleft-1.svg"
                />
                <Image
                  className="h-[7.2px] w-[7.2px] relative"
                  width={7}
                  height={7}
                  alt=""
                  src="/iconcaretdown.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[1.8px]">
                <div className="relative leading-[140%] inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[11px]">
                  To:
                </div>
                <Tag
                  states="Default"
                  type="Removable Tag"
                  label={false}
                  icon={false}
                  editContent="Robert Fox"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[5.4px] text-7xs-4 text-color-tokens-content-dark-secondary">
              <div className="relative leading-[140%] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap min-w-[9px]">
                Cc
              </div>
              <div className="relative leading-[140%] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                Bcc
              </div>
              <Image
                className="h-[9px] w-[9px] relative"
                width={9}
                height={9}
                alt=""
                src="/iconarrowsoutsimple.svg"
              />
            </div>
          </div>
          <Image
            className="self-stretch relative max-w-full overflow-hidden max-h-full"
            width={416}
            height
            alt=""
            src="/border.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start py-[7.2px] px-[7px] gap-[21.6px] shrink-0 text-color-tokens-content-dark-primary">
            <div className="relative leading-[140%] [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:4] [-webkit-box-orient:vertical]">
              <p className="m-0">
                The key is to play with the After Delay and easing curves,
                basically iterating upon the initial idea to begin with can give
                us refined results.
              </p>
              <p className="m-0">
                One of the most common micro-interactions is used to signify a
                change of state, is drag and drop of a UI element.
              </p>
            </div>
            <div className="self-stretch flex flex-row items-center justify-between gap-5 text-color-tokens-background-primary mq450:flex-wrap">
              <div className="flex flex-row items-start justify-start py-0 px-0 gap-[5.4px]">
                <Image
                  className="h-[9px] w-[9px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/iconpaperclip.svg"
                />
                <Image
                  className="h-[9px] w-[9px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/iconlinksimplehorizontal.svg"
                />
                <Image
                  className="h-[9px] w-[9px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/iconimage.svg"
                />
                <Image
                  className="h-[9px] w-[9px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/iconsmiley.svg"
                />
                <Image
                  className="h-[9px] w-[9px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/icontextaa.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-start gap-[5.4px]">
                <Image
                  className="h-[9px] w-[9px] relative"
                  width={9}
                  height={9}
                  alt=""
                  src="/icontrash-1.svg"
                />
                <div className="rounded-border-radius-4 bg-color-tokens-content-dark-primary flex flex-row items-center justify-center py-[3.6px] px-[5.4px] gap-[3.6px]">
                  <Image
                    className="w-[7.2px] relative h-[7.2px] hidden"
                    width={7}
                    height={7}
                    alt=""
                    src="/iconpaperplaneright.svg"
                  />
                  <div className="h-[9px] w-[30px] relative leading-[150%] font-medium inline-block">
                    Send Mail
                  </div>
                  <Image
                    className="h-[7.2px] w-[7.2px] relative"
                    width={7}
                    height={7}
                    alt=""
                    src="/iconpaperplaneright1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <EditorModal />
        </div>
        <div className="h-[16.2px] flex flex-row items-center justify-start py-0 pl-0 pr-5 box-border gap-[3.6px] text-color-tokens-content-dark-primary">
          <div className="rounded-border-radius-4 bg-color-tokens-background-primary border-color-tokens-content-dark-primary border-[0.5px] border-solid flex flex-row items-center justify-center py-[3.6px] px-[5.4px] gap-[3.6px]">
            <Image
              className="h-[7.2px] w-[7.2px] relative"
              width={7}
              height={7}
              alt=""
              src="/iconarrowbendupleft-2.svg"
            />
            <div className="h-[9px] w-[17px] relative leading-[150%] font-medium inline-block">
              Reply
            </div>
            <Image
              className="w-[7.2px] relative h-[7.2px] hidden"
              width={7}
              height={7}
              alt=""
              src="/iconarrowbendupleft1.svg"
            />
          </div>
          <div className="rounded-border-radius-4 bg-color-tokens-background-primary border-color-tokens-content-dark-primary border-[0.5px] border-solid flex flex-row items-center justify-center py-[3.6px] px-[5.4px] gap-[3.6px]">
            <Image
              className="h-[7.2px] w-[7.2px] relative"
              width={7}
              height={7}
              alt=""
              src="/iconarrowbendupright.svg"
            />
            <div className="h-[9px] w-[25px] relative leading-[150%] font-medium inline-block">
              Forward
            </div>
            <Image
              className="w-[7.2px] relative h-[7.2px] hidden"
              width={7}
              height={7}
              alt=""
              src="/iconarrowbendupright1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
