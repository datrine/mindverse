import styled from "styled-components";

export const FluidContainer = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 80%;
  margin: 0% 10%;
`;

export const FlexTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Title = styled.h1`
  color: ${(props) => props.color};
  font-size: 30px;
  text-align: center;
`;
