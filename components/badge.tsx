import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type BadgeType = {
  className?: string;
  showIcon?: boolean;
  showDots?: boolean;
  editValue?: string;
  iconTrendUp: string;

  /** Variant props */
  color?: "Green" | "Red";
  size?: string;
  type?: string;

  /** Style props */
  iconTrendUpWidth?: CSSProperties["width"];
  iconTrendUpHeight?: CSSProperties["height"];
  badgeFontSize?: CSSProperties["fontSize"];
};

const Badge: NextPage<BadgeType> = ({
  className = "",
  color = "Green",
  size = "Small",
  type = "Outlined",
  showIcon = true,
  showDots = false,
  editValue = "12%",
  iconTrendUp,
  iconTrendUpWidth,
  iconTrendUpHeight,
  badgeFontSize,
}) => {
  const iconTrendUpStyle: CSSProperties = useMemo(() => {
    return {
      width: iconTrendUpWidth,
      height: iconTrendUpHeight,
    };
  }, [iconTrendUpWidth, iconTrendUpHeight]);

  const badgeStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: badgeFontSize,
    };
  }, [badgeFontSize]);

  return (
    <div
      className={`rounded-6xl-7 bg-color-tokens-background-green flex flex-row items-center justify-center py-[2.9px] px-[5.7px] gap-[5.7px] text-left text-4xs-6 text-color-tokens-interaction-green-base font-body-extra-large-semibold data-[color='Red']:data-[size='Small']:data-[type='Outlined']:rounded-9xl-9 data-[color='Red']:data-[size='Small']:data-[type='Outlined']:bg-color-tokens-background-red [&_.badge-child]:data-[color='Red']:data-[size='Small']:data-[type='Outlined']:bg-color-tokens-interaction-red-base [&_.badge]:data-[color='Red']:data-[size='Small']:data-[type='Outlined']:text-color-tokens-interaction-red-base [&_.badge]:data-[color='Red']:data-[size='Small']:data-[type='Outlined']:h-[13px] [&_.badge]:data-[color='Red']:data-[size='Small']:data-[type='Outlined']:w-[7px] [&_.badge]:data-[color='Red']:data-[size='Small']:data-[type='Outlined']:inline-block ${className}`}
      data-color={color}
      data-size={size}
      data-type={type}
    >
      {showDots && (
        <div className="badge-child w-[5.7px] relative rounded-[50%] bg-color-tokens-interaction-green-base h-[5.7px]" />
      )}
      {showIcon && (
        <Image
          className="w-[11.4px] relative h-[11.4px]"
          width={11}
          height={11}
          alt=""
          src={iconTrendUp}
          style={iconTrendUpStyle}
        />
      )}
      <div
        className="badge relative leading-[140%] font-medium"
        style={badgeStyle}
      >
        {editValue}
      </div>
    </div>
  );
};

export default Badge;
