import styled from "styled-components";

export const UiH1 = styled.h1`
    position: relative;
    color: transparent; 
    &::before {
    content: attr(data-text); 
    color:#755a57;
    text-align: center;
    font-weight: 100; 
    font-size: 60px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-transform: lowercase; 
    opacity: 0.5;
    }
`