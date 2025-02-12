import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// ✨ Glowing Effect
const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 150, 255, 0.5); }
  50% { box-shadow: 0 0 20px rgba(0, 150, 255, 1); }
  100% { box-shadow: 0 0 5px rgba(0, 150, 255, 0.5); }
`;

// 🔽 Loader Wrapper with Position Control
export const StyledLoaderWrapper = styled.div<{
  position: "left" | "center" | "right";
}>`
  display: flex;
  width: 100%;

  ${({ position }) =>
    position === "left" &&
    css`
      justify-content: flex-start;
    `}

  ${({ position }) =>
    position === "center" &&
    css`
      justify-content: center;
    `}
  
  ${({ position }) =>
    position === "right" &&
    css`
      justify-content: flex-end;
    `}
`;

// 🎡 Styled Loader
export const StyledLoader = styled.div`
  width: 30px;
  height: 30px;
  border: 4px solid transparent;
  border-top: 4px solid #0096ff;
  border-radius: 50%;
  animation:
    ${spin} 1s linear infinite,
    ${glow} 1.5s ease-in-out infinite;
`;
