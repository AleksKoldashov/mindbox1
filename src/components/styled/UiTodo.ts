import styled from "styled-components";

export const UiTodo=styled.div`
 display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
width: 30rem;
height: 45px;
box-shadow: 5px 5px 10px black;
background-color: white;

&:hover {
    background-color: lightgray;
}
`