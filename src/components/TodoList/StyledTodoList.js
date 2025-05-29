import styled from "styled-components";

export const StyledTodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  & > li {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    margin-bottom: 10px;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s ease;
    border-left: 4px solid lightgreen;

    button {
      background-color: rgb(247, 80, 68);
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 5px;
      cursor: pointer;
			margin-left: auto;
      transition: all 0.2s;

			&:hover {
				transform: scale(1.2);
			}
    }
  }
`;
