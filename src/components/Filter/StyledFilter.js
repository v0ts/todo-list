import styled from "styled-components";

export const StyledFilter = styled.div`
  margin: 20px 0;
  padding: 15px;
  background: wheat;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #495057;
  }

  input {
    width: 95%;
    padding: 10px 10px;
    border: 1px solid wheat;
    border-radius: 4px;
    font-size: 16px;
    transition: all 0.2s;

    &:focus {
      outline: none;
      border-color: lightblue;
    }
  }
`;