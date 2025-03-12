import styled from "styled-components";

export const UiInput = styled.input`
  box-sizing: border-box; /* ��бираем внешний вид для поля ввода */
  width: 30rem;
  padding: 10px;
  font-size: 16px;
  outline: none;
  background-color:rgba(249, 249, 249, 0.97);
  transition: border-color 0.3s ease, box-shadow 0.3s ease; /* ��лвный переход */
  &:active {
    background-color:rgba(231, 241, 255, 0.73); /* ��вет фона при активном состоянии */
  }
  &:invalid {
    border-color: #f56565; /* ��вет бордера при ошибке */
    background-color: #fffbe6; /* ��вет фона при ошибке */
  }
    &:valid {
    border-color: rgba(231, 241, 255, 0.73); /* ��вет бордера при правильном вводе */
    background-color: rgba(249, 249, 249, 0.97); /* ��вет фона при правильном вводе */
  }

`