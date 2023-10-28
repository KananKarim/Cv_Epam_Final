import React from "react";

const Link = ({text,href,Icon}) => {
  return (
    <a href={`#${href}`}>
      <Icon />
      <span>{text}</span>
    </a>
  );
};

export default Link;
