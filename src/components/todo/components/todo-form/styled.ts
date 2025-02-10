import styled from "styled-components";

export const StyledBoxDiv = styled.div`
  display: "flex";
  marginbottom: "1rem";
  padding: "10px";
  margin-top: 1rem;
`;

export const StyledTextField = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  margin-right: 0.5rem;
  min-width: 94%;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const StyledAddNewListItemButton = styled.button`
  margin-left: 0.5rem;
  background: #4caf50;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`;
