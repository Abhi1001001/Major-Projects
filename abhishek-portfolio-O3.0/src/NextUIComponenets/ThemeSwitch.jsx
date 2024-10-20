import { useSwitch, VisuallyHidden } from "@nextui-org/react";
import React from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export default function ThemeSwitch(props) { 
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  
  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
      onClick={()=>{
        props.getData(isSelected);
        localStorage.setItem('isDarkMode', isSelected)
      }}
        {...getWrapperProps()}
        className={slots.wrapper({
          class: [
            "w-8 h-8",
            "flex items-center justify-center",
            "rounded-lg bg-default-100 hover:bg-default-200",
          ],
        })}
      >
        {isSelected ? <SunIcon /> : <MoonIcon />}
      </div>
    </Component>
  );
}
