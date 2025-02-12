import React from "react";
import { StyledLoaderWrapper, StyledLoader } from "./styled";

export default function CustomLoader({ position = "center" }: any) {
  return (
    <StyledLoaderWrapper position={position}>
      <StyledLoader />
    </StyledLoaderWrapper>
  );
}
