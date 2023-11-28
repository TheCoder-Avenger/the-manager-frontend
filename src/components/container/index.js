/**
 * External dependencies
 */
import React from "react";
import classNames from "classnames";

/**
 * Styles dependencies
 */
import "./style.css";

function Container({ small = false, medium = false, className, ...props }) {
  const containerStyle = classNames(
    "container",
    {
      "container-medium": medium,
      "container-small": small,
    },
    className
  );

  return <div className={containerStyle}>{props.children}</div>;
}

export default Container;
