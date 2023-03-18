import { css } from "@emotion/react";

export const GlobalStyle = css`
  * {
    margin: 0;
    box-sizing: border-box;
  }
  body {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
  }
  input::placeholder,
  textarea::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #bdbdbd;
  }
`;
