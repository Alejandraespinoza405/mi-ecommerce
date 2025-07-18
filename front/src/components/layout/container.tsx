import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl min-h-[100vh]">{children}</div>;
};

export default Container;
