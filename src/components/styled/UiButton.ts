import styled from "styled-components";

export const UiButton=styled.button`
  width: auto;
  height: auto;
  padding: 5px;
  font-size: 16px;
  border: 1px solid #755a57; 
  border-radius: 5px;
  background-color: inherit;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color:rgb(221, 200, 197);
  }
  &:focus {
    background-color: rgb(221, 200, 197);
  }
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  &:active {
    background-color: rgb(221, 200, 197);
  }
  &:focus-visible {
    outline: 2px solid rgb(221, 200, 197);
    outline-offset: 2px;
  }
  &:focus-within {
    box-shadow: 0 0 5px rgb(221, 200, 197);
  }
`