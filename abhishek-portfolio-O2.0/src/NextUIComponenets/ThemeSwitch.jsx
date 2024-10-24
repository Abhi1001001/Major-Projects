import { useSwitch, VisuallyHidden } from "@nextui-org/react";
import React from "react";
import { SunIcon } from "./SunIcon";
import { MoonIcon } from "./MoonIcon";

export default function ThemeSwitch(props) {
  const {
    Component,
    slots,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  // getting value from localstorage --------------->
  let darkMode = JSON.parse(localStorage.getItem("isDarkMode"));

  return (
    <Component
      {...getBaseProps()}
      onClick={() => {
        // setting the boolean value in localstorage on click of darkmode ------->
        if (darkMode) {
          props.getData(false);
          localStorage.setItem("isDarkMode", false);
        } else {
          props.getData(true);
          localStorage.setItem("isDarkMode", true);
        }
      }}
      className="outline-none"
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: [
            "w-8 h-8",
            "flex items-center justify-center",
            "rounded-lg outline-none bg-default-100 hover:bg-default-200",
          ],
        })}
      >
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </div>
    </Component>
  );
}
