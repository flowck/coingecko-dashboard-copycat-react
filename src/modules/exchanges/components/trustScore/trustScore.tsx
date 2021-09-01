import styled from "styled-components";

interface Props {
  value: number;
  max: number;
}

const Container = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 13px;
    font-weight: bold;
  }

  progress {
    width: 80px;
    border: none;
    appearance: none;
    border-radius: 5px;
    margin-right: 15px;
    background-color: #eee;
    -webkit-appearance: none;

    &[value] {
      height: 10px;
      appearance: none;
      -webkit-appearance: none;
    }

    &::-webkit-progress-bar,
    &::-moz-progress-bar {
      border-radius: 5px;
    }
  }

  .trust-score--green {
    &::-moz-progress-bar,
    &::-webkit-progress-bar  {
      background-color: #4eaf0a;
    }
  }

  .trust-score--yellow {
    &::-moz-progress-bar,
    &::-webkit-progress-bar {
      background-color: #ebd107;
    }
  }
`;

function getBarColorClass(value: number, max: number) {
  const percentage = (value / max) * 100;
  return percentage >= 50 ? "trust-score--green" : "trust-score--yellow";
}

export function TrustScore({ value, max }: Props) {
  return (
    <Container>
      <progress max={max} value={value} className={getBarColorClass(value, max)} />
      <span>{value}</span>
    </Container>
  );
}
