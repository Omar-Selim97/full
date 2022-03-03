import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const ActivatorButton = styled.button`
  align-items: center;
  background-color:#6031fd;
  border: 1px solid transparent;
  border-radius: 3px;
  border-color: #ccc;
  color: #fff;
  display: flex;
  font-size: inherit;
  min-width: 160px;
  padding: 1em;

  &:after {
    content: "";
    border-bottom: 1px solid #000;
    border-right: 1px solid #000;
    height: 0.5em;
    margin-left: 0.75em;
    width: 0.5em;
    transform: rotate(45deg);
  }
`;

export const DropdownList = styled.ul<{ active: boolean }>`
  background-color: #ececec;
  color: black;
  display: ${props => (props.active ? "block" : "none")};
  margin: 0;
  min-width: 180px;
  padding: 0;
  position: absolute;
  li {
    list-style: none;
    margin: 0;
    a,
    a:link {
      display: block;
      padding: 0.5em;
      &:hover {
        background-color: lightblue;
      }
    }
  }
`;