import styled from "styled-components";

const Title = styled.h1`
  font-size: 25px;
  margin-bottom: 20px;
`;

export function ViewTitle({ title }: { title: string }) {
  return <Title> {title} </Title>;
}
