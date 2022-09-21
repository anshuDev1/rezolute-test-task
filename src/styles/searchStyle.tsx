import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.35em 1em;
  border: 2px solid gray;
  border-radius: 4px;
  background-color:#00b1ff;
`;

export const Input = styled.input`
  height: 40px;
  font-size: 16px;
  width: 30%;
  border: 2px solid #00b1ff;
  border-radius: 8px;
  margin: 8px 0;
  outline: none;
  padding: 8px 15px;
  box-sizing: border-box;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  cursor: pointer;
  color: #00b1ff;

  &::placeholder {
    color: #00b1ff;
  }

  &:focus {
    border-color: dodgerBlue;
    box-shadow: 0 0 8px 0 dodgerBlue;
  }

  :focus + .left-icon {
    svg {
      fill: dodgerBlue;
    }
  }
`;

export const StyledInput = styled.div`
  &.inputWithIcon {
    position: relative;
  }

  .left-icon {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }

  button.right-icon {
    background: none;
    border: none;
    position: absolute;
    right: 510px;
    top: 50%;
    transform: translateY(-50%);
    svg {
      fill: black;
      transition: 0.3s;
    }
  }
`;
