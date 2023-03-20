import React from "react";
import Languague from "./language";
import Switcher from "./switcher";

export default function TopBar(props) {
  return (
    <div
      className={` fixed min-w-full  ${props.bgcolor} ${props.position} h-16 `}
    >
      <div
        className={`  flex  items-center justify-between p-2 max-w-5xl px-4 m-auto   `}
      >
        <h3 className="px-1 ">Alexander</h3>
        <div className="flex justify-center pt-1 items-center gap-4">
          <Languague
            active={props.active}
            changeLanguage={props.changeLanguage}
          />
          <Switcher theme={props.theme} mode={props.mode} />
        </div>
      </div>
    </div>
  );
}
