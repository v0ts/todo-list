import styled from "styled-components";

export const StyledTodoEditor = styled.form`
  display: flex;
  gap: 10px;
  margin: 20px 0;
  padding: 15px;
  background: wheat;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  input {
    flex: 1;
    padding: 10px 15px;
    border: 1px solid wheat;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: lightblue;
    }
  }

  button {
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;