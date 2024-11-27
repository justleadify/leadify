import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type CardsReviewModalsType = {
  className?: string;
  starsNew: string;
  coolCryptoCurrencyFastWithdra?: string;
  testimonialPerson: string;
  abelSheldon?: string;
  entrepreneur?: string;

  /** Variant props */
  variant?: 03;

  /** Style props */
  starsNewIconMargin?: CSSProperties["margin"];
  starsNewMargin?: CSSProperties["margin"];
  coolCryptoCurrencyDisplay?: CSSProperties["display"];
  coolCryptoCurrencyWebkitLineClamp?: CSSProperties["webkitLineClamp"];
  coolCryptoCurrencyWebkitBoxOrient?: CSSProperties["webkitBoxOrient"];
  coolCryptoCurrencyHeight?: CSSProperties["height"];
};

const CardsReviewModals: NextPage<CardsReviewModalsType> = ({
  className = "",
  variant = 1,
  starsNew,
  starsNewIconMargin,
  starsNewMargin,
  coolCryptoCurrencyFastWithdra,
  coolCryptoCurrencyDisplay,
  coolCryptoCurrencyWebkitLineClamp,
  coolCryptoCurrencyWebkitBoxOrient,
  coolCryptoCurrencyHeight,
  testimonialPerson,
  abelSheldon,
  entrepreneur,
}) => {
  const starsNewIconStyle: CSSProperties = useMemo(() => {
    return {
      margin: starsNewIconMargin,
    };
  }, [starsNewIconMargin]);

  const starsNewStyle: CSSProperties = useMemo(() => {
    return {
      margin: starsNewMargin,
    };
  }, [starsNewMargin]);

  const coolCryptoCurrencyStyle: CSSProperties = useMemo(() => {
    return {
      display: coolCryptoCurrencyDisplay,
      webkitLineClamp: coolCryptoCurrencyWebkitLineClamp,
      webkitBoxOrient: coolCryptoCurrencyWebkitBoxOrient,
      height: coolCryptoCurrencyHeight,
    };
  }, [
    coolCryptoCurrencyDisplay,
    coolCryptoCurrencyWebkitLineClamp,
    coolCryptoCurrencyWebkitBoxOrient,
    coolCryptoCurrencyHeight,
  ]);

  return (
    <div
      className={`w-[410.7px] rounded-lg bg-color-tokens-background-primary border-color-tokens-border-primary border-[1px] border-solid box-border flex flex-col items-start justify-start p-10 gap-5 text-left text-lg text-color-tokens-content-dark-primary font-body-extra-large-semibold ${className}`}
      data-variant={variant}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-1">
        <Image
          className="w-6 relative h-6"
          width={24}
          height={24}
          alt=""
          src={starsNew}
          style={starsNewIconStyle}
        />
        <Image
          className="h-6 w-6 relative"
          width={24}
          height={24}
          alt=""
          src="/starsnew.svg"
        />
        <Image
          className="h-6 w-6 relative"
          width={24}
          height={24}
          alt=""
          src="/starsnew.svg"
        />
        <Image
          className="h-6 w-6 relative"
          width={24}
          height={24}
          alt=""
          src="/starsnew.svg"
        />
        <input
          className="m-0 h-6 w-6 relative"
          type="checkbox"
          style={starsNewStyle}
        />
      </div>
      <div className="self-stretch flex flex-col items-center justify-start gap-6">
        <div
          className="self-stretch relative leading-[150%] font-medium [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]"
          style={coolCryptoCurrencyStyle}
        >
          {coolCryptoCurrencyFastWithdra}
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-3 text-base">
          <Image
            className="h-10 w-10 relative object-cover"
            loading="lazy"
            width={40}
            height={40}
            alt=""
            src={testimonialPerson}
          />
          <div className="flex flex-col items-start justify-center gap-[3px]">
            <div className="relative leading-[150%] font-medium">
              {abelSheldon}
            </div>
            <div className="relative text-sm leading-[150%] text-color-tokens-content-dark-tertiary">
              {entrepreneur}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsReviewModals;
