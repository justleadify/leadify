import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Dashboard from "./dashboard";

export type ContentType = {
  className?: string;
  effortlessDataManagement?: string;
  simplifyCentralizingCustomer?: string;

  /** Style props */
  illustrationOverflowY?: CSSProperties["overflowY"];
  illustrationOverflow?: CSSProperties["overflow"];
  effortlessDataManagementWidth?: CSSProperties["width"];
};

const Content: NextPage<ContentType> = ({
  className = "",
  illustrationOverflowY,
  illustrationOverflow,
  effortlessDataManagement,
  effortlessDataManagementWidth,
  simplifyCentralizingCustomer,
}) => {
  const illustrationStyle: CSSProperties = useMemo(() => {
    return {
      overflowY: illustrationOverflowY,
      overflow: illustrationOverflow,
    };
  }, [illustrationOverflowY, illustrationOverflow]);

  const effortlessDataManagementStyle: CSSProperties = useMemo(() => {
    return {
      width: effortlessDataManagementWidth,
    };
  }, [effortlessDataManagementWidth]);

  return (
    <div
      className={`w-[515px] rounded-lg bg-color-tokens-background-secondary border-color-tokens-border-primary border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-[22px] px-[23px] gap-6 max-w-full text-center text-xl text-color-tokens-content-dark-primary font-body-extra-large-semibold mq450:pt-5 mq450:pb-5 mq450:box-border ${className}`}
    >
      <div
        className="self-stretch h-80 shadow-[0px_0px_40px_rgba(194,_194,_194,_0.11)] rounded-border-radius-8 border-color-tokens-border-primary border-[1px] border-solid box-border overflow-y-auto shrink-0 flex flex-row items-start justify-start"
        style={illustrationStyle}
      >
        <Dashboard
          dashboardPosition="unset"
          dashboardTop="unset"
          dashboardLeft="unset"
          dashboardBoxShadow="0px 29px 34px 3px rgba(239, 239, 244, 0.48)"
          dashboardBorderRadius="8px"
          dashboardBorder="1px solid #e4e4e4"
          dashboardWidth="625px"
          dashboardHeight="437px"
          dashboardDisplay="flex"
          dashboardFlexDirection="column"
          dashboardAlignItems="flex-start"
          dashboardJustifyContent="flex-start"
          dashboardPadding="0px 0px 410.1px"
          dashboardGap="0.1px"
          coreSafariBigSurToolPosition="unset"
          coreSafariBigSurToolTop="unset"
          coreSafariBigSurToolLeft="unset"
          coreSafariBigSurToolBorderRadius="8px 8px 0px 0px"
          coreSafariBigSurToolBorder="0.6px solid #e8ecf3"
          coreSafariBigSurToolWidth="623.9px"
          coreSafariBigSurToolHeight="25.9px"
          coreSafariBigSurToolDisplay="flex"
          coreSafariBigSurToolFlexDirection="row"
          coreSafariBigSurToolAlignItems="flex-start"
          coreSafariBigSurToolJustifyContent="flex-start"
          coreSafariBigSurToolPadding="11.8px 12.4px 7px"
          toolbarGroupPosition="unset"
          toolbarGroupTop="unset"
          toolbarGroupRight="unset"
          coreSafariBigSurToolbar="/core--safari-big-sur--toolbar--toolbar-item-7.svg"
          coreSafariBigSurToolbar1="/core--safari-big-sur--toolbar--toolbar-item-8.svg"
          coreSafariBigSurToolbar2="/core--safari-big-sur--toolbar--toolbar-item-9.svg"
          coreSafariBigSurToolbar3="/core--safari-big-sur--toolbar--toolbar-item-10.svg"
          toolbarGroupPosition1="unset"
          toolbarGroupTop1="unset"
          toolbarGroupLeft="unset"
          coreSafariBigSurToolbar4="/core--safari-big-sur--toolbar--toolbar-item-11.svg"
          coreSafariBigSurToolbar5="/core--safari-big-sur--toolbar--toolbar-item-12.svg"
          coreSafariBigSurToolbar6="/core--safari-big-sur--toolbar--toolbar-item2.svg"
          coreSafariBigSurToolPosition1="relative"
          coreSafariBigSurToolTop1="unset"
          coreSafariBigSurToolLeft1="unset"
          coreSafariBigSurToolWidth1="19.4px"
          coreSafariBigSurToolHeight1="16.5px"
          coreTrafficLightsBigSur="/core--traffic-lights-big-sur-1.svg"
          coreTrafficLightsBigSurPosition="relative"
          coreTrafficLightsBigSurTop="unset"
          coreTrafficLightsBigSurLeft="unset"
          coreTrafficLightsBigSurWidth="30.6px"
          frameDivPosition="relative"
          frameDivWidth="292.5px"
          frameDivTop="unset"
          frameDivRight="unset"
          frameDivLeft="unset"
          frameDivHeight="16.5px"
          coreSafariBigSurToolbar7="/core--safari-big-sur--toolbar--toolbar-item-13.svg"
          lock="/lock-2.svg"
          lock1="/lock-3.svg"
          image194="/image-197@2x.png"
          image194IconPosition="relative"
          image194IconTop="unset"
          image194IconLeft="unset"
          image194IconWidth="624px"
          image194IconHeight="433.9px"
        />
      </div>
      <div className="self-stretch rounded flex flex-col items-start justify-start gap-2">
        <div
          className="w-[281px] relative leading-[120%] font-medium inline-block mq450:text-base mq450:leading-[19px]"
          style={effortlessDataManagementStyle}
        >
          {effortlessDataManagement}
        </div>
        <div className="relative text-sm leading-[150%] text-color-tokens-content-dark-secondary text-left">
          {simplifyCentralizingCustomer}
        </div>
      </div>
    </div>
  );
};

export default Content;
