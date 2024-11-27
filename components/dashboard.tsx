import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type DashboardType = {
  className?: string;
  coreSafariBigSurToolbar: string;
  coreSafariBigSurToolbar1: string;
  coreSafariBigSurToolbar2: string;
  coreSafariBigSurToolbar3: string;
  coreSafariBigSurToolbar4: string;
  coreSafariBigSurToolbar5: string;
  coreSafariBigSurToolbar6: string;
  coreTrafficLightsBigSur: string;
  coreSafariBigSurToolbar7: string;
  lock: string;
  lock1: string;
  image194: string;

  /** Variant props */
  variant?: 01;

  /** Style props */
  dashboardPosition?: CSSProperties["position"];
  dashboardTop?: CSSProperties["top"];
  dashboardLeft?: CSSProperties["left"];
  dashboardBoxShadow?: CSSProperties["boxShadow"];
  dashboardBorderRadius?: CSSProperties["borderRadius"];
  dashboardBorder?: CSSProperties["border"];
  dashboardWidth?: CSSProperties["width"];
  dashboardHeight?: CSSProperties["height"];
  dashboardDisplay?: CSSProperties["display"];
  dashboardFlexDirection?: CSSProperties["flexDirection"];
  dashboardAlignItems?: CSSProperties["alignItems"];
  dashboardJustifyContent?: CSSProperties["justifyContent"];
  dashboardPadding?: CSSProperties["padding"];
  dashboardGap?: CSSProperties["gap"];
  coreSafariBigSurToolPosition?: CSSProperties["position"];
  coreSafariBigSurToolTop?: CSSProperties["top"];
  coreSafariBigSurToolLeft?: CSSProperties["left"];
  coreSafariBigSurToolBorderRadius?: CSSProperties["borderRadius"];
  coreSafariBigSurToolBorder?: CSSProperties["border"];
  coreSafariBigSurToolWidth?: CSSProperties["width"];
  coreSafariBigSurToolHeight?: CSSProperties["height"];
  coreSafariBigSurToolDisplay?: CSSProperties["display"];
  coreSafariBigSurToolFlexDirection?: CSSProperties["flexDirection"];
  coreSafariBigSurToolAlignItems?: CSSProperties["alignItems"];
  coreSafariBigSurToolJustifyContent?: CSSProperties["justifyContent"];
  coreSafariBigSurToolPadding?: CSSProperties["padding"];
  toolbarGroupPosition?: CSSProperties["position"];
  toolbarGroupTop?: CSSProperties["top"];
  toolbarGroupRight?: CSSProperties["right"];
  toolbarGroupPosition1?: CSSProperties["position"];
  toolbarGroupTop1?: CSSProperties["top"];
  toolbarGroupLeft?: CSSProperties["left"];
  coreSafariBigSurToolPosition1?: CSSProperties["position"];
  coreSafariBigSurToolTop1?: CSSProperties["top"];
  coreSafariBigSurToolLeft1?: CSSProperties["left"];
  coreSafariBigSurToolWidth1?: CSSProperties["width"];
  coreSafariBigSurToolHeight1?: CSSProperties["height"];
  coreTrafficLightsBigSurPosition?: CSSProperties["position"];
  coreTrafficLightsBigSurTop?: CSSProperties["top"];
  coreTrafficLightsBigSurLeft?: CSSProperties["left"];
  coreTrafficLightsBigSurWidth?: CSSProperties["width"];
  frameDivPosition?: CSSProperties["position"];
  frameDivWidth?: CSSProperties["width"];
  frameDivTop?: CSSProperties["top"];
  frameDivRight?: CSSProperties["right"];
  frameDivLeft?: CSSProperties["left"];
  frameDivHeight?: CSSProperties["height"];
  image194IconPosition?: CSSProperties["position"];
  image194IconTop?: CSSProperties["top"];
  image194IconLeft?: CSSProperties["left"];
  image194IconWidth?: CSSProperties["width"];
  image194IconHeight?: CSSProperties["height"];
};

