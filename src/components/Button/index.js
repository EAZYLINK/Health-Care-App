import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder16: "rounded-radius16",
  icbCircleBorder30: "rounded-radius30",
};
const variants = {
  FillLightblue900: "bg-light_blue_900 text-white_A700",
  OutlineLightblue900:
    "border-2 border-light_blue_900 border-solid text-light_blue_900",
  FillTeal50: "bg-teal_50 text-gray_900",
  OutlineLightblue9001_2:
    "bg-teal_50 border-2 border-light_blue_900 border-solid shadow-bs text-blue_600",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineBlue600: "border-2 border-blue_600 border-solid",
  icbFillBlue600: "bg-blue_600",
};
const sizes = {
  sm: "lg:p-[11px] xl:p-[12px] 2xl:p-[14px] p-[17px]",
  md: "lg:p-[12px] xl:p-[14px] 2xl:p-[16px] p-[20px]",
  lg: "lg:p-[18px] xl:p-[21px] 2xl:p-[24px] p-[29px]",
  smIcn: "p-[10px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px]",
  mdIcn: "lg:p-[10px] xl:p-[11px] 2xl:p-[13px] p-[16px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder16", "icbCircleBorder30"]),
  variant: PropTypes.oneOf([
    "FillLightblue900",
    "OutlineLightblue900",
    "FillTeal50",
    "OutlineLightblue9001_2",
    "icbFillWhiteA700",
    "icbOutlineBlue600",
    "icbFillBlue600",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
