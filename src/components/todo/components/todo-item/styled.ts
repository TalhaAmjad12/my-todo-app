import styled from "styled-components";
import { T_TaskTextProps } from "./types";

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #ccc;
`;

export const TaskText = styled.span<T_TaskTextProps>`
  flex-grow: 1;
  text-decoration: ${({ completed }) =>
    completed === "completed" ? "line-through" : "none"};
`;

export const TextField = styled.input`
  flex-grow: 1;
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const EditButton = styled.button`
  margin-left: 0.5rem;
  background: #150de9;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

export const UpdateButton = styled.button`
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

export const DeleteButton = styled.button`
  margin-left: 0.5rem;
  background: #f44336;
  color: white;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`;
