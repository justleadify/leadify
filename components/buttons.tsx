import type { NextPage } from "next";

export type ButtonsType = {
  className?: string;
  showText?: boolean;
  text?: string;

  /** Variant props */
  hierarchy?: string;
  iconOnly?: boolean;
  showBackground?: boolean;
  size?: "Medium" | "Extra Large";
  state?: string;
  stylizedButton?: boolean;
};

const Buttons: NextPage<ButtonsType> = ({
  className = "",
  hierarchy = "Primary",
  iconOnly = false,
  showBackground = true,
  size = "Extra Large",
  state = "Default",
  stylizedButton = false,
  showText = true,
  text = "Log in",
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-2 px-3 bg-[transparent] rounded-border-radius-4 flex flex-row items-center justify-center [&_Large']:data-[state='Default']:data-[stylizedButton='false']]:data-[hierarchy='Link']:data-[iconOnly='false']:data-[showBackground='true']:data-[size='Extra:[border:unset] [&_Large']:data-[state='Default']:data-[stylizedButton='false']]:data-[hierarchy='Link']:data-[iconOnly='false']:data-[showBackground='true']:data-[size='Extra:py-3 [&_Large']:data-[state='Default']:data-[stylizedButton='false']]:data-[hierarchy='Link']:data-[iconOnly='false']:data-[showBackground='true']:data-[size='Extra:px-[18px] [&_Large']:data-[state='Default']:data-[stylizedButton='false']]:data-[hierarchy='Link']:data-[iconOnly='false']:data-[showBackground='true']:data-[size='Extra:bg-[unset] [&_Large']:data-[state='Default']:data-[stylizedButton='false']]:data-[hierarchy='Link']:data-[iconOnly='false']:data-[showBackground='true']:data-[size='Extra:text-lg [&_Large']:data-[state='Default']:data-[stylizedButton='false']]:data-[hierarchy='Link']:data-[iconOnly='false']:data-[showBackground='true']:data-[size='Extra:text-color-tokens-background-primary ${className}`}
      data-hierarchy={hierarchy}
      data-iconOnly={iconOnly}
      data-showBackground={showBackground}
      data-size={size}
      data-state={state}
      data-stylizedButton={stylizedButton}
    >
      {showText && (
        <div className="placeholder3 relative text-sm [text-decoration:underline] leading-[150%] font-medium font-body-extra-large-semibold text-color-tokens-content-dark-primary text-left">
          {text}
        </div>
      )}
    </button>
  );
};

export default Buttons;