const Dashboard: NextPage<DashboardType> = ({
  className = "",
  variant = 1,
  dashboardPosition,
  dashboardTop,
  dashboardLeft,
  dashboardBoxShadow,
  dashboardBorderRadius,
  dashboardBorder,
  dashboardWidth,
  dashboardHeight,
  dashboardDisplay,
  dashboardFlexDirection,
  dashboardAlignItems,
  dashboardJustifyContent,
  dashboardPadding,
  dashboardGap,
  coreSafariBigSurToolPosition,
  coreSafariBigSurToolTop,
  coreSafariBigSurToolLeft,
  coreSafariBigSurToolBorderRadius,
  coreSafariBigSurToolBorder,
  coreSafariBigSurToolWidth,
  coreSafariBigSurToolHeight,
  coreSafariBigSurToolDisplay,
  coreSafariBigSurToolFlexDirection,
  coreSafariBigSurToolAlignItems,
  coreSafariBigSurToolJustifyContent,
  coreSafariBigSurToolPadding,
  toolbarGroupPosition,
  toolbarGroupTop,
  toolbarGroupRight,
  coreSafariBigSurToolbar,
  coreSafariBigSurToolbar1,
  coreSafariBigSurToolbar2,
  coreSafariBigSurToolbar3,
  toolbarGroupPosition1,
  toolbarGroupTop1,
  toolbarGroupLeft,
  coreSafariBigSurToolbar4,
  coreSafariBigSurToolbar5,
  coreSafariBigSurToolbar6,
  coreSafariBigSurToolPosition1,
  coreSafariBigSurToolTop1,
  coreSafariBigSurToolLeft1,
  coreSafariBigSurToolWidth1,
  coreSafariBigSurToolHeight1,
  coreTrafficLightsBigSur,
  coreTrafficLightsBigSurPosition,
  coreTrafficLightsBigSurTop,
  coreTrafficLightsBigSurLeft,
  coreTrafficLightsBigSurWidth,
  frameDivPosition,
  frameDivWidth,
  frameDivTop,
  frameDivRight,
  frameDivLeft,
  frameDivHeight,
  coreSafariBigSurToolbar7,
  lock,
  lock1,
  image194,
  image194IconPosition,
  image194IconTop,
  image194IconLeft,
  image194IconWidth,
  image194IconHeight,
}) => {
  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      position: dashboardPosition,
      top: dashboardTop,
      left: dashboardLeft,
      boxShadow: dashboardBoxShadow,
      borderRadius: dashboardBorderRadius,
      border: dashboardBorder,
      width: dashboardWidth,
      height: dashboardHeight,
      display: dashboardDisplay,
      flexDirection: dashboardFlexDirection,
      alignItems: dashboardAlignItems,
      justifyContent: dashboardJustifyContent,
      padding: dashboardPadding,
      gap: dashboardGap,
    };
  }, [
    dashboardPosition,
    dashboardTop,
    dashboardLeft,
    dashboardBoxShadow,
    dashboardBorderRadius,
    dashboardBorder,
    dashboardWidth,
    dashboardHeight,
    dashboardDisplay,
    dashboardFlexDirection,
    dashboardAlignItems,
    dashboardJustifyContent,
    dashboardPadding,
    dashboardGap,
  ]);

  const coreSafariBigSurToolStyle: CSSProperties = useMemo(() => {
    return {
      position: coreSafariBigSurToolPosition,
      top: coreSafariBigSurToolTop,
      left: coreSafariBigSurToolLeft,
      borderRadius: coreSafariBigSurToolBorderRadius,
      border: coreSafariBigSurToolBorder,
      width: coreSafariBigSurToolWidth,
      height: coreSafariBigSurToolHeight,
      display: coreSafariBigSurToolDisplay,
      flexDirection: coreSafariBigSurToolFlexDirection,
      alignItems: coreSafariBigSurToolAlignItems,
      justifyContent: coreSafariBigSurToolJustifyContent,
      padding: coreSafariBigSurToolPadding,
    };
  }, [
    coreSafariBigSurToolPosition,
    coreSafariBigSurToolTop,
    coreSafariBigSurToolLeft,
    coreSafariBigSurToolBorderRadius,
    coreSafariBigSurToolBorder,
    coreSafariBigSurToolWidth,
    coreSafariBigSurToolHeight,
    coreSafariBigSurToolDisplay,
    coreSafariBigSurToolFlexDirection,
    coreSafariBigSurToolAlignItems,
    coreSafariBigSurToolJustifyContent,
    coreSafariBigSurToolPadding,
  ]);

  const toolbarGroupStyle: CSSProperties = useMemo(() => {
    return {
      position: toolbarGroupPosition,
      top: toolbarGroupTop,
      right: toolbarGroupRight,
    };
  }, [toolbarGroupPosition, toolbarGroupTop, toolbarGroupRight]);

  const toolbarGroup1Style: CSSProperties = useMemo(() => {
    return {
      position: toolbarGroupPosition1,
      top: toolbarGroupTop1,
      left: toolbarGroupLeft,
    };
  }, [toolbarGroupPosition1, toolbarGroupTop1, toolbarGroupLeft]);

  const coreSafariBigSurTool1Style: CSSProperties = useMemo(() => {
    return {
      position: coreSafariBigSurToolPosition1,
      top: coreSafariBigSurToolTop1,
      left: coreSafariBigSurToolLeft1,
      width: coreSafariBigSurToolWidth1,
      height: coreSafariBigSurToolHeight1,
    };
  }, [
    coreSafariBigSurToolPosition1,
    coreSafariBigSurToolTop1,
    coreSafariBigSurToolLeft1,
    coreSafariBigSurToolWidth1,
    coreSafariBigSurToolHeight1,
  ]);

  const coreTrafficLightsBigSurStyle: CSSProperties = useMemo(() => {
    return {
      position: coreTrafficLightsBigSurPosition,
      top: coreTrafficLightsBigSurTop,
      left: coreTrafficLightsBigSurLeft,
      width: coreTrafficLightsBigSurWidth,
    };
  }, [
    coreTrafficLightsBigSurPosition,
    coreTrafficLightsBigSurTop,
    coreTrafficLightsBigSurLeft,
    coreTrafficLightsBigSurWidth,
  ]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      position: frameDivPosition,
      width: frameDivWidth,
      top: frameDivTop,
      right: frameDivRight,
      left: frameDivLeft,
      height: frameDivHeight,
    };
  }, [
    frameDivPosition,
    frameDivWidth,
    frameDivTop,
    frameDivRight,
    frameDivLeft,
    frameDivHeight,
  ]);

  const image194IconStyle: CSSProperties = useMemo(() => {
    return {
      position: image194IconPosition,
      top: image194IconTop,
      left: image194IconLeft,
      width: image194IconWidth,
      height: image194IconHeight,
    };
  }, [
    image194IconPosition,
    image194IconTop,
    image194IconLeft,
    image194IconWidth,
    image194IconHeight,
  ]);

  return (
    <div
      className={`absolute top-[63.3px] left-[-0.7px] shadow-[0px_41.6px_48.8px_4.3px_rgba(239,_239,_244,_0.48)] rounded-sm bg-color-tokens-background-primary border-color-tokens-border-primary border-[1.4px] border-solid box-border w-[896.3px] h-[626.7px] overflow-hidden text-left text-2xs text-dimgray-200 font-sf-pro-text ${className}`}
      data-variant={variant}
      style={dashboardStyle}
    >
      <div
        className="absolute top-[0px] left-[0px] rounded-t-[13.51px] rounded-b-none bg-color-tokens-background-primary border-aliceblue border-[0.8px] border-solid box-border w-[894.8px] h-[37.1px]"
        style={coreSafariBigSurToolStyle}
      >
        <div
          className="absolute top-[10.1px] right-[10.1px] overflow-hidden hidden flex-row items-center justify-start gap-[6.8px]"
          style={toolbarGroupStyle}
        >
          <Image
            className="w-[27.9px] relative rounded-7xs-1 h-[23.6px]"
            width={28}
            height={24}
            alt=""
            src={coreSafariBigSurToolbar}
          />
          <Image
            className="h-[23.6px] w-[27.9px] relative rounded-7xs-1"
            width={28}
            height={24}
            alt=""
            src={coreSafariBigSurToolbar1}
          />
          <Image
            className="h-[23.6px] w-[27.9px] relative rounded-7xs-1"
            width={28}
            height={24}
            alt=""
            src={coreSafariBigSurToolbar2}
          />
          <Image
            className="h-[23.6px] w-[27.9px] relative rounded-7xs-1"
            width={28}
            height={24}
            alt=""
            src={coreSafariBigSurToolbar3}
          />
        </div>
        <div
          className="absolute top-[10.1px] left-[113.1px] overflow-hidden hidden flex-row items-center justify-start"
          style={toolbarGroup1Style}
        >
          <Image
            className="h-[23.6px] w-[27.9px] relative rounded-7xs-1"
            width={28}
            height={24}
            alt=""
            src={coreSafariBigSurToolbar4}
          />
          <Image
            className="h-[23.6px] w-[27.9px] relative rounded-7xs-1"
            width={28}
            height={24}
            alt=""
            src={coreSafariBigSurToolbar5}
          />
        </div>
        <Image
          className="absolute top-[10.1px] left-[77.7px] rounded-7xs-1 w-[27.9px] h-[23.6px] hidden"
          width={28}
          height={24}
          alt=""
          src={coreSafariBigSurToolbar6}
          style={coreSafariBigSurTool1Style}
        />
        <Image
          className="absolute top-[16.9px] left-[17.7px] w-[43.9px] h-[10.1px]"
          loading="lazy"
          width={44}
          height={10}
          alt=""
          src={coreTrafficLightsBigSur}
          style={coreTrafficLightsBigSurStyle}
        />
        <div
          className="absolute w-[46.87%] top-[10.1px] right-[26.56%] left-[26.56%] h-[23.6px] overflow-hidden hidden"
          style={frameDivStyle}
        >
          <Image
            className="absolute top-[0px] left-[0px] rounded-7xs-1 w-[27.9px] h-[23.6px]"
            width={28}
            height={24}
            alt=""
            src={coreSafariBigSurToolbar7}
          />
          <div className="absolute w-[calc(100%_-_70.8px)] top-[0px] right-[35.3px] left-[35.5px] rounded-7xs-1 bg-gray-100 h-[23.6px]">
            <div className="absolute top-[calc(50%_-_6.8px)] left-[calc(50%_-_32.2px)] overflow-hidden flex flex-row items-center justify-start gap-[5.1px]">
              <Image
                className="w-[6.6px] relative h-[9.6px]"
                width={7}
                height={10}
                alt=""
                src={lock}
              />
              <div className="h-[13px] w-[54px] relative flex items-center">
                shoof.com
              </div>
            </div>
            <Image
              className="absolute top-[calc(50%_-_5.6px)] right-[5.5px] w-[8.7px] h-[10.6px]"
              width={9}
              height={11}
              alt=""
              src={lock1}
            />
          </div>
          <div className="absolute top-[0px] left-[944.3px] rounded-3xs w-[55px] h-[46.6px] text-center text-9xl-3 text-dimgray-100">
            <div className="absolute top-[6.7px] left-[0px] hidden items-center justify-center w-[55px]">
              􀙨
            </div>
          </div>
        </div>
      </div>
      <Image
        className="absolute top-[37.3px] left-[calc(50%_-_447.85px)] w-[894.9px] h-[1156.7px] object-cover"
        width={895}
        height={1157}
        alt=""
        src={image194}
        style={image194IconStyle}
      />
    </div>
  );
};

export default Dashboard;
