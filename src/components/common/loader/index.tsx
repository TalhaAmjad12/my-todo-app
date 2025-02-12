import React from "react";
import { StyledLoaderWrapper, StyledLoader } from "../loader/styled";

const CustomLoader = ({ position = "center" }) => {
  return (
    <StyledLoaderWrapper position={position}>
      <StyledLoader />
    </StyledLoaderWrapper>
  );
};

export default CustomLoader;
