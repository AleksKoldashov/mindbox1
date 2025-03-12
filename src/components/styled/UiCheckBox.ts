import styled from "styled-components";

export const UiCheckbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: inherit;
  margin-left: 5px;
`;

export const HiddenCheckbox = styled.input`
  display: none; 
`;

export const CheckboxLabel = styled.label`
  width: 25px; 
  height: 25px; 
  background-color:inherit; 
  border: 2px solid #ccc; 
  border-radius: 50%; 
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease; 

  ${HiddenCheckbox}:checked + & {
    background-color: white;
  }

  ${HiddenCheckbox}:checked + &:after {
    content: '';
    width: 5px; 
    height: 10px;
    border: solid  #4CAF50;
    border-width: 0 2px 2px 0; 
    position: absolute;
    transform: rotate(45deg); 
    top: 50%;
    left: 50%; 
    margin-top: -6px; 
    margin-left: -4px; 
  }
`;