import styled from "styled-components";
interface ITypograf {
    completed: boolean;
}
export const UiTypography = styled.span<ITypograf>`
  text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
`;
